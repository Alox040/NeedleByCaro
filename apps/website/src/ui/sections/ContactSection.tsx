import { Button, Divider, Heading, Input, Text, Textarea } from "../components";
import { Container, Section } from "../layout";

export type ContactSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
  form: {
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitLabel: string;
    note?: string;
  };
  instagram: { label: string; href: string };
  bookingCta: { label: string; href: string };
  bookingSecondaryCta?: { label: string; href: string };
};

/**
 * Kurzes Kontaktformular, Instagram-Link, Buchungs-CTA.
 */
export function ContactSection({
  id,
  eyebrow,
  title,
  body,
  form,
  instagram,
  bookingCta,
  bookingSecondaryCta,
}: ContactSectionProps) {
  return (
    <Section id={id} tone="black" className="scroll-mt-24">
      <Container>
        <div className="mx-auto max-w-xl space-y-10">
          <div className="space-y-4 text-center">
            <Text variant="accent" as="p" className="text-xs font-medium uppercase tracking-widest">
              {eyebrow}
            </Text>
            <Heading level={2}>{title}</Heading>
            <Text variant="muted">{body}</Text>
          </div>

          <form className="space-y-6" action="#" method="post">
            <div className="space-y-2">
              <Text variant="muted" as="label" className="text-xs uppercase tracking-wider" htmlFor="contact-name">
                {form.nameLabel}
              </Text>
              <Input id="contact-name" name="name" autoComplete="name" required />
            </div>
            <div className="space-y-2">
              <Text variant="muted" as="label" className="text-xs uppercase tracking-wider" htmlFor="contact-email">
                {form.emailLabel}
              </Text>
              <Input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>
            <div className="space-y-2">
              <Text variant="muted" as="label" className="text-xs uppercase tracking-wider" htmlFor="contact-message">
                {form.messageLabel}
              </Text>
              <Textarea id="contact-message" name="message" rows={5} required />
            </div>
            {form.note ? (
              <Text variant="muted" as="p" className="text-xs">
                {form.note}
              </Text>
            ) : null}
            <Button type="submit" variant="outline" size="md" className="w-full sm:w-auto">
              {form.submitLabel}
            </Button>
          </form>

          <Divider />

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
            <Button href={instagram.href} variant="ghost" size="sm">
              {instagram.label}
            </Button>
            <Button href={bookingCta.href} variant="primary" size="md">
              {bookingCta.label}
            </Button>
            {bookingSecondaryCta ? (
              <Button href={bookingSecondaryCta.href} variant="outline" size="md">
                {bookingSecondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}
