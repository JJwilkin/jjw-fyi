# Publish research readings

The daily Codex task uses the `research-radar` skill to select four readings about agent systems
and observability. Its CSV ledger is the discovery and deduplication record; the website remains a
static Astro site whose published source of truth is Markdown in `src/content/articles`.

The publisher runs `npm run readings:audio -- --date YYYY-MM-DD` with `OPENAI_API_KEY` set. This
generates a Marin-voice MP3 for every reading summary and a combined daily briefing under
`public/audio/readings/YYYY-MM-DD`. The generated files are committed with the reading notes, so
the deployed site never receives the API key or makes a runtime API request. Pages fall back to
the browser's built-in speech voice when an MP3 is unavailable.

For each newly selected source, the task creates one article with `gallery: research`, a concise
spoken summary, the canonical source link, relevance to observability agents, a design question,
and an evidence caveat. Existing canonical URLs are skipped. It also advances the date in
`src/data/researchRevision.ts`, ensuring Netlify rebuilds for a content-only publication. Research
articles appear only under Readings rather than in the main Blog feed.

Each run works from a temporary worktree based on `origin/main`, leaving the primary checkout
untouched. It runs the article tests, Astro checks, and the production build before opening one
daily pull request. The task waits for every pull-request check, including **Validate site**, then
squash-merges and deletes the publication branch. A failed, missing, pending, or cancelled check
blocks the merge. A run with no new readings makes no repository changes.
