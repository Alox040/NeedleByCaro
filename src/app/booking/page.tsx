import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/content/site-content";
import { CTASection, InfoCardsSection } from "@website/ui/sections";

export const metadata: Metadata = {
  title: site.bookingPage.title,
  description: site.bookingPage.subtitle,
  openGraph: {
    title: `${site.bookingPage.title} · ${site.brand.name}`,
    description: site.bookingPage.subtitle,
  },
};

export default function BookingPage() {
  return (
    <SiteShell>
      <main>
        <CTASection
          title={site.bookingPage.title}
          body={site.bookingPage.subtitle}
          cta={site.bookingPage.cta}
          note={site.bookingPage.note}
        />
        <InfoCardsSection
          eyebrow="Ablauf"
          title="So buchst du"
          items={site.bookingPage.info}
        />
      </main>
    </SiteShell>
  );
}
