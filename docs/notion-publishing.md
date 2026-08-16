# Publish articles from Notion

Notion is the drafting surface; Markdown in this repository remains the source of truth. The
`Publish a Notion article` GitHub Action accepts a Notion page link, copies its content and images
into the repository, validates the Astro site, and creates a pull request. It can merge that pull
request immediately or leave it open for review.

## One-time setup

In GitHub, open **Settings → Actions → General → Workflow permissions**. Select **Read and write
permissions** and enable **Allow GitHub Actions to create and approve pull requests**.

## Publish from a phone

1. Write the article in Notion. The Notion page title becomes the article title, and the first
   paragraph becomes its homepage summary.
2. Publish the page to the web, then use **Share → Copy link**. The copied URL must contain the
   page's 32-character ID; custom short Notion Site URLs do not contain enough information.
3. In the GitHub mobile app or mobile site, open this repository, choose **Actions → Publish a
   Notion article → Run workflow**, and paste the link.
4. Add comma-separated tags and choose a section. Leave **Merge after validation** on to publish as
   soon as the checks pass, or turn it off to review the pull request first.

Netlify deploys after the pull request reaches the main branch. The original Notion page is not
changed or deleted. No Notion integration or token is required.

## Remove an article from a phone

In the GitHub mobile app or mobile site, open **Actions → Remove an article → Run workflow**. Enter
either the article slug (for example, `my-article`) or its complete `jjw.fyi/articles/...` URL.

The Action removes the Markdown article, its repository-hosted image folder, and references to it
from other articles' `connections` lists. It validates the complete site before creating a pull
request. Leave **Merge after validation** on to remove it from the live site automatically, or turn
it off to inspect the removal first.

## Supported Notion content

The importer handles paragraphs, headings, bulleted and numbered lists, checkboxes, quotes,
callouts, code blocks with language labels, links, equations, images, dividers, toggles, tables,
columns, and synced blocks. Notion-hosted images are downloaded to `public/images/articles` because
Notion's temporary image URLs expire.

The importer stops instead of silently omitting an unsupported block. Convert that block to a
supported type and run the workflow again.

## Local use

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
