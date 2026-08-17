# jjw.fyi

The personal site of Josh J Wilkinson. It is a small Astro blog with Markdown files as its content
store and a Notion-to-GitHub publishing workflow.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4321/](http://127.0.0.1:4321/) for the site.

## Write and publish

Write in a Notion page shared with the **JJW Blog Publisher** integration. In GitHub, run the
**Publish a Notion article** workflow and provide the page link plus any tags and article metadata.
The workflow imports the page and its images, validates the site, creates a pull request, and can
merge it automatically so Netlify publishes the new revision.

Use the **Remove an article** workflow with an article slug or full article URL to remove a post.
Both workflows use repository pull requests as the publishing and authorization boundary.

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Run the site locally with hot reload |
| `npm run check` | Type-check the Astro project |
| `npm run build` | Build the static site |
| `npm run preview` | Preview the production build |

## Content format

Imported articles are stored as ordinary Markdown with YAML frontmatter:

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
