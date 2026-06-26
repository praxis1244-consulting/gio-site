import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/seo";
import type { Coach } from "@/data/coaches";
import type { Faq } from "@/data/content";

// Stable @ids so entities cross-reference instead of duplicating.
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const LANG_BCP47: Record<string, string> = { ES: "es", EN: "en", PT: "pt" };

function abs(locale: Locale, href: string): string {
  return SITE_URL + getPathname({ locale, href });
}

/** Organization — defined once (in the layout) with a stable @id others point to. */
export function organizationSchema(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Zero2Hero",
    alternateName: "Zero2Hero.gg",
    url: SITE_URL,
    logo: `${SITE_URL}/icon`,
    description,
    knowsLanguage: ["es", "en", "pt"],
    // TODO: añadir redes reales de la marca aquí (sameAs) cuando existan.
  };
}

/** WebSite node, paired with the Organization as publisher. */
export function websiteSchema(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: "Zero2Hero",
    description,
    inLanguage: locale,
    publisher: { "@id": ORG_ID },
  };
}

/** Person — one per coach, rendered on the coach page. */
export function personSchema(coach: Coach, locale: Locale) {
  const sameAs = [coach.socials.x, coach.socials.twitch, coach.socials.youtube].filter(
    (u): u is string => Boolean(u),
  );
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${abs(routing.defaultLocale, `/coaches/${coach.slug}`)}#person`,
    name: coach.name,
    alternateName: coach.handle,
    url: abs(locale, `/coaches/${coach.slug}`),
    jobTitle: "Valorant Coach",
    description: coach.bio,
    image: `${SITE_URL}${coach.photo}`,
    knowsLanguage: coach.langs.map((l) => LANG_BCP47[l] ?? l.toLowerCase()),
    knowsAbout: ["Valorant", "Esports coaching", coach.role],
    ...(sameAs.length ? { sameAs } : {}),
    worksFor: { "@id": ORG_ID },
  };
}

/**
 * Service — the 1-on-1 coaching offering. `provider` → Organization (or a coach
 * Person via @id). Deliberately NO `Offer`/price: there's no checkout/price, and
 * a priceless Offer is invalid markup.
 */
export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  provider?: object;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Esports coaching",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: opts.provider ?? { "@id": ORG_ID },
    areaServed: "Latin America",
    availableLanguage: ["es", "en", "pt"],
  };
}

/** FAQPage — built from the page's visible FAQs (per-locale count handled by data). */
export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** BreadcrumbList — Home → Coaches (#coaches anchor) → coach. */
export function breadcrumbSchema(
  locale: Locale,
  coach: Coach,
  labels: { home: string; coaches: string },
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: labels.home, item: abs(locale, "/") },
      {
        "@type": "ListItem",
        position: 2,
        name: labels.coaches,
        item: `${abs(locale, "/")}#coaches`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: coach.name,
        item: abs(locale, `/coaches/${coach.slug}`),
      },
    ],
  };
}
