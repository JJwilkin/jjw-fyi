# Publish research readings

The daily Codex task uses the `research-radar` skill to select four readings about agent systems
and observability. Its CSV ledger is the discovery and deduplication record; the website remains a
static Astro site whose published source of truth is Markdown in `src/content/articles`.

The publisher runs `npm run readings:audio -- --date YYYY-MM-DD`. A local Kokoro model generates an
MP3 for every reading summary and a combined daily briefing under
`public/audio/readings/YYYY-MM-DD`. The generated files are committed with the reading notes, so
the deployed site does not need a backend, account, API key, or runtime model download. Pages fall
back to the browser's built-in speech voice when an MP3 is unavailable.

Audio generation requires `uv` and `ffmpeg`. The Python environment is pinned in
`scripts/synthesize-reading-audio.py`; `uv` provisions it automatically. On the first run, the
script downloads the quantized Kokoro model and voice pack, verifies their published SHA-256
digests, and caches them under the operating system's user cache directory. Later runs reuse that
cache. Set `KOKORO_CACHE_DIR` only when the publisher needs a different cache location.
The `kokoro-onnx` runtime is MIT-licensed and the Kokoro model is Apache-2.0-licensed.

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
