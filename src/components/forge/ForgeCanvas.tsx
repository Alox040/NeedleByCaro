import type { ReactNode } from "react";

type ForgeCanvasProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Forge UI8: äußerer Glow + innere, abgerundete Arbeitsfläche mit feinem Grid.
 */
export function ForgeCanvas({ children, className = "" }: ForgeCanvasProps) {
  return (
    <div className={`min-h-screen bg-background bg-forge-radial ${className}`}>
      <div className="mx-auto max-w-shell px-gutter pb-12 pt-6 md:pb-16 md:pt-8">
        <div
          className="relative overflow-hidden rounded-forge border border-forge-border/55 bg-surface/90 shadow-[0_0_0_1px_color-mix(in_srgb,var(--color-border)_32%,transparent)_inset] backdrop-blur-sm"
          style={{
            backgroundImage: `
              linear-gradient(var(--forge-grid-line) 1px, transparent 1px),
              linear-gradient(90deg, var(--forge-grid-line) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            backgroundPosition: "center top",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-forge-accent/12 via-transparent to-transparent" />
          <div className="relative z-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
