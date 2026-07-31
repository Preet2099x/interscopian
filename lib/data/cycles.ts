export interface TextCycleItem {
  id: string;
  text: string;
  source: string;
  meta?: string;
}

export interface MediaCycleItem {
  id: string;
  caption: string;
  meta: string;
  image: string;
}

export const quotes: TextCycleItem[] = [
  {
    id: "q1",
    text: "I dream my painting and I paint my dream.",
    source: "Vincent van Gogh",
  },
  {
    id: "q2",
    text: "What is done in love is done well.",
    source: "Vincent van Gogh",
  },
  {
    id: "q3",
    text: "The impossible is usually the untried.",
    source: "Jim Goodwin",
  },
  {
    id: "q4",
    text: "We are all in the gutter, but some of us are looking at the stars.",
    source: "Oscar Wilde",
  },
  {
    id: "q5",
    text: "Normality is a paved road: it's comfortable to walk, but no flowers grow.",
    source: "Vincent van Gogh",
  },
];

export const essays: TextCycleItem[] = [
  {
    id: "e1",
    text: "On rereading: the second time through a book, you're not meeting the story again — you're meeting who you were the first time.",
    source: "Notes on Rereading",
    meta: "Personal essay",
  },
  {
    id: "e2",
    text: "The internet made distance cheap and attention expensive. We used to travel for wonder; now wonder travels to us, and we scroll past it.",
    source: "On Attention",
    meta: "Personal essay",
  },
  {
    id: "e3",
    text: "A sunflower doesn't turn to the sun out of joy. It turns because it has to. Maybe devotion always looks like joy from a distance.",
    source: "Heliotropism",
    meta: "Personal essay",
  },
];

export const paragraphs: TextCycleItem[] = [
  {
    id: "p1",
    text: "It does not matter that I paint badly. When I don't paint, I will suffer more spiritually.",
    source: "Ever Yours: The Essential Letters",
    meta: "Vincent van Gogh",
  },
  {
    id: "p2",
    text: "The border between life and non-life, however, is unclear... A braid is thicker than a single strand.",
    source: "Braiding Sweetgrass",
    meta: "Robin Wall Kimmerer",
  },
  {
    id: "p3",
    text: "There are some things you can't understand until you have lived a certain number of years.",
    source: "Norwegian Wood",
    meta: "Haruki Murakami",
  },
];

export const facts: TextCycleItem[] = [
  {
    id: "fa1",
    text: "Van Gogh sold only one painting in his lifetime: 'The Red Vineyard.'",
    source: "Art History",
  },
  {
    id: "fa2",
    text: "Sunflowers can move throughout the day to track the sun, a behavior called heliotropism — mostly while young.",
    source: "Botany",
  },
  {
    id: "fa3",
    text: "Van Gogh made over 2,100 artworks in just over a decade, including roughly 860 oil paintings.",
    source: "Art History",
  },
  {
    id: "fa4",
    text: "The Starry Night was painted from memory and imagination, not a direct view, while Van Gogh was at an asylum in Saint-Rémy.",
    source: "Art History",
  },
];

export const photos: MediaCycleItem[] = [
  {
    id: "ph1",
    caption: "Wheatfield at dusk, somewhere outside town",
    meta: "35mm · golden hour",
    image: "https://picsum.photos/seed/almanac-wheatfield-dusk/900/650",
  },
  {
    id: "ph2",
    caption: "Coffee gone cold, notebook gone full",
    meta: "Desk, late September",
    image: "https://picsum.photos/seed/almanac-desk-coffee/900/650",
  },
  {
    id: "ph3",
    caption: "The sky the night we didn't say much",
    meta: "Rooftop, city lights bleeding up",
    image: "https://picsum.photos/seed/almanac-rooftop-night/900/650",
  },
  {
    id: "ph4",
    caption: "Sunflower field, three minutes before the storm",
    meta: "Backroad, no name",
    image: "https://picsum.photos/seed/almanac-sunflower-storm/900/650",
  },
];

export type CollectionSlug =
  | "quotes"
  | "essays"
  | "paragraphs"
  | "facts"
  | "photos"
  | "videos";

export const videos: MediaCycleItem[] = [
  {
    id: "vi1",
    caption: "How Van Gogh mixed his yellows",
    meta: "6:42 · art technique",
    image: "https://picsum.photos/seed/almanac-paint-mixing/900/650",
  },
  {
    id: "vi2",
    caption: "A walk through the Auvers wheatfields, present day",
    meta: "11:03 · travel",
    image: "https://picsum.photos/seed/almanac-wheatfield-walk/900/650",
  },
  {
    id: "vi3",
    caption: "Restoring an old oil painting, start to finish",
    meta: "18:20 · process",
    image: "https://picsum.photos/seed/almanac-painting-restore/900/650",
  },
];

export const collections: Record<
  CollectionSlug,
  {
    title: string;
    description: string;
    kind: "text" | "photo" | "video";
    items: TextCycleItem[] | MediaCycleItem[];
  }
> = {
  quotes: {
    title: "Favorite Quotes",
    description: "Lines I keep coming back to.",
    kind: "text",
    items: quotes,
  },
  essays: {
    title: "Essays",
    description: "Short pieces, thought through slowly.",
    kind: "text",
    items: essays,
  },
  paragraphs: {
    title: "Book Paragraphs",
    description: "Passages worth copying into a notebook.",
    kind: "text",
    items: paragraphs,
  },
  facts: {
    title: "Facts Worth Knowing",
    description: "Small true things.",
    kind: "text",
    items: facts,
  },
  photos: {
    title: "Photos",
    description: "Moments, mostly golden hour.",
    kind: "photo",
    items: photos,
  },
  videos: {
    title: "Videos",
    description: "Things worth watching more than once.",
    kind: "video",
    items: videos,
  },
};
