import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import {
  collections,
  type CollectionSlug,
  type MediaCycleItem,
  type TextCycleItem,
} from "@/lib/data/cycles";

export function generateStaticParams() {
  return Object.keys(collections).map((slug) => ({ slug }));
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = collections[slug as CollectionSlug];

  if (!collection) notFound();

  const isMedia = collection.kind !== "text";

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b-4 border-ink bg-starry py-12 text-paper">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Link
            href="/"
            className="inline-block border-2 border-paper bg-ink px-3 py-1 font-mono text-xs font-bold uppercase tracking-wide hover:bg-crimson"
          >
            ← Back to the almanac
          </Link>
          <h1 className="mt-5 font-display text-5xl tracking-tight text-sunflower sm:text-6xl">
            {collection.title}
          </h1>
          <p className="mt-3 max-w-xl font-serif text-lg italic text-paper/90">
            {collection.description}
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        {isMedia ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(collection.items as MediaCycleItem[]).map((item, i) => (
              <article
                key={item.id}
                className={`border-4 border-ink bg-paper p-4 shadow-[8px_8px_0_0_#16130f] ${
                  i % 2 === 0 ? "-rotate-1" : "rotate-1"
                }`}
              >
                <div className="relative flex h-36 items-end overflow-hidden border-2 border-ink p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {collection.kind === "video" && (
                    <span className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center border-2 border-ink bg-paper text-sm">
                      ▶
                    </span>
                  )}
                  <p className="relative z-10 border-2 border-ink bg-paper px-2 py-1 font-mono text-[11px] font-bold uppercase text-ink">
                    {item.meta}
                  </p>
                </div>
                <p className="mt-3 font-serif text-base italic leading-snug">
                  {item.caption}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {(collection.items as TextCycleItem[]).map((item, i) => (
              <article
                key={item.id}
                className={`border-4 border-ink bg-paper p-5 shadow-[8px_8px_0_0_#16130f] ${
                  i % 2 === 0 ? "-rotate-1" : "rotate-1"
                }`}
              >
                <p className="font-serif text-lg italic leading-snug">
                  &ldquo;{item.text}&rdquo;
                </p>
                <p className="mt-3 font-mono text-xs font-bold uppercase tracking-wide text-ink/70">
                  — {item.source}
                  {item.meta ? `, ${item.meta}` : ""}
                </p>
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
