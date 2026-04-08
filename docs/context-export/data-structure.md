# Datenstrukturen

Die Vorlage nannte Medikations-/Algorithmus-Schemas. **Dieses Projekt enthält keine solchen Schemas.**

Nachfolgend nur **tatsächlich** im Code vorkommende Strukturen (aus `src/content/site-content.ts` und abgeleitetem Typ `SiteContent`).

## Zentrales Content-Objekt `site`

Top-Level-Keys (alle in einer Datei):

| Key | Kurzbeschreibung |
|-----|------------------|
| `brand` | name, shortName, logoLabel |
| `nav` | Array `{ href, label }[]` |
| `hero` | badge, titleLines, subtitle, CTAs, image `{ src, alt }` |
| `about` | id, eyebrow, title, body |
| `stats` | `{ value, label }[]` |
| `workTeaser` | id, eyebrow, title, body, cta, items (title, category, src, alt) |
| `testimonial` | id, quote, name, role |
| `faq` | eyebrow, title, items `{ q, a }[]` |
| `ctaBand` | statement, body, cta, note |
| `footer` | tagline, email, social[] |
| `portfolio` | title, subtitle, categories (Tuple), items[] |
| `trust` | id, eyebrow, title, items (icon, label, headline, body) |
| `process` | id, eyebrow, title, description, steps[] |
| `artists` | id, eyebrow, title, description, items (Künstler mit image, bio, specialities, hrefs) |
| `booking` | title, subtitle, form (Labels + note), contactCards |

## Portfolio-Item (Teilstruktur)

```ts
// Konzeptionell, entspricht Elementen von site.portfolio.items
{
  title: string;
  style: "Blackwork" | "Fine Line" | "Ornamental" | "Custom";
  placement: string;
  src: string;  // URL
  alt: string;
}
```

## Kategorien Portfolio

`categories`: `["Alle", "Blackwork", "Fine Line", "Ornamental", "Custom"]` (const)

## Typableitung

```ts
export type SiteContent = typeof site;
```

## medication schema

**Nicht vorhanden.**

## algorithm schema

**Nicht vorhanden.**

## guideline schema

**Nicht vorhanden** (FAQ ist freier Text in `site.faq`, kein separates Schema-Format).

## content package schema

**Nicht vorhanden** (ein einzelnes TS-Modul, kein Versioniertes Content-Paket).

## version schema

**Nicht vorhanden** (außer `package.json` `"version": "0.1.0"` als App-Paketversion).

## release schema

**Nicht vorhanden.**
