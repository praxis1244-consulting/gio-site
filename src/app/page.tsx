import type { CSSProperties } from "react";
import { LeadForm } from "@/components/lead-form";

const stats = [
  { lbl: "RANK · PEAK", value: <>#412 <em>Radiant</em></>, cap: "ACT 25 · EP 9" },
  { lbl: "EXPERIENCIA", value: <>5<em>+</em></>, cap: "AÑOS PRO · DESDE 2020" },
  { lbl: "ALUMNOS", value: <>214</>, cap: "85% SUBIÓ DE RANGO" },
  { lbl: "VOD REVIEWED", value: <>640<em>+</em></>, cap: "3,200 H DE ANÁLISIS" },
];

const matches = [
  { ts: "2025·05·20", stage: "VCL 25 LAS · STAGE 2", a: "OXEN", b: "9z Globant", res: "2-0" },
  { ts: "2025·05·15", stage: "VCL 25 LAS · STAGE 2", a: "OXEN", b: "Rebirth", res: "2-1" },
  { ts: "2025·04·02", stage: "VCL 25 LAS · STAGE 1", a: "OXEN", b: "Las Cabras", res: "2-0" },
  { ts: "2025·03·14", stage: "VCL 25 LAS · STAGE 1", a: "OXEN", b: "Leviatán Acad.", res: "2-1" },
  { ts: "2024·10·13", stage: "RED BULL HG #5 · CHILE QF", a: "Lillas", b: "Freddyneta", res: "2-0" },
  { ts: "2024·07·01", stage: "VCL 24 LAS ACE · SPLIT 2", a: "Skibidi Sigmas", b: "ONA", res: "2-0" },
];

const steps = [
  {
    no: "01",
    ph: "IMG · TRACKER · STATS",
    title: <>Briefing inicial — <em>diagnóstico.</em></>,
    body: "Mandas tu Tracker y un VOD. Identifico tus 3 leaks principales, tu agente óptimo y los mapas en los que pierdes ranked points.",
    meta: ["30 MIN", "GRATIS", "DISCORD"],
  },
  {
    no: "02",
    ph: "IMG · PDF · PLAN",
    title: <>Plan personalizado — <em>tu hoja de ruta.</em></>,
    body: "Recibes un PDF con tu plan de progresión: aim routine, utilities por mapa, rotaciones según rol, agentes recomendados. Hecho a mano para tu rank.",
    meta: ["PDF · 24 H", "HECHO A MANO"],
  },
  {
    no: "03",
    ph: "IMG · SESIÓN · VOD",
    title: <>Sesiones 1v1 — <em>frame por frame.</em></>,
    body: "Discord + TeamViewer + revisión de VOD en directo. Marco frame por frame qué hiciste mal, qué hace un Radiant en esa misma situación, y por qué.",
    meta: ["60 MIN", "SEMANAL", "EN VIVO"],
  },
  {
    no: "04",
    ph: "IMG · DRILLS · DISCORD",
    title: <>Tarea + seguimiento — <em>no te suelto.</em></>,
    body: "Cada sesión termina con drills concretos para la semana. Reviso tus partidas en el grupo privado y te corrijo entre clase y clase.",
    meta: ["DAILY", "DISCORD", "WHATSAPP"],
  },
];

const fights = [
  {
    headline: false,
    belt: { tier: "TIER 01 · RECLUTA", rounds: "1 RD" },
    name: <>Diagnóstico <em>1v1</em></>,
    rounds: "Sesión única",
    price: { v: "$ —", u: "/ sesión única" },
    items: [
      { text: "1 sesión de 60 min", muted: false },
      { text: "Revisión de 2 VOD", muted: false },
      { text: "Identificación de 3 leaks", muted: false },
      { text: "Recomendación de agente", muted: false },
      { text: "Plan escrito · PDF", muted: true },
      { text: "Discord privado", muted: true },
    ],
    cta: { label: "Reservar 1v1", variant: "ghost" as const },
  },
  {
    headline: true,
    belt: { tier: "TIER 02 · OPERADOR · MAIN EVENT", rounds: "4 RD" },
    name: <>Programa <em>4 semanas</em></>,
    rounds: "4 sesiones",
    price: { v: "$ —", u: "/ mes · 4 sesiones" },
    items: [
      { text: "4 sesiones de 60 min", muted: false },
      { text: "Plan personalizado · PDF", muted: false },
      { text: "Revisión ilimitada de VOD", muted: false },
      { text: "Aim routine + warmup diario", muted: false },
      { text: "Grupo privado de Discord", muted: false },
      { text: "WhatsApp directo entre clases", muted: false },
    ],
    cta: { label: "Reservar programa →", variant: "primary" as const },
  },
  {
    headline: false,
    belt: { tier: "TIER 03 · ÉLITE", rounds: "12 RD" },
    name: <>Mentoría <em>3 meses</em></>,
    rounds: "12 sesiones",
    price: { v: "$ —", u: "/ trimestre · 12 sesiones" },
    items: [
      { text: "12 sesiones de 60-90 min", muted: false },
      { text: "Todo lo de Operador", muted: false },
      { text: "Análisis de scrims", muted: false },
      { text: "Sparring con team de Gio", muted: false },
      { text: "Carta para try-outs", muted: false },
      { text: "Canal de demos privado", muted: false },
    ],
    cta: { label: "Postular a élite", variant: "ghost" as const },
  },
];

const testimonials = [
  {
    quote: "Llevaba 6 meses estancado en Plata. En 3 sesiones con Gio entendí por qué perdía los rounds clave. Subí a Diamante en menos de un mes.",
    name: "MATÍAS · SCL",
    progress: "PLATA III → DIAMANTE I",
    delta: "+2 RANKS",
  },
  {
    quote: "No es solo aim. Gio me enseñó a hablar en la partida, a leer al rival, a cerrar rounds. Hoy soy IGL de mi equipo de la liga universitaria.",
    name: "VALENTINA · CDMX",
    progress: "ORO II → INMORTAL",
    delta: "+ IGL",
  },
  {
    quote: "Pedí solo una clase para arreglar mi crosshair. Terminé reservando el programa completo. El nivel de detalle es de selección.",
    name: "JOAQUÍN · LIM",
    progress: "DIAMANTE II → ASCENDENTE III",
    delta: "+1 RANK",
  },
];

const faqs = [
  {
    q: "¿Sirve si soy Hierro o Bronce?",
    a: "Sí. La metodología cambia: en Hierro/Bronce el 80% del trabajo es aim, crosshair placement y settings. No te voy a explicar rotaciones avanzadas si todavía no ganas peeks. Empiezo donde estás.",
  },
  {
    q: "¿Puedo pagar en pesos chilenos / argentinos / mexicanos?",
    a: "Sí. Acepto Mercado Pago (CL/AR/MX), transferencia o PayPal. Precios en USD para referencia, conversión al tipo de cambio del día.",
  },
  {
    q: "¿Qué necesito para la primera clase?",
    a: "Tu link de Tracker.gg, 1-2 partidas grabadas, Discord instalado y tu rank actual. Si no tienes VODs, te explico cómo grabarlos en 5 minutos antes de empezar.",
  },
  {
    q: "¿Garantía real de subir de rango?",
    a: "Sí, en el programa de 4 semanas. Si haces los drills, asistes a las 4 sesiones y sigues el plan, garantizo que subes mínimo 1 división. Si no, la siguiente va por mi cuenta.",
  },
  {
    q: "¿Coachea solo Smokers / IGL?",
    a: "Mi rol es Smoker / IGL pero coacheo todos los roles. Entender macro (rotaciones, defaults, timings) es lo que más impacto tiene en cualquier rol.",
  },
  {
    q: "¿En qué horarios atiendes?",
    a: "Lunes a viernes 18:00-23:00 hora Chile (UTC-3). Sábados 11:00-15:00. Si vives en otro huso, coordinamos por WhatsApp.",
  },
];

const marqueeItems = [
  "OXEN", "·", { em: "VCL 25" }, "·", "FURIOUS GAMING", "·", { em: "RADIANT" }, "·",
  "RED BULL HG", "·", { em: "IGL" }, "·", "SKIBIDI SIGMAS", "·", { em: "SMOKER" }, "·",
  "LILLAS WARRIORS", "·", { em: "VCL 24 ACE" }, "·",
];

export default function Home() {
  return (
    <>
      <nav className="nav-b">
        <a className="mark" href="#">GIO<em>·VAL</em></a>
        <ul>
          <li><a href="#dossier">Dossier</a></li>
          <li><a href="#metodo">Método</a></li>
          <li><a href="#programa">Programa</a></li>
          <li><a href="#testimonios">Testimonios</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <a href="#programa" className="btn btn-primary">Reservar →</a>
      </nav>

      {/* HERO POSTER */}
      <header className="hero-b">
        <div className="hero-b__inner">
          <div className="hero-b__copy">
            <div className="hero-b__id">COACH PRIVADO · <b>VALORANT LATAM</b></div>
            <h1 className="hero-b__title">
              <span className="sans">Tu próximo</span><br />
              rank no es <span className="red">suerte.</span><br />
              Es <em>método.</em>
            </h1>
            <p className="hero-b__sub">
              Coaching 1v1 con <b>Gio</b> — ex-pro de la VCL LATAM Sur, Radiant, IGL Smoker. Te diagnostico los 3 leaks que te frenan, te doy un plan, y te acompaño hasta que subas. Para todos los ranks, en español.
            </p>
            <div className="hero-b__ctas">
              <a className="btn btn-primary" href="#programa">Agendar diagnóstico →</a>
              <a className="btn btn-ghost" href="#lead">Guía gratis (PDF)</a>
              <span className="num">/ 2026 · ED. 03</span>
            </div>
          </div>

          {/* Poster — TODO: replace .poster__figure block with <img src="/gio-poster.jpg" alt="Gio · coach Valorant LATAM" /> when photo is in. */}
          <div className="poster">
            <div className="poster__corner tl">● COACH</div>
            <div className="poster__corner tr">VAL · 2026</div>
            <div className="poster__figure">
              FOTO DE GIO<br />
              <span style={{ opacity: 0.6 }}>[ placeholder · 4:5 ]</span>
            </div>
            <div className="poster__name">GIO · <em>el coach</em></div>
            <div className="poster__sub">RADIANT · IGL · EX-OXEN</div>
            <div className="poster__corner bl">No. 001</div>
            <div className="poster__corner br">SCL — 2026</div>
          </div>
        </div>

        {/* Marquee */}
        <div className="marquee-wrap">
          <div className="marquee">
            {[0, 1].map((loop) =>
              marqueeItems.map((item, i) =>
                typeof item === "string" ? (
                  <span key={`${loop}-${i}`}>{item}</span>
                ) : (
                  <em key={`${loop}-${i}`}>{item.em}</em>
                ),
              ),
            )}
          </div>
        </div>
      </header>

      {/* STATS */}
      <section className="section" id="dossier" style={{ padding: "80px 40px" }}>
        <div className="wrap">
          <div className="ehead">
            <span className="num">01</span>
            <div>
              <span className="lbl" style={{ color: "var(--val-red)" }}>DOSSIER · OPERATIVO</span>
              <h2>Cinco años, miles de partidas, <em>una metodología.</em></h2>
              <p className="lbl-side">
                Lo que separa a un Plata de un Inmortal no es el aim — es saber qué hacer cuando la ronda se complica. Eso se enseña.
              </p>
            </div>
          </div>
          <div className="estats">
            {stats.map((s, i) => (
              <div className="estat" key={s.lbl} style={{ "--i": i } as CSSProperties}>
                <span className="lbl">{s.lbl}</span>
                <div className="v">{s.value}</div>
                <div className="cap">{s.cap}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATCH GRID */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="ehead">
            <span className="num">02</span>
            <div>
              <span className="lbl" style={{ color: "var(--val-red)" }}>PARTIDAS · VCL LATAM</span>
              <h2>Las partidas <em>en las que estuvo arriba.</em></h2>
            </div>
          </div>
          <div className="matchgrid">
            {matches.map((m, i) => (
              <div
                className="match"
                key={`${m.ts}-${m.a}-${m.b}`}
                style={{ "--i": i } as CSSProperties}
              >
                <span className="ts">{m.ts}</span>
                <span className="ev">
                  <span className="stage">{m.stage}</span>
                  {m.a} <span className="vs">vs</span> {m.b}
                </span>
                <span className="res">{m.res}</span>
              </div>
            ))}
          </div>
          <div className="match-more">
            <a href="#">VER TODAS (38) →</a>
          </div>
        </div>
      </section>

      {/* METODO */}
      <section className="section" id="metodo">
        <div className="wrap">
          <div className="ehead">
            <span className="num">03</span>
            <div>
              <span className="lbl" style={{ color: "var(--val-red)" }}>EL MÉTODO</span>
              <h2>Cuatro pasos. <em>Cero humo.</em></h2>
            </div>
          </div>
          <div className="esteps">
            {steps.map((s, i) => (
              <div className="estep" key={s.no} style={{ "--i": i } as CSSProperties}>
                <div className="estep__media">
                  {/* TODO: <img src={`/method-${s.no}.jpg`} alt="..." /> */}
                  <span className="ph">{s.ph}</span>
                </div>
                <div className="estep__body">
                  <span className="estep__no">{s.no}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                    <div className="meta">
                      {s.meta.map((m, i) => (
                        <span key={`${s.no}-${i}`}>
                          {i > 0 ? <>·&nbsp;{m}</> : m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIGHT CARDS / PROGRAMS */}
      <section className="section" id="programa">
        <div className="wrap">
          <div className="ehead">
            <span className="num">04</span>
            <div>
              <span className="lbl" style={{ color: "var(--val-red)" }}>FIGHT CARD · PROGRAMAS</span>
              <h2>Elige tu <em>misión.</em></h2>
            </div>
          </div>
          <div className="fights">
            {fights.map((f, i) => (
              <article
                key={i}
                className={`fight${f.headline ? " headline" : ""}`}
                style={{ "--i": i } as CSSProperties}
              >
                <div className="fight__belt">
                  <span>{f.belt.tier}</span>
                  <span>{f.belt.rounds}</span>
                </div>
                <div className="fight__hero">
                  <h3 className="fight__name">{f.name}</h3>
                  <span className="fight__rounds">{f.rounds}</span>
                </div>
                <div className="fight__price">
                  <div className="v">{f.price.v}</div>
                  <div className="u">{f.price.u}</div>
                </div>
                <ul className="fight__list">
                  {f.items.map((item, j) => (
                    <li key={j} className={item.muted ? "muted" : undefined}>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <div className="fight__cta">
                  <a href="#" className={`btn btn-${f.cta.variant}`}>
                    {f.cta.label}
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="guarantee">
            <div className="guarantee__label">
              <span className="dot live pulse-dot" />
              <span className="val-lbl">
                Garantía · Si no subes en 4 semanas siguiendo el plan, la siguiente sesión va por mi cuenta.
              </span>
            </div>
            <a href="#" className="btn btn-wa">WhatsApp directo</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section" id="testimonios">
        <div className="wrap">
          <div className="ehead">
            <span className="num">05</span>
            <div>
              <span className="lbl" style={{ color: "var(--val-red)" }}>TESTIMONIOS</span>
              <h2>Lo que dicen <em>los alumnos.</em></h2>
            </div>
          </div>
          <div className="equotes">
            {testimonials.map((t, i) => (
              <article
                className="equote"
                key={t.name}
                style={{ "--i": i } as CSSProperties}
              >
                <p className="equote__q">«{t.quote}»</p>
                <div className="equote__by">
                  <div className="n">
                    {t.name}<span className="small">{t.progress}</span>
                  </div>
                  <span className="equote__delta">{t.delta}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="section" id="lead">
        <div className="wrap">
          <div className="lead-b">
            <div>
              <span className="eyebrow">Recurso · Gratis</span>
              <h3>Smokes y flashes <em>de un Radiant.</em></h3>
              <p>
                PDF de 28 páginas: una página por mapa, lineups exactos, timings y por qué funcionan en LATAM (no en Pacific). Aprende a jugar mapas como un pro, sin pagar un peso.
              </p>
              <LeadForm />
            </div>
            <div className="lead-b__cover" aria-hidden>
              <div className="num">28</div>
              <div className="ttl">Smokes &amp; flashes <em>de un Radiant.</em></div>
              <div className="maps">
                <span>ASCENT</span>
                <span>HAVEN</span>
                <span>BIND</span>
                <span>SPLIT</span>
                <span>LOTUS</span>
              </div>
              <div className="meta">
                <span>GIO · ED. 2026</span>
                <span>v3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="wrap">
          <div className="ehead">
            <span className="num">06</span>
            <div>
              <span className="lbl" style={{ color: "var(--val-red)" }}>FAQ</span>
              <h2>Lo que <em>siempre preguntan.</em></h2>
            </div>
          </div>
          <div className="faq-b">
            {faqs.map((item, i) => (
              <details key={i} style={{ "--i": i } as CSSProperties}>
                <summary>
                  <span className="num">Q · {String(i + 1).padStart(2, "0")}</span>
                  <span>{item.q}</span>
                  <span className="chev">+</span>
                </summary>
                <div className="faq-b__body">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* OUTRO */}
      <section className="outro">
        <h2>Listo para subir. <em>Empezamos cuando quieras.</em></h2>
        <div className="outro__ctas">
          <a href="#programa" className="btn btn-primary">Reservar diagnóstico →</a>
          <a href="#" className="btn btn-wa">WhatsApp</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot-b">
        <div className="foot-b__inner">
          <div className="foot-b__mark">GIO<em>·VAL</em></div>
          <div className="foot-b__cols">
            <div>
              <span className="h">Coaching</span>
              <a href="#programa">Diagnóstico 1v1</a>
              <a href="#programa">4 semanas</a>
              <a href="#programa">Mentoría 3 meses</a>
            </div>
            <div>
              <span className="h">Recursos</span>
              <a href="#lead">Guía de utilities</a>
              <a href="#metodo">Método</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <span className="h">Síguelo</span>
              <a href="#">Twitch</a>
              <a href="#">YouTube</a>
              <a href="#">X / Twitter</a>
            </div>
          </div>
          <div className="foot-b__copy">
            <span>© 2026 GIO COACHING · SCL</span>
            <span>HECHO EN CHILE · PARA LATAM</span>
          </div>
        </div>
      </footer>
    </>
  );
}
