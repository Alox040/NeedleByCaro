import type { ReactNode } from "react";
import Link from "next/link";
import { site } from "@/content/site-content";
import { Button, Text } from "@website/ui";
import { Shell, Navbar } from "@website/ui/layout";
import { FooterSection } from "@website/ui/sections";

function NavBrand() {
  return (
    <Link href="/" className="block min-w-0 truncate">
      <Text as="span" variant="heading" className="text-lg tracking-[0.12em]">
        <span className="text-forge-accent">{site.brand.shortName}</span>
        <span className="ml-2 hidden text-heading sm:inline">
          {site.brand.logoLabel}
        </span>
      </Text>
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <Shell>
      <Navbar
        brand={<NavBrand />}
        items={[...site.nav]}
        trailing={
          <Button href="/booking" variant="outline" size="sm">
            Anfrage stellen
          </Button>
        }
      />
      {children}
      <FooterSection
        social={[...site.footer.social]}
        legalLine={
          <span>
            © {new Date().getFullYear()} {site.brand.name}
          </span>
        }
      >
        <Text variant="muted" as="p" className="max-w-md text-sm">
          {site.footer.tagline}
        </Text>
        <Button href={`mailto:${site.footer.email}`} variant="ghost" size="sm" className="px-0">
          {site.footer.email}
        </Button>
      </FooterSection>
    </Shell>
  );
}
