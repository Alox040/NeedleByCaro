# App-Status (Mobile / Native)

## Kontext

Dieses Repository enthält **ausschließlich eine Next.js-Webanwendung**. Es gibt **keine** Expo-App, **kein** `app.json` / `expo`-Abhängigkeiten und **keinen** separaten Mobile-Codepfad.

Die folgenden Punkte aus der Vorlage sind daher **nicht anwendbar** (kein zugehöriger Code):

- Medication Flow
- Algorithm Flow
- Search Flow (als eigenes Produkt-Feature)
- Detail Screens (außer den drei Web-„Screens“ unten)
- Mock Data vs. echte Daten (außer: statische `site-content` vs. Backend)
- Offline Support
- Expo Status

## „Screens“ vorhanden (Web-Seiten)

| Route        | Datei                    | Rolle                          |
|-------------|--------------------------|--------------------------------|
| `/`         | `src/app/page.tsx`       | Landing mit allen Hauptsektionen |
| `/portfolio`| `src/app/portfolio/page.tsx` | Portfolio-Galerie + Filter   |
| `/booking`  | `src/app/booking/page.tsx`   | Kontakt + Buchungsformular   |

## Navigation Flow (Web)

- **Desktop:** horizontale `Link`-Navigation aus `site.nav` + CTA zu `/booking`
- **Mobile:** Hamburger öffnet vertikale Links + CTA
- **Intern:** Anker-Links von `/` zu Sektionen (`#about`, `#arbeit`, `#stimmen`, etc.)

## Mock Data vs. echte Daten

- **Datenquelle:** alles aus `src/content/site-content.ts` (hardcodiert, `as const`)
- **Bilder:** überwiegend **Unsplash-URLs** (in `next.config.ts` für `images.unsplash.com` freigegeben)
- **Formular:** **sendet keine Daten** an ein Backend (nur `preventDefault` auf Submit)

## Offline Support Status

**Nicht implementiert** (kein Service Worker, kein PWA-Manifest im erfassten Dateibestand).

## Expo Status

**Nicht vorhanden.**

## Build Status (Web)

- `npm run build`: **erfolgreich** (Next.js meldet statische Prerender für `/`, `/booking`, `/portfolio`)
- `npm run lint`: **keine** ESLint-Warnungen oder -Fehler (Hinweis: `next lint` ist laut CLI in Next.js 16 deprecated)
