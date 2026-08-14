# NIS2 Analyzer — Landing Page (PRD v2 implementation)

Drop these files into your `create-next-app` project root (overwrite `app/layout.tsx`,
`app/page.tsx`, `app/globals.css`, `next.config.ts`; add `components/` and `lib/`).

Already assumed installed: next (App Router + TS + Tailwind v4), shadcn init,
`motion`, `lenis`, `lucide-react`.

## What's where
- `components/audit-demo.tsx` — the signature hero animation (scan → highlight → finding stamps in). SSR/no-JS/reduced-motion all render the final state.
- `components/scope-checker.tsx` — interactive "does this apply to you" (client); the full sector list + fines are also static HTML in `sections/scope.tsx`.
- `app/globals.css` — ink & brass tokens, dash/pulse keyframes, global reduced-motion kill switch.
- Fonts: Newsreader (display) / Public Sans (body) / JetBrains Mono (evidence) via `next/font/google` in `layout.tsx`.

## Notes
- Verified with `next build` + static export: all sector names, fine figures, and findings are in the raw HTML; no vendor names leak into visible copy.
- Dark (ink) is default; the theme toggle persists to localStorage with a no-flash inline script in `<head>`.
- The dashboard in Act 2 is a built placeholder — swap the inner block of `sections/product-preview.tsx` for a real screenshot when you have one.
- shadcn `ui/` components aren't required by these files (native elements styled with the tokens) — keep them for future pages.
