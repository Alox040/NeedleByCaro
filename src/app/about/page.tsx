import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/content/site-content";
import { AboutSection, BeliefSection } from "@website/ui/sections";

export const metadata: Metadata = {
  title: "Über uns",
  description: site.about.body,
  openGraph: {
    title: `Über uns · ${site.brand.name}`,
    description: site.about.body,
  },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <AboutSection
          id={site.about.id}
          eyebrow={site.about.eyebrow}
          title={site.about.title}
          body={site.about.body}
        />
        <BeliefSection text={site.about.beliefStatement} />
      </main>
    </SiteShell>
  );
}
