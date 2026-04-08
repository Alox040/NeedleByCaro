import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/content/site-content";
import {
  CTASection,
  GallerySection,
  HeroSection,
  MovementSection,
} from "@website/ui/sections";

export default function HomePage() {
  const previewItems = site.gallery.items.slice(0, 6).map((item) => ({
    src: item.src,
    alt: item.alt,
    title: item.title,
    tag: item.style,
  }));

  return (
    <SiteShell>
      <main>
        <HeroSection
          titleLine1={site.hero.titleLine1}
          titleAccent={site.hero.titleAccent}
          titleLine2={site.hero.titleLine2}
          subtitle={site.hero.subtitle}
          cta={site.hero.primaryCta}
          secondaryCta={site.hero.secondaryCta}
          illustrationSrc={site.hero.image.src}
          illustrationAlt={site.hero.image.alt}
        />

        <MovementSection
          id={site.movement.id}
          title={site.movement.title}
          body={site.movement.body}
        />

        <CTASection
          title={site.ctaBand.statement}
          body={site.ctaBand.body}
          cta={site.ctaBand.cta}
          note={site.ctaBand.note}
        />

        <GallerySection
          eyebrow={site.gallery.previewEyebrow}
          title={site.gallery.previewTitle}
          description={site.gallery.previewDescription}
          items={previewItems}
          footerCta={site.gallery.previewFooterCta}
        />
      </main>
    </SiteShell>
  );
}
