import { Button, Heading, Text } from "../components";
import { Container, Section } from "../layout";

export type CTASectionProps = {
  id?: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
  note?: string;
};

/**
 * Zentriert, starker Accent-Button, wenig Text.
 */
export function CTASection({ id, title, body, cta, note }: CTASectionProps) {
  return (
    <Section id={id} tone="surface" className="scroll-mt-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <Heading level={2} className="max-w-2xl text-balance">
          {title}
        </Heading>
        <Text variant="muted" className="max-w-lg">
          {body}
        </Text>
        <Button href={cta.href} variant="primary" size="md">
          {cta.label}
        </Button>
        {note ? (
          <Text variant="muted" as="p" className="max-w-md text-xs uppercase tracking-wider">
            {note}
          </Text>
        ) : null}
      </Container>
    </Section>
  );
}
