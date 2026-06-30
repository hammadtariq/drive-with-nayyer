<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Driving With Nayyer
description: Women-only driving lessons in Mississauga — MTO Certified, G2 and G training, three languages.
---

# Design System: Driving With Nayyer

## 1. Overview

**Creative North Star: "The Authorized Road"**

The visual system balances two forces: the authority of official certification and the warmth of a personal recommendation. The site must feel like something that earned its trust — not borrowed from road-sign orange palettes, and not softened into a pastel small-business template. Nayyer is a credentialed instructor with real students and a real car. The design reflects that credibility without hiding the person behind it.

Deep teal carries the primary brand weight — professional without defaulting to corporate blue, confident without demanding attention by force. Against pure white, it reads as deliberate and controlled. The amber accent fires exactly where it matters: the booking call to action, the package price, the WhatsApp contact entry. When amber appears, the visitor knows what to do next.

Typography is built for someone who arrived from Instagram on a phone with thirty seconds of attention. Jost at heavy weight states the value proposition with authority. Nunito keeps supporting copy approachable and readable at any size. The scale is generous; nothing requires squinting. Choreographed entrance motion — orchestrated load-in, scroll-driven section reveals — earns its place here because the content earns it: credentials, real testimonials, packages with prices. Each reveal fits what it reveals rather than being a uniform entrance copied to every section.

**Key Characteristics:**
- Deep teal primary that carries authority without coldness
- Pure white surface — teal does the brand work, white provides air
- Amber accent reserved strictly for action: booking CTAs, price reveals, WhatsApp entry
- Generous mobile-first typography; bold display weight for the hero claim
- Orchestrated motion that includes a complete prefers-reduced-motion alternative
- Real photography of Nayyer, the car, and students as the primary design material

## 2. Colors: The Authorized Palette

**Strategy: Committed.** One saturated color — the deep teal — carries 30–60% of the surface. The palette has three voices: the authoritative teal, the decisive amber, and the measured neutral.

### Primary

- **Authorized Teal** (`oklch(0.380 0.150 200)`): The primary brand color. Used for the hero section background, navigation, the About section fill, and primary button backgrounds. Deep enough to carry white text at high contrast (≥7:1); saturated enough to read as a committed brand decision. White text on this fill always. [to be resolved to CSS custom property `--color-primary` during implementation]

- **Open Road** (`oklch(0.550 0.130 200)`): Mid teal. Hover state for primary-teal elements, badge fills, and secondary teal uses. Lighter than the anchor but clearly in the same hue family. [→ `--color-primary-light`]

### Secondary

- **Sunrise CTA** (`oklch(0.720 0.140 75)`): The amber accent. Used exclusively for: the booking button on each package card, price text on light backgrounds, and the WhatsApp contact entry. This color does nothing decorative. Its scarcity makes it decisive. Dark text on this fill (the fill is pale-luminance amber; white text would reduce contrast). [→ `--color-accent`]

- **Golden Hour** (`oklch(0.560 0.150 75)`): Deeper amber for hover on accent elements and price text when needed on colored backgrounds. [→ `--color-accent-deep`]

### Neutral

- **Night Drive** (`oklch(0.165 0.025 200)`): Near-black body text with the faintest teal undertone. Achieves ≥7:1 contrast against the pure-white background. [→ `--color-ink`]

- **Highway Shoulder** (`oklch(0.500 0.015 200)`): Secondary text, captions, metadata. Must maintain ≥3.5:1 against white. Do not use as primary body copy. [→ `--color-muted`]

- **Pure White** (`oklch(1.000 0.000 0)`): The page background. No warmth tint; no chroma. The teal and amber carry the brand temperature. [→ `--color-bg`]

- **Permit Paper** (`oklch(0.970 0.008 200)`): Very lightly teal-tinted near-white for alternating section backgrounds. Creates section differentiation without breaking the light-field feel. [→ `--color-surface`]

- **Pale Teal Wash** (`oklch(0.940 0.030 200)`): A stronger teal tint for callout blocks, testimonial quote backgrounds, or the FAQ section. Distinctly tinted but not heavy. [→ `--color-surface-accent`]

### Named Rules

**The Amber Rule.** Amber (`--color-accent`) appears on booking CTAs, package price reveals, and the WhatsApp contact entry only. Nowhere else on the page. Its scarcity is what makes it feel like a signal rather than decoration.

**The White Field Rule.** Page section backgrounds are either teal (primary brand sections: hero, About, CTA footer) or white / near-white (`--color-surface`). Never a warm-tinted cream, sand, or beige. Warmth is carried by amber and human photography, not the surface.

## 3. Typography: The Deliberate Pairing

**Display Font:** Jost (Google Fonts — weights 400, 600, 900)
**Body Font:** Nunito (Google Fonts — weights 400, 600)

**Character:** Jost's geometric construction carries the weight of authority — at 900 Black for the hero headline, it states the offer and doesn't apologize. Nunito's open, rounded humanist letterforms handle explanatory copy: approachable and readable for visitors whose first language is Urdu or Hindi, without being soft or decorative. The pairing is contrast along a precision-warmth axis, not two similar geometric sans families.

### Hierarchy

- **Display** (Jost 900, `clamp(2.5rem, 7vw, 4.25rem)`, line-height 1.05, letter-spacing -0.025em, `text-wrap: balance`): Hero headline only. One instance per page — the primary value proposition. White on teal.

- **Headline** (Jost 700, `clamp(1.75rem, 4vw, 2.5rem)`, line-height 1.15, letter-spacing -0.015em, `text-wrap: balance`): Major section headings (packages block, About, Testimonials, FAQ). Black ink on white; white on teal.

- **Title** (Jost 600, `clamp(1.125rem, 2.5vw, 1.5rem)`, line-height 1.25): Package names, subsection heads, FAQ question labels.

- **Body** (Nunito 400, 1.0625rem / 17px on mobile → 1.125rem / 18px on desktop, line-height 1.72, max-width 65ch, `text-wrap: pretty`): All prose copy. Package descriptions, About paragraph, testimonial text, policy text. Must be Night Drive ink on white or Permit Paper; never muted gray for primary prose.

- **Label** (Nunito 600, 0.875rem / 14px, letter-spacing 0.01em): Price labels, navigation link text, tag text, "Book Now" inside buttons, WhatsApp link text.

### Named Rules

**The Jost Ceiling Rule.** Jost at any weight is for section-level headings and above. Package descriptions, body copy, navigation: Nunito. Mixing within a semantic level is prohibited.

**The Display-Once Rule.** Display weight (Jost 900) appears once per page — the hero headline. Reusing it for section headings degrades its authority. Headline (Jost 700) handles the rest.

## 4. Elevation

Flat by default, activated by state. Surfaces are flat at rest. Elevation appears only as a response to interaction (hover, active) or semantic depth (an open modal above the page). Sections are distinguished by background fill — teal vs. white vs. Permit Paper — not by resting shadow.

### Shadow Vocabulary

- **Lift** (`0 8px 32px oklch(0.380 0.150 200 / 0.18)`): Hover shadow on package cards only. Uses the brand teal as the shadow hue rather than generic black, keeping the effect on-palette.

### Named Rules

**The Flat-By-Default Rule.** No element starts elevated. Package cards are separated from the page by their border and background — not a resting shadow. Shadow is reward for interaction, not ambient decoration.

## 5. Components

[Omitted in seed mode. Re-run `/impeccable document` once components are implemented to capture button, card, input, and nav primitives.]

## 6. Do's and Don'ts

### Do:

- **Do** use Jost Black (900) for the hero headline and only the hero headline — one instance per page.
- **Do** reserve amber (`oklch(0.720 0.140 75)`) exclusively for booking CTAs, package prices, and the WhatsApp contact entry. Nowhere else.
- **Do** ensure all primary body copy is Night Drive ink (`oklch(0.165 0.025 200)`) on white or Permit Paper — never muted gray for prose that carries information.
- **Do** design every interactive element for mobile touch first: tap targets ≥44px, vertical spacing generous enough to tap without zooming.
- **Do** use real photography of Nayyer, the car, and students as the primary visual material in each section. Imagery is the design, not decoration.
- **Do** implement orchestrated entrance motion with a complete `prefers-reduced-motion` alternative (instant transitions; never hide content behind a class-triggered reveal that never fires).
- **Do** write the hero headline in plain, direct English: the service, the location, the key credential. No wordplay that requires native English fluency.

### Don't:

- **Don't** use red, orange, or yellow as the primary brand color — these default to road-sign and safety associations. The amber accent is deliberate and confined; a primary red is not this brand.
- **Don't** use pastel backgrounds (pink, lavender, blush, cream) — this site is not a Canva-template Instagram small business.
- **Don't** use a warm-cream or sand/beige body background. Pure white only. The teal and amber carry the brand temperature.
- **Don't** use clip-art steering wheels, license plate graphics, road iconography, or gear icons as decorative elements — trust signals here are human (the instructor, the students, the car).
- **Don't** build a multi-column layout on mobile. This site opens from a WhatsApp link on a phone. Single-column first, readable without zooming.
- **Don't** use corporate cold blue or government gray — the palette is teal-plus-amber.
- **Don't** add small uppercase tracked eyebrow labels above every section heading.
- **Don't** use numbered section markers (01 / 02 / 03) as scaffolding. The three packages are genuinely numbered; other sections are not a sequence.
- **Don't** use gradient text (`background-clip: text`) or side-stripe border accents wider than 1px.
- **Don't** use `border-left` or `border-right` wider than 1px as a colored accent on cards or testimonials — use background tint or a full border instead.
- **Don't** gate any content visibility on a CSS class transition — every section must be fully visible before any animation fires. Transitions enhance; they do not reveal.
