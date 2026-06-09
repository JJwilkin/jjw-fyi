// Auto-detect every frame on the source sheet (connected components of
// non-white pixels), crop each to its bounding box, measure the moulding
// thickness by scanning outward from the centre window, and emit a numbered
// montage so we can choose which frame goes to which section.
//
//   node scripts/build-frames.mjs            # detect + montage (candidates)
//   node scripts/build-frames.mjs finalize   # write public/frames/<slug>.jpg
import Jimp from 'jimp';
import { mkdirSync, copyFileSync, writeFileSync, readFileSync } from 'node:fs';

const SHEET = '/Users/joshuawilkinson/Downloads/various_picture_frames.jpg';
const CAND = 'scripts/_cand';
const OUT = 'public/frames';
const TARGET_W = 480;
const T = 234; // white threshold

mkdirSync(CAND, { recursive: true });
mkdirSync(OUT, { recursive: true });

// slug -> candidate index, filled in after viewing the montage.
const MAP = {
  systems: null,
  photography: null,
  nature: null,
  philosophy: null,
  projects: null,
  writing: null,
  travel: null,
  'field-notes': null,
};

function measure(img) {
  const { width: w, height: h, data: d } = img.bitmap;
  const I = (x, y) => (y * w + x) * 4;
  const white = (x, y) => {
    const i = I(x, y);
    return d[i] >= 235 && d[i + 1] >= 235 && d[i + 2] >= 235;
  };
  const cx = w >> 1;
  const cy = h >> 1;
  let l = cx;
  while (l > 0 && white(l, cy)) l -= 1;
  let r = cx;
  while (r < w - 1 && white(r, cy)) r += 1;
  let t = cy;
  while (t > 0 && white(cx, t)) t -= 1;
  let b = cy;
  while (b < h - 1 && white(cx, b)) b += 1;
  return { top: t + 1, right: w - r, bottom: h - b, left: l + 1, centreWhite: white(cx, cy) };
}

const sheet = await Jimp.read(SHEET);
const { width: W, height: H, data } = sheet.bitmap;
const nonWhite = (x, y) => {
  const i = (y * W + x) * 4;
  return !(data[i] >= T && data[i + 1] >= T && data[i + 2] >= T);
};

// flood-fill connected components (8-connectivity)
const seen = new Uint8Array(W * H);
const stack = [];
let comps = [];
for (let y = 0; y < H; y += 1) {
  for (let x = 0; x < W; x += 1) {
    const p = y * W + x;
    if (seen[p] || !nonWhite(x, y)) continue;
    let minX = x;
    let minY = y;
    let maxX = x;
    let maxY = y;
    let area = 0;
    stack.length = 0;
    stack.push(p);
    seen[p] = 1;
    while (stack.length) {
      const q = stack.pop();
      const qx = q % W;
      const qy = (q / W) | 0;
      area += 1;
      if (qx < minX) minX = qx;
      if (qx > maxX) maxX = qx;
      if (qy < minY) minY = qy;
      if (qy > maxY) maxY = qy;
      for (let dy = -1; dy <= 1; dy += 1) {
        for (let dx = -1; dx <= 1; dx += 1) {
          if (!dx && !dy) continue;
          const nx = qx + dx;
          const ny = qy + dy;
          if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
          const np = ny * W + nx;
          if (seen[np] || !nonWhite(nx, ny)) continue;
          seen[np] = 1;
          stack.push(np);
        }
      }
    }
    comps.push({ minX, minY, maxX, maxY, area, w: maxX - minX + 1, h: maxY - minY + 1 });
  }
}

// keep frame-sized components, order top-to-bottom then left-to-right
comps = comps
  .filter((c) => c.area > 5000 && c.w > 70 && c.h > 60)
  .sort((a, b) => {
    const ra = Math.round(a.minY / 130);
    const rb = Math.round(b.minY / 130);
    return ra !== rb ? ra - rb : a.minX - b.minX;
  });

const cands = [];
for (let i = 0; i < comps.length; i += 1) {
  const c = comps[i];
  const img = sheet.clone().crop(c.minX, c.minY, c.w, c.h);
  if (img.bitmap.width > TARGET_W) img.resize(TARGET_W, Jimp.AUTO);
  const s = measure(img);
  await img.quality(86).writeAsync(`${CAND}/${i}.jpg`);
  cands.push({ i, w: img.bitmap.width, h: img.bitmap.height, s });
}

const finalize = process.argv[2] === 'finalize';
if (finalize) {
  const chosen = JSON.parse(readFileSync('scripts/_frames.json', 'utf8'));
  const css = [];
  for (const [slug, i] of Object.entries(chosen)) {
    copyFileSync(`${CAND}/${i}.jpg`, `${OUT}/${slug}.jpg`);
    const c = cands.find((x) => x.i === i);
    const { top, right, bottom, left } = c.s;
    css.push(
      `  --frame-${slug}: url('/frames/${slug}.jpg');\n  --slice-${slug}: ${top} ${right} ${bottom} ${left};`
    );
  }
  writeFileSync('scripts/_frames_css.txt', css.join('\n'));
  console.log('Wrote public/frames/<slug>.jpg and scripts/_frames_css.txt');
} else {
  // montage of candidates, 4 cols, labelled by index
  const cols = 4;
  const cw = 250;
  const ch = 250;
  const rows = Math.ceil(cands.length / cols);
  const montage = await Jimp.create(cols * cw, rows * ch, 0xece9e2ff);
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
  for (let k = 0; k < cands.length; k += 1) {
    const frame = await Jimp.read(`${CAND}/${cands[k].i}.jpg`);
    frame.scaleToFit(cw - 20, ch - 44);
    const col = k % cols;
    const row = (k / cols) | 0;
    montage.composite(
      frame,
      col * cw + ((cw - frame.bitmap.width) >> 1),
      row * ch + 40 + ((ch - 44 - frame.bitmap.height) >> 1)
    );
    montage.print(font, col * cw + 8, row * ch + 2, String(cands[k].i));
  }
  await montage.writeAsync('scripts/_frames_montage.png');
  console.log(`Detected ${cands.length} frames -> scripts/_frames_montage.png`);
  console.log('idx  WxH        slice(t r b l)  centreWhite');
  for (const c of cands) {
    console.log(
      `${String(c.i).padEnd(4)} ${`${c.w}x${c.h}`.padEnd(10)} ${c.s.top} ${c.s.right} ${c.s.bottom} ${c.s.left}    ${c.s.centreWhite}`
    );
  }
  console.log('\nEdit scripts/_frames.json {slug:idx}, then: node scripts/build-frames.mjs finalize');
}
