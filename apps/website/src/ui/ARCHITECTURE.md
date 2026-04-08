# Website UI — Architektur

Dieses Paket ist die **neue UI-Grundlage** (Dark Theme zuerst). Es ist bewusst von `src/components` getrennt.

## Ordner

| Pfad | Zweck |
|------|--------|
| `theme/` | Design Tokens (CSS), `ThemeProvider`, Typen |
| `primitives/` | Atomare Bausteine ohne Domain (später z. B. Text, Surface) |
| `components/` | Zusammengesetzte, wiederverwendbare UI (ohne Seiteninhalt) |
| `layout/` | Raster, Container, Seitenrahmen |
| `sections/` | Große vertikale Blöcke für Landing-Seiten (nur Platzhalter bis Inhalte angebunden werden) |

## Datenfluss

1. **`globals.css`** definiert CSS-Variablen auf `:root` (Standard: **Dark**). Light per `data-theme="light"` am `<html>`-Element.
2. **`ThemeProvider`** setzt `data-theme` (Client) und optional eine Klasse für Legacy-Hooks.
3. **`Container`** kapselt horizontales Padding und maximale Breite (`--shell-max`, `--gutter-x`).

## Imports

TypeScript: `@website/ui/...` (siehe `tsconfig.json`).

## Tailwind

`tailwind.config.ts` scannt `./apps/website/**/*.{ts,tsx}` für Klassen in diesem Paket.

## CSS-Einstieg

Die App importiert die Tokens und Layer über `src/app/globals.css` → `@import` auf `apps/website/src/ui/theme/globals.css`.
