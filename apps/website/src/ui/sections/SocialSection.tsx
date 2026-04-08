import { Button, Heading, Tag, Text } from "../components";
import { Container, Section } from "../layout";

export type SocialLinkItem = {
  href: string;
  label: string;
};

export type SocialSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  body: string;
  links: readonly SocialLinkItem[];
};

export function SocialSection({
  id,
  eyebrow,
  title,
  body,
  links,
}: SocialSectionProps) {
  return (
    <Section id={id} tone="section" className="scroll-mt-24">
      <Container className="flex flex-col items-center gap-8 text-center">
        {eyebrow ? <Tag>{eyebrow}</Tag> : null}
        <Heading level={3}>{title}</Heading>
        <Text variant="muted" className="max-w-lg">
          {body}
        </Text>
        <nav aria-label="Social Media">
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Button href={link.href} variant="outline" size="sm">
                  {link.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </Section>
  );
}
