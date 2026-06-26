export type Feature = { tag: string; title: string; body: string };
export type Testimonial = {
  quote: string;
  name: string;
  progress: string;
  delta: string;
  coachSlug?: string;
};
export type Faq = { q: string; a: string };

export const features: Feature[] = [
  {
    tag: "EN VIVO",
    title: "1v1 en vivo",
    body: "Sesión privada con tu coach por Discord. Revisamos tu VOD frame por frame, marcamos qué hiciste mal y qué hace un pro en esa misma situación.",
  },
  {
    tag: "ASYNC",
    title: "VOD review",
    body: "Mandas tus partidas y recibes un análisis detallado: leaks, decisiones, posicionamiento y los drills concretos para corregirlos esta semana.",
  },
  {
    tag: "AUTOGUIADO",
    title: "Curso autoguiado",
    body: "VOD packs y masterclasses de cada coach: lineups por mapa, defaults, aim routines y macro. Tu progreso a tu ritmo, con acceso de por vida.",
  },
  {
    tag: "DISCORD",
    title: "Comunidad Discord",
    body: "El aula del colectivo. Rol de alumno automático vía Whop, reviews grupales, eventos, customs con los coaches y guías gratis.",
  },
];

// TODO: testimonios reales. Estos son PLACEHOLDERS realistas.
export const testimonials: Testimonial[] = [
  {
    quote: "Llevaba 6 meses estancado en Plata. En 3 sesiones con Gio entendí por qué perdía los rounds clave. Subí a Diamante en menos de un mes.",
    name: "MATÍAS · SCL",
    progress: "PLATA III → DIAMANTE I",
    delta: "+2 RANKS",
    coachSlug: "gio",
  },
  {
    quote: "No es solo aim. Gio me enseñó a hablar en la partida, a leer al rival y a cerrar rounds. Hoy soy IGL de mi equipo de la liga universitaria.",
    name: "VALENTINA · CDMX",
    progress: "ORO II → INMORTAL",
    delta: "+ IGL",
    coachSlug: "gio",
  },
  {
    quote: "Con Adverso dejé de jugar a ciegas. Me enseñó a leer la ronda, usar la info del equipo y tomar la decisión correcta en el mid-round. Empecé a ganar partidas pensando, no solo apuntando.",
    name: "JOAQUÍN · LIM",
    progress: "DIAMANTE II → ASCENDENTE III",
    delta: "+1 RANK",
    coachSlug: "adverso",
  },
  {
    quote: "El Discord vale solo por las reviews grupales. Ves los errores de otros, te corrigen los tuyos y siempre hay un coach respondiendo. La comunidad empuja.",
    name: "CAMILA · BOG",
    progress: "ORO I → PLATINO III",
    delta: "+1 RANK",
  },
  {
    quote: "Compré la masterclass de smokes pensando que era solo lineups. Es macro completo. Por fin entiendo por qué hacemos lo que hacemos en cada mapa.",
    name: "BRUNO · POA",
    progress: "PLATA I → DIAMANTE II",
    delta: "+3 DIVS",
    coachSlug: "gio",
  },
  {
    quote: "Pagué con Pix desde Brasil sin problema. La primera clase me ordenó la cabeza más que 100 partidas de ranked sola. Vale cada centavo.",
    name: "ISABELA · SP",
    progress: "BRONCE III → ORO I",
    delta: "+2 RANKS",
  },
];

export const faqs: Faq[] = [
  {
    q: "¿Sirve si soy Hierro o Bronce?",
    a: "Sí. La metodología cambia según tu rank: en Hierro/Bronce el 80% del trabajo es aim, crosshair placement y settings. No te vamos a explicar rotaciones avanzadas si todavía no ganas peeks. El coach empieza donde estás.",
  },
  {
    q: "¿Cómo funciona el pago con Whop?",
    a: "Whop es nuestra tienda y checkout. Eliges tu offer, pagas en su página segura y Whop te da acceso automático: te asigna el rol en el Discord o te entrega el curso. No manejamos tu tarjeta nosotros; todo el cobro y el acceso lo gestiona Whop.",
  },
  {
    q: "¿Puedo pagar desde mi país de LATAM?",
    a: "Sí. Whop acepta tarjetas de toda LATAM y conversión a tu moneda local. Los precios se muestran en USD como referencia y se cobran al tipo de cambio del día.",
  },
  {
    q: "¿Aceptan Pix desde Brasil?",
    a: "Sí. Desde Brasil puedes pagar con Pix además de tarjeta. El acceso al Discord o al curso se libera igual de rápido una vez confirmado el pago.",
  },
  {
    q: "¿Qué incluye el Discord de la comunidad?",
    a: "Es el aula del colectivo. Con la membresía obtienes rol de alumno automático, reviews grupales semanales, eventos y customs con los coaches, canales por mapa y rol, guías gratis y respuesta directa entre clases. Es donde vive el día a día de Zero2Hero.",
  },
  {
    q: "¿Hay varios coaches? ¿Con cuál entreno?",
    a: "Sí. Zero2Hero es un colectivo de coaches pro. Hoy somos Gio (IGL/Smoker, jugó la VCL LATAM Sur con OXEN, el equipo afiliado a KRÜ) y Adverso (ex-Leviatán y KRÜ, IGL/iniciador que jugó VALORANT Champions 2022). Eliges tu coach según el rol y el estilo que quieras trabajar — cada uno tiene su página con sus offers.",
  },
  {
    q: "¿Qué necesito para mi primera clase?",
    a: "Tu link de Tracker.gg, 1-2 partidas grabadas, Discord instalado y tu rank actual. Si no tienes VODs, te explicamos cómo grabarlos en 5 minutos antes de empezar.",
  },
  {
    q: "¿En qué idiomas son las clases?",
    a: "Español e inglés con todos los coaches; Gio además atiende en portugués. Coordinamos el idioma al reservar.",
  },
];

export const community = {
  title: "El Discord es el aula.",
  body: "La membresía de Zero2Hero te mete al colectivo: rol de alumno automático vía Whop, reviews grupales con los coaches, eventos, customs y todas las guías gratis. Aquí progresas entre clase y clase, no solo en la sesión.",
  perks: [
    "Rol de alumno automático",
    "Reviews grupales semanales",
    "Eventos y customs con coaches",
    "Canales por mapa y por rol",
    "Guías y recursos gratis",
    "Respuesta directa entre clases",
  ],
  cta: "Unirse al Discord →",
};
