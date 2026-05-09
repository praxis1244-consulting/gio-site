# gio-site

Landing page de coaching Valorant para Gio — ex-pro VCL LATAM Sur.
Single-page, español LATAM, esports HUD style con rojo Valorant `#FF4655`.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript + Tailwind 4
- Resend (email del lead magnet)
- Google Fonts vía `next/font`: DM Sans / JetBrains Mono / Tomorrow / Chakra Petch

## Setup

```bash
cp .env.example .env.local
# llenar RESEND_API_KEY, RESEND_FROM, LEAD_PDF_URL
npm install
npm run dev          # http://localhost:3000
```

## Scripts

- `npm run dev` — dev server con Turbopack
- `npm run build` — build producción
- `npm run start` — servir build
- `npm run lint` — eslint

## Estructura

```
src/
  app/
    api/lead/route.ts   POST handler que envía con Resend
    globals.css         Tokens HUD + estilos de la landing
    layout.tsx          Fonts (next/font) + metadata
    page.tsx            Landing completa, datos en arrays
  components/
    lead-form.tsx       Form del lead magnet (client)
  lib/
    email.ts            Validación de email
```

## TODOs antes de ir a producción

- Foto de Gio en `.poster__figure` (formato 4:5)
- Imágenes en los 4 pasos del método (`.estep__media`, formato 16:7)
- Precios reales en las 3 fight cards (`page.tsx`, array `fights`)
- Links: WhatsApp directo, Twitch / YouTube / X, dominio del PDF
- Testimonios reales (placeholder de Matías / Valentina / Joaquín)
- Validar números: rank #412, 5+ años, 214 alumnos, 640+ VODs
- Resend: dominio verificado en `RESEND_FROM` y URL pública del PDF en `LEAD_PDF_URL`

## Origen del diseño

Mockeado en Claude Design (claude.ai/design) por Alonso, exportado como handoff bundle e implementado aquí. La fidelidad visual se mantiene contra `landing-b.html` del bundle original.
