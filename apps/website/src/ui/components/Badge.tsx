import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../layout/cx";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

/**
 * Kompakter Status / Label — Forge Accent Muted, Pill-Form.
 */
export function Badge({ className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-pill bg-forge-accent-muted px-3 py-0.5 text-xs font-medium uppercase tracking-wide text-forge-accent",
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
