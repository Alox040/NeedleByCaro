import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cx } from "./cx";

export type SectionTone = "section" | "black" | "surface" | "transparent";

const toneClass: Record<SectionTone, string> = {
  section: "bg-forge-section",
  black: "bg-forge-black",
  surface: "bg-forge-surface",
  transparent: "bg-transparent",
};

export type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  /** Hintergrundfläche (Forge-Tokens) */
  tone?: SectionTone;
  /** Optionales Forge-Raster als Overlay */
  grid?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/**
 * Vertikaler Block mit Section-Spacing und Forge-Hintergrund.
 */
export function Section<T extends ElementType = "section">({
  as,
  children,
  className,
  tone = "section",
  grid = false,
  ...rest
}: SectionProps<T>) {
  const Tag = (as ?? "section") as ElementType;
  return (
    <Tag
      className={cx("relative py-section", toneClass[tone], className)}
      {...rest}
    >
      {grid ? (
        <div
          className="pointer-events-none absolute inset-0 bg-forge-grid bg-grid bg-center opacity-50"
          aria-hidden
        />
      ) : null}
      <div className="relative z-10">{children}</div>
    </Tag>
  );
}
