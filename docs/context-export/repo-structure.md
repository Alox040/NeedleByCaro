# Repository-Struktur

Stand: aus dem Dateisystem des Repositories abgeleitet (inkl. neu angelegter `docs/context-export/`).

## Baumstruktur

```
TattooWebCaro/
├── docs/
│   └── context-export/          # Projekt-Kontext-Export (10 × Markdown)
│       ├── architecture.md
│       ├── app-status.md
│       ├── context-summary.md
│       ├── data-structure.md
│       ├── deployment.md
│       ├── known-issues.md
│       ├── project-overview.md
│       ├── repo-structure.md
│       ├── roadmap.md
│       └── website-status.md
├── src/
│   ├── app/                     # Next.js App Router: Layout, globale CSS, Seiten
│   │   ├── booking/
│   │   │   └── page.tsx
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── forge/               # ForgeCanvas — äußerer Seitenrahmen
│   │   ├── icons/               # Kleine SVG-Icon-Komponenten
│   │   ├── layout/              # Header, Footer, Shell
│   │   ├── sections/            # Seitenabschnitte & Formular, Galerie
│   │   └── ui/                  # Button, Inputs, Cards, Headings
│   └── content/
│       └── site-content.ts      # Zentrale Texte, Nav, Portfolio-Daten
├── .eslintrc.json
├── .gitignore
├── .vercelignore
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Angefragte Wurzelordner

| Ordner     | Status im Repo |
|-----------|----------------|
| `apps/`   | **Nicht vorhanden** |
| `packages/` | **Nicht vorhanden** |
| `docs/`   | **Vorhanden** (mit `context-export/` aus dieser Aufgabe) |
| `scripts/` | **Nicht vorhanden** |

## Kurzbeschreibung je Ordner / Bereich

| Pfad | Beschreibung |
|------|----------------|
| `src/app/` | Routen und Root-Layout; Metadata und globale Styles. |
| `src/app/booking/` | Buchungs-/Kontaktseite. |
| `src/app/portfolio/` | Portfolio-Übersichtsseite. |
| `src/components/forge/` | Visueller „Canvas“-Wrapper mit Grid-Hintergrund. |
| `src/components/icons/` | Wiederverwendbare Icon-Komponenten. |
| `src/components/layout/` | Kopf-, Fußzeile und gemeinsame Hülle der Seiten. |
| `src/components/sections/` | Größere zusammengesetzte Blöcke (FAQ, Galerie, …). |
| `src/components/ui/` | Generische UI-Bausteine. |
| `src/content/` | Single Source of Truth für statische Website-Inhalte. |
| `docs/context-export/` | Export-Dokumente für externe Analyse (Markdown). |

## Hinweis zu `public/`

Im erfassten Dateiindex **kein** `public/`-Ordner mit Dateien — Next.js kann ihn bei Bedarf anlegen; aktuell werden Bilder über Remote-URLs (`images.unsplash.com`) genutzt.
