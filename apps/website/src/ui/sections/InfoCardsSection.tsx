import { Card, CardContent, Heading, Tag, Text } from "../components";
import { Container, Section } from "../layout";

export type InfoCardItem = {
  title: string;
  body: string;
};

export type InfoCardsSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  items: readonly InfoCardItem[];
};

export function InfoCardsSection({
  id,
  eyebrow,
  title,
  items,
}: InfoCardsSectionProps) {
  return (
    <Section id={id} tone="section" className="scroll-mt-24">
      <Container className="space-y-10">
        {eyebrow || title ? (
          <div className="space-y-4 text-center md:text-left">
            {eyebrow ? (
              <div className="flex justify-center md:justify-start">
                <Tag>{eyebrow}</Tag>
              </div>
            ) : null}
            {title ? <Heading level={2}>{title}</Heading> : null}
          </div>
        ) : null}
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <Card key={item.title}>
              <CardContent className="space-y-3">
                <Text variant="heading" as="h3" className="text-base uppercase tracking-wide">
                  {item.title}
                </Text>
                <Text variant="muted">{item.body}</Text>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
