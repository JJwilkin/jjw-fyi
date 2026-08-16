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
      {
        type: 'text',
        plain_text: 'linked',
        href: 'https://example.com',
        annotations: { bold: true, italic: false, strikethrough: false, code: false },
      },
      {
        type: 'text',
        plain_text: ' and code',
        annotations: { bold: false, italic: false, strikethrough: false, code: true },
      },
    ]),
    '[**linked**](https://example.com)` and code`',
  );
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

