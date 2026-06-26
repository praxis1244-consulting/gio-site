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
    handle: "@giovlr1",
    tagline: "Tu próximo rank no es suerte. Es método.",
    role: "IGL · Smoker",
    creds: "Ex-KRÜ Academy · VCL LATAM Sur",
    rank: "Radiant",
    langs: ["ES", "EN", "PT"],
    photo: "/coaches/gio.jpg",
    cutout: "/coaches/gio-card-arm-fixed.png",
    heroCutout: "/coaches/gio-hero-arm-fixed.png",
    bio: "Giovani «Gio» Lainati Ruz: IGL y controller (Smoker) chileno. Compite en la VCL LATAM Sur desde 2021 — pasó por Optix y Furious Gaming, y en 2025 jugó en KRÜ Academy. Radiant, cinco años jugando y enseñando: te diagnostico los 3 leaks que te frenan, te armo un plan a mano para tu rank y te acompaño hasta que subas. Frame por frame, cero humo. Clases en español, inglés y portugués.",
    accentTeam: "KRÜ ACADEMY",
    stats: [
      { lbl: "VCL LATAM SUR", value: "2°", accent: "LUGAR", cap: "ACE MASTERS 25 · KRÜ ACAD." },
      { lbl: "EXPERIENCIA", value: "5", accent: "+", cap: "AÑOS · DESDE 2021" },
      { lbl: "ALUMNOS", value: "214", cap: "85% SUBIÓ DE RANGO" },
      { lbl: "VOD REVIEWED", value: "640", accent: "+", cap: "3,200 H DE ANÁLISIS" },
    ],
    // Gio pidió sacar la sección de partidas — su prueba real son los resultados
    // de alumnos (sección de abajo), no sus propios scores. Vacío = no se renderiza.
    matches: [],
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
    bio: "Benjamín «Adverso» Poblete: IGL chileno, 6 años pro. VALORANT Champions 2022 con Leviatán, VCT Americas con KRÜ. Su fuerte nunca fue el aim, sino leer la ronda y decidir bien cuando el round se rompe. Te enseña a ganar con la cabeza, no solo con la mano. Clases en español, inglés y portugués.",
    accentTeam: "LEVIATÁN",
    stats: [
      { lbl: "CARRERA PRO", value: "6", accent: "AÑOS", cap: "2020–2026 · IGL" },
      { lbl: "VAL CHAMPIONS", value: "2022", cap: "ESTAMBUL · C/ LEVIATÁN" },
      { lbl: "VCT AMERICAS", value: "2025", cap: "TIER 1 · C/ KRÜ" },
      { lbl: "PREMIOS", value: "$51K", accent: "+", cap: "EN CARRERA PRO" },
    ],
    matches: [
      { ts: "2022·06·26", stage: "VCT 22 LATAM · STAGE 2 (FINAL)", a: "Leviatán", b: "KRÜ", res: "3-0" },
      { ts: "2024·06·26", stage: "VCL 24 LAS · SPLIT 2 (FINAL)", a: "All Knights", b: "9z Team", res: "3-1" },
      { ts: "2022·07·18", stage: "MASTERS COPENHAGUE 2022", a: "Leviatán", b: "Fnatic", res: "1-2" },
      { ts: "2022·09·11", stage: "VAL CHAMPIONS 2022 · ESTAMBUL", a: "Leviatán", b: "FunPlus Phoenix", res: "0-2" },
    ],
    socials: { twitch: "https://www.twitch.tv/adversogg", x: "https://x.com/adversogg" },
  },
];

export function getCoach(slug: string): Coach | undefined {
  return coaches.find((c) => c.slug === slug);
}
