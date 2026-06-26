import type { CSSProperties } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { LeadForm } from "@/components/lead-form";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CoachCard } from "@/components/coach-card";
import { OfferCard } from "@/components/offer-card";
import { CommunityBand } from "@/components/community-band";
import { site } from "@/data/site";
import { getCoaches } from "@/data/coaches";
import { getCollectiveOffer } from "@/data/offers";
import { getFeatures, getTestimonials, getFaqs } from "@/data/content";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

// Deterministic ember field for the hero aura (no Math.random → SSR-safe).
const EMBERS = Array.from({ length: 18 }, (_, i) => i);

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("Home");
  const tc = await getTranslations("Common");

  const coaches = getCoaches(locale);
  const [gio, adverso] = coaches;
  const collectiveOffer = getCollectiveOffer(locale);
  const bookableCoaches = coaches.filter((c) => c.calendly);
  const features = getFeatures(locale);
  const testimonials = getTestimonials(locale);
  const faqs = getFaqs(locale);

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
            <div className="hero-vs__kicker">{t("heroKicker")}</div>
            <p className="hero-vs__descriptor">{t("heroDescriptor")}</p>
            <h1 className="hero-vs__title">
              <span className="red">{t("heroTitle1")}</span>
              <span className="red">{t("heroTitle2")}</span>
            </h1>
            <p className="hero-vs__sub">{t("heroSub")}</p>
            <div className="hero-vs__micro">{t("heroMicro")}</div>
            <div className="hero-vs__ctas">
              <a className="btn btn-primary" href="#coaches">{t("seeCoaches")}</a>
              <a className="btn btn-ghost" href={site.discord.invite} target="_blank" rel="noopener noreferrer">
                {tc("joinDiscord")}
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
              <span className="lbl" style={{ color: "var(--val-red)" }}>{t("rosterLabel")}</span>
              <h2>{t("rosterTitle")} <em>{t("rosterTitleEm")}</em></h2>
              <p className="lbl-side">{t("rosterDesc")}</p>
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
              <span className="lbl" style={{ color: "var(--val-red)" }}>{t("offersLabel")}</span>
              <h2>{t("offersTitle")} <em>{t("offersTitleEm")}</em></h2>
              <p className="lbl-side">{t("offersDesc")}</p>
            </div>
          </div>
          <div className="offers">
            <OfferCard offer={collectiveOffer} bookableCoaches={bookableCoaches} />
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="ehead">
            <span className="num">03</span>
            <div>
              <span className="lbl" style={{ color: "var(--val-red)" }}>{t("includesLabel")}</span>
              <h2>{t("includesTitle")} <em>{t("includesTitleEm")}</em></h2>
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
              <span className="lbl" style={{ color: "var(--val-red)" }}>{t("testimonialsLabel")}</span>
              <h2>{t("testimonialsTitle")} <em>{t("testimonialsTitleEm")}</em></h2>
            </div>
          </div>
          <div className="equotes">
            {testimonials.map((tst, i) => (
              <article className="equote" key={tst.name} style={{ "--i": i } as CSSProperties}>
                <p className="equote__q">«{tst.quote}»</p>
                <div className="equote__by">
                  <div className="n">
                    {tst.name}<span className="small">{tst.progress}</span>
                  </div>
                  <span className="equote__delta">{tst.delta}</span>
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
              <span className="eyebrow">{t("leadEyebrow")}</span>
              <h3>{t("leadTitle")} <em>{t("leadTitleEm")}</em></h3>
              <p>{t("leadBody")}</p>
              <LeadForm />
            </div>
            <div className="lead-b__cover" aria-hidden>
              <div className="num">28</div>
              <div className="ttl">{t("leadTitle")} <em>{t("leadTitleEm")}</em></div>
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
              <span className="lbl" style={{ color: "var(--val-red)" }}>{t("faqLabel")}</span>
              <h2>{t("faqTitle")} <em>{t("faqTitleEm")}</em></h2>
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
        <h2>{t("outroTitle")} <em>{t("outroTitleEm")}</em></h2>
        <div className="outro__ctas">
          <a className="btn btn-primary" href="#coaches">{t("seeCoaches")}</a>
          <a className="btn btn-ghost" href={site.discord.invite} target="_blank" rel="noopener noreferrer">
            {tc("joinDiscord")}
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
