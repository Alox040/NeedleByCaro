import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { site } from "@/content/site-content";

export const metadata: Metadata = {
  title: site.portfolio.title,
};

export default function PortfolioPage() {
  return (
    <SiteShell>
      <main className="px-gutter py-section">
        <div className="mx-auto max-w-shell">
          <SectionHeading
            eyebrow="Portfolio"
            title={site.portfolio.title}
            description={site.portfolio.subtitle}
          />
          <PortfolioGallery />
        </div>
      </main>
    </SiteShell>
  );
}
