"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { TextCycleItem } from "@/lib/data/cycles";

interface CyclingPanelProps {
  eyebrow: string;
  title: string;
  href: string;
  items: TextCycleItem[];
  accentClass: string;
  intervalMs?: number;
}

export function CyclingPanel({
  eyebrow,
  title,
  href,
  items,
  accentClass,
  intervalMs = 4800,
}: CyclingPanelProps) {
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
        <span
          className={`border-2 border-ink px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest ${accentClass}`}
        >
          {eyebrow}
        </span>
        <span className="font-mono text-[10px] font-bold uppercase text-ink/50">
          {index + 1} / {items.length}
        </span>
      </div>

      <h3 className="mt-3 font-display text-2xl tracking-tight">{title}</h3>

      <div className="mt-4 min-h-[7rem] flex-1">
        <p className="font-serif text-lg italic leading-snug text-ink">
          &ldquo;{current.text}&rdquo;
        </p>
        <p className="mt-2 font-mono text-xs font-bold uppercase tracking-wide text-ink/70">
          — {current.source}
          {current.meta ? `, ${current.meta}` : ""}
        </p>
      </div>

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
