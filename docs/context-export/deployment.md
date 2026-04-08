# Deployment

## Vercel Setup

- **Nachweis im Repo:** `.vercelignore` (Ignorierregeln für Deployment/Upload)
- **Fehlt:** `vercel.json`, Dokumentation zur Projektverknüpfung
- **Framework:** Next.js — typischerweise von Vercel automatisch erkannt, aber **ohne Repo-Datei nicht belegt**

## Expo Setup

**Nicht vorhanden.**

## Build Commands

Aus `package.json`:

| Script   | Befehl        |
|----------|---------------|
| `dev`    | `next dev`    |
| `build`  | `next build`  |
| `start`  | `next start`  |
| `lint`   | `next lint`   |

## Scripts

Nur die vier obigen npm-Scripts; keine `scripts/`-Ordner-Dateien im Repository.

## CI Logik

**Nicht vorhanden** im erfassten Dateibestand:

- kein `.github/workflows/`
- kein `.gitlab-ci.yml`
- keine andere CI-Konfiguration gefunden

## Ignore Steps / Ignore-Dateien

### `.vercelignore` (Zeileninhalte)

```
ui8
node_modules
.next
.git
.vercel
*.log
*.zip
*.fig
*.sketch
*.psd
*.mp4
*.mov
*.tsbuildinfo
dist
build
coverage
```

### `.gitignore`

Enthält u. a. `node_modules`, `.next`, `out`, `.env*.local`, `ui8/`, `.vercel` — siehe auch `known-issues.md` wegen Dateikorruption.

## Bekannte Deploy Probleme

- **Keine** aus Build-Logs: `next build` und `next lint` liefen in der Analyse erfolgreich durch.
- Potenziell **operativ:** fehlerhafte `.gitignore` kann bei Zusammenarbeit/Tooling irritieren; für Vercel-Build i. d. R. ohne direkten Build-Blocker.
