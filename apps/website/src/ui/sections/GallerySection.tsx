import Image from "next/image";
import { Button, Card, CardContent, Heading, Tag, Text } from "../components";
import { Container, Section } from "../layout";

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  tag?: string;
};

export type GallerySectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  items: readonly GalleryItem[];
  /** Optional unter dem Raster (z. B. Link zur vollen Galerie) */
  footerCta?: { label: string; href: string };
};

/**
 * Raster mit dunklen Karten — Hover über Border/Ring (Forge Accent).
 */
export function GallerySection({
  id,
  eyebrow,
  title,
  description,
  items,
  footerCta,
}: GallerySectionProps) {
  return (
    <Section id={id} tone="section" className="scroll-mt-24">
      <Container>
        <div className="mb-10 space-y-4 text-center md:mb-14 md:text-left">
          {eyebrow ? (
            <div className="flex justify-center md:justify-start">
              <Tag>{eyebrow}</Tag>
            </div>
          ) : null}
          <Heading level={2}>{title}</Heading>
          {description ? (
            <Text variant="muted" className="mx-auto max-w-2xl md:mx-0">
              {description}
            </Text>
          ) : null}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card
              key={item.src + item.title}
              className="group overflow-hidden p-0 transition-all duration-300 hover:border-forge-accent hover:ring-2 hover:ring-forge-accent/50"
            >
              <div className="relative aspect-square overflow-hidden bg-forge-black">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="space-y-2 py-4">
                {item.tag ? <Tag>{item.tag}</Tag> : null}
                <Text variant="heading" as="p" className="text-sm uppercase tracking-wide">
                  {item.title}
                </Text>
              </CardContent>
            </Card>
          ))}
        </div>

        {footerCta ? (
          <div className="mt-10 flex justify-center md:justify-start">
            <Button href={footerCta.href} variant="outline" size="md">
              {footerCta.label}
            </Button>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
