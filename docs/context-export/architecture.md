# Architektur

Analyse ausschließlich aus dem vorhandenen Code. Begriffe wie „Domain Layer“, „Medications“, „Release Engine“ treffen auf dieses Repository **nicht** zu; unten jeweils vermerkt.

## Ordnerstruktur (real)

```
Repository-Root/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # React-Komponenten
│   └── content/             # Zentrale Inhaltsdatei
├── (Konfiguration: next.config.ts, tailwind.config.ts, tsconfig.json, package.json, …)
```

**Nicht vorhanden:** `apps/`, `packages/`, dedizierter `domain/`- oder `services/`-Layer.

## Navigationstruktur (App)

Definiert in `site.nav` (`src/content/site-content.ts`):

| Pfad           | Label      | Hinweis                    |
|----------------|------------|----------------------------|
| `/`            | Start      |                            |
| `/#about`      | Über uns   | `id="about"` auf Startseite |
| `/#arbeit`     | Arbeit     | Work-Teaser-Section        |
| `/#stimmen`    | (Badge)    | Testimonial-Section        |
| `/portfolio`   | Portfolio  | eigene Route               |
| `/booking`     | Termin     | eigene Route               |

Zusätzlich im **SiteHeader**: primärer Button „Anfrage stellen“ → `/booking`.

**App Router-Routen** (aus erfolgreichem `next build`):

- `/` — `src/app/page.tsx`
- `/booking` — `src/app/booking/page.tsx`
- `/portfolio` — `src/app/portfolio/page.tsx`
- `/_not-found` — Framework

## Domain Layer Struktur

**Nicht vorhanden.** Keine getrennte Domain-/Use-Case-Schicht; Geschäftslogik ist minimal (Filterung Portfolio clientseitig, Formular ohne Persistenz).

## Datenmodelle

Keine Datenbank, keine ORM-Models, keine API-Schemas.

**Inhaltliches „Modell“:** das konstante Objekt `site` in `src/content/site-content.ts` mit u. a.:

- `brand`, `nav`, `hero`, `about`, `stats`, `workTeaser`, `testimonial`, `faq`, `ctaBand`, `footer`
- `portfolio`: `categories`, `items[]` (title, style, placement, src, alt)
- `trust`, `process`, `artists`, `booking`

Exportierter Typ: `SiteContent = typeof site`.

## Versioning System

**Nicht vorhanden** (kein Content-Package-Versioning, kein API-Version-Pfad).

## Release Engine

**Nicht vorhanden.**

## Content Struktur (medications / algorithms etc.)

**Nicht vorhanden.** Keine Medikations-, Algorithmus- oder Guideline-Inhalte im Code.

Relevant ist nur **`src/content/site-content.ts`** (Studio-Marketing- und Portfolio-Texte/Bilder).

## Services

**Nicht vorhanden** als eigene Schicht (keine `lib/services`, keine Server Actions für Formular, keine externen SDK-Wrapper-Module im Repo).

## Entities

**Nicht vorhanden** im DDD-Sinne.

## Policies

**Nicht vorhanden** als Code (keine RBAC, keine Consent-Policy-Module).

## Kompositions-Layer (UI)

- **`SiteShell`:** umschließt Seiten mit `ForgeCanvas` → `SiteHeader` → `{children}` → `SiteFooter`
- **Sections:** u. a. `TrustSection`, `ProcessSection`, `ArtistsSection`, `FaqAccordion`, `PortfolioGallery`, `BookingForm`
- **Layout-Komponenten:** `SiteHeader` (client), `SiteFooter`
- **Forge:** `ForgeCanvas` — äußerer Seitenrahmen mit Grid-Hintergrund (Kommentar: „UI8 Forge“)

## Alias

- TypeScript-Pfad: `@/*` → `./src/*` (`tsconfig.json`)
