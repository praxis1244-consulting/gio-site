export type CoachStat = { lbl: string; value: string; accent?: string; cap: string };
/** Un equipo pro por el que pasó el coach + su logo (sobre fondo oscuro). */
export type TeamLogo = { name: string; logo: string };
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
  teams?: TeamLogo[];
  results?: ResultProof[];
  /** Link de Calendly del coach (cuenta compartida adversinigionini). */
  calendly?: string;
  socials: { twitch?: string; youtube?: string; x?: string };
};

export const coaches: Coach[] = [
  {
    slug: "gio",
    name: "Gio",
    handle: "@giovlr1",
    tagline: "Tu próximo rank no es suerte. Es método.",
    role: "IGL · Smoker",
    creds: "Ex-KRÜ Academy · VCL LATAM Sur",
    rank: "Radiant",
    langs: ["ES", "EN", "PT"],
    photo: "/coaches/gio.jpg",
    cutout: "/coaches/gio-card-arm-fixed.png",
    heroCutout: "/coaches/gio-hero-arm-fixed.png",
    bio: "Giovani «Gio» Lainati Ruz: IGL y controller (Smoker) chileno, Radiant. Compite en la VCL LATAM Sur desde 2021 — Optix, Furious Gaming y KRÜ Academy. Te diagnostica los leaks que te frenan y te arma un plan para tu rank. Frame por frame, cero humo. Clases en español, inglés y portugués.",
    accentTeam: "KRÜ ACADEMY",
    stats: [
      { lbl: "VCL LATAM SUR", value: "2°", accent: "LUGAR", cap: "ACE MASTERS 25 · KRÜ ACAD." },
      { lbl: "EXPERIENCIA", value: "5", accent: "+", cap: "AÑOS · DESDE 2021" },
      { lbl: "ALUMNOS", value: "214", cap: "85% SUBIÓ DE RANGO" },
      { lbl: "VOD REVIEWED", value: "640", accent: "+", cap: "3,200 H DE ANÁLISIS" },
    ],
    // Orgs reales de su carrera en la VCL LATAM Sur (Liquipedia + KRÜ Academy del
    // ACE Masters 25). Reverse-cronológico: el más reconocible/reciente primero.
    teams: [
      { name: "KRÜ Academy", logo: "/teams/kru.png" },
      { name: "OXEN", logo: "/teams/oxen.png" },
      { name: "Furious Gaming", logo: "/teams/furious.png" },
      { name: "Optix", logo: "/teams/optix.png" },
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
    calendly: "https://calendly.com/adversinigionini/gio",
    socials: { twitch: "https://www.twitch.tv/giovlr1", x: "https://x.com/giovlr1" },
  },
  {
    slug: "adverso",
    name: "Adverso",
    handle: "@adversogg",
    tagline: "El aim te sube a Diamante. La cabeza te sube a Radiant.",
    role: "IGL · Iniciador",
    creds: "Ex-Leviatán · VAL Champions 2022",
    rank: "Radiant",
    langs: ["ES", "EN", "PT"],
    photo: "/coaches/adverso.jpg",
    cutout: "/coaches/adverso-card.png",
    heroCutout: "/coaches/adverso-hero.png",
    bio: "Benjamín «Adverso» Poblete: IGL chileno, 6 años pro. VALORANT Champions 2022 con Leviatán y VCT Americas con KRÜ. Te enseña a ganar con la cabeza: leer la ronda y decidir bien cuando el round se rompe. Clases en español, inglés y portugués.",
    accentTeam: "LEVIATÁN",
    stats: [
      { lbl: "CARRERA PRO", value: "6", accent: "AÑOS", cap: "2020–2026 · IGL" },
      { lbl: "VAL CHAMPIONS", value: "2022", cap: "ESTAMBUL · C/ LEVIATÁN" },
      { lbl: "VCT AMERICAS", value: "2025", cap: "TIER 1 · C/ KRÜ" },
      { lbl: "PREMIOS", value: "$51K", accent: "+", cap: "EN CARRERA PRO" },
    ],
    // Orgs reales de su carrera pro (Liquipedia), ordenados por peso/reconocimiento.
    // Logos sobre fondo oscuro; FURIA va en versión blanca porque su pantera es negra.
    teams: [
      { name: "Leviatán", logo: "/teams/leviatan.png" },
      { name: "KRÜ Esports", logo: "/teams/kru.png" },
      { name: "FURIA", logo: "/teams/furia.png" },
      { name: "All Knights", logo: "/teams/all-knights.png" },
      { name: "00 Nation", logo: "/teams/00-nation.png" },
      { name: "Australs", logo: "/teams/australs.png" },
      { name: "ShindeN", logo: "/teams/shinden.png" },
    ],
    calendly: "https://calendly.com/adversinigionini/adverso",
    socials: { twitch: "https://www.twitch.tv/adversogg", x: "https://x.com/adversogg" },
  },
];

export function getCoach(slug: string): Coach | undefined {
  return coaches.find((c) => c.slug === slug);
}
