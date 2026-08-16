import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { NotionAPI } from 'notion-client';
import { getBlockTitle, getBlockValue, getTextContent } from 'notion-utils';
import { parse as parseYaml, stringify as stringifyYaml } from 'yaml';

const ARTICLE_DIRECTORY = path.resolve('src/content/articles');
const IMAGE_DIRECTORY = path.resolve('public/images/articles');
const GALLERIES = new Set([
  'systems', 'photography', 'nature', 'philosophy', 'projects', 'writing', 'travel', 'field-notes',
]);

export function notionPageIdFromUrl(value) {
  const raw = String(value);
  let candidates = [raw];
  try {
    const url = new URL(raw);
    if (!url.hostname.endsWith('notion.so') && !url.hostname.endsWith('notion.site')) {
      throw new Error('Use a public notion.so or notion.site link.');
    }
    candidates = [...url.pathname.split('/').reverse(), ...[...url.searchParams.values()].reverse()];
  } catch (error) {
    if (error instanceof TypeError) candidates = [raw];
    else throw error;
  }
  const id = candidates
    .map((candidate) => candidate.replaceAll('-', '').match(/([0-9a-fA-F]{32})$/)?.[1])
    .find(Boolean)
    ?.toLowerCase();
  if (!id) {
    throw new Error(
      'The public link must contain the page ID. Use Notion’s Share → Copy link instead of a custom short site URL.',
    );
  }
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
  return String(value).replace(/([\\`*_[\]<>])/g, '\\$1');
}

export function richTextToMarkdown(items = []) {
  return items
    .map((item) => {
      const raw = String(item?.[0] ?? '');
      const formats = Array.isArray(item?.[1]) ? item[1].filter(Array.isArray) : [];
      const equation = formats.find(([type]) => type === 'e');
      const external = formats.find(([type]) => type === '‣');
      const page = formats.find(([type]) => type === 'p');
      const date = formats.find(([type]) => type === 'd');
      let text = equation
        ? `$${equation[1]}$`
        : external
          ? escapeMarkdown(external[1]?.[1] || external[1]?.[0] || 'Link')
          : page && (raw === '‣' || raw === '⁍')
            ? 'Notion page'
            : date && (raw === '‣' || raw === '⁍')
              ? escapeMarkdown(date[1]?.start_date || 'Date')
              : escapeMarkdown(raw);

      if (formats.some(([type]) => type === 'c')) text = `\`${raw.replaceAll('`', '\\`')}\``;
      else if (!equation) {
        if (formats.some(([type]) => type === 'b')) text = `**${text}**`;
        if (formats.some(([type]) => type === 'i')) text = `*${text}*`;
        if (formats.some(([type]) => type === 's')) text = `~~${text}~~`;
      }

      const link = formats.find(([type]) => type === 'a' || type === 'lm')?.[1];
      const href = link || external?.[1]?.[0] || (page?.[1] ? `https://www.notion.so/${page[1]}` : '');
      return href ? `[${text}](${href})` : text;
    })
    .join('');
}

function plainText(items = []) {
  return getTextContent(items).trim();
}

function indent(markdown, prefix = '  ') {
  return markdown.split('\n').map((line) => (line ? `${prefix}${line}` : line)).join('\n');
}

function quote(markdown) {
  return markdown.split('\n').map((line) => `> ${line}`.trimEnd()).join('\n');
}

function fileExtension(contentType, url) {
  const byType = {
    'image/avif': 'avif', 'image/gif': 'gif', 'image/jpeg': 'jpg', 'image/png': 'png',
    'image/svg+xml': 'svg', 'image/webp': 'webp',
  };
  if (byType[contentType]) return byType[contentType];
  const extension = path.extname(new URL(url).pathname).slice(1).toLowerCase();
  return /^[a-z0-9]{2,5}$/.test(extension) ? extension : 'jpg';
}

function normalizeCodeLanguage(language) {
  const normalized = String(language).trim().toLowerCase();
  const aliases = { 'c++': 'cpp', 'c#': 'csharp', 'plain text': '' };
  return aliases[normalized] ?? normalized.replace(/[^a-z0-9_+-]/g, '');
}

function blockValue(recordMap, id) {
  return getBlockValue(recordMap.block[id]);
}

async function saveImage(block, context) {
  const source = context.recordMap.signed_urls?.[block.id] || block.properties?.source?.[0]?.[0] || '';
  if (!source) throw new Error('A Notion image is missing its URL.');
  const response = await fetch(source);
  if (!response.ok) throw new Error(`Could not download a Notion image (${response.status}).`);
  const extension = fileExtension(response.headers.get('content-type')?.split(';')[0], source);
  const filename = `${String(++context.imageNumber).padStart(2, '0')}.${extension}`;
  const directory = path.join(IMAGE_DIRECTORY, context.slug);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, filename), Buffer.from(await response.arrayBuffer()));
  return `/images/articles/${context.slug}/${filename}`;
}

async function childrenToMarkdown(block, context) {
  if (!block.content?.length) return '';
  const children = block.content.map((id) => blockValue(context.recordMap, id)).filter(Boolean);
  return blocksToMarkdown(children, context);
}

async function tableToMarkdown(block, context) {
  const columns = block.format?.table_block_column_order ?? [];
  const rows = (block.content ?? [])
    .map((id) => blockValue(context.recordMap, id))
    .filter((row) => row?.type === 'table_row')
    .map((row) => columns.map((column) => richTextToMarkdown(row.properties?.[column])));
  if (!rows.length || !columns.length) return '';
  return [
    `| ${rows[0].join(' | ')} |`,
    `| ${columns.map(() => '---').join(' | ')} |`,
    ...rows.slice(1).map((row) => `| ${row.join(' | ')} |`),
  ].join('\n');
}

async function blockToMarkdown(block, context) {
  const text = richTextToMarkdown(block.properties?.title);
  const children = await childrenToMarkdown(block, context);
  switch (block.type) {
    case 'text': return [text, children].filter(Boolean).join('\n\n');
    case 'header': return `# ${text}`;
    case 'sub_header': return `## ${text}`;
    case 'sub_sub_header':
    case 'header_4': return `### ${text}`;
    case 'bulleted_list': return `- ${text}${children ? `\n${indent(children)}` : ''}`;
    case 'numbered_list': return `1. ${text}${children ? `\n${indent(children)}` : ''}`;
    case 'to_do': {
      const checked = block.properties?.checked?.[0]?.[0] === 'Yes';
      return `- [${checked ? 'x' : ' '}] ${text}${children ? `\n${indent(children)}` : ''}`;
    }
    case 'quote': return quote([text, children].filter(Boolean).join('\n\n'));
    case 'callout': {
      const icon = block.format?.page_icon ? `${block.format.page_icon} ` : '';
      return quote(`${icon}${text}${children ? `\n\n${children}` : ''}`);
    }
    case 'code': {
      const language = normalizeCodeLanguage(plainText(block.properties?.language));
      const caption = plainText(block.properties?.caption);
      return `${caption ? `${escapeMarkdown(caption)}\n\n` : ''}\`\`\`${language}\n${plainText(block.properties?.title)}\n\`\`\``;
    }
    case 'image': {
      const source = await saveImage(block, context);
      const caption = plainText(block.properties?.caption) || plainText(block.properties?.alt_text);
      return `![${escapeMarkdown(caption)}](${source})${caption ? `\n\n*${escapeMarkdown(caption)}*` : ''}`;
    }
    case 'divider': return '---';
    case 'equation': return `$$\n${plainText(block.properties?.title)}\n$$`;
    case 'bookmark': {
      const url = plainText(block.properties?.link);
      const label = plainText(block.properties?.title) || url;
      return `[${escapeMarkdown(label)}](${url})`;
    }
    case 'embed':
    case 'gist':
    case 'video':
    case 'figma':
    case 'typeform':
    case 'replit':
    case 'codepen':
    case 'excalidraw':
    case 'tweet':
    case 'maps':
    case 'pdf':
    case 'audio': {
      const url = block.properties?.source?.[0]?.[0];
      return url ? `[${block.type}](${url})` : '';
    }
    case 'file': {
      const url = context.recordMap.signed_urls?.[block.id] || block.properties?.source?.[0]?.[0];
      const label = plainText(block.properties?.title) || 'Download file';
      return url ? `[${escapeMarkdown(label)}](${url})` : '';
    }
    case 'toggle': return `<details>\n<summary>${text}</summary>\n\n${children}\n\n</details>`;
    case 'table': return tableToMarkdown(block, context);
    case 'column_list':
    case 'column':
    case 'transclusion_container':
    case 'transclusion_reference':
    case 'tab': return children;
    case 'page': return `## ${text || 'Untitled page'}`;
    case 'external_object_instance': {
      const url = block.format?.original_url;
      return url ? `[${url}](${url})` : '';
    }
    case 'breadcrumb':
    case 'table_of_contents': return '';
    default:
      throw new Error(`Unsupported Notion block type: ${block.type}. Convert or remove it before publishing.`);
  }
}

async function blocksToMarkdown(blocks, context) {
  const output = [];
  for (const block of blocks) output.push(await blockToMarkdown(block, context));
  return output.filter(Boolean).join('\n\n');
}

function publicationDate(value) {
  if (value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new Error('Date must use YYYY-MM-DD.');
    return value;
  }
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Hong_Kong', year: 'numeric', month: '2-digit', day: '2-digit',
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
  const numbers = await Promise.all(files.map(async (filename) => {
    const source = await readFile(path.join(ARTICLE_DIRECTORY, filename), 'utf8');
    const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    return Number(parseYaml(match?.[1] ?? '')?.number ?? 0);
  }));
  return Math.max(0, ...numbers) + 1;
}

export function createArticleSource(data) {
  const frontmatter = stringifyYaml({
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
  }, { lineWidth: 0 }).trim();
  return `---\n${frontmatter}\n---\n\n${data.body.trim()}\n`;
}

async function main() {
  const args = parseArguments(process.argv.slice(2));
  if (!args.url) throw new Error('Pass a public Notion page with --url.');
  if (args.gallery && !GALLERIES.has(args.gallery)) throw new Error(`Unknown gallery: ${args.gallery}`);

  const pageId = notionPageIdFromUrl(args.url);
  let recordMap;
  try {
    recordMap = await new NotionAPI({ userTimeZone: 'Asia/Hong_Kong' }).getPage(pageId, {
      fetchCollections: false,
      signFileUrls: true,
    });
  } catch (error) {
    throw new Error(`Could not read the public Notion page. Confirm it is published: ${error.message}`);
  }
  const page = blockValue(recordMap, pageId);
  if (!page || page.type !== 'page') throw new Error('The link does not point to a complete Notion page.');
  const title = getBlockTitle(page, recordMap) || 'Untitled';
  const slug = slugify(title) || `notion-${pageId.slice(0, 8)}`;
  const filepath = path.join(ARTICLE_DIRECTORY, `${slug}.md`);
  try {
    await readFile(filepath);
    throw new Error(`An article already exists at src/content/articles/${slug}.md.`);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }

  const blocks = (page.content ?? []).map((id) => blockValue(recordMap, id)).filter(Boolean);
  const body = await blocksToMarkdown(blocks, { recordMap, slug, imageNumber: 0 });
  if (!body.trim()) throw new Error('The public Notion page has no publishable content.');
  const firstParagraph = blocks.find((block) => block.type === 'text' && plainText(block.properties?.title));
  const summary = String(args.summary || plainText(firstParagraph?.properties?.title) || title).slice(0, 500);
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

  if (process.env.GITHUB_OUTPUT) {
    await writeFile(process.env.GITHUB_OUTPUT,
      `article_path=src/content/articles/${slug}.md\nslug=${slug}\ntitle=${title}\n`, { flag: 'a' });
  }
  console.log(`Created src/content/articles/${slug}.md`);
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
