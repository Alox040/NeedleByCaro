import { Heading, Text } from "../components";
import { Container, Section } from "../layout";

export type MovementSectionProps = {
  id?: string;
  title: string;
  body: string;
};

/**
 * Klare Haltung gegen Gewalt — dunkel, ruhig, wenig Layout.
 */
export function MovementSection({ id, title, body }: MovementSectionProps) {
  return (
    <Section id={id} tone="black" grid className="scroll-mt-24">
      <Container className="mx-auto max-w-2xl text-center">
        <Heading level={2} className="mb-8 text-balance">
          {title}
        </Heading>
        <Text variant="muted" className="text-lg leading-relaxed">
          {body}
        </Text>
      </Container>
    </Section>
  );
}
