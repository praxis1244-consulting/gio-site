import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { OfferCard } from "@/components/offer-card";
import { CountUp } from "@/components/count-up";
import { ProofGallery } from "@/components/proof-gallery";
import { CalendlyInline } from "@/components/calendly-inline";
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
  const hasTeams = (coach.teams?.length ?? 0) > 0;
  const hasResults = (coach.results?.length ?? 0) > 0;
  let sectionCount = 0;
  const nextNum = () => String(++sectionCount).padStart(2, "0");
  const dossierNum = nextNum();
  const teamsNum = hasTeams ? nextNum() : null;
  const resultsNum = hasResults ? nextNum() : null;
  const offersNum = nextNum();
  const agendaNum = coach.calendly ? nextNum() : null;

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
                  <CountUp value={s.value} delay={i * 110} />
                  {s.accent ? <em>{s.accent}</em> : null}
                </div>
                <div className="cap">{s.cap}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MURO DE EQUIPOS (si hay carrera pro registrada) */}
      {coach.teams && coach.teams.length > 0 ? (
        <section className="section coach-page__teams" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="ehead">
              <span className="num">{teamsNum}</span>
              <div>
                <span className="lbl" style={{ color: "var(--val-red)" }}>
                  EQUIPOS · CARRERA PRO
                </span>
                <h2>
                  Por dónde pasó <em>su carrera.</em>
                </h2>
              </div>
            </div>
            <div className="teamwall">
              {coach.teams.map((t, i) => (
                <div className="team" key={t.name} style={{ "--i": i } as CSSProperties}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="team__logo" src={t.logo} alt={`${t.name} — equipo de ${coach.name}`} loading="lazy" />
                  <span className="team__name">{t.name}</span>
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
            <ProofGallery results={coach.results} coachName={coach.name} />
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

      {/* AGENDA · CALENDLY */}
      {coach.calendly ? (
        <section className="section coach-page__agenda" id="agenda" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="ehead">
              <span className="num">{agendaNum}</span>
              <div>
                <span className="lbl" style={{ color: "var(--val-red)" }}>
                  AGENDA · {coach.name.toUpperCase()}
                </span>
                <h2>
                  Reserva tu clase <em>con {coach.name}.</em>
                </h2>
                <p className="lbl-side">
                  Elige día y hora. Recibes el link de Google Meet al confirmar. Horario de Santiago.
                </p>
              </div>
            </div>
            <CalendlyInline url={coach.calendly} />
          </div>
        </section>
      ) : null}

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
          <a className="btn btn-ghost" href={coach.calendly ? "#agenda" : "/#reservar"}>
            Agenda tu clase →
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
