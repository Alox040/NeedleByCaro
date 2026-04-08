import type { ReactNode } from "react";
import { Footer, type FooterSocialItem } from "../layout";

export type FooterSectionProps = {
  social: readonly FooterSocialItem[];
  legalLine?: ReactNode;
  children?: ReactNode;
};

/** Fußzeile — schlankes Layout-`Footer`-Binding für Seitenenden. */
export function FooterSection({
  social,
  legalLine,
  children,
}: FooterSectionProps) {
  return (
    <Footer social={[...social]} legalLine={legalLine}>
      {children}
    </Footer>
  );
}
