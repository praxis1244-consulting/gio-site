---
target: src/app/[locale]/page.tsx
total_score: 32
p0_count: 0
p1_count: 2
timestamp: 2026-06-27T01-18-19Z
slug: src-app-locale-page-tsx
---
# /impeccable critique — gio-site (Zero2Hero) home + coach pages

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Calendly spinner hidden (display:none) — agenda section shows nothing while iframe loads |
| 2 | Match System / Real World | 4 | Fluent in audience language — VOD, IGL, Smoker, Radiant, peek, lineups; LATAM ranks |
| 3 | User Control and Freedom | 3 | Esc + back + drawer close work post-fix; no undo on submit (low-risk) |
| 4 | Consistency and Standards | 4 | HUD language, button system, easing tokens, i18n spine consistent post-token-ify |
| 5 | Error Prevention | 3 | noValidate + client + server validation; select for rank; disabled-while-loading |
| 6 | Recognition Rather Than Recall | 3 | Coach cards surface creds/rank/langs; booking bar shows name but not photo in step 2 |
| 7 | Flexibility and Efficiency | 2 | Landing — keyboard nav solid post-fix but no accelerators (none expected) |
| 8 | Aesthetic and Minimalist Design | 4 | Info design clean; HUD atmosphere earns its pixels for brand register |
| 9 | Error Recovery | 3 | Translated specific error copy; non-blocking; could pin the exact field |
| 10 | Help and Documentation | 3 | FAQ covers 5 real pre-purchase questions (rank fit, Discord, coaches, first class, languages) |
| **Total** | | **32/40** | **Good** — address Calendly-loading gap and booking step-2 recall |

## Anti-Patterns Verdict

Does this look AI-generated? **No.** Post-fix, clean of every banned tell:
- Side-stripe borders — gone (proof__tag, lightbox__cap rewritten)
- Numbered section markers as scaffolding — gone (01-05 removed; red .lbl kicker stays as voice)
- Gradient text — never present
- Glassmorphism as default — never present (only sticky-nav backdrop-filter, purposeful)
- Hero-metric template — not present (tale-of-the-tape hero, not big-number cliché)
- Identical card grids — not present (2 coaches, 1 offer, distinct features, 3 quotes)
- Cream/sand body bg — opposite (#050505 deep void)

Deterministic scan: detect.mjs over 15 source files returns [] (0 findings). Prior 3 findings resolved.
Visual overlays: browser automation unavailable in this environment; CLI scan + source review are the evidence.

## Overall Impression

Well-crafted brand landing. "Cero humo" voice, HUD-as-brand, proof wall, multilingual spine all do real work. Biggest opportunity: the booking flow's moment of truth — calendar loads in silence (spinner hidden), and if Calendly is slow/blocked the user stares at an empty panel at the highest-intent moment.

## What's Working

1. Proof wall is the strongest trust signal — real student screenshots with rank delta headline, lightbox with keyboard nav post-fix. Correctly placed after the offer.
2. i18n spine is structural — keyed by `key` not index across ES/PT/EN, dynamic html lang, locale-aware OG, hreflang.
3. HUD motion discipline — reduced-motion gating, noscript fallback, bfcache restore, count-up ghost span (no CLS). Post-quieter section headers are leaner.

## Priority Issues

**[P1] Calendly loads in silence — booking moment of truth has no status feedback**
- Why: .calendly-embed .calendly-spinner { display:none } hides native spinner. Slow/blocked iframe = empty 740px panel at highest-intent moment.
- Fix: HUD loading state (red pulse-dot + "CARGANDO AGENDA…") inside .calendly-embed, covered by iframe on paint. Or listen for iframe load. At minimum un-hide + restyle spinner.
- Suggested: /impeccable harden

**[P1] Booking step 2 drops the coach's face — only name in text**
- Why: booking bar shows "Clase con Gio" text, no photo. The cutout that built trust is gone at commit moment.
- Fix: Small coach thumbnail (40-48px) + name in .booking__bar. cutout asset is on `picked`.
- Suggested: /impeccable delight

**[P2] Hero's two CTAs both eventually route to booking, but coach-picker doesn't remember which coach**
- Why: "Book a class" opens a coach-picker that doesn't know which coach the user was viewing. A user who scrolled to Adverso, hit back, clicked "Book a class" re-picks Adverso.
- Fix: Let each coach card CTA be "Book with {name}" (modal pre-picked). Keep hero "Book a class" as collective entry.
- Suggested: /impeccable shape

**[P2] Lead-magnet success state doesn't say "check your inbox"**
- Why: leadSuccess copy is a status line but no "revisa tu correo" nudge or email echo.
- Fix: "Te enviamos el PDF a {email}. Revisa tu correo (y spam)."
- Suggested: /impeccable clarify

**[P3] Contact form rank select buries "No sé / sin rank" at the bottom**
- Why: 9 rank names scroll before the "I don't know" option.
- Fix: Move "No sé / sin rank" to top (after placeholder).
- Suggested: /impeccable clarify

## Persona Red Flags

**Jordan (First-Timer)**: Hero jargon (IGL, Smoker) unparseable cold; FAQ answers it but 4 scrolls down. Coach-picker shows role+creds but no "which coach for which role" inline help — first-timer must guess. No "match me to a coach" escape.

**Casey (Mobile)**: Discord invite is placeholder (https://discord.gg/REEMPLAZAR) — taps "Join Discord", hits broken link. Launch blocker. Calendly iframe at 1060px in modal = long scroll inside modal on phone.

**Sam (A11y)**: Post-fix a11y is solid (skip link, focus trap x3, focus-visible ring, AA contrast). Residual: lang switcher uses button-in-listbox pattern (works, not canonical APG). Proof lightbox re-announces alt on open (minor redundancy).

## Minor Observations

- .btn-wa (WhatsApp) CSS exists but never rendered — dead CSS.
- site.ts discord.invite / whatsapp / socials are placeholders — launch blockers, not design.
- Testimonials in content.ts are explicitly placeholder TODOs — need real ones.
- coach-hero__creds uses <b> for rank — <strong> more correct.
- poster__name, poster__sub, poster__shade, coach-card__shade are display:none — dead JSX.

## Questions to Consider

- Should the coach-picker show "which coach for which role" inline? (Gio: controller/aim+macro; Adverso: iniciador/mid-round+IGL)
- Is the Calendly iframe the right booking UX, or should the modal collect email first (native form → Discord webhook, like the contact form)? Keeps them in-brand and captures the lead even if Calendly is blocked.
- What would a "match me to a coach" button do? First-timers who don't know which coach to pick are highest-abandonment; a "cuéntanos tu caso" path (contact form) might convert better than forcing a choice.
