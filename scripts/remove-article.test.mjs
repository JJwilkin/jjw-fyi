import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { articleSlug, removeArticleAt } from './remove-article.mjs';

test('accepts a slug or complete article URL', () => {
  assert.deepEqual(
    [articleSlug('small-note'), articleSlug('https://jjw.fyi/articles/small-note/')],
    ['small-note', 'small-note'],
  );
});

test('rejects values that could escape the article directory', () => {
  assert.throws(() => articleSlug('../about'), {
    name: 'Error',
    message: 'Use an article slug such as my-article or its full site URL.',
  });
});

test('removes the article, its images, and complete connection references', async () => {
  const temporaryDirectory = await mkdtemp(path.join(os.tmpdir(), 'jjw-remove-article-'));
  const articles = path.join(temporaryDirectory, 'articles');
  const images = path.join(temporaryDirectory, 'images');
  await mkdir(path.join(images, 'old-article'), { recursive: true });
  await mkdir(articles, { recursive: true });
  await writeFile(
    path.join(articles, 'old-article.md'),
    '---\ntitle: Old article\nconnections: []\n---\n\nOld body.\n',
  );
  await writeFile(
    path.join(articles, 'remaining.md'),
    '---\ntitle: Remaining\nconnections:\n  - old-article\n  - another\n---\n\nRemaining body.\n',
  );
  await writeFile(path.join(images, 'old-article', '01.png'), 'image');

  try {
    const result = await removeArticleAt(articles, images, 'old-article');
    assert.deepEqual(result, {
      slug: 'old-article',
      title: 'Old article',
      removedPath: path.join(articles, 'old-article.md'),
      updatedArticles: ['remaining.md'],
    });
    assert.deepEqual(await readdir(articles), ['remaining.md']);
    assert.deepEqual(await readdir(images), []);
    assert.equal(
      await readFile(path.join(articles, 'remaining.md'), 'utf8'),
      '---\ntitle: Remaining\nconnections:\n  - another\n---\n\nRemaining body.\n',
    );
  } finally {
    await rm(temporaryDirectory, { recursive: true });
  }
});

