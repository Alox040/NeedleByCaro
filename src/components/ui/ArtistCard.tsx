import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export type ArtistCardProps = {
  index: number;
  name: string;
  style: string;
  bio: string;
  specialities: readonly string[];
  image: { src: string; alt: string };
  ctaHref: string;
  portfolioHref: string;
  /** Abwechselndes Layout: gerade = Bild links, ungerade = Bild rechts */
  flip?: boolean;
};

export function ArtistCard({
  index,
  name,
  style,
  bio,
  specialities,
  image,
  ctaHref,
  portfolioHref,
  flip = false,
}: ArtistCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`group flex flex-col gap-0 overflow-hidden rounded-forge border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md lg:flex-row ${
        flip ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Foto */}
      <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden lg:aspect-auto lg:w-[42%]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width:1024px) 100vw, 42vw"
        />
        {/* Nummer — Industrial Badge */}
        <span className="absolute left-4 top-4 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted/70">
          {num}
        </span>
        {/* Edge Glow auf Hover */}
        <div
          className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
            flip
              ? "bg-gradient-to-r from-transparent to-forge-accent/8"
              : "bg-gradient-to-l from-transparent to-forge-accent/8"
          }`}
        />
        {/* Bottom Fade für Übergang */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-forge-section to-transparent lg:hidden" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between gap-8 p-8 lg:p-12">
        <div className="space-y-6">
          {/* Stil-Label */}
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-forge-accent">
            {style}
          </p>

          {/* Name */}
          <h3 className="font-display text-3xl font-bold uppercase leading-none tracking-tight text-heading md:text-4xl">
            {name}
          </h3>

          {/* Bio */}
          <p className="max-w-prose text-sm leading-relaxed text-muted md:text-base">
            {bio}
          </p>

          {/* Spezialgebiete */}
          <div className="space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted/60">
              Spezialgebiet
            </p>
            <ul className="flex flex-wrap gap-2">
              {specialities.map((s) => (
                <li
                  key={s}
                  className="rounded-sm border border-gray-200 bg-gray-50 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={ctaHref} variant="primary" className="sm:w-auto">
            Anfrage an {name.split(" ")[0]}
          </Button>
          <Link
            href={portfolioHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-heading"
          >
            Portfolio ansehen
            <svg
              className="h-3.5 w-3.5 shrink-0"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
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
