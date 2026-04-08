import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/content/site-content";
import { MovementSection } from "@website/ui/sections";
import { Container, Section } from "@website/ui/layout";
import { Text } from "@website/ui/components";

export const metadata: Metadata = {
  title: "Haltung",
  description: site.movement.body,
  openGraph: {
    title: `Haltung · ${site.brand.name}`,
    description: site.movement.body,
  },
};

export default function MovementPage() {
  return (
    <SiteShell>
      <main>
        <MovementSection
          id={site.movement.id}
          title={site.movement.title}
          body={site.movement.body}
        />
        <Section tone="section" className="scroll-mt-24">
          <Container className="max-w-2xl text-center lg:text-left">
            <Text variant="muted" className="text-lg leading-relaxed">
              {site.movementPage.supplement}
            </Text>
          </Container>
        </Section>
      </main>
    </SiteShell>
  );
}
