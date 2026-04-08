import { Badge, Heading, Text } from "../components";
import { Container, Section } from "../layout";

export type AboutSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
};

export function AboutSection({ id, eyebrow, title, body }: AboutSectionProps) {
  return (
    <Section id={id} tone="section" className="scroll-mt-24">
      <Container className="max-w-3xl space-y-6 text-center lg:text-left">
        <div className="flex justify-center lg:justify-start">
          <Badge>{eyebrow}</Badge>
        </div>
        <Heading level={2}>{title}</Heading>
        <Text variant="muted" className="text-lg">
          {body}
        </Text>
      </Container>
    </Section>
  );
}
