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
- Type-check only: `pnpm exec tsc --noEmit`
- There is no test suite yet. `pnpm lint` and `pnpm build` must both pass; once `pnpm test` exists, it must pass too.

## Rules

- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`
- Mobile-first; touch targets at least 44px; WCAG AA contrast
- Every animation needs a `prefers-reduced-motion` alternative
- Amber accent only on booking CTAs, prices and WhatsApp entry (DESIGN.md "Amber Rule")
- Plain, short English sentences (many readers speak Urdu or Hindi first)
- No claims like "guaranteed pass"
- No new dependencies unless the issue asks; say why in the PR body
- Never commit `.env*` files or secrets

## Agent skills

Project skills live in `.claude/skills/` (from [mattpocock/skills](https://github.com/mattpocock/skills), MIT):

- `/implement` — build a ticket end to end (user-invoked only; the developer agents' workflow prompt spells out its steps)
- `/tdd` — red → green at pre-agreed seams; only applies once `pnpm test` exists
- `/diagnosing-bugs` — feedback-loop-first debugging for bug tickets
- `/code-review` — two-axis review (Standards + Spec); the tech lead loads it on every review; it does both axes itself, and uses the skill's two sub-agents only on PRs over 400 changed lines

Standards sources for `/code-review`: this file, `DESIGN.md`, `PRODUCT.md`.

### Issue tracker

GitHub Issues on `hammadtariq/drive-with-nayyer`. See `docs/agents/issue-tracker.md`.

### Domain docs

Single-context: `CONTEXT.md` and `docs/adr/` at the repo root (created when needed). See `docs/agents/domain.md`.
