@AGENTS.md

# Drive With Nayyer

Single-page marketing site for a women-only driving instructor in Ontario. Static content, booking via external Cal.com + Stripe links. No backend, no accounts, no database.

- Product context and audience: `PRODUCT.md`
- Visual system (colors, type, motion rules): `DESIGN.md` — follow it exactly
- Requirements: `docs/PRD.md`

## Stack

Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS 4 · motion · Radix (accordion, dialog) · Lenis smooth scroll · pnpm 10 · Node 22

## Layout

- `app/page.tsx` — the landing page, composed of sections in `app/components/`
- `app/blog/` — blog list, `[slug]` pages, and posts in `data.ts`
- `app/globals.css` — Tailwind 4 theme tokens
- `public/` — images and videos (do not add large binaries)
- Ignore `.impeccable/` and `docs/superpowers/` (tooling notes)

## Commands

- Install: `pnpm install --frozen-lockfile`
- Lint: `pnpm lint`
- Build (also type-checks): `pnpm build`
- There is no test suite. `pnpm lint` and `pnpm build` must both pass.

## Rules

- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`
- Mobile-first; touch targets at least 44px; WCAG AA contrast
- Every animation needs a `prefers-reduced-motion` alternative
- Amber accent only on booking CTAs, prices and WhatsApp entry (DESIGN.md "Amber Rule")
- Plain, short English sentences (many readers speak Urdu or Hindi first)
- No claims like "guaranteed pass"
- No new dependencies unless the issue asks; say why in the PR body
- Never commit `.env*` files or secrets
