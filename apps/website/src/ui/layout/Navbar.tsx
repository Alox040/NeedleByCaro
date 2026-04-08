"use client";

import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";
import { Container } from "./Container";
import { cx } from "./cx";

export type NavbarLinkItem = {
  href: string;
  label: string;
};

export type NavbarProps = {
  /** Logo oder Markenblock */
  brand: ReactNode;
  items: NavbarLinkItem[];
  /** z. B. CTA-Button */
  trailing?: ReactNode;
  className?: string;
};

/**
 * Fixierte, transparente Leiste mit Blur — nur Forge-Farben.
 */
export function Navbar({ brand, items, trailing, className }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cx(
        "sticky top-0 z-50 border-b border-forge-border/40 bg-forge-black/55 backdrop-blur-md",
        className,
      )}
    >
      <Container className="flex items-center justify-between gap-gutter py-4 md:py-5">
        <div className="min-w-0 shrink">{brand}</div>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Hauptnavigation"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-widest text-forge-grey transition-colors hover:text-forge-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          {trailing ? <div className="hidden sm:block">{trailing}</div> : null}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-forge-border text-forge-white transition-colors hover:border-forge-accent hover:text-forge-accent lg:hidden"
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
      </Container>

      {open ? (
        <div className="border-t border-forge-border lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-sm font-medium uppercase tracking-wider text-forge-grey transition-colors hover:text-forge-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {trailing ? <div className="pt-2 sm:hidden">{trailing}</div> : null}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
