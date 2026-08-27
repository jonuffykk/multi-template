# MultiApp

Next.js (static export) shipped to desktop via Tauri and mobile via Capacitor, from one codebase.

## Dev

```bash
npm install
npm run dev          # web
npm run tauri:dev    # desktop
```

## Android (one-time / local)

```bash
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

## Release (CI)

Push a tag to trigger `.github/workflows/release.yml`:

```bash
git tag v0.1.0
git push origin v0.1.0
```

One workflow builds everything and publishes a single GitHub Release:

- Desktop installers for Linux (`.deb`, `.rpm`, `.AppImage`), macOS (`.dmg`), and Windows (`.msi`, `.exe`) via Tauri.
- An Android debug APK via Capacitor + Gradle, attached to the same release.

Can also be run manually via `workflow_dispatch` (enter the tag to publish under).

Rust and Gradle builds are cached (`Swatinem/rust-cache`, Gradle cache) so repeat CI runs are much faster than the first one.

## Naming

- App id (desktop): `com.multiapp.desktop`
- App id (mobile): `com.multiapp.mobile`
- Product name: `MultiApp`

Change these in `src-tauri/tauri.conf.json`, `capacitor.config.ts`, and `package.json` before shipping your own app.
