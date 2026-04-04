import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons/ArrowRight";
import { SiteShell } from "@/components/layout/SiteShell";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ArtistsSection } from "@/components/sections/ArtistsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkCard } from "@/components/ui/WorkCard";
import { site } from "@/content/site-content";

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        <section className="px-gutter pb-section pt-4 md:pt-8">
          <div className="mx-auto grid max-w-shell gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
            <div className="space-y-8 text-center lg:text-left">
              <Link
                href={site.hero.badge.href}
                className="mx-auto inline-flex items-center gap-3 rounded-pill border border-forge-border/70 bg-surface/50 px-3 py-2 pl-2 text-left text-xs font-medium text-muted transition-colors hover:border-forge-accent/45 hover:text-heading lg:mx-0"
              >
                <span className="flex -space-x-2">
                  <span className="h-8 w-8 rounded-full border-2 border-forge-surface bg-forge-accent-muted" />
                  <span className="h-8 w-8 rounded-full border-2 border-forge-surface bg-forge-grey/40" />
                  <span className="h-8 w-8 rounded-full border-2 border-forge-surface bg-forge-accent-dark/80" />
                </span>
                <span className="pr-1">
                  <span className="block text-[10px] uppercase tracking-wider text-muted/80">
                    {site.hero.badge.avatarsHint}
                  </span>
                  <span className="flex items-center gap-1 text-heading">
                    {site.hero.badge.text}
                    <ArrowRight className="h-3.5 w-3.5 text-forge-accent" />
                  </span>
                </span>
              </Link>

              <h1 className="font-display text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
                <span className="block text-heading">{site.hero.titleLine1}</span>
                <span className="block text-forge-accent">{site.hero.titleAccent}</span>
                <span className="block text-heading">{site.hero.titleLine2}</span>
              </h1>

              <p className="mx-auto max-w-xl text-base leading-relaxed text-muted lg:mx-0 lg:text-lg">
                {site.hero.subtitle}
              </p>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Button href={site.hero.primaryCta.href} variant="primary" className="w-full min-w-[200px] sm:w-auto">
                  {site.hero.primaryCta.label}
                </Button>
                <Button href={site.hero.secondaryCta.href} variant="secondary" className="w-full min-w-[200px] sm:w-auto">
                  {site.hero.secondaryCta.label}
                </Button>
              </div>
            </div>

            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-forge border border-forge-border/55 lg:max-w-none lg:mx-0">
              <Image
                src={site.hero.image.src}
                alt={site.hero.image.alt}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 90vw, 45vw"
                priority
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-forge-border/50" />
            </div>
          </div>
        </section>

        <section className="border-y border-forge-border/45 bg-section px-gutter py-10 md:py-12">
          <div className="mx-auto grid max-w-shell gap-8 sm:grid-cols-3">
            {site.stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-4xl font-extrabold text-forge-accent md:text-5xl">{s.value}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id={site.about.id} className="px-gutter py-section scroll-mt-24">
          <div className="mx-auto max-w-shell">
            <SectionHeading eyebrow={site.about.eyebrow} title={site.about.title} description={site.about.body} />
          </div>
        </section>

        <TrustSection />

        <ProcessSection />

        <section id={site.workTeaser.id} className="border-t border-forge-border/45 px-gutter py-section scroll-mt-24">
          <div className="mx-auto max-w-shell">
            <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
              <SectionHeading
                noMargin
                eyebrow={site.workTeaser.eyebrow}
                title={site.workTeaser.title}
                description={site.workTeaser.body}
              />
              <Button href={site.workTeaser.cta.href} variant="secondary" className="shrink-0 self-start md:self-auto">
                {site.workTeaser.cta.label}
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {site.workTeaser.items.map((w) => (
                <WorkCard key={w.title} title={w.title} category={w.category} src={w.src} alt={w.alt} href="/portfolio" />
              ))}
            </div>
          </div>
        </section>

        <ArtistsSection />

        <section id={site.testimonial.id} className="px-gutter py-section scroll-mt-24">
          <div className="mx-auto max-w-shell">
            <div className="rounded-forge border border-forge-border/55 bg-surface/35 p-8 md:p-12">
              <p className="font-display text-xl font-medium leading-relaxed text-heading md:text-2xl">
                {site.testimonial.quote}
              </p>
              <div className="mt-8 border-t border-forge-border/55 pt-6">
                <p className="font-display text-sm font-bold uppercase tracking-wide text-forge-accent">
                  {site.testimonial.name}
                </p>
                <p className="mt-1 text-sm text-muted">{site.testimonial.role}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-gutter py-section">
          <div className="mx-auto max-w-shell">
            <SectionHeading
              align="center"
              eyebrow={site.faq.eyebrow}
              title={site.faq.title}
            />
            <FaqAccordion items={site.faq.items} />
            {/* Soft CTA nach FAQ */}
            <p className="mt-8 text-center text-sm text-muted">
              Frage nicht dabei?{" "}
              <Link href="/booking" className="text-heading underline underline-offset-4 decoration-forge-border/60 hover:decoration-forge-accent transition-colors">
                Schreib uns direkt.
              </Link>
            </p>
          </div>
        </section>

        {/* Final CTA Band — kein Gradient, kein Druck */}
        <section className="border-t border-forge-border/45 px-gutter pb-section pt-section">
          <div className="mx-auto max-w-shell">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              {/* Statement */}
              <div className="space-y-4 lg:max-w-xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-forge-accent/70">
                  Anfrage
                </p>
                <h2 className="font-display text-3xl font-bold uppercase leading-none tracking-tight text-heading md:text-4xl lg:text-5xl">
                  {site.ctaBand.statement}
                </h2>
                <p className="max-w-md text-base leading-relaxed text-muted">
                  {site.ctaBand.body}
                </p>
              </div>

              {/* CTA Block */}
              <div className="flex flex-col gap-4">
                <Button href={site.ctaBand.cta.href} variant="primary" className="self-start lg:self-auto">
                  {site.ctaBand.cta.label}
                </Button>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted/45">
                  {site.ctaBand.note}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
