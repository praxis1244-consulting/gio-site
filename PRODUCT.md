# Product

## Register

brand

## Users

**Primary — LATAM ranked players stuck on a plateau.**
Valorant players across Chile, Mexico, Brazil, Colombia and Peru, roughly 16–28, ranked Iron through Immortal. They've watched the YouTube guides, grinded ranked, and stalled. They're at their PC after a frustrating session, Discord already open, looking for a real fix — not another generic "10 tips" video. They want someone who can watch *their* VOD and tell them exactly what's leaking.

**Job to be done:** find a credible pro coach who can diagnose their specific leaks and hand them a concrete plan to rank up; book a 1v1 class; join a community that keeps them improving between sessions.

**Secondary — players choosing a coach by role.** IGL/smoker players lean toward Gio; initiator/IGL players lean toward Adverso. They compare coaches and pick on style + role fit.

**Context & emotion:** they need to feel they're trusting *real pros* (VCL LATAM Sur, VALORANT Champions 2022), not faceless boosters or e-learning marketers. The site has to land competitive credibility in the first scroll, or they bounce. Secondary emotion: urgency — every ranked session without a plan is wasted time — and belonging, once they see the Discord collective.

## Product Purpose

A multilingual (ES/PT/EN) marketing site for **Zero2Hero**, a collective of pro Valorant coaches. It converts visitors into:

1. **Paying 1v1 coaching clients** — booked through a coach-picker modal → Calendly embed, or directly on a coach's profile page.
2. **Discord community members** — the "classroom between classes," positioned as a membership perk not a sidebar.
3. **Lead-magnet emails** — a 28-page map-guide PDF (Ascent/Haven/Bind/Split/Lotus) delivered via Resend in exchange for an email.

The product is two coaches today (Gio, Adverso) each with a full profile page (dossier, team wall, real student result screenshots, offers, Calendly agenda). The home is a single-page editorial flow: tale-of-the-tape hero → roster → offer → what's included → community → testimonials → lead magnet → FAQ → outro.

**Success looks like:** booked classes, Discord joins, and captured lead emails — from a brand that reads as "these are real pros who live in our world," not "a coaching marketplace."

## Brand Personality

**Voice:** direct, tactical, zero fluff. "Frame por frame, cero humo." "El aim te sube a Diamante. La cabeza te sube a Radiant." No exclamation marks, no "transform your game!!!" — the brand sounds like a Radiant IGL talking to a teammate, not a marketer talking to a lead.

**Tone:** expert confidence without hype. Claims are backed by evidence (teams, stats, result screenshots) the instant they're made. The copy never says "world-class" — it says "VCL LATAM Sur, KRÜ Academy, Champions 2022" and lets the reader decide.

**Three-word personality:** competitive · expert · tactical.

**Emotional goals:**
- *Credibility* — "these are real pros, not boosters or influencers."
- *Urgency* — "your rank is wasting while you stall."
- *Belonging* — "there's a collective here, and I can join it."

**Named reference points (the feel, not a copy):**
- Riot's own Valorant esports broadcast HUD — L-brackets, scan lines, mono micro-labels, the red `#FF4655`. The site borrows the visual language the audience already trusts.
- Fight-card / "tale of the tape" editorial sports magazines — two opponents facing off, stats stacked, big numbers. The hero is a coach vs. coach face-off, not a "hero image."
- Tactical military UI (splines, chevrons, monospace numerals) — restraint, not decoration.

## Anti-references

What this must NOT look like:

- **Generic SaaS coaching landing** — cream/sand body, navy accents, a smiling stock "coach" photo, "Transform your game today" headline. The single biggest tell to avoid.
- **Gamer pastiche** — neon rainbow gradients, RGB everything, comic-sans, clip-art controllers, "LEVEL UP!!!" energy. Cheaper than the audience.
- **Faceless booster / account-selling site** — no real names, no credentials, no proof, scam vibes. Zero2Hero's whole pitch is the opposite: real pros, real results, named.
- **Corporate e-learning platform** — Udemy-style sterile, no personality, "courses by instructors" with stock thumbnails. Not a marketplace, a collective.
- **AI-cream warm-neutral editorial** — the 2026 default warm paper bg + serif + tracked eyebrow. The audience lives in a dark HUD; a "tasteful editorial" palette would feel like it's for their parents.
- **Glassmorphism / gradient-text SaaS** — blurred cards over aurora blobs, `background-clip: text` gradients. Decorative where this brand is tactical.
- **Hero-metric template** — big number + small label + supporting stats + gradient accent in the hero. The site uses stats, but as an editorial dossier section, not a hero cliché.

## Design Principles

1. **Practice what you preach.** The coaches are real pros. Every credibility claim lands with evidence on the same screen — team logos, tournament names, result screenshots, ranked numbers. No assertion without proof.
2. **Show, don't tell.** Real student conversation screenshots (the proof wall), real team logos, real stats — not stock photos, not invented testimonials (placeholders are clearly marked TODO and realistic in voice). The brand earns trust by displaying evidence, not by adjective-stacking.
3. **Expert confidence, not hype.** Direct, tactical, no-exclamation voice. The copy reads like a Radiant IGL briefing a teammate, not a marketer converting a lead. "Cero humo" is a brand position, not just a phrase.
4. **The HUD is the brand, not decoration.** L-bracket corners, scan lines, mono micro-labels, Valorant red — these are the visual language of the audience's world (the Valorant broadcast HUD). Using them signals "we live here." They must stay restrained and meaningful, never tip into gamer kitsch.
5. **LATAM-first, multilingual by design.** ES/PT/EN are built from the same spine, not translated as an afterthought. Pix payment, Brazilian testimonials, locale-aware SEO and OG tags. The brand is regional before it is global.

## Accessibility & Inclusion

**Target: WCAG AA** (no regulatory mandate — this is a private commercial site — but AA is the floor for a competitive consumer audience).

**Known considerations:**
- *Dark theme contrast* is the primary risk. The palette runs warm-bone ink (`#ece4d8`) on near-black (`#050505`) with three dimmed tiers (`--val-ink-dim` 62%, `--val-ink-faint` 36%, `--val-ink-mute` 18%). Body copy must stay ≥4.5:1; the dim/faint tiers are for secondary metadata and must be audited, not assumed.
- *Reduced motion* is already respected — every reveal, count-up, ember, drawer deploy, and lang-menu animation is gated behind `prefers-reduced-motion: no-preference` with a no-JS fallback that forces content visible. This is a hard invariant: never ship a motion that doesn't degrade.
- *Color-blindness* — Valorant red (`#ff4655`) is the sole signal color. Status dots use red/amber/green (live/warn) which is color-only; pair with a text or shape cue where the dot carries information.
- *Keyboard* — modals (booking, lightbox) and the mobile drawer support Escape and body-scroll lock; focus trapping inside dialogs is a known gap to close. The lang switcher is a real listbox with `aria-selected`.
- *Multilingual* — `<html lang>` is set dynamically per locale; OG/twitter locales are locale-aware; alternates + hreflang are emitted. Keep all user-facing strings in `messages/{es,pt,en}.json`, never hard-coded in JSX.
- *Images* — coach cutouts, team logos, and proof screenshots carry locale-aware alt text via the `Alt` translation namespace. Decorative chrome (embers, tactical chevron, scan lines) is `aria-hidden`.

**Out of scope:** AAA contrast (the dim-metadata tier would force a redesign and hurt the HUD aesthetic); legacy browser support (the FAQ height animation uses `interpolate-size` + `::details-content`, which snaps open gracefully on unsupported browsers — acceptable for this audience).
