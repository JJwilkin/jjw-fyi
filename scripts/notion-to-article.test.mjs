import assert from 'node:assert/strict';
import test from 'node:test';
import {
  createArticleSource,
  markdownSummary,
  normalizeNotionMarkdown,
  notionPageTitle,
  notionPageIdFromUrl,
  rewriteMarkdownImages,
  slugify,
} from './notion-to-article.mjs';

test('extracts and normalizes a Notion page ID from a shared URL', () => {
  assert.equal(
    notionPageIdFromUrl('https://www.notion.so/An-article-0123456789abcdef0123456789abcdef?pvs=4'),
    '01234567-89ab-cdef-0123-456789abcdef',
  );
});

test('creates a safe article slug', () => {
  assert.equal(slugify('  Déjà Vu: Systems & Scale!  '), 'deja-vu-systems-scale');
});

test('reads the complete title from a Notion page response', () => {
  assert.equal(
    notionPageTitle({
      properties: {
        Name: {
          type: 'title',
          title: [{ plain_text: 'An ' }, { plain_text: 'article' }],
        },
      },
    }),
    'An article',
  );
});

test('normalizes complete Notion Markdown for Astro', () => {
  assert.equal(
    normalizeNotionMarkdown(`# Heading {color="blue"}

<callout icon="💡" color="yellow_bg">
\tImportant **note**.
\t
\t- Child
</callout>

<empty-block/>`),
    `# Heading

> 💡 Important **note**.
>
> - Child`,
  );
});

test('rewrites every complete image reference', async () => {
  const saved = [];
  const output = await rewriteMarkdownImages(
    'Before\n\n![First](https://example.com/one.heic) {color="blue"}\n\n![Second](<https://example.com/two.png>)',
    async (source) => {
      saved.push(source);
      return `/images/${saved.length}.jpg`;
    },
  );
  assert.deepEqual(saved, ['https://example.com/one.heic', 'https://example.com/two.png']);
  assert.equal(output, 'Before\n\n![First](/images/1.jpg)\n\n![Second](/images/2.jpg)');
});

test('uses the first complete prose paragraph as the summary', () => {
  assert.equal(
    markdownSummary('# Heading\n\n![Image](https://example.com/image.jpg)\n\nA **useful** [summary](https://example.com).'),
    'A useful summary.',
  );
});

test('requires a Notion hostname and a link containing the page ID', () => {
  assert.throws(() => notionPageIdFromUrl('https://example.com/0123456789abcdef0123456789abcdef'), {
    name: 'Error',
    message: 'Use a notion.so or notion.site link.',
  });
  assert.throws(() => notionPageIdFromUrl('https://example.notion.site/short-name'), {
    name: 'Error',
    message: 'The link must contain the page ID. Use Notion’s Share → Copy link instead of a custom short site URL.',
  });
});

test('creates the complete Astro article document', () => {
  assert.equal(
    createArticleSource({
      title: 'A small test',
      number: 4,
      gallery: 'writing',
      medium: 'Essay',
      date: '2026-08-16',
      summary: 'The whole summary.',
      tags: ['systems', 'notes'],
      featured: false,
      draft: false,
      body: 'A paragraph.\n',
    }),
    `---
title: A small test
number: 4
gallery: writing
medium: Essay
date: 2026-08-16
summary: The whole summary.
tags:
  - systems
  - notes
connections: []
featured: false
draft: false
---

A paragraph.
`,
  );
});
