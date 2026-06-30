# Hero Nav Modernization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Modernize the homepage hero and navigation with a raw video background, liquid-glass nav, Inter typography, and business-accurate Driving With Nayyer copy.

**Architecture:** Keep `Nav` and `Hero` as small client components because the nav dialog and heading reveal need client-side state. Use Next App Router `next/font/google` in `app/layout.tsx` instead of raw Google `<link>` tags. Put reusable visual primitives, including `.liquid-glass`, in `app/globals.css`.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Radix Dialog, `next/font/google`.

## Global Constraints

- Use the supplied video URL as a raw full-viewport background with `autoPlay`, `loop`, `muted`, and `playsInline`.
- Do not add a dark overlay, gradient overlay, or semi-transparent layer over the video.
- Adapt the reference structure to Driving With Nayyer, not VEX or investing/advisory language.
- Use Inter via `next/font/google` because this is a Next.js App Router project.
- Keep the page dark, with white text and no purple or indigo palette.
- Preserve existing anchor targets: `#about`, `#packages`, `#how-it-works`, and `#faq`.
- Do not revert unrelated user work in the dirty worktree.

---

### Task 1: Typography And Liquid Glass

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Produces: CSS variables `--font-inter`, Tailwind `font-sans`, and `.liquid-glass`.

- [ ] **Step 1: Replace existing font setup with Inter**

Update `app/layout.tsx` so it imports `Inter` from `next/font/google`, declares `const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap", weight: ["300", "400", "500", "600"] })`, and applies `inter.variable` to `<html>`.

- [ ] **Step 2: Update global font tokens and glass utility**

Update `app/globals.css` so `--font-display`, `--font-body`, and `--font-sans` resolve to `var(--font-inter)`. Add `.liquid-glass` and `.liquid-glass::before` exactly as the approved design requires, plus a reduced-transparency fallback.

- [ ] **Step 3: Verify CSS has no old missing font variables**

Run: `rg "font-(jost|nunito|cormorant|dmsans)|--font-(jost|nunito|cormorant|dmsans)" app`

Expected: no output.

### Task 2: Glass Navigation

**Files:**
- Modify: `app/components/Nav.tsx`

**Interfaces:**
- Consumes: `.liquid-glass`.
- Produces: fixed top navigation with desktop links and mobile Radix menu.

- [ ] **Step 1: Remove scroll-state styling**

Remove `scrolled`, the scroll listener, and scroll-dependent header classes.

- [ ] **Step 2: Build the glass bar**

Render the fixed header with page padding `px-6 md:px-12 lg:px-16 pt-6`. Inside it, render a `.liquid-glass` bar with `rounded-xl px-4 py-2 flex items-center justify-between`.

- [ ] **Step 3: Preserve accessible mobile navigation**

Keep the existing Radix mobile menu, restyled for the dark glass hero. Use text buttons and CSS icons already present in the file.

### Task 3: Video Hero With Kinetic Heading

**Files:**
- Modify: `app/components/Hero.tsx`

**Interfaces:**
- Consumes: `.liquid-glass`.
- Produces: `FadeIn` and `AnimatedHeading` local components.

- [ ] **Step 1: Replace old split hero**

Remove the static placeholder photo, badge pills, and scroll cue.

- [ ] **Step 2: Add raw video background**

Render an absolutely positioned `<video>` with the supplied CloudFront URL, `className="absolute inset-0 h-full w-full object-cover"`, `autoPlay`, `loop`, `muted`, `playsInline`, and `aria-hidden="true"`.

- [ ] **Step 3: Add the approved content layout**

Use a `min-h-[100dvh]` hero section with bottom-aligned content, headline `Women-only driving lessons\nin Mississauga.`, package and WhatsApp CTAs, and the right-side trust tag.

- [ ] **Step 4: Add reduced-motion-aware animations**

Implement `FadeIn` and `AnimatedHeading` using `useEffect`, `useState`, and `useReducedMotion`, animating only opacity and transform.

### Task 4: Verification

**Files:**
- Verify: `app/components/Hero.tsx`
- Verify: `app/components/Nav.tsx`
- Verify: `app/globals.css`

**Interfaces:**
- Produces: build and lint results.

- [ ] **Step 1: Run lint**

Run: `pnpm lint`

Expected: no errors from edited files.

- [ ] **Step 2: Run production build**

Run: `pnpm build`

Expected: successful Next.js build.

- [ ] **Step 3: Run copy and design preflight**

Check for em-dashes, missing business context, old VEX copy, duplicate CTA issues, and visible overlays on the video.
