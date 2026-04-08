import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/content/site-content";
import { GallerySection } from "@website/ui/sections";

export const metadata: Metadata = {
  title: "Portfolio",
  description: site.gallery.subtitle,
  openGraph: {
    title: `Portfolio · ${site.brand.name}`,
    description: site.gallery.subtitle,
  },
};

/** Gleiche Galerie wie /gallery — Route gemäß Content-Mapping (/portfolio). */
export default function PortfolioPage() {
  const items = site.gallery.items.map((item) => ({
    src: item.src,
    alt: item.alt,
    title: item.title,
    tag: item.style,
  }));

  return (
    <SiteShell>
      <main>
        <GallerySection
          eyebrow="Portfolio"
          title={site.gallery.title}
          description={site.gallery.subtitle}
          items={items}
        />
      </main>
    </SiteShell>
  );
}
