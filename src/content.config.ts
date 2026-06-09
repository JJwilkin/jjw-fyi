import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';
import { GALLERY_SLUGS } from './data/galleries';

/**
 * Articles — the site's single content type.
 *
 * Every essay, project write-up, photo set, reflection or short note is an
 * article. The frontmatter doubles as the header shown above each piece, and
 * `connections` wires the graph behind the Map of Curiosity — each value is the
 * id (filename) of another article.
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    /** Title. */
    title: z.string(),
    /** A quiet running index, shown as "№23". */
    number: z.number().int().positive(),
    /** Which section this belongs to. */
    gallery: z.enum(GALLERY_SLUGS),
    /** Kind / format label, e.g. "Essay", "Photo Essay", "Field Study". */
    medium: z.string(),
    /** Date written. */
    date: z.coerce.date(),
    /** One- or two-sentence summary, used in listings and as the lead. */
    summary: z.string(),
    /** Free-form tags, surfaced in the header and the curiosity map. */
    tags: z.array(z.string()).default([]),
    /** Ids of related articles — drives the "Connections" footer and the map. */
    connections: z.array(z.string()).default([]),
    /** Optional cover image path under /public. */
    cover: z.string().optional(),
    /** Hidden from listings while true. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
