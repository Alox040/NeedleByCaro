import Image from "next/image";
import type { ReactNode } from "react";
import { Button, Card, CardContent, Heading, Text } from "../components";
import { Container, Section } from "../layout";

export type HeroSectionProps = {
  titleLine1: ReactNode;
  titleAccent: ReactNode;
  titleLine2: ReactNode;
  subtitle: string;
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  illustrationSrc?: string;
  illustrationAlt?: string;
};

/**
 * Große Typo, wenig Text, Platzhalter für Illustration/Foto, ein CTA.
 */
export function HeroSection({
  titleLine1,
  titleAccent,
  titleLine2,
  subtitle,
  cta,
  secondaryCta,
  illustrationSrc,
  illustrationAlt = "",
}: HeroSectionProps) {
  return (
    <Section tone="transparent" className="scroll-mt-24 pt-10 pb-section md:pt-14">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8 text-center lg:text-left">
            <Heading level={1} className="max-w-xl lg:max-w-none">
              <span className="block text-heading">{titleLine1}</span>
              <span className="block text-forge-accent">{titleAccent}</span>
              <span className="block text-heading">{titleLine2}</span>
            </Heading>
            <Text variant="muted" className="mx-auto max-w-lg text-lg lg:mx-0">
              {subtitle}
            </Text>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Button href={cta.href} variant="primary" size="md">
                {cta.label}
              </Button>
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="outline" size="md">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </div>

          <Card className="overflow-hidden p-0">
            <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0 lg:max-w-none">
              {illustrationSrc ? (
                <Image
                  src={illustrationSrc}
                  alt={illustrationAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  priority
                />
              ) : (
                <div className="flex h-full min-h-72 w-full items-center justify-center bg-forge-section">
                  <Text variant="muted" className="text-sm uppercase tracking-widest">
                    Illustration
                  </Text>
                </div>
              )}
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
