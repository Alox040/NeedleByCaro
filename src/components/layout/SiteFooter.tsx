import Link from "next/link";
import { site } from "@/content/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-gutter py-14 text-gray-600 md:py-20">
      <div className="mx-auto flex max-w-shell flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <p className="font-display text-xl font-bold uppercase tracking-tight text-gray-600">
            {site.brand.name}
          </p>
          <p className="text-sm text-gray-600">{site.footer.tagline}</p>
          <a
            href={`mailto:${site.footer.email}`}
            className="text-sm text-gray-600 transition-colors hover:text-black"
          >
            {site.footer.email}
          </a>
        </div>
        <div className="flex flex-wrap gap-8">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-600">Navigation</p>
            <ul className="space-y-2 text-sm text-gray-600">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-black">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-600">Social</p>
            <ul className="space-y-2 text-sm">
              {site.footer.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="text-gray-600 transition-colors hover:text-black" target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-shell text-center text-xs text-gray-600">
        © {new Date().getFullYear()} {site.brand.name}
      </p>
    </footer>
  );
}
