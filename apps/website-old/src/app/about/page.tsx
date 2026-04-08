import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/content/site-content";
import { AboutSection, MissionSection, StorySection } from "@website/ui/sections";

export const metadata: Metadata = {
  title: "Über uns",
  description: site.about.body,
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
        <StorySection
          id={site.story.id}
          eyebrow={site.story.eyebrow}
          title={site.story.title}
          body={site.story.body}
        />
        <MissionSection
          id={site.mission.id}
          eyebrow={site.mission.eyebrow}
          title={site.mission.title}
          body={site.mission.body}
        />
      </main>
    </SiteShell>
  );
}
