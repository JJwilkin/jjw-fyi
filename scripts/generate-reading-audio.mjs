import { spawn } from 'node:child_process';
import { mkdir, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parse as parseYaml } from 'yaml';

const ARTICLE_DIRECTORY = path.resolve('src/content/articles');
const AUDIO_DIRECTORY = path.resolve('public/audio/readings');
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const SYNTHESIZER = fileURLToPath(new URL('./synthesize-reading-audio.py', import.meta.url));

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

async function runKokoro(jobs, destination) {
  await new Promise((resolve, reject) => {
    const child = spawn('uv', ['run', SYNTHESIZER], {
      stdio: ['pipe', 'inherit', 'inherit'],
    });
    child.on('error', (error) => {
      reject(
        error.code === 'ENOENT'
          ? new Error('Install uv before generating reading audio: https://docs.astral.sh/uv/')
          : error,
      );
    });
    child.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Kokoro speech generation exited with status ${code}.`));
    });
    child.stdin.on('error', (error) => {
      if (error.code !== 'EPIPE') reject(error);
    });
    child.stdin.end(JSON.stringify({ destination, jobs }));
  });
}

export async function generateReadingAudioAt({
  articleDirectory,
  audioDirectory,
  date,
  force = false,
  synthesize = runKokoro,
}) {
  const jobs = createReadingAudioPlan(date, await readingsForDate(articleDirectory, date));
  const destination = path.join(audioDirectory, date);
  await mkdir(destination, { recursive: true });
  const generated = [];
  const skipped = [];

  const pending = [];
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

    pending.push(job);
    generated.push(job.filename);
  }

  if (pending.length > 0) await synthesize(pending, destination);

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
