import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { OfferCard } from "@/components/offer-card";
import { CountUp } from "@/components/count-up";
import { ProofGallery } from "@/components/proof-gallery";
import { CalendlyInline } from "@/components/calendly-inline";
import { getCoach, coachSlugs } from "@/data/coaches";
import { offersByCoach } from "@/data/offers";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    coachSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) return { title: "Zero2Hero" };
  const t = await getTranslations({ locale, namespace: "CoachPage" });
  const coach = getCoach(locale, slug);
  if (!coach) {
    return { title: t("notFoundTitle") };
  }
  return {
    title: t("metaTitle", { name: coach.name }),
    description: t("metaDescription", {
      tagline: coach.tagline,
      role: coach.role,
      creds: coach.creds,
      name: coach.name,
    }),
  };
}

export default async function CoachPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const coach = getCoach(locale, slug);
  if (!coach) notFound();

  const t = await getTranslations("CoachPage");
  const offers = offersByCoach(locale, slug);

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
              {t("heroIdPrefix")} · <b>{coach.role}</b>
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
              <a className="btn btn-primary" href="#agenda">
                {t("bookClass")}
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
                {t("dossierPrefix")} · {coach.accentTeam ?? coach.creds}
              </span>
              <h2>
                {t("dossierTitlePre")} <em>{coach.name}.</em>
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
                  {t("teamsLabel")}
                </span>
                <h2>
                  {t("teamsTitlePre")} <em>{t("teamsTitleEm")}</em>
                </h2>
              </div>
            </div>
            <div className="teamwall">
              {coach.teams.map((team, i) => (
                <div className="team" key={team.name} style={{ "--i": i } as CSSProperties}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="team__logo" src={team.logo} alt={`${team.name} — equipo de ${coach.name}`} loading="lazy" />
                  <span className="team__name">{team.name}</span>
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
                  {t("resultsLabel")}
                </span>
                <h2>
                  {t("resultsTitlePre")} <em>{t("resultsTitleEm")}</em>
                </h2>
                <p className="lbl-side">{t("resultsDesc")}</p>
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
                {t("offersLabelPrefix")} · {coach.name.toUpperCase()}
              </span>
              <h2>
                {t("offersTitlePre")} <em>{t("offersTitleEm")}</em>
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
            <p className="lbl-side">{t("offersComing")}</p>
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
                  {t("agendaLabelPrefix")} · {coach.name.toUpperCase()}
                </span>
                <h2>
                  {t("agendaTitlePre")} <em>{t("agendaTitleEm", { name: coach.name })}</em>
                </h2>
                <p className="lbl-side">{t("agendaDesc")}</p>
              </div>
            </div>
            <CalendlyInline url={coach.calendly} />
          </div>
        </section>
      ) : null}

      {/* OUTRO · CTA FINAL */}
      <section className="outro">
        <h2>
          {t("outroTitle", { name: coach.name })} <em>{t("outroTitleEm")}</em>
        </h2>
        <div className="outro__ctas">
          {coach.calendly ? (
            <a className="btn btn-primary" href="#agenda">
              {t("bookClass")}
            </a>
          ) : (
            <Link className="btn btn-primary" href="/#offers">
              {t("bookClass")}
            </Link>
          )}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
