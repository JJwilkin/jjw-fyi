# jjw.fyi

The personal site of Josh J Wilkinson. It is a small Astro blog with a local writing interface and
Markdown files as its only content store.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4321/](http://127.0.0.1:4321/) for the site and
[http://127.0.0.1:4321/write/](http://127.0.0.1:4321/write/) for the editor.

The editor is deliberately local-only. Its write API exists only inside Astro's development server
and only accepts loopback requests.

## Write and publish

The writing screen supports:

- a single, distraction-free Markdown document;
- using the first `# Heading` as the article title;
- deriving the slug and summary automatically for new articles;
- opening and editing existing articles without losing their metadata;
- drafts that stay off public pages;
- published posts;
- optional tags, section, date, format, summary, and homepage featuring;
- deletion of article files.

Every save creates or updates a file in `src/content/articles/`. There is no database or separate
account system: access to the repository and local filesystem is the authorization boundary.

Publishing has two distinct steps:

1. Click **Publish** in `/write/`. This saves the Markdown file with `draft: false`.
2. Commit and push the repository. The live host must run `npm run build` from the pushed revision.

Until the second step happens, the article exists only on your machine.

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Run the site and local editor with hot reload |
| `npm run check` | Type-check the Astro project |
| `npm run build` | Build the static site |
| `npm run preview` | Preview the production build |

## Content format

The editor writes ordinary Markdown with YAML frontmatter:

```md
---
title: A Post Title
number: 1
gallery: writing
medium: Essay
date: 2026-07-25
summary: A short description.
tags:
  - writing
connections: []
featured: false
draft: false
---

The article begins here.
```

Files can still be edited by hand. Their filenames become their URL slugs:
`a-post-title.md` becomes `/articles/a-post-title/`.

## Analytics

Production builds use Umami for privacy-friendly analytics. The site's current website ID is
checked in as the default; `PUBLIC_UMAMI_WEBSITE_ID` can override it for another deployment.

```bash
PUBLIC_UMAMI_WEBSITE_ID=fd2d9ed6-86b2-4931-a76d-7514d3c720bf
PUBLIC_UMAMI_SCRIPT_URL=https://cloud.umami.is/script.js
PUBLIC_UMAMI_DOMAINS=jjw.fyi,www.jjw.fyi
```

Analytics stay disabled during local development.

The integration records:

- page views and session duration through Umami;
- internal and outbound link clicks;
- button clicks;
- reading-engagement milestones at 15, 30, 60, 120, and 300 seconds, including scroll depth;
- Core Web Vitals.
