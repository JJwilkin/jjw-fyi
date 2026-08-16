import assert from 'node:assert/strict';
import test from 'node:test';
import {
  createArticleSource,
  notionPageIdFromUrl,
  richTextToMarkdown,
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

test('converts complete rich text formatting and links', () => {
  assert.equal(
    richTextToMarkdown([
      ['linked', [['b'], ['a', 'https://example.com']]],
      [' and code', [['c']]],
    ]),
    '[**linked**](https://example.com)` and code`',
  );
});

test('requires a public Notion hostname and a link containing the page ID', () => {
  assert.throws(() => notionPageIdFromUrl('https://example.com/0123456789abcdef0123456789abcdef'), {
    name: 'Error',
    message: 'Use a public notion.so or notion.site link.',
  });
  assert.throws(() => notionPageIdFromUrl('https://example.notion.site/short-name'), {
    name: 'Error',
    message:
      'The public link must contain the page ID. Use Notion’s Share → Copy link instead of a custom short site URL.',
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
