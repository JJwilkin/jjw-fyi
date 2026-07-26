import { mkdir, writeFile } from 'node:fs/promises';

const workerDirectory = new URL('../dist/server/', import.meta.url);
const workerEntry = new URL('index.js', workerDirectory);

await mkdir(workerDirectory, { recursive: true });
await writeFile(
  workerEntry,
  `export default {
  async fetch(request, env) {
    if (!env.ASSETS || typeof env.ASSETS.fetch !== 'function') {
      return new Response('Static assets are unavailable.', { status: 500 });
    }

    return env.ASSETS.fetch(request);
  },
};
`,
);
