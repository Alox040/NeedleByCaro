# Bekannte Issues

Automatisch bzw. durch Repo-Inspektion und Tool-Läufe ermittelt. Keine erfundenen Einträge.

## Build Fehler

- **Aktuell:** keiner — `npm run build` beendet mit Exit Code 0 (Next.js 15.5.14 laut Build-Output).

## Navigation Probleme

- **Im Code keine gemeldeten Bugs.**  
- **Hinweis:** Nav-Einträge zeigen auf Anker (`/#about` etc.) von beliebigen Seiten aus; von `/portfolio` oder `/booking` führen dieselben Links zur Startseite mit Anker (Next.js `Link`-Verhalten — nicht als Fehler klassifiziert, aber zu kennen).

## Expo Probleme

**Nicht anwendbar** — kein Expo-Projekt.

## SDK Konflikte

**Nicht festgestellt** — schlanke `dependencies` (next, react, react-dom). Keine nativen SDKs.

## Routing Probleme

**Nicht festgestellt.** Nur drei statische Routen + `_not-found`.

## Encoding Probleme

- **`.gitignore`:** beschädigte Einträge am Dateiende (u. a. Zeichen mit Leerzeichen dazwischen, Duplikate von `ui8/`-Zeilen). Datei teilweise als „binär“ nicht normal lesbar; Inhalt über `rg` verifiziert.

## Deployment Warnungen

- **Keine** aus dem Build-Protokoll.
- **ESLint:** CLI meldet, dass `next lint` in Next.js 16 entfernt wird — Migration zu ESLint CLI empfohlen (Hinweis bei `npm run lint`, kein Build-Warning).

## Sonstiges

- **`.vercelignore`:** erste Zeile `ui8` — unklar ob Tippfehler oder bewusst; steht nicht in `package.json` oder Docs erklärt.
