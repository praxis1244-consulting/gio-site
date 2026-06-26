import type { Locale } from "@/i18n/routing";

export type Feature = { tag: string; title: string; body: string };
export type Testimonial = {
  quote: string;
  name: string;
  progress: string;
  delta: string;
  coachSlug?: string;
};
export type Faq = { q: string; a: string };
export type Community = {
  title: string;
  body: string;
  perks: string[];
  cta: string;
};

const features: Record<Locale, Feature[]> = {
  es: [
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
  ],
  pt: [
    {
      tag: "AO VIVO",
      title: "1v1 ao vivo",
      body: "Sessão privada com seu coach pelo Discord. Revisamos seu VOD frame a frame, marcamos o que você fez de errado e o que um pro faz na mesma situação.",
    },
    {
      tag: "ASYNC",
      title: "VOD review",
      body: "Você manda suas partidas e recebe uma análise detalhada: erros, decisões, posicionamento e os drills concretos pra corrigir essa semana.",
    },
    {
      tag: "AUTOGUIADO",
      title: "Curso autoguiado",
      body: "VOD packs e masterclasses de cada coach: lineups por mapa, defaults, rotinas de mira e macro. Seu progresso no seu ritmo, com acesso vitalício.",
    },
    {
      tag: "DISCORD",
      title: "Comunidade Discord",
      body: "A sala de aula do coletivo. Cargo de aluno automático via Whop, reviews em grupo, eventos, customs com os coaches e guias grátis.",
    },
  ],
  en: [
    {
      tag: "LIVE",
      title: "Live 1v1",
      body: "Private session with your coach over Discord. We review your VOD frame by frame, mark what you did wrong and what a pro does in that same spot.",
    },
    {
      tag: "ASYNC",
      title: "VOD review",
      body: "Send your matches and get a detailed breakdown: leaks, decisions, positioning and the concrete drills to fix them this week.",
    },
    {
      tag: "SELF-PACED",
      title: "Self-paced course",
      body: "VOD packs and masterclasses from each coach: per-map lineups, defaults, aim routines and macro. Your progress at your pace, with lifetime access.",
    },
    {
      tag: "DISCORD",
      title: "Discord community",
      body: "The collective's classroom. Automatic student role via Whop, group reviews, events, customs with the coaches and free guides.",
    },
  ],
};

// TODO: testimonios reales. Estos son PLACEHOLDERS realistas.
const testimonials: Record<Locale, Testimonial[]> = {
  es: [
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
  ],
  pt: [
    {
      quote: "Fiquei 6 meses travado na Prata. Em 3 sessões com o Gio entendi por que perdia os rounds decisivos. Subi pra Diamante em menos de um mês.",
      name: "MATÍAS · SCL",
      progress: "PRATA III → DIAMANTE I",
      delta: "+2 ELOS",
      coachSlug: "gio",
    },
    {
      quote: "Não é só mira. O Gio me ensinou a falar na partida, ler o adversário e fechar rounds. Hoje sou IGL do meu time da liga universitária.",
      name: "VALENTINA · CDMX",
      progress: "OURO II → IMORTAL",
      delta: "+ IGL",
      coachSlug: "gio",
    },
    {
      quote: "Com o Adverso parei de jogar às cegas. Ele me ensinou a ler a rodada, usar a info do time e tomar a decisão certa no mid-round. Comecei a ganhar partidas pensando, não só mirando.",
      name: "JOAQUÍN · LIM",
      progress: "DIAMANTE II → ASCENDENTE III",
      delta: "+1 ELO",
      coachSlug: "adverso",
    },
    {
      quote: "O Discord vale só pelas reviews em grupo. Você vê os erros dos outros, corrigem os seus e sempre tem um coach respondendo. A comunidade empurra.",
      name: "CAMILA · BOG",
      progress: "OURO I → PLATINA III",
      delta: "+1 ELO",
    },
    {
      quote: "Comprei a masterclass de smokes achando que era só lineup. É macro completo. Finalmente entendo por que fazemos o que fazemos em cada mapa.",
      name: "BRUNO · POA",
      progress: "PRATA I → DIAMANTE II",
      delta: "+3 DIVS",
      coachSlug: "gio",
    },
    {
      quote: "Paguei com Pix do Brasil sem problema. A primeira aula organizou minha cabeça mais que 100 partidas de ranked sozinha. Vale cada centavo.",
      name: "ISABELA · SP",
      progress: "BRONZE III → OURO I",
      delta: "+2 ELOS",
    },
  ],
  en: [
    {
      quote: "I was stuck in Silver for 6 months. In 3 sessions with Gio I understood why I kept losing the key rounds. I hit Diamond in under a month.",
      name: "MATÍAS · SCL",
      progress: "SILVER III → DIAMOND I",
      delta: "+2 RANKS",
      coachSlug: "gio",
    },
    {
      quote: "It's not just aim. Gio taught me to talk in the match, read the enemy and close rounds. Today I'm the IGL of my college league team.",
      name: "VALENTINA · CDMX",
      progress: "GOLD II → IMMORTAL",
      delta: "+ IGL",
      coachSlug: "gio",
    },
    {
      quote: "With Adverso I stopped playing blind. He taught me to read the round, use the team's info and make the right mid-round call. I started winning matches by thinking, not just aiming.",
      name: "JOAQUÍN · LIM",
      progress: "DIAMOND II → ASCENDANT III",
      delta: "+1 RANK",
      coachSlug: "adverso",
    },
    {
      quote: "The Discord is worth it just for the group reviews. You see others' mistakes, they fix yours and there's always a coach answering. The community pushes you.",
      name: "CAMILA · BOG",
      progress: "GOLD I → PLATINUM III",
      delta: "+1 RANK",
    },
    {
      quote: "I bought the smokes masterclass thinking it was just lineups. It's full macro. I finally get why we do what we do on each map.",
      name: "BRUNO · POA",
      progress: "SILVER I → DIAMOND II",
      delta: "+3 DIVS",
      coachSlug: "gio",
    },
    {
      quote: "I paid with Pix from Brazil no problem. The first class sorted out my head more than 100 solo ranked games. Worth every cent.",
      name: "ISABELA · SP",
      progress: "BRONZE III → GOLD I",
      delta: "+2 RANKS",
    },
  ],
};

const faqs: Record<Locale, Faq[]> = {
  es: [
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
      a: "Sí. Zero2Hero es un colectivo de coaches pro. Hoy somos Gio (IGL/Smoker, jugó la VCL LATAM Sur con KRÜ Academy) y Adverso (ex-Leviatán y KRÜ, IGL/iniciador que jugó VALORANT Champions 2022). Eliges tu coach según el rol y el estilo que quieras trabajar — cada uno tiene su página con sus offers.",
    },
    {
      q: "¿Qué necesito para mi primera clase?",
      a: "Tu link de Tracker.gg, 1-2 partidas grabadas, Discord instalado y tu rank actual. Si no tienes VODs, te explicamos cómo grabarlos en 5 minutos antes de empezar.",
    },
    {
      q: "¿En qué idiomas son las clases?",
      a: "Español e inglés con todos los coaches; Gio además atiende en portugués. Coordinamos el idioma al reservar.",
    },
  ],
  pt: [
    {
      q: "Funciona se eu sou Ferro ou Bronze?",
      a: "Sim. A metodologia muda conforme seu elo: no Ferro/Bronze, 80% do trabalho é mira, crosshair placement e settings. A gente não vai te explicar rotações avançadas se você ainda não ganha os peeks. O coach começa onde você está.",
    },
    {
      q: "Como funciona o pagamento com Whop?",
      a: "O Whop é nossa loja e checkout. Você escolhe sua offer, paga na página segura deles e o Whop te dá acesso automático: atribui o cargo no Discord ou entrega o curso. A gente não mexe no seu cartão; toda a cobrança e o acesso são gerenciados pelo Whop.",
    },
    {
      q: "Posso pagar do meu país na América Latina?",
      a: "Sim. O Whop aceita cartões de toda a América Latina e conversão pra sua moeda local. Os preços aparecem em USD como referência e são cobrados pelo câmbio do dia.",
    },
    {
      q: "Aceitam Pix do Brasil?",
      a: "Sim. Do Brasil você pode pagar com Pix além de cartão. O acesso ao Discord ou ao curso é liberado igual de rápido assim que o pagamento é confirmado.",
    },
    {
      q: "O que inclui o Discord da comunidade?",
      a: "É a sala de aula do coletivo. Com a assinatura você ganha cargo de aluno automático, reviews em grupo semanais, eventos e customs com os coaches, canais por mapa e por função, guias grátis e resposta direta entre as aulas. É onde vive o dia a dia da Zero2Hero.",
    },
    {
      q: "Tem vários coaches? Com qual eu treino?",
      a: "Sim. A Zero2Hero é um coletivo de coaches pro. Hoje somos Gio (IGL/Smoker, jogou a VCL LATAM Sul com a KRÜ Academy) e Adverso (ex-Leviatán e KRÜ, IGL/iniciador que jogou o VALORANT Champions 2022). Você escolhe seu coach pela função e pelo estilo que quer treinar — cada um tem sua página com suas offers.",
    },
    {
      q: "O que preciso pra minha primeira aula?",
      a: "Seu link do Tracker.gg, 1-2 partidas gravadas, Discord instalado e seu elo atual. Se você não tem VODs, a gente te explica como gravar em 5 minutos antes de começar.",
    },
    {
      q: "Em quais idiomas são as aulas?",
      a: "Espanhol e inglês com todos os coaches; o Gio também atende em português. A gente combina o idioma na hora de agendar.",
    },
  ],
  en: [
    {
      q: "Does it work if I'm Iron or Bronze?",
      a: "Yes. The method changes with your rank: in Iron/Bronze, 80% of the work is aim, crosshair placement and settings. We won't explain advanced rotations if you're still losing your peeks. The coach starts where you are.",
    },
    {
      q: "How does paying with Whop work?",
      a: "Whop is our store and checkout. You pick your offer, pay on their secure page and Whop grants access automatically: it assigns your Discord role or hands over the course. We never handle your card; Whop manages all billing and access.",
    },
    {
      q: "Can I pay from my LATAM country?",
      a: "Yes. Whop accepts cards from all of LATAM and converts to your local currency. Prices show in USD as a reference and are charged at the day's exchange rate.",
    },
    {
      q: "Do you accept Pix from Brazil?",
      a: "Yes. From Brazil you can pay with Pix as well as card. Access to the Discord or course is released just as fast once payment is confirmed.",
    },
    {
      q: "What's in the community Discord?",
      a: "It's the collective's classroom. With the membership you get an automatic student role, weekly group reviews, events and customs with the coaches, channels by map and role, free guides and direct answers between classes. It's where Zero2Hero's day-to-day lives.",
    },
    {
      q: "Are there several coaches? Which one do I train with?",
      a: "Yes. Zero2Hero is a collective of pro coaches. Today we're Gio (IGL/Smoker, played VCL LATAM South with KRÜ Academy) and Adverso (ex-Leviatán and KRÜ, IGL/initiator who played VALORANT Champions 2022). You pick your coach by the role and style you want to work on — each has their own page with their offers.",
    },
    {
      q: "What do I need for my first class?",
      a: "Your Tracker.gg link, 1-2 recorded matches, Discord installed and your current rank. If you don't have VODs, we'll show you how to record them in 5 minutes before we start.",
    },
    {
      q: "What languages are the classes in?",
      a: "Spanish and English with all coaches; Gio also teaches in Portuguese. We sort out the language when you book.",
    },
  ],
};

const community: Record<Locale, Community> = {
  es: {
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
  },
  pt: {
    title: "O Discord é a sala de aula.",
    body: "A assinatura da Zero2Hero te coloca no coletivo: cargo de aluno automático via Whop, reviews em grupo com os coaches, eventos, customs e todos os guias grátis. Aqui você progride entre uma aula e outra, não só na sessão.",
    perks: [
      "Cargo de aluno automático",
      "Reviews em grupo semanais",
      "Eventos e customs com coaches",
      "Canais por mapa e por função",
      "Guias e recursos grátis",
      "Resposta direta entre as aulas",
    ],
    cta: "Entrar no Discord →",
  },
  en: {
    title: "The Discord is the classroom.",
    body: "The Zero2Hero membership drops you into the collective: automatic student role via Whop, group reviews with the coaches, events, customs and all the free guides. This is where you improve between classes, not just in the session.",
    perks: [
      "Automatic student role",
      "Weekly group reviews",
      "Events and customs with coaches",
      "Channels by map and role",
      "Free guides and resources",
      "Direct answers between classes",
    ],
    cta: "Join the Discord →",
  },
};

export function getFeatures(locale: Locale): Feature[] {
  return features[locale];
}
export function getTestimonials(locale: Locale): Testimonial[] {
  return testimonials[locale];
}
export function getFaqs(locale: Locale): Faq[] {
  return faqs[locale];
}
export function getCommunity(locale: Locale): Community {
  return community[locale];
}
