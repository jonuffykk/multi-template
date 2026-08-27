# App

Next.js (static export) shipped to desktop via Tauri and mobile via Capacitor.

## Dev

```bash
npm install
npm run dev          # web
npm run tauri:dev    # desktop
```

## Android (one-time)

```bash
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

## Builds (CI)

Push a tag `v*` (e.g. `v0.1.0`) to trigger GitHub Actions:

- `.github/workflows/desktop.yml` — Tauri builds for Linux, macOS, Windows (draft GitHub release with installers).
- `.github/workflows/android.yml` — Capacitor Android debug APK (uploaded as a workflow artifact).

Both can also be run manually via `workflow_dispatch`.
