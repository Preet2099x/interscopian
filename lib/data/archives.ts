export type ArchiveSlug = "films" | "series" | "books" | "video-games";

export interface ArchiveEntry {
  id: string;
  title: string;
  creator: string;
  year: string;
  tag: string;
  blurb: string;
  image: string;
  imageCredit: string;
}

export interface ArchiveFolder {
  slug: ArchiveSlug;
  label: string;
  description: string;
  accent: "sunflower" | "burnt" | "starry" | "olive";
  entries: ArchiveEntry[];
}

export const archives: ArchiveFolder[] = [
  {
    slug: "films",
    label: "Films",
    description: "Frames I keep replaying in my head.",
    accent: "burnt",
    entries: [
      {
        id: "f1",
        title: "Loving Vincent",
        creator: "Dorota Kobiela & Hugh Welchman",
        year: "2017",
        tag: "Animation",
        blurb: "The only film painted frame by frame — 65,000 oil paintings.",
        image: "https://upload.wikimedia.org/wikipedia/en/4/4b/Loving_Vincent.png",
        imageCredit: "Poster via Wikipedia, fair use",
      },
      {
        id: "f2",
        title: "In the Mood for Love",
        creator: "Wong Kar-wai",
        year: "2000",
        tag: "Drama",
        blurb: "Every color feels like it was mixed on a warm afternoon.",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/45/In_the_Mood_for_Love_movie.jpg",
        imageCredit: "Poster via Wikipedia, fair use",
      },
      {
        id: "f3",
        title: "Paris, Texas",
        creator: "Wim Wenders",
        year: "1984",
        tag: "Drama",
        blurb: "A slow, sunburnt road home.",
        image:
          "https://upload.wikimedia.org/wikipedia/en/d/db/Paris%2C_Texas_%281984_film_poster%29.png",
        imageCredit: "Poster via Wikipedia, fair use",
      },
      {
        id: "f4",
        title: "Spirited Away",
        creator: "Hayao Miyazaki",
        year: "2001",
        tag: "Animation",
        blurb: "Proof that wonder is a discipline, not an accident.",
        image:
          "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png",
        imageCredit: "Poster via Wikipedia, fair use",
      },
    ],
  },
  {
    slug: "series",
    label: "Series",
    description: "Worlds I return to on repeat.",
    accent: "starry",
    entries: [
      {
        id: "s1",
        title: "The Bear",
        creator: "Christopher Storer",
        year: "2022–",
        tag: "Drama",
        blurb: "Chaos plated as something like grace.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/The_Bear_Title_Card.jpg/960px-The_Bear_Title_Card.jpg",
        imageCredit: "Title card via Wikipedia",
      },
      {
        id: "s2",
        title: "Fleabag",
        creator: "Phoebe Waller-Bridge",
        year: "2016–2019",
        tag: "Comedy",
        blurb: "Breaking the fourth wall like it owes her money.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Fleabag_titlecard.png",
        imageCredit: "Title card via Wikipedia",
      },
      {
        id: "s3",
        title: "Chernobyl",
        creator: "Craig Mazin",
        year: "2019",
        tag: "Miniseries",
        blurb: "The cost of a lie, itemized.",
        image:
          "https://upload.wikimedia.org/wikipedia/en/a/a7/Chernobyl_2019_Miniseries.jpg",
        imageCredit: "Poster via Wikipedia, fair use",
      },
      {
        id: "s4",
        title: "Cosmos",
        creator: "Carl Sagan / Ann Druyan",
        year: "1980",
        tag: "Documentary",
        blurb: "Still the warmest science has ever sounded.",
        image:
          "https://upload.wikimedia.org/wikipedia/en/e/ec/Cosmos_-_A_Personal_Voyage_%28title_card%29.jpg",
        imageCredit: "Title card via Wikipedia, fair use",
      },
    ],
  },
  {
    slug: "books",
    label: "Books",
    description: "Pages with the corners folded down.",
    accent: "sunflower",
    entries: [
      {
        id: "b1",
        title: "Ever Yours: The Essential Letters",
        creator: "Vincent van Gogh",
        year: "2014",
        tag: "Letters",
        blurb: "The realest self-portrait he ever painted, in ink.",
        image: "https://covers.openlibrary.org/b/id/9676407-L.jpg",
        imageCredit: "Cover via Open Library",
      },
      {
        id: "b2",
        title: "The Unbearable Lightness of Being",
        creator: "Milan Kundera",
        year: "1984",
        tag: "Fiction",
        blurb: "Weight, lightness, and everything in between.",
        image: "https://covers.openlibrary.org/b/id/967823-L.jpg",
        imageCredit: "Cover via Open Library",
      },
      {
        id: "b3",
        title: "Braiding Sweetgrass",
        creator: "Robin Wall Kimmerer",
        year: "2013",
        tag: "Nonfiction",
        blurb: "Botany as gratitude, gratitude as instruction.",
        image: "https://covers.openlibrary.org/b/id/7281575-L.jpg",
        imageCredit: "Cover via Open Library",
      },
      {
        id: "b4",
        title: "Norwegian Wood",
        creator: "Haruki Murakami",
        year: "1987",
        tag: "Fiction",
        blurb: "Grief, rendered in a very particular quiet.",
        image: "https://covers.openlibrary.org/b/id/2237620-L.jpg",
        imageCredit: "Cover via Open Library",
      },
    ],
  },
  {
    slug: "video-games",
    label: "Video Games",
    description: "Places I've spent whole seasons of my life.",
    accent: "olive",
    entries: [
      {
        id: "v1",
        title: "Journey",
        creator: "Thatgamecompany",
        year: "2012",
        tag: "Adventure",
        blurb: "A pilgrimage across sand, wordless and enormous.",
        image: "https://upload.wikimedia.org/wikipedia/en/6/64/Journey_Title_Poster.png",
        imageCredit: "Cover art via Wikipedia, fair use",
      },
      {
        id: "v2",
        title: "Disco Elysium",
        creator: "ZA/UM",
        year: "2019",
        tag: "RPG",
        blurb: "A detective novel that lets you fail spectacularly.",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0d/Disco_Elysium_Poster.jpeg",
        imageCredit: "Cover art via Wikipedia, fair use",
      },
      {
        id: "v3",
        title: "Stardew Valley",
        creator: "ConcernedApe",
        year: "2016",
        tag: "Simulation",
        blurb: "The gentlest possible antidote to burnout.",
        image: "https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png",
        imageCredit: "Cover art via Wikipedia, fair use",
      },
      {
        id: "v4",
        title: "Outer Wilds",
        creator: "Mobius Digital",
        year: "2019",
        tag: "Exploration",
        blurb: "Twenty-two minutes, again and again, until it clicks.",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f6/Outer_Wilds_Steam_artwork.jpg",
        imageCredit: "Cover art via Wikipedia, fair use",
      },
    ],
  },
];

export function getArchive(slug: string) {
  return archives.find((a) => a.slug === slug);
}
