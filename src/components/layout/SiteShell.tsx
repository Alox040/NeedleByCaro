import type { ReactNode } from "react";
import { ForgeCanvas } from "@/components/forge/ForgeCanvas";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <ForgeCanvas>
      <SiteHeader />
      {children}
      <SiteFooter />
    </ForgeCanvas>
  );
}
