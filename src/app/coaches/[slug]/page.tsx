import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { OfferCard } from "@/components/offer-card";
import { coaches, getCoach } from "@/data/coaches";
import { offersByCoach } from "@/data/offers";
import { site } from "@/data/site";

export function generateStaticParams() {
  return coaches.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const coach = getCoach(slug);
  if (!coach) {
    return { title: "Coach no encontrado · Zero2Hero" };
  }
  return {
    title: `${coach.name} · Coach de Valorant — Zero2Hero`,
    description: `${coach.tagline} ${coach.role} · ${coach.creds}. Coaching de Valorant con ${coach.name} en Zero2Hero.`,
  };
}

export default async function CoachPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const coach = getCoach(slug);
  if (!coach) notFound();

  const offers = offersByCoach(slug);

  // Sequential section numbers — sections appear conditionally per coach.
  const hasMatches = (coach.matches?.length ?? 0) > 0;
  const hasResults = (coach.results?.length ?? 0) > 0;
  let sectionCount = 0;
  const nextNum = () => String(++sectionCount).padStart(2, "0");
  const dossierNum = nextNum();
  const matchesNum = hasMatches ? nextNum() : null;
  const resultsNum = hasResults ? nextNum() : null;
  const offersNum = nextNum();

  return (
    <>
      <SiteNav />

      {/* HERO DEL COACH */}
      <header className="hero-b coach-hero">
        <div className="hero-b__inner">
          <div className="hero-b__copy">
            <div className="hero-b__id">
              COACH · <b>{coach.role}</b>
            </div>
            <h1 className="hero-b__title">
              <span className="sans">{coach.name}</span><br />
              <em>{coach.handle}</em>
            </h1>
            <p className="coach-hero__creds">
              {coach.creds} · <b>{coach.rank}</b> · {coach.langs.join(" / ")}
            </p>
            <p className="hero-b__sub">{coach.bio}</p>
            <div className="hero-b__ctas">
              <a className="btn btn-primary" href="#offers">
                Ver sus offers →
              </a>
              <a
                className="btn btn-ghost"
                href={site.discord.invite}
                target="_blank"
                rel="noopener noreferrer"
              >
                Unirse al Discord
              </a>
              <span className="num">{coach.tagline}</span>
            </div>
          </div>

          <div
            className="poster"
            style={{ "--poster-mark": `"${coach.name.toUpperCase()}"` } as CSSProperties}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="poster__img" src={coach.cutout} alt={`${coach.name} — coach de Valorant`} />
            <div className="poster__shade" aria-hidden />
            <div className="poster__corner tl">● COACH</div>
            <div className="poster__corner tr">VAL · 2026</div>
            <div className="poster__name">
              {coach.name} · <em>{coach.role}</em>
            </div>
            <div className="poster__sub">
              {coach.rank} · {coach.creds}
            </div>
            <div className="poster__corner bl">{coach.handle}</div>
            <div className="poster__corner br">ZERO2HERO</div>
          </div>
        </div>
      </header>

      {/* MINI-DOSSIER · STATS */}
      <section className="section coach-page__dossier" id="dossier">
        <div className="wrap">
          <div className="ehead">
            <span className="num">{dossierNum}</span>
            <div>
              <span className="lbl" style={{ color: "var(--val-red)" }}>
                DOSSIER · {coach.accentTeam ?? coach.creds}
              </span>
              <h2>
                Quién es <em>{coach.name}.</em>
              </h2>
            </div>
          </div>
          <div className="estats">
            {coach.stats.map((s, i) => (
              <div className="estat" key={s.lbl} style={{ "--i": i } as CSSProperties}>
                <span className="lbl">{s.lbl}</span>
                <div className="v">
                  {s.value}
                  {s.accent ? <em>{s.accent}</em> : null}
                </div>
                <div className="cap">{s.cap}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATCH GRID (si hay partidas) */}
      {coach.matches && coach.matches.length > 0 ? (
        <section className="section coach-page__matches" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="ehead">
              <span className="num">{matchesNum}</span>
              <div>
                <span className="lbl" style={{ color: "var(--val-red)" }}>
                  PARTIDAS · {coach.accentTeam ?? "COMPETITIVO"}
                </span>
                <h2>
                  Las partidas <em>en las que estuvo arriba.</em>
                </h2>
              </div>
            </div>
            <div className="matchgrid">
              {coach.matches.map((m, i) => (
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
          </div>
        </section>
      ) : null}

      {/* RESULTADOS · CONVERSACIONES REALES CON ALUMNOS */}
      {coach.results && coach.results.length > 0 ? (
        <section className="section coach-page__proof" id="resultados">
          <div className="wrap">
            <div className="ehead">
              <span className="num">{resultsNum}</span>
              <div>
                <span className="lbl" style={{ color: "var(--val-red)" }}>
                  RESULTADOS · ALUMNOS REALES
                </span>
                <h2>
                  Lo que logran <em>sus alumnos.</em>
                </h2>
                <p className="lbl-side">
                  Conversaciones reales, sin retoques. Del que recién sale de Platino al que llegó a Radiant.
                </p>
              </div>
            </div>
            <div className="proofwall">
              {coach.results.map((r, i) => (
                <a
                  className="proof"
                  key={r.img}
                  href={r.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ "--i": i } as CSSProperties}
                >
                  <div className="proof__tag">
                    <span className="proof__result">{r.result}</span>
                    <span className="proof__who">{r.who}</span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="proof__img"
                    src={r.img}
                    alt={`Conversación con ${r.who}: ${r.result} — coaching de ${coach.name}`}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* SUS OFFERS */}
      <section className="section coach-page__offers" id="offers">
        <div className="wrap">
          <div className="ehead">
            <span className="num">{offersNum}</span>
            <div>
              <span className="lbl" style={{ color: "var(--val-red)" }}>
                CLASES · {coach.name.toUpperCase()}
              </span>
              <h2>
                Su <em>clase 1v1.</em>
              </h2>
            </div>
          </div>
          {offers.length > 0 ? (
            <div className="offer-grid">
              {offers.map((offer, i) => (
                <div key={offer.id} style={{ "--i": i } as CSSProperties}>
                  <OfferCard offer={offer} coach={coach} />
                </div>
              ))}
            </div>
          ) : (
            <p className="lbl-side">Offers en camino — pronto disponibles.</p>
          )}
        </div>
      </section>

      {/* OUTRO · CTA FINAL */}
      <section className="outro">
        <h2>
          ¿Listo para entrenar con {coach.name}? <em>Empezamos cuando quieras.</em>
        </h2>
        <div className="outro__ctas">
          <a
            className="btn btn-primary"
            href={site.discord.invite}
            target="_blank"
            rel="noopener noreferrer"
          >
            Unirse al Discord →
          </a>
          <a className="btn btn-ghost" href="/#reservar">
            Agenda tu clase →
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
