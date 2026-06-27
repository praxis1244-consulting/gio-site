---
name: Zero2Hero
description: LATAM Valorant coaching — esports HUD chrome over Valorant red
colors:
  signal-red: "#ff4655"
  red-deep: "#d22a3c"
  warm-bone: "#ece4d8"
  deep-void: "#050505"
  hud-panel: "#0c0c0d"
  panel-elevated: "#15171c"
  ember-black: "#1c1015"
  void-deep: "#030303"
  void-warm: "#070406"
  live-green: "#5fe39a"
  warn-amber: "#f5a623"
typography:
  display:
    fontFamily: "Tomorrow, var(--font-display), sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.4rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Tomorrow, var(--font-display), sans-serif"
    fontSize: "1.7rem"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  body:
    fontFamily: "DM Sans, var(--font-sans), sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, var(--font-mono), monospace"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.22em"
rounded:
  none: "0"
  hud: "2px"
  pill: "50%"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "#ffffff"
    padding: "14px 22px"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
    textColor: "#ffffff"
    padding: "14px 22px"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.warm-bone}"
    padding: "14px 22px"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  hud-panel:
    backgroundColor: "{colors.hud-panel}"
    textColor: "{colors.warm-bone}"
    padding: "40px 32px"
    rounded: "{rounded.hud}"
  card:
    backgroundColor: "{colors.hud-panel}"
    textColor: "{colors.warm-bone}"
    padding: "28px 28px"
    rounded: "{rounded.none}"
  input:
    backgroundColor: "{colors.deep-void}"
    textColor: "{colors.warm-bone}"
    padding: "16px 18px"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
---

# Design System: Zero2Hero

## 1. Overview

**Creative North Star: "The Broadcast HUD"**

This system borrows the visual language of the Valorant esports broadcast — the HUD graphics players already trust during a VCT stream — and pulls it over an editorial fight-card structure. The audience lives inside this aesthetic every time they watch a match; using it on a coaching site signals "we live in your world" before a single word is read. The deep-void background is not a dark-mode convenience, it is the canvas the broadcast paints on. Valorant Signal Red is the only saturated color; it is rare, loud, and carries every call to action.

The density is atmospheric, not decorative. Scan lines, L-bracket corners, mono micro-labels, ember fields, and tactical chevrons are the texture of the arena. They sit at low opacity and never compete with information. The information design itself is minimal: one headline, one kicker, one body line, one CTA per section. The fight-card editorial structure (tale-of-the-tape hero, poster-style coach cards, dossier stats with tabular numerals) gives the page the feel of a weigh-in program, not a SaaS landing.

This system explicitly rejects: the 2026 cream/sand warm-neutral editorial default; generic SaaS coaching landings (smiling stock coach, navy accents, "Transform your game"); gamer pastiche (neon rainbow, RGB gradients, "LEVEL UP!!!"); faceless booster-site vibes; corporate e-learning sterility; glassmorphism as default; gradient text; the hero-metric template; identical card grids; numbered scaffolding markers on every section; side-stripe accent borders. Every one of those is a tell that the site was made by someone who doesn't play the game.

**Key Characteristics:**
- Deep-void canvas (`#050505`) with warm-bone ink (`#ece4d8`) — never pure white on pure black.
- One saturated accent (Valorant Signal Red `#ff4655`), used on ≤10% of any screen.
- Four-font system: Tomorrow (display), DM Sans (body), JetBrains Mono (labels), Chakra Petch italic (red emphasis).
- Sharp corners (`0` radius) everywhere except HUD panels (`2px`) and status dots (`50%`).
- Motion is gated behind `prefers-reduced-motion` with a no-JS fallback — non-negotiable.
- Every credibility claim lands with evidence on the same screen.

## 2. Colors: The Broadcast Palette

The palette is a deep void, a warm-bone ink, and one signal red. Green and amber exist only for status dots and proof results — they are not design colors, they are status indicators.

### Primary
- **Valorant Signal Red** (`#ff4655`): The only saturated color. CTAs, kicker labels, accent italic emphasis, HUD L-brackets, scan-line tints, hover states. Used on ≤10% of any screen — its rarity is the point.
- **Red Deep** (`#d22a3c`): The hover/pressed state of Signal Red. Never used at rest.

### Neutral
- **Deep Void** (`#050505`): The body background. The canvas. Slightly warmer than pure black, never `#000`.
- **Void Deep** (`#030303`): The footer — one step deeper than the void, to ground the page bottom.
- **Void Warm** (`#070406`): The mobile drawer and dropdown option background — a warm-tinted near-black for surfaces that float above the void.
- **HUD Panel** (`#0c0c0d`): Cards, modals, the nav when scrolled. The primary surface tier.
- **Panel Elevated** (`#15171c`): Elevated panels (unused at rest in the current build; reserved for future elevated surfaces).
- **Ember Black** (`#1c1015`): The warm-red-black endpoint of every poster/cover gradient (`135deg, ember-black → deep-void`). It is what makes the poster cards glow red from inside instead of sitting flat.
- **Warm Bone** (`#ece4d8`): The ink. Body text, headings, labels. Slightly warm off-white — never `#fff` for body text (pure white is reserved for text on Signal Red buttons).

### Status (not design colors)
- **Live Green** (`#5fe39a`): The "live" status dot, proof-result text, success states. Always paired with a text label — never color-only.
- **Warn Amber** (`#f5a623`): The "warn" status dot. Rare; pair with a label.

### Ink opacity tiers
The warm-bone ink is used at four opacity tiers over the void, each with a specific role:
- **Ink** (`#ece4d8`, full): headings, body, primary text. Contrast ~16:1.
- **Ink Dim** (`rgba(236,228,216,0.62)`): secondary body, blurbs, sub-labels. ~5.8:1.
- **Ink Meta** (`rgba(236,228,216,0.58)`): small uppercase metadata, captions, placeholders. ~5.0:1. (This is the floor — anything dimmer fails WCAG AA on small text.)
- **Ink Mute** (`rgba(236,228,216,0.18)`): borders, hairlines, rules. Never text.

### Named Rules
**The One Voice Rule.** Signal Red is used on ≤10% of any screen. If two red elements compete, one is wrong. Red is the CTA color, the kicker color, and the accent-italic color — it is not a fill, a background, or a gradient body.

**The No-Cream Rule.** The body background is the deep void. Never warm-tint the background toward cream, sand, paper, or parchment. Warmth lives in the ink and the ember-black gradient endpoints, never in the canvas.

## 3. Typography

**Display Font:** Tomorrow (fallback: `var(--font-display), sans-serif`) — a geometric tech display with a tactical feel.
**Body Font:** DM Sans (fallback: `var(--font-sans), sans-serif`) — a warm humanist sans for readability.
**Label Font:** JetBrains Mono (fallback: `var(--font-mono), monospace`) — the HUD label voice.
**Accent Font:** Chakra Petch italic 600 (fallback: `var(--font-accent), sans-serif`) — the red italic emphasis inside headings.

**Character:** Four fonts is unusual; the system earns it by pairing on a contrast axis — Tomorrow (geometric tech) for display, DM Sans (humanist) for body, JetBrains Mono for the HUD label layer, and Chakra Petch italic as the red emphasis voice. The mono labels are the broadcast-HUD signature; the Chakra Petch italic is the fight-card editorial flourish. Never pair two geometric sans or two humanist sans.

### Hierarchy
- **Display** (Tomorrow, 200–800, `clamp(2rem, 4vw, 3.4rem)` for section h2; `clamp(2.2rem, 4.8vw, 4.3rem)` for hero h1; `clamp(3rem, 7vw, 6rem)` for outro; line-height 0.92–1): Hero, section headers, outro. Max ≤ 6rem.
- **Headline** (Tomorrow, 400, 1.45–1.7rem, line-height 1.05): Card titles (coach name, offer title, feature title).
- **Body** (DM Sans, 300/400, 1rem, line-height 1.55, max 44–50ch): Bios, blurbs, FAQ answers, lead body. The 300 weight is the default — it reads as confident, not thin.
- **Label** (JetBrains Mono, 500, 0.62–0.74rem, 0.22–0.32em tracking, uppercase): Kickers, stat labels, captions, button text, nav links, status text. The tracking is the HUD voice.
- **Accent Italic** (Chakra Petch, 600, italic, inline at ~0.56em–1em of its heading, `-0.02em` tracking): The red italic emphasis word inside a heading ("*método*", "*cabeza*"). Always Signal Red. Never standalone.

### Named Rules
**The Mono-Label Rule.** Every section has a JetBrains Mono uppercase kicker in Signal Red. It carries the section's real name ("ROSTER", "OFFERS"), not a generic "ABOUT" or "PROCESS". The kicker is voice; an ordinal number above it is grammar and is prohibited.

**The 65ch Rule.** Body line length caps at 44–50ch (the blurbs are intentionally narrow). Never let a body block exceed 75ch. The editorial narrowness is the point.

## 4. Elevation

The system is **flat by default with tonal layering**, not shadows. Depth is conveyed by the panel tier (`Deep Void` → `HUD Panel` → `Panel Elevated`) and by 1px hairline rules (`--val-rule` at 0.08 opacity, `--val-rule-hot` at 0.22). Shadows appear only as a response to state — hover lifts, modal elevation, poster drop-shadows on cutout PNGs — never as ambient decoration at rest.

### Shadow Vocabulary
- **Hover Lift** (`0 8px 28px var(--val-red-glow)` on primary buttons; `0 18px 48px rgba(0,0,0,0.45)` on coach cards): The translateY(-1px to -3px) + shadow on hover. State-only.
- **Modal Elevation** (`0 30px 90px rgba(0,0,0,0.6)`): Booking modal, lightbox. The only large shadows in the system.
- **Cutout Drop-Shadow** (`drop-shadow(0 22px 38px rgba(0,0,0,0.55))` on poster imgs; `drop-shadow(0 26px 44px rgba(0,0,0,0.6))` on hero cutouts): Gives the transparent PNG cutouts physical weight against the void.
- **Cover Stack** (`0 30px 60px rgba(0,0,0,0.6), 0 0 0 6px rgba(0,0,0,0.5), 0 0 0 7px var(--val-rule-hot)`): The lead-magnet cover's layered shadow + ring. Signature.

### Named Rules
**The Flat-At-Rest Rule.** Surfaces are flat at rest. A shadow at rest means the element is modally elevated (dialog, lightbox) or it is wrong. Cards use hairline borders + tonal panel bg, not shadows.

**The Hairline Rule.** Borders are 1px and low-opacity (`--val-rule` 0.08, `--val-rule-hot` 0.22). Never a 2px+ solid border as a frame. The only thick borders are the 1.5px Signal Red L-brackets on HUD panels, and those are corner accents, not frames.

## 5. Components

### Buttons
- **Shape:** Sharp corners (`0` radius). Always.
- **Primary** (Signal Red bg `#ff4655`, white text, 14px 22px padding, JetBrains Mono 0.74rem 500 uppercase 0.22em): The CTA. Hover: bg Red Deep, translateY(-1px), `0 8px 28px` red glow. Arrow `→` translates 3px on hover.
- **Ghost** (transparent bg, Warm Bone text, 1px `--val-rule-hot` border): The secondary CTA. Hover: border Signal Red, text Signal Red. No translate, no shadow.
- **Focus:** Global `:focus-visible { outline: 2px solid var(--val-red); outline-offset: 2px }`. Never remove focus without this ring.

### HUD Panel
- **Shape:** `2px` radius, 1px `--val-rule` border, four 1.5px Signal Red L-bracket corners (`.br-tl/.tr/.bl/.br`, 14×14px, two border sides each).
- **Background:** `HUD Panel` over the void.
- **Use:** Stats containers, tactical info blocks. The L-brackets are the broadcast-HUD signature — use them on data surfaces, not on every card.

### Cards (Coach / Offer / Feature / Quote / Proof)
- **Shape:** `0` radius, 1px `--val-rule` border, `HUD Panel` bg with a subtle top red gradient wash (`linear-gradient(180deg, rgba(255,70,85,0.04) 0%, transparent 30%)`).
- **Hover:** border → `--val-rule-hot`, translateY(-3px). No shadow (except coach cards, which add `0 18px 48px`).
- **Featured** (`offer-card.featured`, `fight.headline`): border → Signal Red, gradient wash → 0.12 opacity. The "best seller" tier.
- **Internal padding:** 24–28px. Section padding 96px 32px (desktop) / 64px 24px (mobile).

### Inputs / Fields
- **Style:** `Deep Void` bg at 0.7 opacity (`rgba(5,5,5,0.7)`), 1px `--val-rule-hot` border, Warm Bone text, JetBrains Mono 16px (16px minimum to prevent iOS zoom), `0` radius.
- **Focus:** border → Signal Red. Plus the global focus-visible ring.
- **Placeholder:** `Ink Meta` tier (0.58 opacity), uppercase mono, 0.18em tracking. Must hit 4.5:1 — never dimmer.
- **Error:** `--val-red` text, mono, below the field. Non-blocking (form preserves input).
- **Select:** Native select with `appearance: none` + a Signal Red chevron SVG background. Options bg `Void Warm`.

### Navigation
- **Desktop:** Sticky, transparent at top → on scroll, `rgba(5,5,5,0.95)` + `backdrop-filter: blur(10px)` + 1px bottom rule. Logo wordmark (Tomorrow 700, 0.32em tracking) with red italic accent. Nav links: JetBrains Mono 0.72rem uppercase 0.22em, Ink Dim → Signal Red on hover.
- **Mobile (≤1000px):** Hamburger (44×44px) → full-screen drawer. Drawer bg `Void Warm` with a red radial glow + HUD grid. Links wipe in staggered. Escape + focus-trap + body-scroll-lock.
- **Lang switcher:** Mono button → animated listbox (ES/PT/EN). Mobile: segmented control in the drawer.

### Signature: Poster Card
The coach poster is the signature component — a fight-card weigh-in photo. `aspect-ratio: 4/5`, `Ember Black → Deep Void` 135deg gradient bg with a red radial glow at top, scan-line overlay, four mono corner labels (● COACH / VAL · 2026 / handle / ZERO2HERO), and a giant faint coach-name watermark behind the cutout (`clamp(8rem, 18vw, 18rem)`, 0.05 opacity). The cutout is a transparent PNG with a drop-shadow + mask to dissolve the bottom edge into the glow.

### Signature: Proof Card
The proof wall is the conversion anchor — real student conversation screenshots in a 3-column masonry. Each card: 1px `--val-rule` border, `HUD Panel` bg, a header strip with the rank-delta result (Live Green, Tomorrow 600) + the student handle (mono, Ink Meta), and the screenshot below. Hover: border `--val-rule-hot` + translateY(-3px) + "AMPLIAR ↗" hint. Click → lightbox with ← → Esc nav.

## 6. Do's and Don'ts

### Do:
- **Do** use Valorant Signal Red (`#ff4655`) on ≤10% of any screen — CTAs, one kicker per section, the accent-italic word, HUD L-brackets.
- **Do** use the four-font system on its contrast axis: Tomorrow (display) + DM Sans (body) + JetBrains Mono (labels) + Chakra Petch italic (red emphasis).
- **Do** cap body line length at 44–50ch; the editorial narrowness is the point.
- **Do** gate every animation behind `prefers-reduced-motion: no-preference` with a `<noscript>` fallback that forces reveal content visible.
- **Do** trap focus in every dialog (booking modal, lightbox, nav drawer) — move focus in on open, wrap Tab, restore to the trigger on close.
- **Do** pair status dots (red/amber/green) with a text label — never color-only.
- **Do** back every credibility claim with evidence on the same screen (team logos, stats, result screenshots).
- **Do** use `next/image` for the large coach PNGs — they are the LCP and benefit most from avif/webp + responsive srcset.

### Don't:
- **Don't** warm-tint the body background toward cream, sand, paper, or parchment. The canvas is the deep void. (PRODUCT.md anti-reference: "AI-cream warm-neutral editorial.")
- **Don't** use `background-clip: text` with a gradient. Emphasis is via weight, size, or the Chakra Petch red italic — never gradient text.
- **Don't** use `backdrop-filter` blur as default decoration. The only glass is the sticky nav when scrolled.
- **Don't** ship the hero-metric template (big number + small label + supporting stats + gradient accent in the hero). Stats live in the dossier section.
- **Don't** repeat identical icon+heading+text cards in a grid. Vary the content, the size, or the affordance.
- **Don't** put a numbered ordinal marker (01/02/03) above every section. The red mono kicker is the section marker. Numbers are reserved for a real ordered sequence (a method/steps section).
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on a card or caption. Use a full hairline border, a leading dot, or a tint background.
- **Don't** put a tiny uppercase tracked eyebrow ("ABOUT", "PROCESS") above every heading. The branded red kicker with the section's real name is voice; a generic kicker is grammar.
- **Don't** use bounce or elastic easing. The system uses `ease-out-quint` `cubic-bezier(0.22,1,0.36,1)` and `ease-out-expo` `cubic-bezier(0.16,1,0.3,1)` only.
- **Don't** use pure `#fff` for body text. Body text is Warm Bone `#ece4d8`. Pure white is only for text on Signal Red.
- **Don't** animate `width`, `height`, `top`, `left`, or margin. Use `transform` and `opacity` (or `clip-path`, `mask`, `filter` when they add meaningful polish).
- **Don't** ship an animation that doesn't degrade for reduced motion or no-JS. Every reveal, count-up, ember, drawer deploy, and lang-menu animation must have a no-motion fallback.
- **Don't** use gray text on a colored background. Use a darker shade of the background's hue or a transparency of the ink.
- **Don't** sound like a marketer. The voice is "cero humo" — a Radiant IGL briefing a teammate, not a landing-page pitchman. (PRODUCT.md: "Expert confidence, not hype.")
