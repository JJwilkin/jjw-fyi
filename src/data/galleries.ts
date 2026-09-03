/**
 * The site's sections.
 *
 * Each section is a domain of curiosity. `medium` is a short kind / format label
 * shown in listings and article headers. `aspect` varies deliberately so the
 * homepage reads as a varied wall of frames rather than a uniform grid of cards.
 */

export const GALLERY_SLUGS = [
  'research',
  'systems',
  'photography',
  'nature',
  'philosophy',
  'projects',
  'writing',
  'travel',
  'field-notes',
] as const;

export type GallerySlug = (typeof GALLERY_SLUGS)[number];

export interface Gallery {
  slug: GallerySlug;
  title: string;
  /** Short kind / format label, e.g. "Essay", "Photo Essay". */
  medium: string;
  /** A short line for the wall label. */
  tagline: string;
  /** A paragraph introducing the room. */
  description: string;
  /** What this section covers. */
  topics: string[];
  /** Frame aspect-ratio on the homepage wall — kept varied on purpose. */
  aspect: string;
}

export const galleries: readonly Gallery[] = [
  {
    slug: 'research',
    title: 'Research',
    medium: 'Reading Notes',
    tagline: 'Useful ideas, with a trail back to the source.',
    description:
      'Papers and technical writing on information retrieval, agent design, context engineering, semantic systems, and observability — summarized for a quick listen before a deeper read.',
    topics: [
      'Information retrieval',
      'Agent design',
      'Context engineering',
      'Semantic systems',
      'Observability',
    ],
    aspect: '5 / 4',
  },
  {
    slug: 'systems',
    title: 'Systems',
    medium: 'Systems Engineering',
    tagline: 'Living architectures, drawn from the inside.',
    description:
      'How software fits together when no single mind can hold all of it at once — databases, the machinery beneath them, and the parts that only reveal themselves under load.',
    topics: [
      'Databases',
      'Distributed systems',
      'POSIX IPC',
      'Performance engineering',
      'Operating systems',
      'Observability',
    ],
    aspect: '1 / 1',
  },
  {
    slug: 'photography',
    title: 'Photography',
    medium: 'Photographs',
    tagline: 'Light, held still long enough to look at.',
    description:
      'A standing collection of photographs and photo essays. The same eye that wrote the essays held the camera.',
    topics: ['Photo essays', 'Collections', 'Travel photography', 'Nature photography'],
    aspect: '4 / 5',
  },
  {
    slug: 'nature',
    title: 'Nature',
    medium: 'Field Study',
    tagline: 'Notes from walks and the weather.',
    description:
      'Observations gathered outdoors — what the season is doing, what crossed the path, what a place feels like when you stand still in it.',
    topics: ['Observations', 'Walks', 'Landscapes', 'Environmental notes'],
    aspect: '16 / 10',
  },
  {
    slug: 'philosophy',
    title: 'Philosophy',
    medium: 'Reflections',
    tagline: 'Ideas, rearranged until they fit.',
    description:
      'Thought experiments and reflections — the slower questions that sit underneath the technical ones and refuse to resolve.',
    topics: ['Reflections', 'Thought experiments', 'Notes', 'Essays'],
    aspect: '1 / 1',
  },
  {
    slug: 'projects',
    title: 'Projects',
    medium: 'Blueprints',
    tagline: 'Things built, and things still on the bench.',
    description:
      'Work in progress and work that shipped. Drawings, prototypes, and the occasional finished object.',
    topics: ['Tools', 'Experiments', 'Hardware', 'Open source'],
    aspect: '4 / 3',
  },
  {
    slug: 'writing',
    title: 'Writing',
    medium: 'Essays',
    tagline: 'Longer thoughts that needed room.',
    description:
      'Essays and letters — the pieces that wanted more than a field note and earned the space.',
    topics: ['Essays', 'Letters', 'Criticism'],
    aspect: '3 / 4',
  },
  {
    slug: 'travel',
    title: 'Travel',
    medium: 'Cartography',
    tagline: 'Places, and the routes between them.',
    description:
      'Journeys logged as much for the going as the arriving — cities, coastlines, and the lines drawn between them.',
    topics: ['Journeys', 'Cities', 'Maps', 'Logs'],
    aspect: '16 / 9',
  },
  {
    slug: 'field-notes',
    title: 'Field Notes',
    medium: 'Observations',
    tagline: 'Small things, written down before they vanish.',
    description:
      'The shortest form here: a single observation, a fragment, a thing noticed in passing and written down before it goes.',
    topics: ['Observations', 'Sketches', 'Fragments', 'Marginalia'],
    aspect: '1 / 1',
  },
];

const bySlug = new Map(galleries.map((g) => [g.slug, g]));

export function getGallery(slug: string): Gallery | undefined {
  return bySlug.get(slug as GallerySlug);
}

export function isGallerySlug(slug: string): slug is GallerySlug {
  return bySlug.has(slug as GallerySlug);
}
