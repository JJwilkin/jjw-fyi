import { mkdir, readFile, readdir, rename, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { parse as parseYaml } from 'yaml';

const ARTICLE_DIRECTORY = path.resolve('src/content/articles');
const AUDIO_DIRECTORY = path.resolve('public/audio/readings');
const SPEECH_API = 'https://api.openai.com/v1/audio/speech';
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const VOICE_INSTRUCTIONS =
  'Narrate this as a warm, thoughtful private research briefing. Use natural conversational pacing and intonation, with gentle emphasis and a brief pause between the title and summary. Avoid an announcer voice.';

function splitArticle(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) throw new Error('Article is missing valid frontmatter.');
  return parseYaml(match[1]) ?? {};
}

function articleDate(value) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? '');
}

function spokenDate(date) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

export function createReadingAudioPlan(date, readings) {
  if (!DATE_PATTERN.test(date)) throw new Error('Pass a date in YYYY-MM-DD format.');
  const sorted = [...readings].sort((a, b) => a.slug.localeCompare(b.slug));
  if (sorted.length === 0) throw new Error(`No published research readings found for ${date}.`);

  const articleJobs = sorted.map((reading) => ({
    filename: `${reading.slug}.mp3`,
    input: `${reading.title}. ${reading.summary}`,
  }));
  return [
    {
      filename: 'briefing.mp3',
      input: `Readings for ${spokenDate(date)}.\n\n${articleJobs.map((job) => job.input).join('\n\n')}`,
    },
    ...articleJobs,
  ];
}

async function readingsForDate(articleDirectory, date) {
  const filenames = (await readdir(articleDirectory))
    .filter((filename) => filename.endsWith('.md') || filename.endsWith('.mdx'))
    .sort();
  const readings = [];

  for (const filename of filenames) {
    const data = splitArticle(await readFile(path.join(articleDirectory, filename), 'utf8'));
    if (data.gallery !== 'research' || data.draft === true || articleDate(data.date) !== date) continue;
    if (typeof data.title !== 'string' || typeof data.summary !== 'string') {
      throw new Error(`${filename} needs string title and summary fields.`);
    }
    readings.push({
      slug: filename.replace(/\.(?:md|mdx)$/, ''),
      title: data.title,
      summary: data.summary,
    });
  }

  return readings;
}

async function requestSpeech(input, apiKey, request) {
  const response = await request(SPEECH_API, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini-tts',
      voice: 'marin',
      input,
      instructions: VOICE_INSTRUCTIONS,
      response_format: 'mp3',
    }),
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`OpenAI speech generation failed (${response.status}): ${detail}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

export async function generateReadingAudioAt({
  articleDirectory,
  audioDirectory,
  date,
  apiKey,
  force = false,
  request = fetch,
}) {
  if (!apiKey) throw new Error('Set OPENAI_API_KEY before generating reading audio.');
  const jobs = createReadingAudioPlan(date, await readingsForDate(articleDirectory, date));
  const destination = path.join(audioDirectory, date);
  await mkdir(destination, { recursive: true });
  const generated = [];
  const skipped = [];

  for (const job of jobs) {
    const output = path.join(destination, job.filename);
    if (!force) {
      try {
        await readFile(output);
        skipped.push(job.filename);
        continue;
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
    }

    const temporaryOutput = `${output}.tmp`;
    const audio = await requestSpeech(job.input, apiKey, request);
    try {
      await writeFile(temporaryOutput, audio);
      await rename(temporaryOutput, output);
    } catch (error) {
      await unlink(temporaryOutput).catch(() => {});
      throw error;
    }
    generated.push(job.filename);
  }

  return { date, generated, skipped };
}

function parseArguments(argv) {
  const dateIndex = argv.indexOf('--date');
  const date = dateIndex >= 0 ? argv[dateIndex + 1] : undefined;
  if (!date || !DATE_PATTERN.test(date)) throw new Error('Pass a date with --date YYYY-MM-DD.');
  return { date, force: argv.includes('--force') };
}

async function main() {
  const { date, force } = parseArguments(process.argv.slice(2));
  const result = await generateReadingAudioAt({
    articleDirectory: ARTICLE_DIRECTORY,
    audioDirectory: AUDIO_DIRECTORY,
    date,
    apiKey: process.env.OPENAI_API_KEY,
    force,
  });
  console.log(
    `Reading audio for ${date}: generated ${result.generated.length}, skipped ${result.skipped.length}.`,
  );
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
