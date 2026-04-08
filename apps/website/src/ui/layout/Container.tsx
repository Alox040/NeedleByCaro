import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cx } from "./cx";

export type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/**
 * Zentrierte Spalte: `max-w-shell` und `px-gutter` (Forge-Layout-Tokens).
 */
export function Container<T extends ElementType = "div">({
  as,
  children,
  className,
  ...rest
}: ContainerProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      className={cx("mx-auto w-full max-w-shell px-gutter", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
