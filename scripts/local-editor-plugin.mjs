import { mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { parse as parseYaml, stringify as stringifyYaml } from 'yaml';

const ARTICLE_DIRECTORY = path.resolve(process.cwd(), 'src/content/articles');
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
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MAX_REQUEST_BYTES = 600_000;

function isLoopback(address = '') {
  return address === '127.0.0.1' || address === '::1' || address === '::ffff:127.0.0.1';
}

function sendJson(response, status, data) {
  response.statusCode = status;
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.setHeader('Cache-Control', 'no-store');
  response.end(JSON.stringify(data));
}

function splitArticle(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error('Article is missing valid frontmatter.');
  return {
    data: parseYaml(match[1]) ?? {},
    body: match[2].replace(/^\r?\n/, '').replace(/\s+$/, ''),
  };
}

function normalizeArticle(slug, source) {
  const { data, body } = splitArticle(source);
  const date =
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : String(data.date ?? '').slice(0, 10);

  return {
    slug,
    title: String(data.title ?? ''),
    number: Number(data.number ?? 0),
    gallery: String(data.gallery ?? 'writing'),
    medium: String(data.medium ?? 'Essay'),
    date,
    summary: String(data.summary ?? ''),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    featured: data.featured === true,
    draft: data.draft === true,
    body,
  };
}

async function listArticles() {
  await mkdir(ARTICLE_DIRECTORY, { recursive: true });
  const filenames = (await readdir(ARTICLE_DIRECTORY)).filter((name) => name.endsWith('.md'));
  const articles = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.slice(0, -3);
      const source = await readFile(path.join(ARTICLE_DIRECTORY, filename), 'utf8');
      return normalizeArticle(slug, source);
    }),
  );

  return articles.sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

async function readRequestBody(request) {
  const chunks = [];
  let size = 0;

  for await (const chunk of request) {
    size += chunk.length;
    if (size > MAX_REQUEST_BYTES) throw new Error('Article is too large.');
    chunks.push(chunk);
  }

  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

function cleanArticle(input) {
  const slug = String(input.slug ?? '').trim().toLowerCase();
  const originalSlug = String(input.originalSlug ?? '').trim().toLowerCase();
  const title = String(input.title ?? '').trim();
  const gallery = String(input.gallery ?? '');
  const medium = String(input.medium ?? 'Essay').trim() || 'Essay';
  const date = String(input.date ?? '').trim();
  const summary = String(input.summary ?? '').trim();
  const body = String(input.body ?? '').replace(/\r\n/g, '\n').trim();
  const tags = Array.isArray(input.tags)
    ? [...new Set(input.tags.map((tag) => String(tag).trim()).filter(Boolean))].slice(0, 20)
    : [];

  if (!SLUG_PATTERN.test(slug)) {
    throw new Error('Slug must use lowercase letters, numbers, and single hyphens.');
  }
  if (originalSlug && !SLUG_PATTERN.test(originalSlug)) throw new Error('Invalid original slug.');
  if (!title || title.length > 180) throw new Error('Add a title under 180 characters.');
  if (!GALLERIES.has(gallery)) throw new Error('Choose a valid section.');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('Choose a valid publication date.');
  if (summary.length > 500) throw new Error('Keep the summary under 500 characters.');
  if (!body) throw new Error('The article body cannot be empty.');

  return {
    slug,
    originalSlug,
    title,
    gallery,
    medium,
    date,
    summary,
    tags,
    featured: input.featured === true,
    draft: input.draft !== false,
    body,
  };
}

async function saveArticle(input, watcher) {
  const article = cleanArticle(input);
  const articles = await listArticles();
  const existing = articles.find((item) => item.slug === article.originalSlug);
  const slugOwner = articles.find((item) => item.slug === article.slug);

  if (slugOwner && slugOwner.slug !== article.originalSlug) {
    throw new Error('Another article already uses that slug.');
  }

  const number = existing?.number || Math.max(0, ...articles.map((item) => item.number)) + 1;
  const frontmatter = stringifyYaml(
    {
      title: article.title,
      number,
      gallery: article.gallery,
      medium: article.medium,
      date: article.date,
      summary: article.summary,
      tags: article.tags,
      connections: [],
      featured: article.featured,
      draft: article.draft,
    },
    { lineWidth: 0 },
  ).trim();
  const source = `---\n${frontmatter}\n---\n\n${article.body}\n`;
  const filepath = path.join(ARTICLE_DIRECTORY, `${article.slug}.md`);
  await writeFile(filepath, source, { encoding: 'utf8', mode: 0o644 });
  watcher.add(filepath);
  watcher.emit(slugOwner ? 'change' : 'add', filepath);

  if (article.originalSlug && article.originalSlug !== article.slug) {
    const originalPath = path.join(ARTICLE_DIRECTORY, `${article.originalSlug}.md`);
    await unlink(originalPath);
    watcher.emit('unlink', originalPath);
  }

  return normalizeArticle(article.slug, source);
}

async function deleteArticle(slug, watcher) {
  if (!SLUG_PATTERN.test(slug)) throw new Error('Invalid article slug.');
  const filepath = path.join(ARTICLE_DIRECTORY, `${slug}.md`);
  await unlink(filepath);
  watcher.emit('unlink', filepath);
}

function localEditorVitePlugin() {
  return {
    name: 'jjw-local-editor-api',
    apply: 'serve',
    configureServer(server) {
      server.watcher.add(ARTICLE_DIRECTORY);
      server.middlewares.use(async (request, response, next) => {
        const url = new URL(request.url ?? '/', 'http://localhost');
        if (!url.pathname.startsWith('/__editor/articles')) return next();

        if (!isLoopback(request.socket.remoteAddress)) {
          return sendJson(response, 403, { error: 'The local editor only accepts loopback requests.' });
        }

        try {
          if (request.method === 'GET' && url.pathname === '/__editor/articles') {
            return sendJson(response, 200, { articles: await listArticles() });
          }

          if (request.method === 'POST' && url.pathname === '/__editor/articles') {
            return sendJson(response, 200, {
              article: await saveArticle(await readRequestBody(request), server.watcher),
            });
          }

          if (request.method === 'DELETE') {
            const slug = decodeURIComponent(url.pathname.slice('/__editor/articles/'.length));
            await deleteArticle(slug, server.watcher);
            return sendJson(response, 200, { ok: true });
          }

          return sendJson(response, 405, { error: 'Method not allowed.' });
        } catch (error) {
          const code = error?.code === 'ENOENT' ? 404 : 400;
          return sendJson(response, code, {
            error: error instanceof Error ? error.message : 'The editor request failed.',
          });
        }
      });
    },
  };
}

export default function localEditor() {
  return {
    name: 'jjw-local-editor',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
        updateConfig({ vite: { plugins: [localEditorVitePlugin()] } });
      },
    },
  };
}
