import { site } from "@/data/site";

export type OfferType = "session" | "course" | "community";
export type Offer = {
  id: string;
  coachSlug: string;
  type: OfferType;
  title: string;
  blurb: string;
  price: { v: string; u: string };
  bullets: { text: string; muted?: boolean }[];
  badge?: string;
  whopUrl: string;
  cta: { label: string; variant: "primary" | "ghost" | "wa" };
  featured?: boolean;
};

// TODO: reemplazar cada whopUrl por el producto Whop real y cada price.v por el precio real.
export const offers: Offer[] = [
  {
    id: "gio-1v1",
    coachSlug: "gio",
    type: "session",
    title: "Diagnóstico 1v1",
    blurb: "Sesión en vivo con Gio: revisamos tu VOD frame por frame y salimos con tus 3 leaks claros.",
    price: { v: "$ —", u: "/ sesión 60 min" },
    bullets: [
      { text: "1 sesión de 60 min en vivo" },
      { text: "Revisión de 2 VOD" },
      { text: "Identificación de 3 leaks" },
      { text: "Recomendación de agente y mapas" },
      { text: "Plan escrito · PDF", muted: true },
      { text: "Acceso al Discord privado", muted: true },
    ],
    badge: "Best seller",
    whopUrl: `${site.whop.base}/gio-1v1`,
    cta: { label: "Reservar 1v1 →", variant: "primary" },
    featured: true,
  },
  {
    id: "gio-vod",
    coachSlug: "gio",
    type: "course",
    title: "Masterclass · Smokes & Macro",
    blurb: "Curso autoguiado de Gio: VOD pack con lineups por mapa, defaults y lectura de rondas a nivel Radiant.",
    price: { v: "$ —", u: "/ acceso de por vida" },
    bullets: [
      { text: "VOD pack autoguiado" },
      { text: "Lineups exactos por mapa" },
      { text: "Defaults, timings y rotaciones" },
      { text: "Cómo callear como IGL" },
      { text: "Actualizaciones incluidas" },
    ],
    badge: "Curso",
    whopUrl: `${site.whop.base}/gio-masterclass`,
    cta: { label: "Comprar curso →", variant: "ghost" },
    featured: true,
  },
  {
    id: "adverso-1v1",
    coachSlug: "adverso",
    type: "session",
    title: "Diagnóstico 1v1",
    blurb: "Sesión en vivo con Adverso: aim, entradas y lectura del mapa. Cómo abrir rounds sin morir gratis.",
    price: { v: "$ —", u: "/ sesión 60 min" },
    bullets: [
      { text: "1 sesión de 60 min en vivo" },
      { text: "Revisión de VOD de entry" },
      { text: "Aim review + crosshair" },
      { text: "Timings de entrada por mapa" },
      { text: "Plan escrito · PDF", muted: true },
      { text: "Acceso al Discord privado", muted: true },
    ],
    whopUrl: `${site.whop.base}/adverso-1v1`,
    cta: { label: "Reservar 1v1 →", variant: "primary" },
    featured: true,
  },
  {
    id: "adverso-vod",
    coachSlug: "adverso",
    type: "course",
    title: "Masterclass · Entry & Aim",
    blurb: "Curso autoguiado de Adverso: VOD pack de entradas, duelos y mecánica de duelist de nivel competitivo.",
    price: { v: "$ —", u: "/ acceso de por vida" },
    bullets: [
      { text: "VOD pack autoguiado" },
      { text: "Rutina de aim de un pro" },
      { text: "Entradas y trades por mapa" },
      { text: "Duelos y peeks ganadores" },
      { text: "Actualizaciones incluidas" },
    ],
    badge: "Curso",
    whopUrl: `${site.whop.base}/adverso-masterclass`,
    cta: { label: "Comprar curso →", variant: "ghost" },
  },
  {
    id: "comunidad",
    coachSlug: "community",
    type: "community",
    title: "Comunidad Zero2Hero",
    blurb: "Membresía del Discord: el aula del colectivo. Reviews grupales, eventos y los coaches en tu canal.",
    price: { v: "$ —", u: "/ mes" },
    bullets: [
      { text: "Acceso al Discord privado" },
      { text: "Rol de alumno automático" },
      { text: "Reviews grupales semanales" },
      { text: "Eventos y customs con coaches" },
      { text: "Guías y recursos gratis" },
    ],
    badge: "Comunidad",
    whopUrl: `${site.whop.base}/comunidad`,
    cta: { label: "Unirse a la comunidad →", variant: "primary" },
    featured: true,
  },
];

export function offersByCoach(slug: string): Offer[] {
  return offers.filter((o) => o.coachSlug === slug);
}

export const featuredOffers: Offer[] = offers.filter((o) => o.featured === true);
