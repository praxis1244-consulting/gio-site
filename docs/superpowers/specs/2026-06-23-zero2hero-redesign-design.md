# Zero2Hero.gg — Rediseño de la landing a venture/comunidad de coaches

**Fecha:** 2026-06-23
**Proyecto:** gio-site → Zero2Hero.gg
**Estado:** Diseño aprobado, pendiente plan de implementación

## Contexto

El sitio nació como landing personal de coaching de Valorant de un solo coach (Gio):
landing editorial estilo "fight-card" con HUD de Valorant, paleta roja, tipografías
Tomorrow/Chakra Petch/JetBrains Mono, animaciones de reveal HUD, y secciones
Dossier → Método → Programa → Testimonios → Lead magnet → FAQ.

El proyecto se convirtió en una **venture entre Gio y Adverso** (ex-jugador de KRU).
Hay que reformular el sitio para que refleje que ahora es una **comunidad de coaches
profesionales**. Por ahora el roster es solo Gio + Adverso. El modelo de negocio se
inspira en goaching.gg (roster de pros, catálogo de "offers" productizados, Discord como
aula, Whop como tienda/checkout), pero conservando el design style y el polish actuales.

## Decisiones tomadas

| Decisión | Elección |
|----------|----------|
| **Marca** | Rebrand completo a **Zero2Hero.gg**. Tagline: "De Zero a Hero." |
| **Alcance** | Landing reformulada **+ páginas por coach** (`/coaches/gio`, `/coaches/adverso`) |
| **Checkout** | CTAs apuntan a **Whop + Discord** vía links configurables en un solo archivo. Se mantiene el lead magnet por email. |
| **Tipos de oferta** | Sesiones 1v1 en vivo · Cursos / VOD packs · Comunidad + Guías gratis. **Sin** programas multi-semana. |
| **Hero** | "Tale of the tape": dos posters enfrentados Gio \| Adverso, estilo cartel de pelea. |

## Enfoque técnico

**Data-driven + reuso del CSS existente.** Hoy todo está hardcodeado inline en
`page.tsx`. Con multi-coach + multi-offer + páginas por coach, eso no escala. Se mueve el
contenido a módulos de datos tipados y las páginas los consumen.

Alternativas descartadas:
- Duplicar JSX por coach → no escala, ensucia el markup.
- CMS headless → overkill; Whop ya es el backend de productos/cuentas.

### Modelo de datos

```
src/data/site.ts
  - brand: { name: "ZERO2HERO·GG", domain: "zero2hero.gg", tagline: "De Zero a Hero." }
  - nav: [{ label, href }]
  - discordInvite: string          // placeholder hasta tener el invite real
  - whop: { base: string }         // base de la tienda Whop (placeholder)
  - socials, contacto/WhatsApp

src/data/coaches.ts
  Coach = {
    slug: "gio" | "adverso",
    name, handle,
    role,                          // ej. "IGL · Smoker"
    creds,                         // ej. "Ex-OXEN · VCL LATAM Sur"
    rank,                          // ej. "Radiant"
    languages: string[],           // ej. ["ES","EN","PT"]
    photo: string,                 // placeholder por ahora
    bio,                           // párrafo
    stats: { lbl, value, cap }[],  // mini-dossier por coach
    matches?: { ts, stage, a, b, res }[],
    socials: { twitch?, youtube?, x? },
  }
  export const coaches: Coach[]    // Gio, Adverso

src/data/offers.ts
  Offer = {
    id,
    coachSlug,                     // a qué coach pertenece (o "community" para membresía)
    type: "session" | "course" | "community",
    title, blurb,
    price: { v, u },               // placeholder "$ —"
    bullets: { text, muted? }[],
    badge?,                        // "Best seller", "7 sesiones", "Gratis"
    whopUrl: string,               // link configurable (placeholder)
    cta: { label, variant: "primary" | "ghost" },
    featured?: boolean,            // se muestra en el catálogo de la landing
  }
  export const offers: Offer[]
```

`coaches.ts` y `offers.ts` son la única fuente de verdad. Agregar un coach o una oferta
= una entrada nueva, sin tocar markup.

### Routing

```
src/app/page.tsx                  → landing (lee coaches + offers featured)
src/app/coaches/[slug]/page.tsx   → página por coach; generateStaticParams desde coaches[]
```

### Componentes

```
src/components/coach-card.tsx     → card de roster (foto, creds, rol, idiomas) → /coaches/[slug]
src/components/offer-card.tsx     → card de catálogo (precio, badge, bullets, CTA Whop)
src/components/community-band.tsx → banda de Discord/comunidad (membresía Whop, rol auto)
src/components/lead-form.tsx      → SE MANTIENE tal cual (Resend, /api/lead)
src/components/reveal-runner.tsx  → SE MANTIENE; se amplía el SELECTOR a las clases nuevas
```

### Plumbing de CTAs (Whop + Discord)

Todos los CTAs de compra leen `offer.whopUrl`; los de comunidad leen `site.discordInvite`.
Ambos viven en `src/data/` como placeholders claramente marcados (`// TODO: pegar URL real`)
para que Alonso los reemplace cuando los productos de Whop existan. No se integra checkout
custom — Whop hospeda el checkout y asigna el rol de Discord.

## Estructura de la landing (`/`)

1. **Nav + banner Discord** — `ZERO2HERO·GG` · nav (Coaches / Offers / Comunidad / FAQ) ·
   banner fino arriba invitando al Discord (patrón goaching).
2. **Hero "tale of the tape"** — dos posters enfrentados Gio \| Adverso estilo cartel de
   pelea, "ZERO 2 HERO" al centro, tagline "De Zero a Hero." + subhead de colectivo de
   coaches pro. CTAs: *Ver coaches* / *Unirse al Discord*. Reusa estilos `.poster`.
3. **Roster — "Los coaches"** — `CoachCard` por cada coach (foto, credencial, rol,
   idiomas) → linkea a su página. Grid que escala a más coaches.
4. **Catálogo — "Elige tu offer"** — `OfferCard` de las offers `featured` cruzando coaches
   (1v1 en vivo y cursos/VOD packs), con precio + badge + CTA a Whop. Estilo fight-card.
5. **"Qué incluye"** — grid de features (1v1 en vivo · VOD review · curso autoguiado ·
   comunidad Discord), equivalente al "What's inside" de goaching.
6. **Comunidad / Discord** — `CommunityBand`: el "aula", membresía vía Whop, rol automático
   de alumno, eventos.
7. **Testimonios** — se mantienen, generalizados al colectivo (no solo Gio).
8. **Guía gratis (lead magnet)** — intacto; sigue capturando emails con Resend.
9. **FAQ** — actualizada: pagos LATAM + **Pix/Brasil**, cómo funciona Whop, Discord,
   varios coaches.
10. **Outro CTA + Footer** — rebrand a Zero2Hero.

## Página por coach (`/coaches/[slug]`)

- Hero del coach: poster + credencial + bio.
- Mini-dossier: stats del coach (rank, experiencia, partidas) reusando `.estats` / `.matchgrid`.
- **Sus** offers: `OfferCard` filtradas por `coachSlug`.
- CTA final a Discord/Whop.
- `generateStaticParams` genera `/coaches/gio` y `/coaches/adverso` en build.

## Qué se conserva

- Paleta roja HUD, tipografías (Tomorrow / Chakra Petch / JetBrains Mono / DM Sans).
- Animaciones de reveal HUD (`reveal-runner.tsx`, keyframes en `globals.css`).
- `/api/lead` + Resend (lead magnet sin cambios).
- Pulido y **versión móvil impecable** (responsive en `globals.css`, regla del usuario:
  el grueso del tráfico es mobile).

## Contenido (placeholders por ahora)

Se construye con placeholders como ya hace el sitio (fotos, precios `$ —`). Para versión
final se necesita de Alonso/los cabros:
- Bio + credenciales reales de **Adverso** (rank, equipos, rol, idiomas, detalle ex-KRU).
- Fotos de Gio y Adverso (4:5, formato poster).
- URLs reales de productos Whop + invite de Discord.
- Precios reales por offer.

## No-objetivos (YAGNI, fuera de alcance)

- Cuentas / sign in / sign up (lo cubre Whop).
- Checkout custom (lo cubre Whop).
- Programas multi-semana en el catálogo.
- CMS / panel de administración.
- Integración de pasarela de pago directa (DLocal/Ebanx) — se evalúa en otra fase.

## Criterios de éxito

1. La landing comunica de inmediato que es un **colectivo** de coaches (no un coach solo).
2. Roster + catálogo + páginas de coach se renderizan **desde datos**; agregar un coach #3
   es una sola entrada en `coaches.ts`.
3. Todos los CTAs de compra/comunidad salen de un punto de configuración centralizado.
4. Se conserva el design language y el polish actuales; mobile impecable.
5. `npm run build` pasa; `/`, `/coaches/gio`, `/coaches/adverso` se generan estáticas.
