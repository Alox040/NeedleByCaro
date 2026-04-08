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
    <div className={`min-h-screen bg-background ${className}`}>
      <div className="mx-auto max-w-shell px-gutter pb-16 pt-8 md:pb-20 md:pt-10">
        <div
          className="relative overflow-hidden rounded-forge border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          style={{
            backgroundImage: `
              linear-gradient(var(--forge-grid-line) 1px, transparent 1px),
              linear-gradient(90deg, var(--forge-grid-line) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            backgroundPosition: "center top",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-forge-border/[0.04] via-transparent to-transparent" />
          <div className="relative z-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
