import type { ComponentPropsWithoutRef, HTMLAttributes, ReactNode } from "react";
import { cx } from "../layout/cx";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ className, children, ...rest }: CardProps) {
  return (
    <div
      className={cx(
        "rounded-forge border border-forge-border bg-forge-surface",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export type CardHeaderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function CardHeader({ className, children, ...rest }: CardHeaderProps) {
  return (
    <div
      className={cx("border-b border-forge-border px-gutter py-4", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export type CardTitleProps = ComponentPropsWithoutRef<"h3">;

export function CardTitle({ className, children, ...rest }: CardTitleProps) {
  return (
    <h3
      className={cx(
        "font-display text-lg font-semibold uppercase tracking-wide text-heading",
        className,
      )}
      {...rest}
    >
      {children}
    </h3>
  );
}

export type CardContentProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function CardContent({ className, children, ...rest }: CardContentProps) {
  return (
    <div className={cx("px-gutter py-4", className)} {...rest}>
      {children}
    </div>
  );
}
