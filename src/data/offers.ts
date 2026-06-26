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
export const collectiveOffer: Offer = {
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
};

// Hoy el colectivo da clases 1v1 presenciales. Sin precio en el sitio:
// la idea es que agenden directo con el coach (formulario → #reservar).
export const offers: Offer[] = [
  {
    id: "gio-1v1",
    coachSlug: "gio",
    title: "Clase 1 a 1",
    mode: "Presencial",
    blurb: "Clase presencial 1 a 1 con Gio: revisamos tu juego frame por frame y salimos con tus 3 leaks claros y un plan a mano para tu rango.",
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
    blurb: "Clase presencial 1 a 1 con Adverso: lectura de ronda, uso de utilidad e info y decisiones de mid-round. Cómo dejar de jugar a ciegas.",
    bullets: [
      { text: "Sesión presencial 1 a 1" },
      { text: "Revisión de VOD: macro y mid-round" },
      { text: "Lectura de ronda y uso de info" },
      { text: "Cómo callear y liderar al equipo" },
    ],
    featured: true,
  },
];

export function offersByCoach(slug: string): Offer[] {
  return offers.filter((o) => o.coachSlug === slug);
}
