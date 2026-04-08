import { Text } from "../components";
import { Container, Section } from "../layout";

export type BeliefSectionProps = {
  id?: string;
  text: string;
};

/** Kurzes Statement — z. B. „Kein Motiv von der Stange.“ */
export function BeliefSection({ id, text }: BeliefSectionProps) {
  return (
    <Section id={id} tone="surface" className="scroll-mt-24">
      <Container className="max-w-3xl text-center lg:text-left">
        <Text
          variant="accent"
          as="p"
          className="font-display text-xl font-bold uppercase tracking-tight md:text-2xl"
        >
          {text}
        </Text>
      </Container>
    </Section>
  );
}
