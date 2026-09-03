import { existsSync } from 'node:fs';
import path from 'node:path';

const AUDIO_ROOT = '/audio/readings';

export function readingAudioUrl(date: string, slug = 'briefing'): string | undefined {
  const url = `${AUDIO_ROOT}/${date}/${slug}.mp3`;
  return existsSync(path.join(process.cwd(), 'public', url)) ? url : undefined;
}
