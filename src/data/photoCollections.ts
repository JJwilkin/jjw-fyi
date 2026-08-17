export interface CollectionPhoto {
  id: string;
  alt: string;
  caption: string;
  position?: string;
}

export type PhotoMosaicLayout = 'hero-grid' | 'film-strip' | 'diptych';

export interface PhotoCollection {
  slug: string;
  title: string;
  location: string;
  date: string;
  note: string;
  layout: PhotoMosaicLayout;
  photos: CollectionPhoto[];
}

const coast = {
  id: 'photo-1689819883935-db76b61cbac8',
  alt: 'A green coastal ridge falling toward turquoise water in Hong Kong.',
  caption: 'The trail turns toward open water.',
};

const rockPath = {
  id: 'photo-1613380378422-e0b4ecf3d390',
  alt: 'Two walkers following a narrow path cut into coastal rock.',
  caption: 'A path narrow enough to make the sea feel close.',
};

const street = {
  id: 'photo-1534427240190-6e29a3804a59',
  alt: 'People and vehicles passing beneath layers of Hong Kong street signs.',
  caption: 'Every available surface carries a message.',
};

const blueTram = {
  id: 'photo-1713283042361-e61900002b49',
  alt: 'A blue double-decker tram moving through a dense Hong Kong street.',
  caption: 'North Point, just before the doors close.',
};

const greenTram = {
  id: 'photo-1747506533363-6eb201686607',
  alt: 'A green double-decker tram waiting at a street platform.',
  caption: 'A pause in the eastbound rhythm.',
};

const monochromeTram = {
  id: 'photo-1571366648884-000e4f957e08',
  alt: 'A monochrome view of a tram sharing the street with bicycles and pedestrians.',
  caption: 'Another busy day, held still for a moment.',
};

export const photoCollections: readonly PhotoCollection[] = [
  {
    slug: 'between-concrete-and-water',
    title: 'Between concrete and water',
    location: 'Hong Kong',
    date: 'April 2026',
    note: 'A weekend moving from tramlines to coastal paths.',
    layout: 'hero-grid',
    photos: [
      coast,
      blueTram,
      greenTram,
      street,
      rockPath,
      monochromeTram,
    ],
  },
  {
    slug: 'along-the-tramlines',
    title: 'Along the tramlines',
    location: 'Hong Kong Island',
    date: 'April 2026',
    note: 'Windows, wires, and the patient rhythm of the eastbound tram.',
    layout: 'film-strip',
    photos: [
      blueTram,
      greenTram,
      monochromeTram,
      street,
    ],
  },
  {
    slug: 'where-the-path-ends',
    title: 'Where the path ends',
    location: 'Hong Kong coast',
    date: 'April 2026',
    note: 'Two frames from the point where the city gives way to weather.',
    layout: 'diptych',
    photos: [
      rockPath,
      coast,
    ],
  },
] as const;

export const photoImageWidths = [640, 960, 1400, 2000] as const;

export const photoImageUrl = (id: string, width: number): string =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=84`;

export const photoFullImageUrl = (id: string, width: number): string =>
  `https://images.unsplash.com/${id}?auto=format&fit=max&w=${width}&q=90`;

export const photoImageSrcset = (id: string): string =>
  photoImageWidths.map((width) => `${photoImageUrl(id, width)} ${width}w`).join(', ');

export const photoCollectionUrl = (slug: string): string => `/photos/${slug}/`;

export const photoCollectionTransition = (slug: string): string =>
  `photo-collection-${slug}`;
