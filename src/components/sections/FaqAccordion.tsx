"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export function FaqAccordion({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-2xl divide-y divide-forge-border/50 rounded-forge border border-forge-border/55 bg-surface/25">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-sm font-bold uppercase tracking-wide text-heading md:text-base">
                {item.q}
              </span>
              <span
                className={`shrink-0 text-forge-accent transition-transform ${isOpen ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen ? (
              <div className="border-t border-forge-border/45 px-5 pb-5 pt-0 text-sm leading-relaxed text-muted md:px-6 md:pb-6">
                <p className="pt-3">{item.a}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
