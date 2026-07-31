# Architecture

## Overview

`interscopian` is **The Sunflower Almanac** — a personal-museum landing site built with [Next.js](https://nextjs.org) 16 (App Router). Visual identity is Van Gogh–inspired (warm sunflower/burnt-orange/starry-night palette) rendered through neo-brutalist UI components (thick black borders, hard offset drop-shadows, bold uppercase mono type, slight tile rotation).

The site has two content systems, both backed by static local data (no CMS/database yet):

1. **Archives** — four browsable folders: Films, Series, Books, Video Games.
2. **Collections** — six auto-cycling feeds on the home page: Quotes, Essays, Book Paragraphs, Facts, Photos, Videos.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.1.6 (App Router, async `params`) |
| UI library | React 19.2.3 / React DOM 19.2.3 |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS 4 (CSS-first `@theme`, via `@tailwindcss/postcss`) |
| Fonts | `next/font/google` — Anton (display), Fraunces (serif/quotes), Space Mono (body/mono labels) |
| Linting | ESLint 9, flat config |

## Directory structure

```
.
├── app/
│   ├── layout.tsx                 # Root layout: fonts, metadata, HTML shell
│   ├── page.tsx                   # "/" — hero, Archives folder grid, Collections cycling grid
│   ├── globals.css                # Tailwind entry + Van Gogh color/font theme tokens
│   ├── archive/[slug]/page.tsx    # "/archive/films|series|books|video-games"
│   └── collection/[slug]/page.tsx # "/collection/quotes|essays|paragraphs|facts|photos|videos"
├── components/
│   ├── SiteHeader.tsx             # Nav bar with sunflower mark + logo
│   ├── Footer.tsx
│   ├── SunflowerMark.tsx          # Decorative inline SVG sunflower
│   ├── FolderGrid.tsx             # Renders the 4 Archive folder tiles from lib/data/archives.ts
│   ├── CyclingPanel.tsx           # Client component: auto-rotates text items (quotes/essays/paragraphs/facts)
│   └── MediaCyclingPanel.tsx      # Client component: auto-rotates photo/video items
├── lib/data/
│   ├── archives.ts                # ArchiveFolder[] — Films/Series/Books/Video Games + entries
│   └── cycles.ts                  # quotes/essays/paragraphs/facts/photos/videos + `collections` registry
├── public/                        # Static assets
├── next.config.ts
├── tsconfig.json                  # path alias "@/*" -> "./*"
└── package.json
```

## Routing

- `/` — home page ([app/page.tsx](app/page.tsx)): hero banner, `FolderGrid` (Archives), and a 3-column grid of `CyclingPanel`/`MediaCyclingPanel` instances (Collections). Each panel auto-advances on an interval, pauses on hover, and links to its full listing page.
- `/archive/[slug]` — one dynamic route serves all four archive folders (`films`, `series`, `books`, `video-games`) by looking up `slug` in [lib/data/archives.ts](lib/data/archives.ts). Unknown slugs call `notFound()`. `generateStaticParams` pre-renders all four.
- `/collection/[slug]` — one dynamic route serves all six collections (`quotes`, `essays`, `paragraphs`, `facts`, `photos`, `videos`) by looking up `slug` in the `collections` registry in [lib/data/cycles.ts](lib/data/cycles.ts). Renders a full grid instead of a cycling widget. `generateStaticParams` pre-renders all six.

Using two catch-all dynamic routes (rather than 10 separate page files) keeps the folder/collection rendering logic in one place; adding a new archive category or collection type is a data-file change, not a new route file.

## Data layer

All content is static TypeScript data under `lib/data/` — no database or API calls. This is intentionally mock/placeholder content (clearly Van-Gogh/art-themed sample entries) meant to be swapped for the user's real favorites.

- `ArchiveFolder` / `ArchiveEntry` types + `archives` array + `getArchive(slug)` helper — [lib/data/archives.ts](lib/data/archives.ts)
- `TextCycleItem` (quotes/essays/paragraphs/facts) and `MediaCycleItem` (photos/videos) types + per-category arrays + a `collections` lookup record keyed by `CollectionSlug` — [lib/data/cycles.ts](lib/data/cycles.ts)

To swap in real content, edit these two files only — no component changes needed.

## Styling system

Tailwind CSS 4 uses CSS-first configuration. [app/globals.css](app/globals.css) defines the Van Gogh palette and fonts as theme tokens in `@theme inline`, which Tailwind turns into utility classes automatically:

- Colors: `bg-cream` / `bg-paper` / `bg-ink` / `bg-sunflower` / `bg-gold` / `bg-marigold` / `bg-burnt` / `bg-crimson` / `bg-starry` / `bg-sky` / `bg-olive` (and `text-*`/`border-*` equivalents)
- Fonts: `font-display` (Anton, headers), `font-serif` (Fraunces, quotes/excerpts), `font-mono` (Space Mono, labels/body)

Neo-brutalist components follow a consistent recipe: `border-4 border-ink`, hard offset shadow (`shadow-[8px_8px_0_0_#16130f]`), slight rotation on tiles, and a translate+shadow-grow hover state — used in `FolderGrid`, `CyclingPanel`, `MediaCyclingPanel`, and the archive/collection detail cards.

## Interactivity

`CyclingPanel` and `MediaCyclingPanel` are the only client components (`"use client"`). Each holds its own `index`/`paused` state, advances via `setInterval` on a per-panel timer, and pauses on `mouseenter`. This is intentionally per-component local state — no global store — since panels cycle independently.

## Path aliases

`@/*` maps to the project root (`tsconfig.json`), so imports use `@/components/...` and `@/lib/data/...`.

## Build & tooling

- `npm install` — install dependencies (not yet run in this environment — no Node.js/npm was found on this machine; run locally before `dev`/`build`)
- `npm run dev` — start the Next.js dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

No test runner, CI configuration, database, or environment configuration currently exist in the repository.

## Next steps

- Replace placeholder data in `lib/data/archives.ts` and `lib/data/cycles.ts` with real favorites (and real photo/video assets instead of gradient placeholders — `MediaCycleItem` will need an `src`/image field once real media is added).
- Run `npm install && npm run dev` locally and visually verify the neo-brutalist/Van Gogh styling, hover states, and cycling timers.
- Consider extracting the repeated "brutal card" class string into a shared constant/component if more surfaces adopt the same look.
