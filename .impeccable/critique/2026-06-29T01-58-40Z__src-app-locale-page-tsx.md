---
target: homepage (src/app/[locale]/page.tsx)
total_score: 33
p0_count: 0
p1_count: 0
timestamp: 2026-06-29T01-58-40Z
slug: src-app-locale-page-tsx
---
# Critique — Zero2Hero homepage (`src/app/[locale]/page.tsx`)

Register: brand. Inspected live at localhost (desktop). Mobile assessed via CSS review only (viewport locked in this browser env).

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Calendly loading state, form ok/err, count-up all present; few gaps |
| 2 | Match System / Real World | 4 | Speaks the audience's language fluently (IGL, smoker, leaks, VOD, rank deltas) |
| 3 | User Control and Freedom | 3 | Modals: Esc + close + body-scroll-lock + booking back step; focus-trap lib present |
| 4 | Consistency and Standards | 3 | Two kicker styles (.lbl vs .eyebrow `[ ]`); "BEST SELLER"/"OFFERS" English on ES page |
| 5 | Error Prevention | 3 | Non-blocking form errors, 16px inputs (no iOS zoom), smart booking flow |
| 6 | Recognition Rather Than Recall | 4 | Text nav labels, clear sections, labeled lang switcher |
| 7 | Flexibility and Efficiency | 3 | Sticky nav, anchors, lang switch — appropriate for a landing page |
| 8 | Aesthetic and Minimalist Design | 4 | Restrained red, strong hierarchy; offers-section void is the one ding |
| 9 | Error Recovery | 3 | Plain, non-blocking form errors; limited surface |
| 10 | Help and Documentation | 3 | FAQ section covers it well for a landing page |
| **Total** | | **33/40** | **Good (28–35) — strong foundation, refinements only** |

## Anti-Patterns Verdict

**Does this look AI-generated? No — confidently not.**

**LLM assessment:** Passes both slop tests. First-order: you could not guess "Valorant coaching = broadcast-HUD fight-card" from the category — the training reflex would be gamer-neon-RGB or SaaS-coaching-cream, both explicitly avoided. Second-order: it didn't flee into the editorial-magazine lane either. The broadcast-HUD-over-fight-card system is a committed, specific POV with real craft (ember field, chevron watermark, glowing accent headline, tale-of-the-tape converging cutouts). This is voice.

**Deterministic scan:** `detect.mjs` over `page.tsx` + `components/` + coach page = **0 findings**. Manual CSS audit against the absolute bans also clean: no side-stripe borders (the `.feature::before` is a full-width top accent, not a side stripe), no gradient text (emphasis via Chakra Petch red italic), glass limited to scrolled-nav, no hero-metric template, no ordinal section scaffolding (numbers only in FAQ + method steps, which are real sequences). The per-section red mono kicker is a deliberate, named brand system ("The Mono-Label Rule"), i.e. voice, not the eyebrow trope.

## Overall Impression

Top-decile work that does not read as AI-made. The contrast discipline (0 WCAG failures over a near-black canvas — the exact risk PRODUCT.md flagged), the evidence-on-the-same-screen credibility (team names, rank deltas, Champions 2022), and the meticulous motion/responsive system (every animation reduced-motion-gated, explicit mobile overflow fixes) are the standouts. Biggest single opportunity: the **Offers section composition** — a lone centered card under a full-width left-aligned header reads as sparse and slightly disconnected. Everything else is refinement.

## What's Working

1. **Hero "tale of the tape."** Two converging coach cutouts out of a red aura, chevron watermark, glowing "PROFESIONALES DE LATAM" — distinctive, on-brand, and credibility-first (creds + ranks visible immediately).
2. **Contrast discipline.** Every text node passes WCAG AA over the void; the dim/faint metadata tiers are tuned to sit right at the floor, not below it. The dark-theme risk is genuinely handled, not assumed.
3. **Evidence-on-the-same-screen.** Coach creds, rank-delta proof (PLATA III → DIAMANTE I, +2 RANKS), ES+PT testimonials (Bruno·POA, Isabela·SP) — the "cero humo / real pros" positioning is backed visually, not just claimed.

## Priority Issues

- **[P2] Offers section is sparse and misaligned.** A full-width, left-aligned editorial header ("Entrena 1 a 1.") sits above a single ~440px card centered in the track, leaving large empty columns either side and a ~270px void between the header rule and the card. It's the weakest composition on the page.
  - **Fix:** Either pair the single card with a left-aligned "what's included / how it works" panel (2-up), or left-align the card under the header and fill the right with the guarantee + a coach-availability strip. Tie header and card into one composition.
  - **Suggested command:** `/impeccable layout`

- **[P2] Lead-magnet copy contradicts itself.** Meta line says "9 MAPAS", body says "una página por mapa" (28 pages → implies ~28 maps), and the cover shows 5 chips (ASCENT/HAVEN/BIND/SPLIT/LOTUS). Three different map counts in one section — corrosive for a brand whose whole pitch is precision ("cero humo").
  - **Fix:** Reconcile to one true number (PRODUCT.md says 5 maps / 28 pages). e.g. "28 páginas · 5 mapas · 0 spam" and reword "una página por mapa" → "lineups por mapa".
  - **Suggested command:** `/impeccable clarify`

- **[P2] Mobile not visually verified.** The audience is 16–28 gamers (overwhelmingly mobile), and the browser viewport here is locked at ~1880px (resize is a no-op, media queries never engage), so I reviewed the responsive CSS but could not screenshot the actual mobile render. The CSS is genuinely thorough (3 breakpoints, `display:contents` hero reflow, choreographed drawer, iOS-zoom guards, explicit overflow fixes), but "thorough in code" ≠ "verified on screen."
  - **Fix:** Verify on a real device / true responsive tool — especially the 760px hero reflow (coaches dropped between headline and subline) and the 560px two-up coach cards.
  - **Suggested command:** `/impeccable adapt`

## Minor Observations

- **Two kicker dialects.** Section heads use `.lbl` (plain red mono), while lead + community use `.eyebrow` (red mono wrapped in `[ ]`). Both are fine individually; pick one as the canonical section kicker for consistency.
- **English labels on a Spanish-default page.** "OFFERS" (nav) and "BEST SELLER" (offer badge) read slightly off against otherwise-fluent ES copy. Likely intentional brand flavor, but worth a deliberate call.
- **Hero lower fold is mostly dark.** At ~86vh the hero pushes the roster fully below the fold and its bottom third (coach lower bodies fading out) is near-empty void; the first scroll reveals a lot of dark before the roster header. Minor pacing note.

## Questions to Consider

- The Offers section currently sells one thing (1v1) to one decision. Should it stay a single deliberate offer, or carry the "what's included" content beside it so the fold isn't a lone card in space?
- Is the English/Spanish label mix ("OFFERS", "BEST SELLER") a deliberate brand tic, or drift? Deciding once removes the ambiguity everywhere.
