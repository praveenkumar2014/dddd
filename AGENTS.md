# AGENTS.md

## Project
Canvas marketing site — React 18 + TypeScript + Vite 5 + Tailwind. Single-page
marketing surface with client-side routing and a Supabase-backed lead form.

## Commands
- `npm run dev -- --host 0.0.0.0 --port 12000` — dev server (port 12000 is the
  exposed work port; `vite.config.ts` allowlists `*.prod-runtime.all-hands.dev`).
- `npm run build` — runs strict `tsc -b` then `vite build`. Must stay clean.
- `npm run preview -- --port 12001` — serve the production bundle.
- There is no unit-test runner configured. Verify UI changes with a headless
  Chromium driver against the running server (`/usr/bin/chromium` is installed).

## Architecture
- Routing: `src/lib/site.ts` is the single source of truth for routes/page
  metadata. `src/main.tsx` mounts `BrowserRouter`; `src/App.tsx` is the layout
  route rendering `Header` / `Outlet` / `Footer` / `CookieConsent` /
  `ContactSalesModal`.
- Navigation: `src/lib/nav.ts` is the config that drives both the desktop mega
  menu and the mobile accordion — add nav entries there, not in components.
  `isPathActive()` provides route-matching for active states.
- Header: `src/components/layout/*` — `Header` composes `Brand`,
  `DesktopNavigation`, `HeaderActions`, `MobileNavigation`. Mega menus open on
  hover and click; a `hoverOpened` ref prevents a hover-open + click from
  immediately closing the panel.
- Shared hooks: `useScrollState` (header elevation), `useScrollLock` (drawer /
  modal body lock), `useFocusTrap` (modal focus containment + restore).

## Conventions
- `useId()` values are sanitised (`.replace(/[:]/g, "")`) before use in CSS
  selectors or `aria-controls` — React's raw ids contain colons, which are
  invalid in `querySelector`.
- Any element that reaches past the viewport edge must live inside the
  `overflow-x-clip` main region, or be `overflow-hidden`; verify no horizontal
  overflow at 320–1920px.
- Interactive-looking elements that are purely decorative mockups should be
  `aria-hidden` non-buttons, not real `<button>` elements.
- Respect `prefers-reduced-motion` (guarded in `src/index.css`) for any new
  animation.

## Lead capture
`src/components/ContactSalesModal.tsx` writes to Supabase table `sales_leads`
(migration in `supabase/migrations/`). Without `VITE_SUPABASE_URL` and
`VITE_SUPABASE_ANON_KEY` it shows an explicit "not configured" message rather
than faking success — keep that behaviour when editing.
