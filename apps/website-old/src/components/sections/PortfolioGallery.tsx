"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site-content";

type Category = (typeof site.gallery.categories)[number];
type Item = (typeof site.gallery.items)[number];

/* ─── Filter Tabs ─────────────────────────────────────────────── */

function FilterTabs({
  active,
  onChange,
}: {
  active: Category;
  onChange: (c: Category) => void;
}) {
  return (
    <div className="mb-10 flex gap-1 overflow-x-auto pb-1 md:mb-14">
      {site.gallery.categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={`shrink-0 rounded-sm border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
              isActive
                ? "border-forge-accent bg-forge-accent/10 text-heading"
                : "border-forge-border/60 bg-transparent text-muted hover:border-forge-grey/60 hover:text-heading"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

/* ─── Single Portfolio Item ──────────────────────────────────────
   hero: span 2 cols, cinematic 16/9 ratio
   regular: portrait 3/4 ratio
─────────────────────────────────────────────────────────────────── */

function PortfolioItem({ item, hero }: { item: Item; hero: boolean }) {
  return (
    <div
      className={`group relative overflow-hidden bg-section ${
        hero ? "col-span-2" : "col-span-1"
      }`}
    >
      {/* Bild */}
      <div
        className={`relative w-full overflow-hidden ${
          hero ? "aspect-[16/7] md:aspect-[21/9]" : "aspect-[3/4]"
        }`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes={
            hero
              ? "(max-width:768px) 100vw, 100vw"
              : "(max-width:768px) 100vw, 50vw"
          }
        />

        {/* Permanenter Gradient unten */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forge-black/80 via-forge-black/10 to-transparent" />

        {/* Hover Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-background/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Inhalt unten */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-7">
          <div className="space-y-1 translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-forge-accent">
              {item.style} · {item.placement}
            </p>
            <h3
              className={`font-display font-bold uppercase leading-tight tracking-tight text-heading ${
                hero ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
              }`}
            >
              {item.title}
            </h3>
          </div>

          {/* Link-Indikator — nur auf Hover sichtbar */}
          <Link
            href="/booking"
            className="flex shrink-0 items-center gap-2 rounded-sm border border-forge-white/20 bg-surface/50 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-forge-white/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 hover:border-forge-accent/50 hover:text-forge-white group-hover:opacity-100"
          >
            Ähnliches anfragen
            <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Gallery ─────────────────────────────────────────────────── */

export function PortfolioGallery() {
  const [active, setActive] = useState<Category>("Alle");

  const filtered =
    active === "Alle"
      ? site.gallery.items
      : site.gallery.items.filter((item) => item.style === active);

  return (
    <div>
      <FilterTabs active={active} onChange={setActive} />

      {filtered.length === 0 ? (
        <p className="py-20 text-center font-mono text-sm uppercase tracking-widest text-muted/50">
          Keine Arbeiten in dieser Kategorie
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          {filtered.map((item, i) => (
            <PortfolioItem
              key={`${item.title}-${active}`}
              item={item}
              // Jedes dritte Item (0, 3, 6, …) ist ein Hero
              hero={i % 3 === 0}
            />
          ))}
        </div>
      )}

      {/* Item-Zähler */}
      <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted/40">
        {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
        {active !== "Alle" ? ` · ${active}` : ""}
      </p>
    </div>
  );
}
