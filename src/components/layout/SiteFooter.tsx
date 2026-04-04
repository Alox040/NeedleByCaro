import Link from "next/link";
import { site } from "@/content/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-forge-border/45 px-gutter py-12 md:py-16">
      <div className="mx-auto flex max-w-shell flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <p className="font-display text-xl font-bold uppercase tracking-tight text-heading">
            {site.brand.name}
          </p>
          <p className="text-sm text-muted">{site.footer.tagline}</p>
          <a
            href={`mailto:${site.footer.email}`}
            className="text-sm text-forge-accent hover:text-forge-accent-hover"
          >
            {site.footer.email}
          </a>
        </div>
        <div className="flex flex-wrap gap-8">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-muted">Navigation</p>
            <ul className="space-y-2 text-sm text-primary/90">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-forge-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-muted">Social</p>
            <ul className="space-y-2 text-sm">
              {site.footer.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="text-primary/90 hover:text-forge-accent" target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-shell text-center text-xs text-muted/70">
        © {new Date().getFullYear()} {site.brand.name}
      </p>
    </footer>
  );
}
