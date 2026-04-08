import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cx } from "../layout/cx";

export type TextVariant = "default" | "muted" | "accent" | "heading";

export type TextProps<T extends ElementType = "p"> = {
  as?: T;
  variant?: TextVariant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const variantClass: Record<TextVariant, string> = {
  default: "text-primary",
  muted: "text-muted",
  accent: "text-forge-accent",
  heading: "font-display font-semibold text-heading",
};

/**
 * Fließtext — semantische Textfarben aus Theme (`primary`, `muted`, `heading`, `forge-accent`).
 */
export function Text<T extends ElementType = "p">({
  as,
  variant = "default",
  className,
  children,
  ...rest
}: TextProps<T>) {
  const Tag = (as ?? "p") as ElementType;
  return (
    <Tag
      className={cx(
        "text-base leading-relaxed",
        variant !== "heading" && "font-sans font-normal",
        variantClass[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
