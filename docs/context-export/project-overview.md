# Projektübersicht

## Projektname

- **npm-Paket:** `tattoo-web-caro` (`package.json`)
- **README (Repo-Root):** „NeedleByCaro“
- **Markenname in der App:** „Nadelwerk“ (`site.brand.name` in `src/content/site-content.ts`)

## Ziel des Projekts

Öffentliche Marketing-/Studio-Website für ein Tattoo-Studio: Startseite mit Hero, Über uns, Vertrauen, Ablauf, Arbeitsteaser, Künstler, Testimonial, FAQ, CTA; separate Seiten für Portfolio (Filter-Galerie) und Buchungs-/Kontaktseite mit Formular (derzeit ohne Backend).

## Aktuelle Phase

Im Repository ist **keine explizite Phasenbezeichnung** (MVP / Phase 0 / Phase 1) dokumentiert. Funktional entspricht der Stand einer **lauffähigen statischen Marketing-Site** mit clientseitigen Interaktionen (Menü, Portfolio-Filter, Formular ohne Versand).

## Kurzer Status

- **Entwicklung:** Ja (lokal bau- und lint-frei nach Prüfung am 2026-04-08)
- **Testbar:** `npm run dev` / `npm run build` — Build erfolgreich
- **Deployed:** Nicht aus dem Code ableitbar; `.vercelignore` existiert (Hinweis auf mögliche Vercel-Nutzung), **`vercel.json` fehlt**

## Architekturüberblick

- **Next.js App Router** (`src/app/`)
- **React 19** + **TypeScript**
- Inhalte zentral in **`src/content/site-content.ts`** (const-Objekt + exportierter Typ `SiteContent`)
- UI-Komponenten unter `src/components/` (Layout, Sections, UI-Primitives, Icons)
- Styling: **Tailwind CSS** + Design-Tokens in `globals.css` („Forge“-Thema, Light)

## Verwendete Technologien

| Bereich        | Technologie                          |
|----------------|--------------------------------------|
| Framework      | Next.js 15.x (Lockfile/Build: 15.5.14)|
| UI             | React 19, React DOM 19               |
| Sprache        | TypeScript 5.7                       |
| Styling        | Tailwind CSS 3.4, PostCSS            |
| Fonts          | `next/font/google` (Barlow Condensed, Plus Jakarta Sans) |
| Bilder         | `next/image`, Remote: `images.unsplash.com` (siehe `next.config.ts`) |
| Lint           | ESLint 9 + `eslint-config-next`      |

## Monorepo-Struktur

**Nicht vorhanden.** Kein `apps/`- oder `packages/`-Workspace; ein einzelnes Next-Projekt im Repository-Root.

## Apps + Packages Übersicht

- **Eine App:** die Next.js-Anwendung im Root
- **Keine** separaten Packages im Sinne eines Monorepos

## Wichtigste Features (implementiert)

- Responsive **SiteShell** mit Header (Desktop-Nav + Mobile-Menü), Footer, **ForgeCanvas**-Rahmen
- **Startseite** (`/`): Hero mit CTAs, Stats, About, Trust-, Process-, Work-Teaser, Artists, Testimonial, FAQ (Accordion), finales CTA-Band
- **Portfolio** (`/portfolio`): Kategoriefilter, Masonry-ähnliches Grid, Links zu Buchung
- **Buchung** (`/booking`): Kontaktkarten + Formularfelder; Submit verhindert Default nur clientseitig (`preventDefault`), **kein API-/E-Mail-Versand**
- **Anchor-Navigation** von der Nav zu `/#about`, `/#arbeit`, `/#stimmen` (IDs in `site-content`)

## Geplante Features (nur aus Code-Kommentaren / Texten ableitbar)

- Formular-Anbindung z. B. an **Formspark** oder **Resend** (Hinweis in `site.booking.form.note`)
- Eigene Medien unter `public/` (Kommentar in `site-content.ts`); aktuell überwiegend Unsplash-URLs

## Bekannte Probleme / Inkonsistenzen (faktisch im Repo)

- **Branding:** Abweichung README („NeedleByCaro“) vs. App („Nadelwerk“) vs. Paketname
- **`.gitignore`:** enthält fehlerhafte/duplizierte Zeilen und UTF-16-artige Fragmente (siehe `known-issues.md`)
- **`.vercelignore`:** erste Zeile `ui8` (unklare Absicht ohne weitere Kontextdatei)
