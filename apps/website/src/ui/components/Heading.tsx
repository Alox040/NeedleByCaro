import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cx } from "../layout/cx";

const levelDefaultTag = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
} as const;

const levelClass: Record<1 | 2 | 3 | 4 | 5 | 6, string> = {
  1: "text-4xl md:text-5xl",
  2: "text-3xl md:text-4xl",
  3: "text-2xl md:text-3xl",
  4: "text-xl md:text-2xl",
  5: "text-lg md:text-xl",
  6: "text-base md:text-lg",
};

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps<T extends ElementType = "h2"> = {
  as?: T;
  level?: HeadingLevel;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/**
 * Überschrift mit Display-Font und semantischem `heading`-Farb-Token.
 */
export function Heading<T extends ElementType = "h2">({
  as,
  level = 2,
  className,
  children,
  ...rest
}: HeadingProps<T>) {
  const Tag = (as ?? levelDefaultTag[level]) as ElementType;
  return (
    <Tag
      className={cx(
        "font-display font-bold uppercase tracking-tight text-heading",
        levelClass[level],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
