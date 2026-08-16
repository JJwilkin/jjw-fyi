import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import convertHeic from 'heic-convert';
import { parse as parseYaml, stringify as stringifyYaml } from 'yaml';

const ARTICLE_DIRECTORY = path.resolve('src/content/articles');
const IMAGE_DIRECTORY = path.resolve('public/images/articles');
const NOTION_API = 'https://api.notion.com/v1';
const NOTION_VERSION = '2026-03-11';
const GALLERIES = new Set([
  'systems', 'photography', 'nature', 'philosophy', 'projects', 'writing', 'travel', 'field-notes',
]);

export function notionPageIdFromUrl(value) {
  const raw = String(value);
  let candidates = [raw];
  try {
    const url = new URL(raw);
    if (!url.hostname.endsWith('notion.so') && !url.hostname.endsWith('notion.site')) {
      throw new Error('Use a notion.so or notion.site link.');
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
      'The link must contain the page ID. Use Notion’s Share → Copy link instead of a custom short site URL.',
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

function fileExtension(contentType, url) {
  const byType = {
    'image/avif': 'avif', 'image/gif': 'gif', 'image/jpeg': 'jpg', 'image/png': 'png',
    'image/svg+xml': 'svg', 'image/webp': 'webp', 'image/heic': 'heic', 'image/heif': 'heif',
  };
  if (byType[contentType]) return byType[contentType];
  const extension = path.extname(new URL(url).pathname).slice(1).toLowerCase();
  return /^[a-z0-9]{2,5}$/.test(extension) ? extension : 'jpg';
}

export function notionPageTitle(page) {
  const property = Object.values(page.properties ?? {}).find((value) => value.type === 'title');
  return property?.title?.map((item) => item.plain_text ?? '').join('').trim() || 'Untitled';
}

export function normalizeNotionMarkdown(markdown) {
  return String(markdown)
    .replace(/<callout(?:\s+([^>]*))?>\s*\n?([\s\S]*?)\n?\s*<\/callout>/g, (_match, attributes = '', content = '') => {
      const icon = attributes.match(/\bicon="([^"]*)"/)?.[1] ?? '';
      const lines = content.replace(/^\t/gm, '').trim().split('\n');
      if (icon) lines[0] = `${icon} ${lines[0] ?? ''}`.trimEnd();
      return lines.map((line) => `> ${line}`.trimEnd()).join('\n');
    })
    .replace(/<empty-block\s*\/>/g, '')
    .replace(/[ \t]+\{color="[^"]*"\}(?=\n|$)/g, '')
    .trim();
}

export async function rewriteMarkdownImages(markdown, saveImage) {
  const pattern = /!\[([^\]\n]*)\]\((?:<([^>\n]+)>|(https?:\/\/[^)\s]+))(?:\s+"[^"\n]*")?\)(?:[ \t]+\{[^}\n]*\})?/g;
  let output = '';
  let cursor = 0;
  for (const match of markdown.matchAll(pattern)) {
    output += markdown.slice(cursor, match.index);
    output += `![${match[1]}](${await saveImage(match[2] || match[3])})`;
    cursor = match.index + match[0].length;
  }
  return output + markdown.slice(cursor);
}

export function markdownSummary(markdown) {
  const withoutCode = String(markdown).replace(/```[\s\S]*?```/g, '');
  for (const block of withoutCode.split(/\n\s*\n/)) {
    if (/^\s*(?:#{1,4}\s|[-*+]\s|\d+\.\s|>|<|!\[)/.test(block)) continue;
    const text = block
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_~`]/g, '')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    if (text) return text;
  }
  return '';
}

async function notionRequest(pageId, suffix, token) {
  const response = await fetch(`${NOTION_API}/pages/${pageId}${suffix}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Notion-Version': NOTION_VERSION,
    },
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.message || `Notion returned HTTP ${response.status}.`);
  return payload;
}

async function downloadImage(source, slug, imageNumber) {
  const response = await fetch(source);
  if (!response.ok) throw new Error(`Could not download a Notion image (${response.status}).`);
  const contentType = response.headers.get('content-type')?.split(';')[0];
  let extension = fileExtension(contentType, source);
  let image = Buffer.from(await response.arrayBuffer());
  if (extension === 'heic' || extension === 'heif') {
    image = Buffer.from(await convertHeic({ buffer: image, format: 'JPEG', quality: 0.86 }));
    extension = 'jpg';
  }
  const filename = `${String(imageNumber).padStart(2, '0')}.${extension}`;
  const directory = path.join(IMAGE_DIRECTORY, slug);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, filename), image);
  return `/images/articles/${slug}/${filename}`;
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
  if (!args.url) throw new Error('Pass a Notion page with --url.');
  if (args.gallery && !GALLERIES.has(args.gallery)) throw new Error(`Unknown gallery: ${args.gallery}`);
  const token = process.env.NOTION_TOKEN?.trim();
  if (!token) throw new Error('Set NOTION_TOKEN to a Notion integration token with access to the page.');

  const pageId = notionPageIdFromUrl(args.url);
  let page;
  let content;
  try {
    [page, content] = await Promise.all([
      notionRequest(pageId, '', token),
      notionRequest(pageId, '/markdown', token),
    ]);
  } catch (error) {
    throw new Error(`Could not read the Notion page. Confirm it is shared with the integration: ${error.message}`);
  }
  if (page.object !== 'page' || content.object !== 'page_markdown' || typeof content.markdown !== 'string') {
    throw new Error('Notion returned an invalid page response.');
  }
  if (content.truncated || content.unknown_block_ids?.length || /<unknown\b/.test(content.markdown)) {
    throw new Error('Notion could not convert every block. Remove unsupported blocks or share all child content.');
  }
  const title = notionPageTitle(page);
  const slug = slugify(title) || `notion-${pageId.slice(0, 8)}`;
  const filepath = path.join(ARTICLE_DIRECTORY, `${slug}.md`);
  try {
    await readFile(filepath);
    throw new Error(`An article already exists at src/content/articles/${slug}.md.`);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }

  let imageNumber = 0;
  const normalized = normalizeNotionMarkdown(content.markdown);
  const body = await rewriteMarkdownImages(normalized, (source) => downloadImage(source, slug, ++imageNumber));
  if (!body.trim()) throw new Error('The Notion page has no publishable content.');
  const summary = String(args.summary || markdownSummary(body) || title).slice(0, 500);
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
