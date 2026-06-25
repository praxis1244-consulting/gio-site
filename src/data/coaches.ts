export type CoachStat = { lbl: string; value: string; accent?: string; cap: string };
export type Match = { ts: string; stage: string; a: string; b: string; res: string };
/** Screenshot de una conversación real con un alumno + el resultado que logró. */
export type ResultProof = { img: string; who: string; result: string };
export type Coach = {
  slug: string;
  name: string;
  handle: string;
  tagline: string;
  role: string;
  creds: string;
  rank: string;
  langs: string[];
  photo: string;
  cutout: string;
  heroCutout: string;
  bio: string;
  accentTeam?: string;
  stats: CoachStat[];
  matches?: Match[];
  results?: ResultProof[];
  socials: { twitch?: string; youtube?: string; x?: string };
};

export const coaches: Coach[] = [
  {
    slug: "gio",
    name: "Gio",
    handle: "@gio",
    tagline: "Tu próximo rank no es suerte. Es método.",
    role: "IGL · Smoker",
    creds: "Ex-OXEN · VCL LATAM Sur",
    rank: "Radiant",
    langs: ["ES", "EN", "PT"],
    photo: "/coaches/gio.jpg",
    cutout: "/coaches/gio-card-arm-fixed.png",
    heroCutout: "/coaches/gio-hero-arm-fixed.png",
    bio: "Ex-pro de la VCL LATAM Sur con OXEN. Radiant, IGL y Smoker. Cinco años jugando y enseñando: te diagnostico los 3 leaks que te frenan, te armo un plan a mano para tu rank y te acompaño hasta que subas. Frame por frame, cero humo. Clases en español, inglés y portugués.",
    accentTeam: "OXEN",
    stats: [
      { lbl: "RANK · PEAK", value: "#412", accent: "Radiant", cap: "ACT 25 · EP 9" },
      { lbl: "EXPERIENCIA", value: "5", accent: "+", cap: "AÑOS PRO · DESDE 2020" },
      { lbl: "ALUMNOS", value: "214", cap: "85% SUBIÓ DE RANGO" },
      { lbl: "VOD REVIEWED", value: "640", accent: "+", cap: "3,200 H DE ANÁLISIS" },
    ],
    matches: [
      { ts: "2025·05·20", stage: "VCL 25 LAS · STAGE 2", a: "OXEN", b: "9z Globant", res: "2-0" },
      { ts: "2025·05·15", stage: "VCL 25 LAS · STAGE 2", a: "OXEN", b: "Rebirth", res: "2-1" },
      { ts: "2025·04·02", stage: "VCL 25 LAS · STAGE 1", a: "OXEN", b: "Las Cabras", res: "2-0" },
      { ts: "2025·03·14", stage: "VCL 25 LAS · STAGE 1", a: "OXEN", b: "Leviatán Acad.", res: "2-1" },
    ],
    // Conversaciones reales con alumnos (capturas). Orden = de mayor a menor impacto.
    results: [
      { img: "/proof/gio-porsche.jpeg", who: "Porsche", result: "Diamante 3 → Radiant" },
      { img: "/proof/gio-lucshot.jpeg", who: "LucSh0t", result: "Ascendente 3 → Inmortal 2 · Peak 118" },
      { img: "/proof/gio-deco.jpeg", who: "deco", result: "Ascendente 1 → Ascendente 3 · BR" },
      { img: "/proof/gio-eazy.jpeg", who: "eazy.og", result: "Diamante 1 → Ascendente 2" },
      { img: "/proof/gio-frody.jpeg", who: "fRoDy!", result: "Platino 2 → Diamante 2" },
      { img: "/proof/gio-natop300.jpeg", who: "NA Player", result: "Ranked NA · Top 300" },
      { img: "/proof/gio-generalsteak.jpeg", who: "GeneralSteak", result: "Player Tier 2 · VCL LAN (FUEGO)" },
      { img: "/proof/gio-lilpeepfan.jpeg", who: "lilpeepfan", result: "VCL LAN · más consistente" },
      { img: "/proof/gio-kutral.jpeg", who: "kutral", result: "Más confianza, ganando harto" },
      { img: "/proof/gio-lowgravity.jpeg", who: "Lowgravity56", result: "«Me abriste los ojos»" },
    ],
    socials: { twitch: "#", youtube: "#", x: "#" },
  },
  {
    slug: "adverso",
    name: "Adverso",
    handle: "@adverso",
    // TODO: tagline real de Adverso
    tagline: "Del scrim al ranked: piensa como un pro.",
    // TODO: rol real de Adverso
    role: "Duelist · Entry",
    creds: "Ex-KRU",
    // TODO: rank real de Adverso
    rank: "Radiant",
    // TODO: idiomas reales de Adverso
    langs: ["ES", "EN"],
    photo: "/coaches/adverso.jpg",
    cutout: "/coaches/adverso-card.png",
    heroCutout: "/coaches/adverso-hero.png",
    // TODO: bio real de Adverso (rank, equipos, rol, idiomas, detalle ex-KRU)
    bio: "Ex-jugador de KRU. Pasó por el circuito competitivo de LATAM como entry fragger y duelist. Su coaching va al hueso del aim, los timings de entrada y la lectura del mapa: cómo abrir rounds sin morir gratis y cómo traducir el nivel de scrim al ranked. (Bio placeholder — pendiente detalle real.)",
    accentTeam: "KRU",
    // TODO: stats reales de Adverso
    stats: [
      { lbl: "RANK · PEAK", value: "#—", accent: "Radiant", cap: "PLACEHOLDER" },
      { lbl: "EXPERIENCIA", value: "—", accent: "+", cap: "AÑOS PRO · PLACEHOLDER" },
      { lbl: "ALUMNOS", value: "—", cap: "PLACEHOLDER" },
      { lbl: "VOD REVIEWED", value: "—", accent: "+", cap: "PLACEHOLDER" },
    ],
    // TODO: partidas reales de Adverso
    matches: [],
    socials: { twitch: "#", youtube: "#", x: "#" },
  },
];

export function getCoach(slug: string): Coach | undefined {
  return coaches.find((c) => c.slug === slug);
}
