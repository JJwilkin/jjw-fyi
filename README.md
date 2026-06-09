# jjw.fyi

The personal website of Joshua Wilkinson. It's organised by interest rather than as a portfolio or
a blog: eight **sections** (Systems, Photography, Nature, Philosophy, Projects, Writing, Travel,
Field Notes), each shown as a framed, gently animated drawing on the homepage. Every piece is an
**article**, and a **Map of Curiosity** draws the connections between them.

The museum/gallery feel is intended to come through the *visuals* (the framed wall, the drawings,
the structured article header) rather than the words — the copy just talks about articles and
sections.

Built with [Astro](https://astro.build). Static, fast, accessible, and almost no JavaScript.

## Running it locally

```bash
npm install      # once
npm run dev       # → http://localhost:4321  (hot reload)
```

That's the everyday workflow. **One caveat:** search is powered by [Pagefind](https://pagefind.app),
which indexes the *built* site, so the `/search/` page only works after a production build:

```bash
npm run build     # builds to dist/ and runs Pagefind indexing
npm run preview   # → serves the built site, search included
```

Other scripts:

| Command            | What it does                                  |
| ------------------ | --------------------------------------------- |
| `npm run dev`      | Dev server with hot reload                    |
| `npm run build`    | Static build → `dist/`, then Pagefind index   |
| `npm run preview`  | Serve the built `dist/` (search works here)   |
| `npm run check`    | `astro check` — type-check `.astro`/content   |

## How it's organised

```
src/
  content/
    articles/            # every essay, project, photo set, note — one Markdown file each
  content.config.ts      # article frontmatter schema (also the header + graph edges)
  data/galleries.ts      # the 8 sections: titles, kind labels, descriptions, frame aspect ratios
  lib/content.ts         # helpers: fetch/sort articles, dates, connection resolution
  layouts/BaseLayout.astro
  components/
    Header.astro  Footer.astro
    Frame.astro          # a framed drawing on the homepage wall
    Plaque.astro         # the structured header atop each article
    ArticleCard.astro    # an article as a small card (section pages + connections)
    Connections.astro    # the "Connections" footer that wires the graph
    paintings/           # 8 hand-drawn animated SVG drawings, one per section + a dispatcher
  pages/
    index.astro          # the homepage wall
    galleries/[slug].astro   # a section page, served at /galleries/<slug>/
    articles/[...id].astro   # an article, served at /articles/<slug>/
    map.astro            # Map of Curiosity (interactive graph)
    about.astro  search.astro  404.astro
  styles/global.css      # the paper-&-ink design system
public/favicon.svg
```

> Note: section pages currently live at `/galleries/<slug>/` (the term reflects the homepage's
> gallery-wall *visual*; the on-page copy says "section"). Rename the `src/pages/galleries/` folder
> and `galleryUrl()` in `src/lib/content.ts` if you'd prefer `/sections/`.

## Adding an article

Drop a Markdown (or `.mdx`) file in `src/content/articles/`. The filename becomes the URL slug
(`my-article.md` → `/articles/my-article/`). Frontmatter:

```yaml
---
title: The Title
number: 42                      # a quiet running index, shown as "№042"
gallery: systems               # one of the 8 section slugs (see src/data/galleries.ts)
medium: Essay                  # short kind/format label shown above the title
date: 2026-06-09
summary: One or two sentences shown in listings and as the lead.
tags: [databases, performance] # optional
connections:                    # optional — ids (filenames) of related articles
  - the-shape-of-a-queue
draft: false                    # optional — hidden in production while true
---

Your prose here. The reading view is content-first: the layout gets out of the
way and this is set like a page in a book.
```

### Connections & the graph

`connections` lists the slugs of related articles. They are **bidirectional**: linking A → B makes
B show A in its Connections footer too, and draws a thread between them on the Map of Curiosity.
Dangling ids are ignored safely, so you can reference an article before you've written it.

## Design notes

- **Two type registers.** Inter for headings, labels and navigation; Source Serif 4 for long-form
  body text. Both self-hosted via Fontsource.
- **Paper & ink palette** lives as CSS custom properties at the top of `src/styles/global.css`.
- **The drawings** are bespoke SVGs in `src/components/paintings/`, animated only with CSS and
  fully still under `prefers-reduced-motion`. Each section's `aspect` (in `galleries.ts`) sets its
  frame proportions on the homepage wall.
- **Opening a section** uses Astro view transitions: a wall frame's drawing morphs into the section
  hero (shared `transition:name`).

## Things you'll want to change

- `astro.config.mjs` → `site` (currently `https://jjw.fyi`) for correct canonical URLs + sitemap.
- The contact address in `src/pages/about.astro` (placeholder `hello@jjw.fyi`).
- Replace the Photography section's placeholder text with real images when ready.
