import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { archives, getArchive } from "@/lib/data/archives";

export function generateStaticParams() {
  return archives.map((a) => ({ slug: a.slug }));
}

export default async function ArchivePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const folder = getArchive(slug);

  if (!folder) notFound();

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
            {folder.label}
          </h1>
          <p className="mt-3 max-w-xl font-serif text-lg italic text-paper/90">
            {folder.description}
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {folder.entries.map((entry, i) => (
            <article
              key={entry.id}
              className={`flex gap-4 border-4 border-ink bg-paper p-4 shadow-[8px_8px_0_0_#16130f] ${
                i % 2 === 0 ? "-rotate-1" : "rotate-1"
              }`}
            >
              <div className="h-32 w-24 shrink-0 overflow-hidden border-2 border-ink">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <span className="border-2 border-ink bg-cream px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest">
                  {entry.tag} &middot; {entry.year}
                </span>
                <h2 className="mt-3 font-display text-2xl tracking-tight">
                  {entry.title}
                </h2>
                <p className="mt-1 font-mono text-xs font-bold uppercase text-ink/60">
                  {entry.creator}
                </p>
                <p className="mt-3 font-serif text-base italic leading-snug">
                  {entry.blurb}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-wide text-ink/40">
                  {entry.imageCredit}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
