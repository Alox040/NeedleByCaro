import type { ReactElement } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site-content";

/* ─── Icons ──────────────────────────────────────────────────────
   Schlanke industrielle SVGs — kein Emoji, kein Clipart.
   Stroke-only, 20×20 Viewport.
─────────────────────────────────────────────────────────────────── */

const icons: Record<(typeof site.trust.items)[number]["icon"], ReactElement> = {
  hygiene: (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-5 w-5">
      <path
        d="M10 2v4M6 4l2 2M14 4l-2 2M4 10h12M5 10c0 3.314 2.239 6 5 6s5-2.686 5-6"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="9" r="1" fill="currentColor" />
    </svg>
  ),
  custom: (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-5 w-5">
      <path
        d="M3 17l4-1.5L15.5 7a2.121 2.121 0 00-3-3L4 12.5 3 17z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.5 4.5l3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  ),
  consult: (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-5 w-5">
      <path
        d="M4 4h12v9H4zM8 17l2-4 2 4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7.5h6M7 10.5h4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  ),
  quality: (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-5 w-5">
      <path
        d="M10 2l2 4.5 5 .5-3.5 3.5 1 5L10 13l-4.5 2.5 1-5L3 7l5-.5L10 2z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  experience: (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-5 w-5">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M10 6v4l2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

/* ─── Section ─────────────────────────────────────────────────── */

export function TrustSection() {
  const { items } = site.trust;

  return (
    <section
      id={site.trust.id}
      className="border-t border-gray-200 px-gutter py-section scroll-mt-24"
    >
      <div className="mx-auto max-w-shell">
        <SectionHeading
          eyebrow={site.trust.eyebrow}
          title={site.trust.title}
        />

        {/* Desktop: 5 Spalten mit vertikalen Dividers */}
        <div className="hidden divide-x divide-gray-200 border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md lg:grid lg:grid-cols-5">
          {items.map((item) => (
            <TrustItem key={item.icon} item={item} />
          ))}
        </div>

        {/* Mobile: vertikale Liste mit horizontalen Dividers */}
        <div className="flex flex-col divide-y divide-gray-200 border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md lg:hidden">
          {items.map((item) => (
            <TrustItem key={item.icon} item={item} mobile />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Item ────────────────────────────────────────────────────── */

type TrustItem = (typeof site.trust.items)[number];

function TrustItem({ item, mobile = false }: { item: TrustItem; mobile?: boolean }) {
  return (
    <div
      className={`group flex flex-col gap-5 p-6 transition-colors hover:bg-gray-50 ${
        mobile ? "flex-row items-start gap-5" : ""
      }`}
    >
      {/* Icon */}
      <div
        className={`flex shrink-0 items-center justify-center rounded-sm border border-gray-200 bg-white text-forge-accent shadow-sm transition-shadow transition-colors group-hover:border-forge-accent/40 group-hover:text-forge-accent group-hover:shadow-md ${
          mobile ? "h-10 w-10" : "h-10 w-10"
        }`}
      >
        {icons[item.icon]}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted/60">
          {item.label}
        </p>
        <p className="font-display text-base font-bold uppercase leading-tight tracking-tight text-heading">
          {item.headline}
        </p>
        <p className="text-sm leading-relaxed text-muted">{item.body}</p>
      </div>
    </div>
  );
}
