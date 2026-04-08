import { Button, Card, CardContent, Heading, Input, Text, Textarea } from "../components";
import { Container, Section } from "../layout";

export type BookingContactCard = {
  title: string;
  line: string;
  href: string;
};

export type BookingSectionProps = {
  title: string;
  subtitle: string;
  form: {
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    messageLabel: string;
    submitLabel: string;
    note: string;
  };
  contactCards: readonly BookingContactCard[];
};

/**
 * Vollständige Buchungsseite — Formular + Kontakt-Karten (nur UI-Komponenten).
 */
export function BookingSection({
  title,
  subtitle,
  form,
  contactCards,
}: BookingSectionProps) {
  return (
    <Section tone="transparent" className="pb-section pt-6">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center md:text-left">
          <Heading level={1}>{title}</Heading>
          <Text variant="muted" className="text-lg">
            {subtitle}
          </Text>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <form className="space-y-6" action="#" method="post">
            <div className="space-y-2">
              <Text variant="muted" as="label" className="text-xs uppercase tracking-wider" htmlFor="booking-name">
                {form.nameLabel}
              </Text>
              <Input id="booking-name" name="name" autoComplete="name" required />
            </div>
            <div className="space-y-2">
              <Text variant="muted" as="label" className="text-xs uppercase tracking-wider" htmlFor="booking-email">
                {form.emailLabel}
              </Text>
              <Input
                id="booking-email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>
            <div className="space-y-2">
              <Text variant="muted" as="label" className="text-xs uppercase tracking-wider" htmlFor="booking-phone">
                {form.phoneLabel}
              </Text>
              <Input id="booking-phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="space-y-2">
              <Text variant="muted" as="label" className="text-xs uppercase tracking-wider" htmlFor="booking-message">
                {form.messageLabel}
              </Text>
              <Textarea id="booking-message" name="message" rows={6} required />
            </div>
            <Text variant="muted" as="p" className="text-xs">
              {form.note}
            </Text>
            <Button type="submit" variant="primary" size="md">
              {form.submitLabel}
            </Button>
          </form>

          <div className="space-y-4">
            {contactCards.map((card) => (
              <Card key={card.href}>
                <CardContent className="space-y-3">
                  <Text variant="heading" as="p" className="text-sm uppercase tracking-wide">
                    {card.title}
                  </Text>
                  <Button href={card.href} variant="ghost" size="sm" className="px-0">
                    {card.line}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
