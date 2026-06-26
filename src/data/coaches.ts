import type { Locale } from "@/i18n/routing";

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

// ── Spine: campos invariantes entre idiomas (assets, URLs, valores numéricos,
//    nombres de orgs/handles). Las partes traducibles viven en el overlay `text`.
type CoachBase = {
  slug: string;
  name: string;
  handle: string;
  langs: string[];
  photo: string;
  cutout: string;
  heroCutout: string;
  accentTeam?: string;
  /** stat.value es invariante (número/símbolo); lbl/accent/cap se traducen, ligados por `key`. */
  statKeys: { key: string; value: string }[];
  teams?: TeamLogo[];
  /** result.who/img invariantes; el texto del resultado se traduce, ligado por `key`. */
  resultKeys?: { key: string; who: string; img: string }[];
  calendly?: string;
  socials: { twitch?: string; youtube?: string; x?: string };
};

// ── Overlay traducible, por locale → por slug. `stats`/`results` se ligan por `key`
//    (no por índice) para que los tres idiomas nunca se desalineen.
type StatText = { lbl: string; accent?: string; cap: string };
type CoachText = {
  tagline: string;
  role: string;
  creds: string;
  rank: string;
  bio: string;
  stats: Record<string, StatText>;
  results?: Record<string, string>;
};

const base: CoachBase[] = [
  {
    slug: "gio",
    name: "Gio",
    handle: "@giovlr1",
    langs: ["ES", "EN", "PT"],
    photo: "/coaches/gio.jpg",
    cutout: "/coaches/gio-card-arm-fixed.png",
    heroCutout: "/coaches/gio-hero-arm-fixed.png",
    accentTeam: "KRÜ ACADEMY",
    statKeys: [
      { key: "vcl", value: "2°" },
      { key: "exp", value: "5" },
      { key: "students", value: "214" },
      { key: "vods", value: "640" },
    ],
    teams: [
      { name: "KRÜ Academy", logo: "/teams/kru.png" },
      { name: "OXEN", logo: "/teams/oxen.png" },
      { name: "Furious Gaming", logo: "/teams/furious.png" },
      { name: "Optix", logo: "/teams/optix.png" },
    ],
    resultKeys: [
      { key: "porsche", who: "Porsche", img: "/proof/gio-porsche.jpeg" },
      { key: "lucshot", who: "LucSh0t", img: "/proof/gio-lucshot.jpeg" },
      { key: "deco", who: "deco", img: "/proof/gio-deco.jpeg" },
      { key: "eazy", who: "eazy.og", img: "/proof/gio-eazy.jpeg" },
      { key: "frody", who: "fRoDy!", img: "/proof/gio-frody.jpeg" },
      { key: "natop300", who: "NA Player", img: "/proof/gio-natop300.jpeg" },
      { key: "generalsteak", who: "GeneralSteak", img: "/proof/gio-generalsteak.jpeg" },
      { key: "lilpeepfan", who: "lilpeepfan", img: "/proof/gio-lilpeepfan.jpeg" },
      { key: "kutral", who: "kutral", img: "/proof/gio-kutral.jpeg" },
      { key: "lowgravity", who: "Lowgravity56", img: "/proof/gio-lowgravity.jpeg" },
    ],
    calendly: "https://calendly.com/adversinigionini/gio",
    socials: { twitch: "https://www.twitch.tv/giovlr1", x: "https://x.com/giovlr1" },
  },
  {
    slug: "adverso",
    name: "Adverso",
    handle: "@adversogg",
    langs: ["ES", "EN", "PT"],
    photo: "/coaches/adverso.jpg",
    cutout: "/coaches/adverso-card.png",
    heroCutout: "/coaches/adverso-hero.png",
    accentTeam: "LEVIATÁN",
    statKeys: [
      { key: "career", value: "6" },
      { key: "champions", value: "2022" },
      { key: "vct", value: "2025" },
      { key: "prize", value: "$51K" },
    ],
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

const text: Record<Locale, Record<string, CoachText>> = {
  es: {
    gio: {
      tagline: "Tu próximo rank no es suerte. Es método.",
      role: "IGL · Smoker",
      creds: "Ex-KRÜ Academy · VCL LATAM Sur",
      rank: "Radiant",
      bio: "Giovani «Gio» Lainati Ruz: IGL y controller (Smoker) chileno, Radiant. Compite en la VCL LATAM Sur desde 2021 — Optix, Furious Gaming y KRÜ Academy. Te diagnostica los leaks que te frenan y te arma un plan para tu rank. Frame por frame, cero humo. Clases en español, inglés y portugués.",
      stats: {
        vcl: { lbl: "VCL LATAM SUR", accent: "LUGAR", cap: "ACE MASTERS 25 · KRÜ ACAD." },
        exp: { lbl: "EXPERIENCIA", accent: "+", cap: "AÑOS · DESDE 2021" },
        students: { lbl: "ALUMNOS", cap: "85% SUBIÓ DE RANGO" },
        vods: { lbl: "VOD REVIEWED", accent: "+", cap: "3,200 H DE ANÁLISIS" },
      },
      results: {
        porsche: "Diamante 3 → Radiant",
        lucshot: "Ascendente 3 → Inmortal 2 · Peak 118",
        deco: "Ascendente 1 → Ascendente 3 · BR",
        eazy: "Diamante 1 → Ascendente 2",
        frody: "Platino 2 → Diamante 2",
        natop300: "Ranked NA · Top 300",
        generalsteak: "Player Tier 2 · VCL LAN (FUEGO)",
        lilpeepfan: "VCL LAN · más consistente",
        kutral: "Más confianza, ganando harto",
        lowgravity: "«Me abriste los ojos»",
      },
    },
    adverso: {
      tagline: "El aim te sube a Diamante. La cabeza te sube a Radiant.",
      role: "IGL · Iniciador",
      creds: "Ex-Leviatán · VAL Champions 2022",
      rank: "Radiant",
      bio: "Benjamín «Adverso» Poblete: IGL chileno, 6 años pro. VALORANT Champions 2022 con Leviatán y VCT Americas con KRÜ. Te enseña a ganar con la cabeza: leer la ronda y decidir bien cuando el round se rompe. Clases en español, inglés y portugués.",
      stats: {
        career: { lbl: "CARRERA PRO", accent: "AÑOS", cap: "2020–2026 · IGL" },
        champions: { lbl: "VAL CHAMPIONS", cap: "ESTAMBUL · C/ LEVIATÁN" },
        vct: { lbl: "VCT AMERICAS", cap: "TIER 1 · C/ KRÜ" },
        prize: { lbl: "PREMIOS", accent: "+", cap: "EN CARRERA PRO" },
      },
    },
  },
  pt: {
    gio: {
      tagline: "Seu próximo elo não é sorte. É método.",
      role: "IGL · Smoker",
      creds: "Ex-KRÜ Academy · VCL LATAM Sul",
      rank: "Radiant",
      bio: "Giovani «Gio» Lainati Ruz: IGL e controlador (Smoker) chileno, Radiant. Compete na VCL LATAM Sul desde 2021 — Optix, Furious Gaming e KRÜ Academy. Ele diagnostica os erros que te travam e monta um plano pro seu elo. Frame a frame, sem enrolação. Aulas em espanhol, inglês e português.",
      stats: {
        vcl: { lbl: "VCL LATAM SUL", accent: "LUGAR", cap: "ACE MASTERS 25 · KRÜ ACAD." },
        exp: { lbl: "EXPERIÊNCIA", accent: "+", cap: "ANOS · DESDE 2021" },
        students: { lbl: "ALUNOS", cap: "85% SUBIU DE ELO" },
        vods: { lbl: "VODS REVISADOS", accent: "+", cap: "3.200 H DE ANÁLISE" },
      },
      results: {
        porsche: "Diamante 3 → Radiant",
        lucshot: "Ascendente 3 → Imortal 2 · Peak 118",
        deco: "Ascendente 1 → Ascendente 3 · BR",
        eazy: "Diamante 1 → Ascendente 2",
        frody: "Platina 2 → Diamante 2",
        natop300: "Ranked NA · Top 300",
        generalsteak: "Player Tier 2 · VCL LAN (FUEGO)",
        lilpeepfan: "VCL LAN · mais consistente",
        kutral: "Mais confiança, ganhando muito",
        lowgravity: "«Você abriu meus olhos»",
      },
    },
    adverso: {
      tagline: "A mira te leva a Diamante. A cabeça te leva a Radiant.",
      role: "IGL · Iniciador",
      creds: "Ex-Leviatán · VAL Champions 2022",
      rank: "Radiant",
      bio: "Benjamín «Adverso» Poblete: IGL chileno, 6 anos de pro. VALORANT Champions 2022 com a Leviatán e VCT Americas com a KRÜ. Ele te ensina a ganhar com a cabeça: ler a rodada e decidir bem quando o round desanda. Aulas em espanhol, inglês e português.",
      stats: {
        career: { lbl: "CARREIRA PRO", accent: "ANOS", cap: "2020–2026 · IGL" },
        champions: { lbl: "VAL CHAMPIONS", cap: "ISTAMBUL · C/ LEVIATÁN" },
        vct: { lbl: "VCT AMERICAS", cap: "TIER 1 · C/ KRÜ" },
        prize: { lbl: "PREMIAÇÕES", accent: "+", cap: "NA CARREIRA PRO" },
      },
    },
  },
  en: {
    gio: {
      tagline: "Your next rank isn't luck. It's method.",
      role: "IGL · Smoker",
      creds: "Ex-KRÜ Academy · VCL LATAM South",
      rank: "Radiant",
      bio: "Giovani «Gio» Lainati Ruz: Chilean IGL and controller (Smoker), Radiant. He's competed in VCL LATAM South since 2021 — Optix, Furious Gaming and KRÜ Academy. He pinpoints the leaks holding you back and builds a plan for your rank. Frame by frame, no fluff. Classes in Spanish, English and Portuguese.",
      stats: {
        vcl: { lbl: "VCL LATAM SOUTH", accent: "PLACE", cap: "ACE MASTERS 25 · KRÜ ACAD." },
        exp: { lbl: "EXPERIENCE", accent: "+", cap: "YEARS · SINCE 2021" },
        students: { lbl: "STUDENTS", cap: "85% RANKED UP" },
        vods: { lbl: "VODS REVIEWED", accent: "+", cap: "3,200 H OF ANALYSIS" },
      },
      results: {
        porsche: "Diamond 3 → Radiant",
        lucshot: "Ascendant 3 → Immortal 2 · Peak 118",
        deco: "Ascendant 1 → Ascendant 3 · BR",
        eazy: "Diamond 1 → Ascendant 2",
        frody: "Platinum 2 → Diamond 2",
        natop300: "NA Ranked · Top 300",
        generalsteak: "Tier 2 Player · VCL LAN (FUEGO)",
        lilpeepfan: "VCL LAN · more consistent",
        kutral: "More confidence, winning a lot",
        lowgravity: "«You opened my eyes»",
      },
    },
    adverso: {
      tagline: "Aim gets you to Diamond. Your head gets you to Radiant.",
      role: "IGL · Initiator",
      creds: "Ex-Leviatán · VAL Champions 2022",
      rank: "Radiant",
      bio: "Benjamín «Adverso» Poblete: Chilean IGL, 6 years pro. VALORANT Champions 2022 with Leviatán and VCT Americas with KRÜ. He teaches you to win with your head: read the round and make the right call when it breaks down. Classes in Spanish, English and Portuguese.",
      stats: {
        career: { lbl: "PRO CAREER", accent: "YEARS", cap: "2020–2026 · IGL" },
        champions: { lbl: "VAL CHAMPIONS", cap: "ISTANBUL · W/ LEVIATÁN" },
        vct: { lbl: "VCT AMERICAS", cap: "TIER 1 · W/ KRÜ" },
        prize: { lbl: "PRIZES", accent: "+", cap: "IN PRO CAREER" },
      },
    },
  },
};

function build(b: CoachBase, t: CoachText): Coach {
  return {
    slug: b.slug,
    name: b.name,
    handle: b.handle,
    langs: b.langs,
    photo: b.photo,
    cutout: b.cutout,
    heroCutout: b.heroCutout,
    accentTeam: b.accentTeam,
    calendly: b.calendly,
    socials: b.socials,
    tagline: t.tagline,
    role: t.role,
    creds: t.creds,
    rank: t.rank,
    bio: t.bio,
    stats: b.statKeys.map((s) => ({ value: s.value, ...t.stats[s.key] })),
    teams: b.teams,
    results: b.resultKeys?.map((r) => ({
      img: r.img,
      who: r.who,
      result: t.results?.[r.key] ?? "",
    })),
  };
}

export function getCoaches(locale: Locale): Coach[] {
  return base.map((b) => build(b, text[locale][b.slug]));
}

export function getCoach(locale: Locale, slug: string): Coach | undefined {
  const b = base.find((c) => c.slug === slug);
  return b ? build(b, text[locale][slug]) : undefined;
}

/** Slugs de todos los coaches (para generateStaticParams, sin importar locale). */
export const coachSlugs: string[] = base.map((b) => b.slug);
