import Link from "next/link";
import { SunflowerMark } from "./SunflowerMark";

export function SiteHeader() {
  return (
    <header className="border-b-4 border-ink bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <SunflowerMark className="h-10 w-10 shrink-0 sm:h-12 sm:w-12" />
          <span className="font-display text-xl leading-none tracking-tight text-ink sm:text-2xl">
            THE SUNFLOWER
            <br />
            ALMANAC
          </span>
        </Link>

        <nav className="hidden items-center gap-2 font-mono text-xs font-bold uppercase tracking-wide sm:flex">
          <Link
            href="/archive/films"
            className="border-2 border-ink bg-cream px-3 py-2 hover:bg-sunflower"
          >
            Archives
          </Link>
          <Link
            href="/collection/quotes"
            className="border-2 border-ink bg-cream px-3 py-2 hover:bg-sunflower"
          >
            Collections
          </Link>
        </nav>
      </div>
    </header>
  );
}
