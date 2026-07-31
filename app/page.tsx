import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { FolderGrid } from "@/components/FolderGrid";
import { CyclingPanel } from "@/components/CyclingPanel";
import { MediaCyclingPanel } from "@/components/MediaCyclingPanel";
import { HeroPainting } from "@/components/HeroPainting";
import { quotes, essays, paragraphs, facts, photos, videos } from "@/lib/data/cycles";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b-4 border-ink bg-starry">
        <HeroPainting />
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <span className="inline-block border-2 border-paper bg-crimson px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-paper">
            Est. today &middot; Volume I
          </span>
          <h1 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight text-sunflower sm:text-7xl lg:text-8xl">
            THE SUNFLOWER
            <br />
            ALMANAC
          </h1>
          <p className="mt-6 max-w-xl font-serif text-lg italic text-paper/90 sm:text-xl">
            A personal museum of things worth keeping — painted in warm
            color, framed in thick black lines. Wander the archives, or let
            the collections cycle through what I love.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        {/* Archives */}
        <section>
          <div className="mb-6 flex items-end justify-between gap-4 border-b-4 border-ink pb-3">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              THE ARCHIVES
            </h2>
            <p className="hidden font-mono text-xs uppercase text-ink/60 sm:block">
              Click a folder to open it
            </p>
          </div>
          <FolderGrid />
        </section>

        {/* Collections */}
        <section className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-4 border-b-4 border-ink pb-3">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              THE COLLECTIONS
            </h2>
            <p className="hidden font-mono text-xs uppercase text-ink/60 sm:block">
              Cycling on their own — hover to pause
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CyclingPanel
              eyebrow="Quotes"
              title="Favorite Quotes"
              href="/collection/quotes"
              items={quotes}
              accentClass="bg-sunflower"
            />
            <CyclingPanel
              eyebrow="Essays"
              title="Essays"
              href="/collection/essays"
              items={essays}
              accentClass="bg-marigold text-paper"
            />
            <CyclingPanel
              eyebrow="Paragraphs"
              title="Book Paragraphs"
              href="/collection/paragraphs"
              items={paragraphs}
              accentClass="bg-olive text-paper"
            />
            <CyclingPanel
              eyebrow="Facts"
              title="Facts Worth Knowing"
              href="/collection/facts"
              items={facts}
              accentClass="bg-sky text-paper"
            />
            <MediaCyclingPanel
              eyebrow="Photos"
              title="Photos"
              href="/collection/photos"
              items={photos}
              kind="photo"
            />
            <MediaCyclingPanel
              eyebrow="Videos"
              title="Videos"
              href="/collection/videos"
              items={videos}
              kind="video"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
