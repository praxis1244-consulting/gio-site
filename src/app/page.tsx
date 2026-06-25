import type { CSSProperties } from "react";
import { LeadForm } from "@/components/lead-form";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CoachCard } from "@/components/coach-card";
import { OfferCard } from "@/components/offer-card";
import { CommunityBand } from "@/components/community-band";
import { site } from "@/data/site";
import { coaches, getCoach } from "@/data/coaches";
import { featuredOffers } from "@/data/offers";
import { features, testimonials, faqs } from "@/data/content";

const [gio, adverso] = coaches;

// Deterministic ember field for the hero aura (no Math.random → SSR-safe).
const EMBERS = Array.from({ length: 18 }, (_, i) => i);

export default function Home() {
  return (
    <>
      <SiteNav />

      {/* HERO — TALE OF THE TAPE */}
      <header className="hero-vs" id="top">
        <div className="hero-vs__mark" aria-hidden />
        <div className="hero-vs__embers" aria-hidden>
          {EMBERS.map((i) => (
            <span
              key={i}
              className="ember"
              style={{
                left: `${(i * 53 + 7) % 100}%`,
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                "--ex": `${((i % 5) - 2) * 14}px`,
                animationDuration: `${7 + (i % 6)}s`,
                animationDelay: `${(i % 9) * 0.8}s`,
              } as CSSProperties}
            />
          ))}
        </div>
        <div className="hero-vs__inner">
          {/* Cutout izquierdo — Gio (PNG fondo transparente). */}
          <figure className="hero-vs__coach hero-vs__coach--a">
            <div className="hero-vs__cutout" data-coach={gio.name.toUpperCase()}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="hero-vs__cutout-img" src={gio.heroCutout} alt={`${gio.name} — coach de Valorant`} />
            </div>
            <figcaption className="hero-vs__coach-meta">
              <span className="hero-vs__coach-name">{gio.name}</span>
              <span className="hero-vs__coach-role">{gio.role} · {gio.rank}</span>
            </figcaption>
          </figure>

          {/* Columna central — jerarquía: kicker → descriptor → punch → sub → micro */}
          <div className="hero-vs__center">
            <div className="hero-vs__kicker">Colectivo de coaches pro</div>
            <p className="hero-vs__descriptor">Coaching de Valorant con</p>
            <h1 className="hero-vs__title">
              <span className="red">Profesionales</span>
              <span className="red">de LATAM</span>
            </h1>
            <p className="hero-vs__sub">
              Cursos y coaching de Valorant con jugadores pro. Mejora tu aim, tu mecánica y tu rendimiento en ranked — y sube de rango más rápido.
            </p>
            <div className="hero-vs__micro">Para todos los ranks · ES / EN / PT</div>
            <div className="hero-vs__ctas">
              <a className="btn btn-primary" href="#coaches">Ver coaches →</a>
              <a className="btn btn-ghost" href={site.discord.invite} target="_blank" rel="noopener noreferrer">
                Unirse al Discord
              </a>
            </div>
          </div>

          {/* Cutout derecho — Adverso (PNG fondo transparente). */}
          <figure className="hero-vs__coach hero-vs__coach--b">
            <div className="hero-vs__cutout" data-coach={adverso.name.toUpperCase()}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="hero-vs__cutout-img" src={adverso.heroCutout} alt={`${adverso.name} — coach de Valorant`} />
            </div>
            <figcaption className="hero-vs__coach-meta">
              <span className="hero-vs__coach-name">{adverso.name}</span>
              <span className="hero-vs__coach-role">{adverso.role} · {adverso.rank}</span>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* ROSTER — LOS COACHES */}
      <section className="section" id="coaches">
        <div className="wrap">
          <div className="ehead">
            <span className="num">01</span>
            <div>
              <span className="lbl" style={{ color: "var(--val-red)" }}>EL ROSTER</span>
              <h2>Los coaches. <em>Pros de verdad.</em></h2>
              <p className="lbl-side">
                Cada uno con su rol, su estilo y sus offers. Elige con quién entrenar — o trabaja con los dos.
              </p>
            </div>
          </div>
          <div className="roster">
            {coaches.map((coach) => (
              <CoachCard key={coach.slug} coach={coach} />
            ))}
          </div>
        </div>
      </section>

      {/* CATÁLOGO — ELIGE TU OFFER */}
      <section className="section" id="offers" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="ehead">
            <span className="num">02</span>
            <div>
              <span className="lbl" style={{ color: "var(--val-red)" }}>FIGHT CARD · OFFERS</span>
              <h2>Elige tu <em>offer.</em></h2>
              <p className="lbl-side">
                Sesiones 1v1 en vivo, cursos autoguiados y la membresía de la comunidad. Checkout seguro vía Whop.
              </p>
            </div>
          </div>
          <div className="offers">
            {featuredOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} coach={getCoach(offer.coachSlug)} />
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="ehead">
            <span className="num">03</span>
            <div>
              <span className="lbl" style={{ color: "var(--val-red)" }}>QUÉ INCLUYE</span>
              <h2>Todo lo que necesitas <em>para subir.</em></h2>
            </div>
          </div>
          <div className="features">
            {features.map((f, i) => (
              <article className="feature" key={f.title} style={{ "--i": i } as CSSProperties}>
                <span className="feature__tag">{f.tag}</span>
                <h3 className="feature__title">{f.title}</h3>
                <p className="feature__body">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMUNIDAD / DISCORD */}
      <CommunityBand />

      {/* TESTIMONIOS */}
      <section className="section" id="testimonios">
        <div className="wrap">
          <div className="ehead">
            <span className="num">04</span>
            <div>
              <span className="lbl" style={{ color: "var(--val-red)" }}>TESTIMONIOS</span>
              <h2>Lo que dicen <em>los alumnos.</em></h2>
            </div>
          </div>
          <div className="equotes">
            {testimonials.map((t, i) => (
              <article className="equote" key={t.name} style={{ "--i": i } as CSSProperties}>
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
                <span>{site.brand.mark} · ED. 2026</span>
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
            <span className="num">05</span>
            <div>
              <span className="lbl" style={{ color: "var(--val-red)" }}>FAQ</span>
              <h2>Lo que <em>siempre preguntan.</em></h2>
            </div>
          </div>
          <div className="faq-b">
            {faqs.map((item, i) => (
              <details key={item.q} style={{ "--i": i } as CSSProperties}>
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
        <h2>De Zero a Hero. <em>Empezamos cuando quieras.</em></h2>
        <div className="outro__ctas">
          <a className="btn btn-primary" href="#coaches">Ver coaches →</a>
          <a className="btn btn-ghost" href={site.discord.invite} target="_blank" rel="noopener noreferrer">
            Unirse al Discord
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
