// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import localEditor from './scripts/local-editor-plugin.mjs';

// The museum's address. Used for sitemap, canonical URLs, and RSS.
const SITE = 'https://jjw.fyi';

export default defineConfig({
  site: SITE,
  integrations: [mdx(), sitemap(), localEditor()],
  markdown: {
    // A light syntax theme that sits comfortably on paper-coloured backgrounds.
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
  build: {
    // Emit clean directory-style URLs: /exhibits/foo/ instead of /exhibits/foo.html
    format: 'directory',
  },
});
