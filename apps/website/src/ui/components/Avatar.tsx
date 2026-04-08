import type { ImgHTMLAttributes } from "react";
import { cx } from "../layout/cx";

export type AvatarSize = "sm" | "md" | "lg";

const sizeClass: Record<AvatarSize, string> = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-base",
};

export type AvatarProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "alt" | "className" | "children"
> & {
  /** Wenn gesetzt, wird ein Bild gerendert */
  src?: string;
  alt: string;
  /** Kurztext im Bild-Fallback (z. B. Initialen) */
  fallback?: string;
  size?: AvatarSize;
  className?: string;
};

function initialsFrom(alt: string, fallback?: string): string {
  if (fallback?.trim()) return fallback.trim().slice(0, 2).toUpperCase();
  const parts = alt.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0]![0] ?? ""}${parts[1]![0] ?? ""}`.toUpperCase();
  }
  return alt.slice(0, 2).toUpperCase() || "?";
}

/**
 * Rundes Avatar-Bild oder Initialen-Fallback — Forge Surface + Border.
 */
export function Avatar({
  src,
  alt,
  fallback,
  size = "md",
  className,
  ...imgRest
}: AvatarProps) {
  const label = initialsFrom(alt, fallback);

  if (src) {
    return (
      <span
        className={cx(
          "inline-flex overflow-hidden rounded-full border border-forge-border bg-forge-section",
          sizeClass[size],
          className,
        )}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          {...imgRest}
        />
      </span>
    );
  }

  return (
    <span
      className={cx(
        "inline-flex items-center justify-center rounded-full border border-forge-border bg-forge-section font-medium text-primary",
        sizeClass[size],
        className,
      )}
      role="img"
      aria-label={alt}
    >
      {label}
    </span>
  );
}
