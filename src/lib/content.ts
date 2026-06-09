import { getCollection, type CollectionEntry } from 'astro:content';
import { getGallery, type Gallery, type GallerySlug } from '../data/galleries';

export type Article = CollectionEntry<'articles'>;

/** Drafts are visible while developing, hidden in the built site. */
const isPublished = (entry: Article): boolean =>
  import.meta.env.PROD ? entry.data.draft !== true : true;

/** All published articles, newest first. */
export async function getArticles(): Promise<Article[]> {
  const all = await getCollection('articles', isPublished);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getArticlesByGallery(slug: GallerySlug): Promise<Article[]> {
  return (await getArticles()).filter((e) => e.data.gallery === slug);
}

export const articleUrl = (entry: Article): string => `/articles/${entry.id}/`;
export const galleryUrl = (slug: GallerySlug): string => `/galleries/${slug}/`;

/** View-transition name shared between a wall frame and its section hero. */
export const frameTransition = (slug: GallerySlug): string => `frame-${slug}`;

const MONTH_YEAR = new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric' });
const FULL_DATE = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

/** "June 2026" — for listings. */
export const formatMonthYear = (d: Date): string => MONTH_YEAR.format(d);
/** "9 June 2026" — for the article header. */
export const formatFullDate = (d: Date): string => FULL_DATE.format(d);
/** Machine-readable date for <time datetime>. */
export const isoDate = (d: Date): string => d.toISOString().slice(0, 10);

export interface ResolvedConnection {
  entry: Article;
  gallery: Gallery | undefined;
}

/**
 * Connections are authored one-directionally but felt both ways. We surface the
 * union of (a) articles this one points to and (b) articles that point back —
 * so a single link wires the graph in both directions.
 */
export function resolveConnections(entry: Article, all: Article[]): ResolvedConnection[] {
  const ids = new Set<string>(entry.data.connections);
  for (const other of all) {
    if (other.data.connections.includes(entry.id)) ids.add(other.id);
  }
  ids.delete(entry.id);

  const byId = new Map(all.map((e) => [e.id, e]));
  return [...ids]
    .map((id) => byId.get(id))
    .filter((e): e is Article => Boolean(e))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map((e) => ({ entry: e, gallery: getGallery(e.data.gallery) }));
}
