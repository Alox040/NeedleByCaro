"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site-content";
import { Button } from "@/components/ui/Button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white/80 px-gutter py-5 backdrop-blur md:py-6">
      <div className="mx-auto flex max-w-shell items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-lg font-extrabold uppercase tracking-[0.12em] text-slate-900 transition-colors hover:text-black"
        >
          <span className="text-forge-accent">{site.brand.shortName}</span>
          <span className="ml-1 hidden sm:inline">{site.brand.logoLabel}</span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Hauptnavigation"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-slate-900 transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/booking" variant="secondary" className="hidden border-gray-200 px-5 py-2.5 text-xs text-slate-900 hover:text-black sm:inline-flex">
            Anfrage stellen
          </Button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-slate-900 transition-colors hover:text-black lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menü</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div className="mt-4 flex flex-col gap-3 border-t border-gray-200 px-gutter pt-4 lg:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-sm font-medium uppercase tracking-wider text-slate-900 transition-colors hover:text-black"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/booking" variant="primary" className="mt-2 w-full">
            Anfrage stellen
          </Button>
        </div>
      ) : null}
    </header>
  );
}
