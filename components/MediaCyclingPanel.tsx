"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { MediaCycleItem } from "@/lib/data/cycles";

interface MediaCyclingPanelProps {
  eyebrow: string;
  title: string;
  href: string;
  items: MediaCycleItem[];
  kind: "photo" | "video";
  intervalMs?: number;
}

export function MediaCyclingPanel({
  eyebrow,
  title,
  href,
  items,
  kind,
  intervalMs = 4200,
}: MediaCyclingPanelProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || items.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [paused, items.length, intervalMs]);

  const current = items[index];

  return (
    <div
      className="flex h-full flex-col border-4 border-ink bg-paper p-5 shadow-[8px_8px_0_0_#16130f]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center justify-between">
        <span className="border-2 border-ink bg-crimson px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-paper">
          {eyebrow}
        </span>
        <span className="font-mono text-[10px] font-bold uppercase text-ink/50">
          {index + 1} / {items.length}
        </span>
      </div>

      <h3 className="mt-3 font-display text-2xl tracking-tight">{title}</h3>

      <div className="relative mt-4 flex h-36 items-end overflow-hidden border-2 border-ink p-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current.id}
          src={current.image}
          alt={current.caption}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {kind === "video" && (
          <span className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center border-2 border-ink bg-paper text-sm">
            ▶
          </span>
        )}
        <p className="relative z-10 border-2 border-ink bg-paper px-2 py-1 font-mono text-[11px] font-bold uppercase text-ink">
          {current.meta}
        </p>
      </div>
      <p className="mt-3 flex-1 font-serif text-base italic leading-snug text-ink">
        {current.caption}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-1.5">
          {items.map((item, i) => (
            <button
              key={item.id}
              aria-label={`Show item ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 border border-ink ${
                i === index ? "bg-ink" : "bg-paper"
              }`}
            />
          ))}
        </div>
        <Link
          href={href}
          className="border-2 border-ink bg-cream px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wide hover:bg-sunflower"
        >
          See all →
        </Link>
      </div>
    </div>
  );
}
