# Publish articles from Notion

Notion is the drafting surface; Markdown in this repository remains the source of truth. The
`Publish a Notion article` GitHub Action accepts a Notion page link, copies its content and images
into the repository, validates the Astro site, and creates a pull request. It can merge that pull
request immediately or leave it open for review.

## One-time setup

1. Create an internal integration at **Notion → Settings → Connections → Develop or manage
   integrations**. It only needs **Read content** access. Copy its integration token.
2. Create a parent page for blog drafts. Open its **•••** menu, choose **Connections**, and add the
   integration. Write articles inside that connected page so the integration inherits access.
3. In GitHub, open **Settings → Secrets and variables → Actions**, create a repository secret named
   `NOTION_TOKEN`, and paste the integration token.
4. In **GitHub → Settings → Actions → General → Workflow permissions**, select **Read and write
   permissions** and enable **Allow GitHub Actions to create and approve pull requests**.

## Publish from a phone

1. Write the article in Notion. The Notion page title becomes the article title, and the first
   paragraph becomes its homepage summary.
2. Use **Share → Copy link**. The page does not need to be public, but it must be inside the parent
   page connected to the integration. The URL must contain the page's 32-character ID.
3. In the GitHub mobile app or mobile site, open this repository, choose **Actions → Publish a
   Notion article → Run workflow**, and paste the link.
4. Add comma-separated tags and choose a section. Choose **research** for reading notes; their
   summaries are included in the Research page's audio briefing. Leave **Merge after validation**
   on to publish as soon as the checks pass, or turn it off to review the pull request first.

Netlify deploys after the pull request reaches the main branch. The original Notion page is not
changed or deleted.

## Remove an article from a phone

In the GitHub mobile app or mobile site, open **Actions → Remove an article → Run workflow**. Enter
either the article slug (for example, `my-article`) or its complete `jjw.fyi/articles/...` URL.

The Action removes the Markdown article, its repository-hosted image folder, and references to it
from other articles' `connections` lists. It validates the complete site before creating a pull
request. Leave **Merge after validation** on to remove it from the live site automatically, or turn
it off to inspect the removal first.

## Notion content

The importer uses Notion's official Markdown endpoint. It supports Notion's standard text blocks,
callouts, code, citations, equations, media, tables, toggles, columns, and synced blocks.
Notion-hosted images are downloaded to `public/images/articles` because their temporary URLs
expire. HEIC and HEIF uploads are converted to browser-safe JPEGs.

Notion marks unsupported or inaccessible blocks in its response. The importer stops instead of
publishing an incomplete article; remove those blocks or share the referenced child content.

## Local use

```sh
NOTION_TOKEN="your-integration-token" npm run import:notion -- \
  --url "https://www.notion.so/your-page-id" \
  --tags "systems,notes" \
  --gallery "writing" \
  --medium "Essay" \
  --featured "false" \
  --draft "true"
```

The local command creates the Markdown file but does not commit or deploy it.
