# Go4Digital Framework v1 — Architecture

Sprint 1 foundation. Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui pattern · CVA · Lucide.

## Folder structure

```
go4digital-framework/
├── package.json              Dependencies pinned to the approved stack
├── tsconfig.json             Strict TS, @/* → src/*
├── next.config.ts            React strict mode, AVIF/WebP (Bible §16)
├── postcss.config.mjs        Tailwind v4 via @tailwindcss/postcss
├── eslint.config.mjs         next/core-web-vitals + next/typescript
├── .prettierrc
├── public/                   Static assets (job photos, favicon). Nothing else.
└── src/
    ├── app/                  Routes only. No business logic, no UI definitions.
    │                         layout.tsx = fonts, skip-link, Navbar/Footer shell.
    │                         page.tsx   = section composition only.
    ├── styles/               globals.css — THE design tokens (Bible §18) as
    │                         Tailwind v4 @theme. Single source of truth.
    │                         Components may not declare colors/spacing/radii.
    ├── components/
    │   ├── ui/               Primitives (Button, Input…). shadcn/ui pattern:
    │   │                     CVA variants + tailwind-merge. Variants defined
    │   │                     here are the ONLY variants (Bible §17 contract).
    │   ├── layout/           Structural: Container (grid §5), Section (§12
    │   │                     rhythm), Footer.
    │   ├── navigation/       Navbar + mobile menu. Own folder because nav
    │   │                     carries the most interaction/a11y logic.
    │   ├── sections/         Page sections (Hero…). Compose layout + ui +
    │   │                     content. One file per wireframe section.
    │   ├── cards/            Sprint 2+: ProblemCard, ReviewCard, JobCard…
    │   ├── forms/            Sprint 2+: QuoteForm, PostcodeChecker.
    │   └── common/           Shared fragments (TrustChip, RatingLine…).
    ├── lib/                  Pure utilities (cn). No React imports.
    ├── hooks/                Client hooks (useScrolled). One hook per file.
    ├── constants/            Framework invariants (breakpoints, scroll
    │                         thresholds) — values that are code, not content.
    ├── types/                Shared contracts. site.ts defines SiteConfig —
    │                         the shape every trade config must satisfy.
    └── content/              Per-trade configuration (site.config.ts).
                              THE reuse mechanism: launching "electrician"
                              means replacing files here — nothing else.
```

## Architectural rules

1. **Dependency direction:** app → sections → (cards|forms|common) → (layout|ui) → lib.
   Never upward, never sideways between section files.
2. **Content/system split (Bible Principle 8):** components never contain copy,
   phone numbers, or trade words. All content flows from `content/` via typed props.
   If a trade launch touches `components/`, that is a framework bug.
3. **Tokens only (Bible §18):** every color, radius, shadow, easing comes from
   `styles/globals.css` @theme. A hex value in a component fails review.
4. **Server-first (Bible §16):** components are React Server Components by default.
   `"use client"` only where interaction demands it (Navbar). JS budget ≤75KB gz.
5. **Closed variant sets (Bible §17):** new button variants, card types, or motion
   patterns are design-system changes, not project decisions.

## Why this maps to the Design Bible

- `styles/` before components — tokens are the contract (§18), so they live in one
  file the whole system consumes.
- `content/` isolated — the "one config file per trade" reuse contract (§17).
- `navigation/` split from `layout/` — Navbar is the only stateful chrome (§14
  sticky rules); isolating it keeps the client-component surface minimal (§16).
- `cards/` and `forms/` exist empty in Sprint 1 — the wireframe's component
  inventory already names their contents; reserving the folders prevents Sprint 2
  from inventing structure ad hoc.
