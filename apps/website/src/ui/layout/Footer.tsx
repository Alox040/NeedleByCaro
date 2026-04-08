import type { ReactNode } from "react";
import { Container } from "./Container";
import { cx } from "./cx";

export type FooterSocialItem = {
  href: string;
  label: string;
};

export type FooterProps = {
  social: FooterSocialItem[];
  /** Optional: z. B. Copyright oder Impressum-Zeile */
  legalLine?: ReactNode;
  children?: ReactNode;
  className?: string;
};

/**
 * Schlanke, zentrierte Fußzeile mit Social-Links (Forge-Tokens).
 */
export function Footer({ social, legalLine, children, className }: FooterProps) {
  return (
    <footer
      className={cx(
        "border-t border-forge-border bg-forge-black py-section text-forge-grey",
        className,
      )}
    >
      <Container className="flex flex-col items-center gap-6 text-center">
        {social.length > 0 ? (
          <nav aria-label="Social Media">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {social.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm transition-colors hover:text-forge-white"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        {children}

        {legalLine ? (
          <div className="text-xs text-forge-grey">{legalLine}</div>
        ) : null}
      </Container>
    </footer>
  );
}
