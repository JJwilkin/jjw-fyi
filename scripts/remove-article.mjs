import { access, readFile, readdir, rm, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { parse as parseYaml, stringify as stringifyYaml } from 'yaml';

const ARTICLE_DIRECTORY = path.resolve('src/content/articles');
const IMAGE_DIRECTORY = path.resolve('public/images/articles');
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function articleSlug(value) {
  const raw = String(value).trim();
  let candidate = raw;
  try {
    const url = new URL(raw);
    const match = url.pathname.match(/^\/articles\/([^/]+)\/?$/);
    if (!match) throw new Error('The URL must point to one article.');
    candidate = match[1];
  } catch (error) {
    if (error instanceof TypeError) {
      candidate = raw.replace(/^\/?articles\//, '').replace(/^\/+|\/+$/g, '');
    } else {
      throw error;
    }
  }

  if (!SLUG_PATTERN.test(candidate)) {
    throw new Error('Use an article slug such as my-article or its full site URL.');
  }
  return candidate;
}

function splitArticle(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error('Article is missing valid frontmatter.');
  return { data: parseYaml(match[1]) ?? {}, body: match[2].replace(/^\r?\n/, '') };
}

function joinArticle(data, body) {
  return `---\n${stringifyYaml(data, { lineWidth: 0 }).trim()}\n---\n\n${body.trimEnd()}\n`;
}

export async function removeArticleAt(articleDirectory, imageDirectory, value) {
  const slug = articleSlug(value);
  const filepath = path.join(articleDirectory, `${slug}.md`);
  let source;
  try {
    source = await readFile(filepath, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') throw new Error(`No article exists with the slug “${slug}”.`);
    throw error;
  }

  const removed = splitArticle(source);
  const title = String(removed.data.title ?? slug);
  const filenames = (await readdir(articleDirectory)).filter(
    (filename) => filename.endsWith('.md') && filename !== `${slug}.md`,
  );
  const updatedArticles = [];

  for (const filename of filenames) {
    const relatedPath = path.join(articleDirectory, filename);
    const relatedSource = await readFile(relatedPath, 'utf8');
    const related = splitArticle(relatedSource);
    const connections = Array.isArray(related.data.connections) ? related.data.connections : [];
    const nextConnections = connections.filter((connection) => connection !== slug);
    if (nextConnections.length !== connections.length) {
      related.data.connections = nextConnections;
      await writeFile(relatedPath, joinArticle(related.data, related.body), 'utf8');
      updatedArticles.push(filename);
    }
  }

  await unlink(filepath);
  const articleImages = path.join(imageDirectory, slug);
  try {
    await access(articleImages);
    await rm(articleImages, { recursive: true });
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }

  return { slug, title, removedPath: filepath, updatedArticles };
}

function parseArguments(argv) {
  const articleIndex = argv.indexOf('--article');
  if (articleIndex === -1 || !argv[articleIndex + 1]) throw new Error('Pass an article with --article.');
  return argv[articleIndex + 1];
}

async function main() {
  const result = await removeArticleAt(
    ARTICLE_DIRECTORY,
    IMAGE_DIRECTORY,
    parseArguments(process.argv.slice(2)),
  );
  if (process.env.GITHUB_OUTPUT) {
    await writeFile(
      process.env.GITHUB_OUTPUT,
      `slug=${result.slug}\ntitle=${result.title}\nupdated_connections=${result.updatedArticles.length}\n`,
      { flag: 'a' },
    );
  }
  console.log(`Removed ${result.title} (${result.slug}).`);
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}

