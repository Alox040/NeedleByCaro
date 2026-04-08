import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/content/site-content";
import { GallerySection } from "@website/ui/sections";

export const metadata: Metadata = {
  title: site.gallery.title,
  description: site.gallery.subtitle,
};

export default function GalleryPage() {
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
          eyebrow="Galerie"
          title={site.gallery.title}
          description={site.gallery.subtitle}
          items={items}
        />
      </main>
    </SiteShell>
  );
}
