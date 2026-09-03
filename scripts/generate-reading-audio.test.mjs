import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
  createReadingAudioPlan,
  generateReadingAudioAt,
} from './generate-reading-audio.mjs';

const readings = [
  { slug: 'second', title: 'Second reading', summary: 'The second summary.' },
  { slug: 'first', title: 'First reading', summary: 'The first summary.' },
];

test('creates the complete daily and article audio plan', () => {
  assert.deepEqual(createReadingAudioPlan('2026-09-02', readings), [
    {
      filename: 'briefing.mp3',
      input:
        'Readings for 2 September 2026.\n\nFirst reading. The first summary.\n\nSecond reading. The second summary.',
    },
    { filename: 'first.mp3', input: 'First reading. The first summary.' },
    { filename: 'second.mp3', input: 'Second reading. The second summary.' },
  ]);
});

test('sends every complete audio job to the local synthesizer', async () => {
  const temporaryDirectory = await mkdtemp(path.join(os.tmpdir(), 'jjw-reading-audio-'));
  const articles = path.join(temporaryDirectory, 'articles');
  const audio = path.join(temporaryDirectory, 'audio');
  await mkdir(articles);
  await writeFile(
    path.join(articles, 'first.md'),
    '---\ntitle: First reading\ngallery: research\ndate: 2026-09-02\nsummary: The first summary.\ndraft: false\n---\n',
  );
  await writeFile(
    path.join(articles, 'ignored.md'),
    '---\ntitle: Other writing\ngallery: writing\ndate: 2026-09-02\nsummary: Not a reading.\ndraft: false\n---\n',
  );
  const synthesisCalls = [];
  const synthesize = async (jobs, destination) => {
    synthesisCalls.push({ jobs, destination });
    for (const [index, job] of jobs.entries()) {
      await writeFile(path.join(destination, job.filename), Uint8Array.from([index + 1]));
    }
  };

  try {
    const result = await generateReadingAudioAt({
      articleDirectory: articles,
      audioDirectory: audio,
      date: '2026-09-02',
      synthesize,
    });
    assert.deepEqual(result, {
      date: '2026-09-02',
      generated: ['briefing.mp3', 'first.mp3'],
      skipped: [],
    });
    assert.deepEqual(
      synthesisCalls,
      [
        {
          jobs: [
            {
              filename: 'briefing.mp3',
              input: 'Readings for 2 September 2026.\n\nFirst reading. The first summary.',
            },
            { filename: 'first.mp3', input: 'First reading. The first summary.' },
          ],
          destination: path.join(audio, '2026-09-02'),
        },
      ],
    );
    assert.deepEqual(await readdir(path.join(audio, '2026-09-02')), [
      'briefing.mp3',
      'first.mp3',
    ]);
    assert.deepEqual(
      [
        [...(await readFile(path.join(audio, '2026-09-02', 'briefing.mp3')))],
        [...(await readFile(path.join(audio, '2026-09-02', 'first.mp3')))],
      ],
      [[1], [2]],
    );
  } finally {
    await rm(temporaryDirectory, { recursive: true });
  }
});
