import type { Locale } from "@/i18n/routing";

export type Offer = {
  id: string;
  /** Coach dueño de la oferta. Vacío en la oferta unificada del colectivo. */
  coachSlug?: string;
  title: string;
  /** Modalidad, p.ej. "Presencial". */
  mode: string;
  blurb: string;
  bullets: { text: string; muted?: boolean }[];
  badge?: string;
  featured?: boolean;
};

// Oferta centralizada de la home: una sola clase 1v1 del colectivo, sin elegir
// coach. El alumno agenda una vez y el equipo lo coordina con quien esté disponible.
const collective: Record<Locale, Offer> = {
  es: {
    id: "clase-1v1",
    title: "Clase 1 a 1",
    mode: "Presencial",
    blurb:
      "Clase presencial 1 a 1 con un coach del colectivo. Revisamos tu juego frame por frame, salimos con tus leaks claros y un plan a tu medida para subir de rango.",
    bullets: [
      { text: "Sesión presencial 1 a 1 con un coach pro" },
      { text: "Revisión de tu VOD frame por frame" },
      { text: "Tus leaks claros + plan a tu rango" },
      { text: "Lectura de ronda, utilidad e info" },
      { text: "Recomendación de agente y mapas" },
    ],
    badge: "Best seller",
    featured: true,
  },
  pt: {
    id: "clase-1v1",
    title: "Aula 1 a 1",
    mode: "Presencial",
    blurb:
      "Aula presencial 1 a 1 com um coach do coletivo. Revisamos seu jogo frame a frame, saímos com seus erros claros e um plano sob medida pra subir de elo.",
    bullets: [
      { text: "Sessão presencial 1 a 1 com um coach pro" },
      { text: "Revisão do seu VOD frame a frame" },
      { text: "Seus erros claros + plano pro seu elo" },
      { text: "Leitura de rodada, utilitário e info" },
      { text: "Recomendação de agente e mapas" },
    ],
    badge: "Best seller",
    featured: true,
  },
  en: {
    id: "clase-1v1",
    title: "1-on-1 Class",
    mode: "In person",
    blurb:
      "In-person 1-on-1 class with a coach from the collective. We review your game frame by frame, walk out with your leaks clear and a plan tailored to rank up.",
    bullets: [
      { text: "In-person 1-on-1 session with a pro coach" },
      { text: "Frame-by-frame VOD review" },
      { text: "Your leaks clear + a plan for your rank" },
      { text: "Round reading, utility and info" },
      { text: "Agent and map recommendations" },
    ],
    badge: "Best seller",
    featured: true,
  },
};

// Clases 1v1 presenciales por coach (se muestran en la página de cada coach).
const perCoach: Record<Locale, Offer[]> = {
  es: [
    {
      id: "gio-1v1",
      coachSlug: "gio",
      title: "Clase 1 a 1",
      mode: "Presencial",
      blurb:
        "Clase presencial 1 a 1 con Gio: revisamos tu juego frame por frame y salimos con tus 3 leaks claros y un plan a mano para tu rango.",
      bullets: [
        { text: "Sesión presencial 1 a 1" },
        { text: "Revisión de tu VOD frame por frame" },
        { text: "Identificación de 3 leaks" },
        { text: "Plan a mano para tu rango" },
        { text: "Recomendación de agente y mapas" },
      ],
      badge: "Best seller",
      featured: true,
    },
    {
      id: "adverso-1v1",
      coachSlug: "adverso",
      title: "Clase 1 a 1",
      mode: "Presencial",
      blurb:
        "Clase presencial 1 a 1 con Adverso: lectura de ronda, uso de utilidad e info y decisiones de mid-round. Cómo dejar de jugar a ciegas.",
      bullets: [
        { text: "Sesión presencial 1 a 1" },
        { text: "Revisión de VOD: macro y mid-round" },
        { text: "Lectura de ronda y uso de info" },
        { text: "Cómo callear y liderar al equipo" },
      ],
      featured: true,
    },
  ],
  pt: [
    {
      id: "gio-1v1",
      coachSlug: "gio",
      title: "Aula 1 a 1",
      mode: "Presencial",
      blurb:
        "Aula presencial 1 a 1 com o Gio: revisamos seu jogo frame a frame e saímos com seus 3 erros claros e um plano na mão pro seu elo.",
      bullets: [
        { text: "Sessão presencial 1 a 1" },
        { text: "Revisão do seu VOD frame a frame" },
        { text: "Identificação de 3 erros" },
        { text: "Plano na mão pro seu elo" },
        { text: "Recomendação de agente e mapas" },
      ],
      badge: "Best seller",
      featured: true,
    },
    {
      id: "adverso-1v1",
      coachSlug: "adverso",
      title: "Aula 1 a 1",
      mode: "Presencial",
      blurb:
        "Aula presencial 1 a 1 com o Adverso: leitura de rodada, uso de utilitário e info e decisões de mid-round. Como parar de jogar às cegas.",
      bullets: [
        { text: "Sessão presencial 1 a 1" },
        { text: "Revisão de VOD: macro e mid-round" },
        { text: "Leitura de rodada e uso de info" },
        { text: "Como callear e liderar o time" },
      ],
      featured: true,
    },
  ],
  en: [
    {
      id: "gio-1v1",
      coachSlug: "gio",
      title: "1-on-1 Class",
      mode: "In person",
      blurb:
        "In-person 1-on-1 class with Gio: we review your game frame by frame and walk out with your 3 leaks clear and a hands-on plan for your rank.",
      bullets: [
        { text: "In-person 1-on-1 session" },
        { text: "Frame-by-frame VOD review" },
        { text: "Spot your 3 leaks" },
        { text: "Hands-on plan for your rank" },
        { text: "Agent and map recommendations" },
      ],
      badge: "Best seller",
      featured: true,
    },
    {
      id: "adverso-1v1",
      coachSlug: "adverso",
      title: "1-on-1 Class",
      mode: "In person",
      blurb:
        "In-person 1-on-1 class with Adverso: round reading, utility and info usage, and mid-round decisions. How to stop playing blind.",
      bullets: [
        { text: "In-person 1-on-1 session" },
        { text: "VOD review: macro and mid-round" },
        { text: "Round reading and info usage" },
        { text: "How to call and lead the team" },
      ],
      featured: true,
    },
  ],
};

export function getCollectiveOffer(locale: Locale): Offer {
  return collective[locale];
}

export function getOffers(locale: Locale): Offer[] {
  return perCoach[locale];
}

export function offersByCoach(locale: Locale, slug: string): Offer[] {
  return perCoach[locale].filter((o) => o.coachSlug === slug);
}
