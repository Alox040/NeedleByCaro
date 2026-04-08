import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../layout/cx";

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

/**
 * Inline-Schlagwort — Section-Hintergrund, dezente Border, Pill.
 */
export function Tag({ className, children, ...rest }: TagProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-pill border border-forge-border bg-forge-section px-2.5 py-0.5 text-xs font-medium text-muted",
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
