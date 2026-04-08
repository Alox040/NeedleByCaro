import type { ReactNode } from "react";
import { cx } from "./cx";

export type BackgroundProps = {
  children?: ReactNode;
  className?: string;
  /** Feines Raster aus Forge-Grid-Linien */
  grid?: boolean;
  /** Weicher Akzent-Verlauf oben */
  radial?: boolean;
  /** Volle Fläche mit Forge-Section als Basis */
  fillSection?: boolean;
};

/**
 * Dekorative Unterlagen (Raster / Radial) — nur Forge-Background-Images aus Tailwind.
 */
export function Background({
  children,
  className,
  grid = false,
  radial = false,
  fillSection = false,
}: BackgroundProps) {
  return (
    <div
      className={cx(
        "relative",
        fillSection ? "bg-forge-section" : undefined,
        className,
      )}
    >
      {radial ? (
        <div
          className="pointer-events-none absolute inset-0 bg-forge-radial"
          aria-hidden
        />
      ) : null}
      {grid ? (
        <div
          className="pointer-events-none absolute inset-0 bg-forge-grid bg-grid bg-center"
          aria-hidden
        />
      ) : null}
      {children}
    </div>
  );
}
