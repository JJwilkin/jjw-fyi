# Publish articles from Notion

Notion is the drafting surface; Markdown in this repository remains the source of truth. The
`Publish a Notion article` GitHub Action accepts a Notion page link, copies its content and images
into the repository, validates the Astro site, and creates a pull request. It can merge that pull
request immediately or leave it open for review.

## One-time setup

1. Create a Notion internal integration with read-content access.
2. In Notion, create a parent page named `Blog drafts`, open its connection menu, and connect the
   integration. Draft articles as child pages so the integration can read them.
3. In GitHub, open **Settings → Secrets and variables → Actions** and create a repository secret
   named `NOTION_TOKEN` containing the integration token.
4. In GitHub, open **Settings → Actions → General → Workflow permissions**. Select **Read and write
   permissions** and enable **Allow GitHub Actions to create and approve pull requests**.

## Publish from a phone

1. Write the article in a child page under `Blog drafts`. The Notion page title becomes the article
   title, and the first paragraph becomes its homepage summary.
2. Copy the page link.
3. In the GitHub mobile app or mobile site, open this repository, choose **Actions → Publish a
   Notion article → Run workflow**, and paste the link.
4. Add comma-separated tags and choose a section. Leave **Merge after validation** on to publish as
   soon as the checks pass, or turn it off to review the pull request first.

Netlify deploys after the pull request reaches the main branch. The original Notion page is not
changed or deleted.

## Supported Notion content

The importer handles paragraphs, headings, bulleted and numbered lists, checkboxes, quotes,
callouts, code blocks with language labels, links, equations, images, dividers, toggles, tables,
columns, and synced blocks. Notion-hosted images are downloaded to `public/images/articles` because
Notion's temporary image URLs expire.

The importer stops instead of silently omitting an unsupported block. Convert that block to a
supported type and run the workflow again.

## Local use

With `NOTION_TOKEN` set in the shell:

```sh
npm run import:notion -- \
  --url "https://www.notion.so/your-page-id" \
  --tags "systems,notes" \
  --gallery "writing" \
  --medium "Essay" \
  --featured "false" \
  --draft "true"
```

The local command creates the Markdown file but does not commit or deploy it.

