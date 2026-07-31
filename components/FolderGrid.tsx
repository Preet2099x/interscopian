import Link from "next/link";
import { archives } from "@/lib/data/archives";

const accentClasses: Record<string, string> = {
  sunflower: "bg-sunflower",
  burnt: "bg-burnt text-paper",
  starry: "bg-starry text-paper",
  olive: "bg-olive text-paper",
};

const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

export function FolderGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {archives.map((folder, i) => (
        <Link
          key={folder.slug}
          href={`/archive/${folder.slug}`}
          className={`group relative block border-4 border-ink ${
            accentClasses[folder.accent]
          } p-5 shadow-[8px_8px_0_0_#16130f] transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#16130f] ${rotations[i % rotations.length]} hover:rotate-0`}
        >
          <span className="absolute -top-3 left-4 border-2 border-ink bg-paper px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-ink">
            Folder {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 font-display text-3xl tracking-tight">
            {folder.label}
          </h3>
          <p className="mt-2 font-mono text-xs leading-relaxed">
            {folder.description}
          </p>
          <div className="mt-6 flex items-center justify-between font-mono text-xs font-bold uppercase">
            <span>{folder.entries.length} entries</span>
            <span className="inline-flex h-8 w-8 items-center justify-center border-2 border-ink bg-paper text-ink transition-transform group-hover:translate-x-1">
              →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
