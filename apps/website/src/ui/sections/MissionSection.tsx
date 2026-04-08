import { Badge, Heading, Text } from "../components";
import { Container, Section } from "../layout";

export type MissionSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
};

export function MissionSection({ id, eyebrow, title, body }: MissionSectionProps) {
  return (
    <Section id={id} tone="surface" className="scroll-mt-24">
      <Container className="max-w-3xl space-y-6 text-center lg:text-left">
        <div className="flex justify-center lg:justify-start">
          <Badge>{eyebrow}</Badge>
        </div>
        <Heading level={2}>{title}</Heading>
        <Text variant="muted" className="text-lg leading-relaxed">
          {body}
        </Text>
      </Container>
    </Section>
  );
}
