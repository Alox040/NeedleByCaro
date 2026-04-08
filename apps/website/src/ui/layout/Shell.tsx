import type { ReactNode } from "react";
import { cx } from "./cx";

export type ShellProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Seitenrahmen: volle Höhe, vertikaler Flex-Stack, Forge-Hintergrund und Vordergrundfarbe.
 * Zentrierter Inhalt erfolgt über {@link Container} oder {@link Section}.
 */
export function Shell({ children, className }: ShellProps) {
  return (
    <div
      className={cx(
        "flex min-h-dvh flex-col bg-forge-black font-sans text-forge-white",
        className,
      )}
    >
      {children}
    </div>
  );
}
