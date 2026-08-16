import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { parse as parseYaml, stringify as stringifyYaml } from 'yaml';

const NOTION_API = 'https://api.notion.com/v1';
const NOTION_VERSION = '2025-09-03';
const ARTICLE_DIRECTORY = path.resolve('src/content/articles');
const IMAGE_DIRECTORY = path.resolve('public/images/articles');
const GALLERIES = new Set([
  'systems',
  'photography',
  'nature',
  'philosophy',
  'projects',
  'writing',
  'travel',
  'field-notes',
]);

export function notionPageIdFromUrl(value) {
  const raw = String(value);
  let candidates = [raw];
  try {
    const url = new URL(raw);
    candidates = [
      ...url.pathname.split('/').reverse(),
      ...[...url.searchParams.values()].reverse(),
      raw,
    ];
  } catch {
    // A raw page ID is also accepted.
  }
  const id = candidates
    .map((candidate) => candidate.replaceAll('-', '').match(/([0-9a-fA-F]{32})$/)?.[1])
    .find(Boolean)
    ?.toLowerCase();
  if (!id) throw new Error('The value does not contain a Notion page ID.');
  return `${id.slice(0, 8)}-${id.slice(8, 12)}-${id.slice(12, 16)}-${id.slice(16, 20)}-${id.slice(20)}`;
}

export function slugify(value) {
  return String(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 90)
    .replace(/-$/g, '');
}

function escapeMarkdown(value) {
  return value.replace(/([\\`*_[\]<>])/g, '\\$1');
}

export function richTextToMarkdown(items = []) {
  return items
    .map((item) => {
      let text;
      if (item.type === 'equation') text = `$${item.equation.expression}$`;
      else text = escapeMarkdown(item.plain_text ?? item.text?.content ?? '');

      const annotations = item.annotations ?? {};
      if (annotations.code) text = `\`${text.replaceAll('`', '\\`')}\``;
      else {
        if (annotations.bold) text = `**${text}**`;
        if (annotations.italic) text = `*${text}*`;
        if (annotations.strikethrough) text = `~~${text}~~`;
      }

      const href = item.href ?? item.text?.link?.url;
      return href ? `[${text}](${href})` : text;
    })
    .join('');
}

function plainText(items = []) {
  return items.map((item) => item.plain_text ?? item.text?.content ?? '').join('').trim();
}

function indent(markdown, prefix = '  ') {
  return markdown
    .split('\n')
    .map((line) => (line ? `${prefix}${line}` : line))
    .join('\n');
}

function quote(markdown) {
  return markdown
    .split('\n')
    .map((line) => `> ${line}`.trimEnd())
    .join('\n');
}

function fileExtension(contentType, url) {
  const byType = {
    'image/avif': 'avif',
    'image/gif': 'gif',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/svg+xml': 'svg',
    'image/webp': 'webp',
  };
  if (byType[contentType]) return byType[contentType];
  const pathname = new URL(url).pathname;
  const extension = path.extname(pathname).slice(1).toLowerCase();
  return /^[a-z0-9]{2,5}$/.test(extension) ? extension : 'jpg';
}

function mediaUrl(block) {
  const data = block[block.type];
  return data?.[data.type]?.url ?? '';
}

async function notionRequest(token, pathname) {
  const response = await fetch(`${NOTION_API}${pathname}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Notion-Version': NOTION_VERSION,
    },
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Notion returned ${response.status}: ${detail}`);
  }
  return response.json();
}

async function getChildren(token, blockId) {
  const results = [];
  let cursor;
  do {
    const params = new URLSearchParams({ page_size: '100' });
    if (cursor) params.set('start_cursor', cursor);
    const page = await notionRequest(token, `/blocks/${blockId}/children?${params}`);
    results.push(...page.results);
    cursor = page.has_more ? page.next_cursor : undefined;
  } while (cursor);
  return results;
}

async function saveImage(block, context) {
  const url = mediaUrl(block);
  if (!url) throw new Error('A Notion image is missing its URL.');

  const response = await fetch(url);
  if (!response.ok) throw new Error(`Could not download a Notion image (${response.status}).`);
  const extension = fileExtension(response.headers.get('content-type')?.split(';')[0], url);
  const filename = `${String(++context.imageNumber).padStart(2, '0')}.${extension}`;
  const directory = path.join(IMAGE_DIRECTORY, context.slug);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, filename), Buffer.from(await response.arrayBuffer()));
  return `/images/articles/${context.slug}/${filename}`;
}

async function childrenToMarkdown(block, context) {
  if (!block.has_children) return '';
  return blocksToMarkdown(await getChildren(context.token, block.id), context);
}

async function tableToMarkdown(block, context) {
  const rows = await getChildren(context.token, block.id);
  const values = rows.map((row) => row.table_row.cells.map(richTextToMarkdown));
  if (!values.length) return '';
  const width = Math.max(...values.map((row) => row.length));
  const normalized = values.map((row) => [...row, ...Array(width - row.length).fill('')]);
  const header = normalized[0];
  const body = normalized.slice(1);
  return [
    `| ${header.join(' | ')} |`,
    `| ${header.map(() => '---').join(' | ')} |`,
    ...body.map((row) => `| ${row.join(' | ')} |`),
  ].join('\n');
}

async function blockToMarkdown(block, context) {
  const data = block[block.type] ?? {};
  const text = richTextToMarkdown(data.rich_text);
  const children = await childrenToMarkdown(block, context);

  switch (block.type) {
    case 'paragraph':
      return [text, children].filter(Boolean).join('\n\n');
    case 'heading_1':
      return `# ${text}`;
    case 'heading_2':
      return `## ${text}`;
    case 'heading_3':
      return `### ${text}`;
    case 'bulleted_list_item':
      return `- ${text}${children ? `\n${indent(children)}` : ''}`;
    case 'numbered_list_item':
      return `1. ${text}${children ? `\n${indent(children)}` : ''}`;
    case 'to_do':
      return `- [${data.checked ? 'x' : ' '}] ${text}${children ? `\n${indent(children)}` : ''}`;
    case 'quote':
      return quote([text, children].filter(Boolean).join('\n\n'));
    case 'callout': {
      const icon = data.icon?.type === 'emoji' ? `${data.icon.emoji} ` : '';
      return quote(`${icon}${text}${children ? `\n\n${children}` : ''}`);
    }
    case 'code': {
      const caption = plainText(data.caption);
      return `${caption ? `${caption}\n\n` : ''}\`\`\`${data.language === 'plain text' ? '' : data.language}\n${plainText(data.rich_text)}\n\`\`\``;
    }
    case 'image': {
      const source = await saveImage(block, context);
      const caption = plainText(data.caption);
      return `![${caption}](${source})${caption ? `\n\n*${escapeMarkdown(caption)}*` : ''}`;
    }
    case 'divider':
      return '---';
    case 'equation':
      return `$$\n${data.expression}\n$$`;
    case 'bookmark':
    case 'embed':
    case 'link_preview':
      return `[${data.caption ? plainText(data.caption) || data.url : data.url}](${data.url})`;
    case 'toggle':
      return `<details>\n<summary>${text}</summary>\n\n${children}\n\n</details>`;
    case 'table':
      return tableToMarkdown(block, context);
    case 'column_list':
    case 'column':
    case 'synced_block':
      return children;
    case 'child_page':
      return `## ${escapeMarkdown(data.title ?? 'Untitled page')}`;
    case 'breadcrumb':
    case 'table_of_contents':
      return '';
    default:
      throw new Error(`Unsupported Notion block type: ${block.type}. Convert or remove it before publishing.`);
  }
}

async function blocksToMarkdown(blocks, context) {
  const output = [];
  for (const block of blocks) output.push(await blockToMarkdown(block, context));
  return output.filter(Boolean).join('\n\n');
}

function articleTitle(page) {
  const titleProperty = Object.values(page.properties ?? {}).find((property) => property.type === 'title');
  return plainText(titleProperty?.title) || 'Untitled';
}

function publicationDate(value) {
  if (value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new Error('Date must use YYYY-MM-DD.');
    return value;
  }
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Hong_Kong',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());
  const part = (type) => parts.find((item) => item.type === type).value;
  return `${part('year')}-${part('month')}-${part('day')}`;
}

function parseArguments(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 2) {
    const key = argv[index]?.replace(/^--/, '');
    if (!key || argv[index + 1] === undefined) throw new Error(`Invalid argument: ${argv[index] ?? ''}`);
    args[key] = argv[index + 1];
  }
  return args;
}

async function nextArticleNumber() {
  await mkdir(ARTICLE_DIRECTORY, { recursive: true });
  const files = (await readdir(ARTICLE_DIRECTORY)).filter((name) => name.endsWith('.md'));
  const numbers = await Promise.all(
    files.map(async (filename) => {
      const source = await readFile(path.join(ARTICLE_DIRECTORY, filename), 'utf8');
      const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      return Number(parseYaml(match?.[1] ?? '')?.number ?? 0);
    }),
  );
  return Math.max(0, ...numbers) + 1;
}

export function createArticleSource(data) {
  const frontmatter = stringifyYaml(
    {
      title: data.title,
      number: data.number,
      gallery: data.gallery,
      medium: data.medium,
      date: data.date,
      summary: data.summary,
      tags: data.tags,
      connections: [],
      featured: data.featured,
      draft: data.draft,
    },
    { lineWidth: 0 },
  ).trim();
  return `---\n${frontmatter}\n---\n\n${data.body.trim()}\n`;
}

async function main() {
  const args = parseArguments(process.argv.slice(2));
  const token = process.env.NOTION_TOKEN;
  if (!token) throw new Error('Set NOTION_TOKEN before running the importer.');
  if (!args.url) throw new Error('Pass a Notion page with --url.');
  if (args.gallery && !GALLERIES.has(args.gallery)) throw new Error(`Unknown gallery: ${args.gallery}`);

  const pageId = notionPageIdFromUrl(args.url);
  const page = await notionRequest(token, `/pages/${pageId}`);
  const title = articleTitle(page);
  const slug = slugify(title) || `notion-${pageId.slice(0, 8)}`;
  const filepath = path.join(ARTICLE_DIRECTORY, `${slug}.md`);
  try {
    await readFile(filepath);
    throw new Error(`An article already exists at src/content/articles/${slug}.md.`);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }

  const blocks = await getChildren(token, pageId);
  const body = await blocksToMarkdown(blocks, { token, slug, imageNumber: 0 });
  if (!body.trim()) throw new Error('The Notion page has no publishable content.');
  const firstParagraph = blocks.find((block) => block.type === 'paragraph' && plainText(block.paragraph.rich_text));
  const summary = String(args.summary || plainText(firstParagraph?.paragraph.rich_text) || title).slice(0, 500);
  const tags = [...new Set(String(args.tags ?? '').split(',').map((tag) => tag.trim()).filter(Boolean))];
  const source = createArticleSource({
    title,
    number: await nextArticleNumber(),
    gallery: args.gallery || 'writing',
    medium: args.medium || 'Essay',
    date: publicationDate(args.date),
    summary,
    tags,
    featured: args.featured === 'true',
    draft: args.draft === 'true',
    body,
  });
  await writeFile(filepath, source, 'utf8');

  const output = process.env.GITHUB_OUTPUT;
  if (output) {
    await writeFile(output, `article_path=src/content/articles/${slug}.md\nslug=${slug}\ntitle=${title}\n`, {
      flag: 'a',
    });
  }
  console.log(`Created src/content/articles/${slug}.md`);
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
