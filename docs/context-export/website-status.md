# Website-Status

## Vorhanden

Ja — die **gesamte** implementierte Oberfläche ist diese Website (Next.js).

## Next.js Struktur

- **App Router:** `src/app/`
- **Root Layout:** `src/app/layout.tsx` — Fonts, `lang="de"`, Metadata aus `site`
- **Globale Styles:** `src/app/globals.css` (Tailwind + CSS-Variablen)
- **Seiten:** `page.tsx` (Home), `booking/page.tsx`, `portfolio/page.tsx`

## Sections (inhaltlich / komponentenbasiert)

Auf der **Startseite** (Reihenfolge in `src/app/page.tsx`):

1. Hero (Badge, Titel, Untertitel, CTAs, Bild)
2. Stats-Band
3. About (`#about`)
4. `TrustSection` (`site.trust`, id aus Content)
5. `ProcessSection` (`site.process`)
6. Work-Teaser (`#arbeit`, drei `WorkCard`, Link Portfolio)
7. `ArtistsSection`
8. Testimonial (`#stimmen`)
9. FAQ (`FaqAccordion`) + Textlink zu `/booking`
10. Finales CTA-Band (Statement + Button)

**Portfolio-Seite:** `SectionHeading` + `PortfolioGallery` (Filter + Grid).

**Booking-Seite:** `SectionHeading` + `BookingForm` + `ContactCard`s.

## Routing

Siehe `architecture.md`. Keine dynamischen Routen (`[slug]`), keine Route Groups, keine Middleware-Datei im erfassten Bestand.

## Umfragen Integration

**Nicht vorhanden** — kein Umfrage-Widget, keine Embed-IDs, keine Form-Backend-Integration außer dem Hinweistext zu Formspark/Resend.

## CTA Buttons

- Hero: primär `/booking`, sekundär `/portfolio`
- Work-Teaser: „Alle Arbeiten“ → `/portfolio`
- Künstler-Karten: CTAs aus Content (`ctaHref`, `portfolioHref` → Buchung/Portfolio)
- Portfolio-Items: Hover-Link „Ähnliches anfragen“ → `/booking`
- CTA-Band: `/booking`
- Header (Desktop/Mobile): „Anfrage stellen“ → `/booking`
- FAQ-Zusatz: Link „Schreib uns direkt“ → `/booking`

Implementierung überwiegend über `Button`-Komponente mit `href` und `Link` von Next.js.

## Deployment Status (Vercel)

- **Im Repo:** `.vercelignore` vorhanden (schließt u. a. `node_modules`, `.next`, `.vercel`, Log-/Medienmuster aus)
- **`vercel.json`:** fehlt
- **Tatsächliches Produktions-Deployment:** aus dem Repository **nicht verifizierbar**

## Bekannte UI Probleme

Im Code/Build **keine** dokumentierten offenen UI-Bugs oder FIXME-Kommentare gefunden. Subjektive UX-Probleme wurden nicht getestet (kein Browser-Lauf in dieser Analyse).

## Bekannte Encoding Probleme

- **`.gitignore`:** Datei enthält beschädigte Zeilen (u. a. doppelte `ui8/`-Einträge, Zeilen mit abgesetzten Zeichen wie `n o d e _ m o d u l e s`) — siehe `known-issues.md`
- Sonst: `layout.tsx` setzt `lang="de"`; Texte in UTF-8 im Source
