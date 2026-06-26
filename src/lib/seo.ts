import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

/** Production origin. Single source of truth for every absolute URL. */
export const SITE_URL = "https://zero2hero.gg";

/** hreflang BCP-47 tags per routing locale. `es-419` = Spanish (Latin America):
 *  the audience is LATAM-wide, not Chile-only. `x-default` → the default locale. */
export const HREFLANG: Record<Locale, string> = {
  es: "es-419",
  pt: "pt-BR",
  en: "en",
};

/** og:locale uses Facebook's `lang_TERRITORY` list (no `es_419` → `es_LA`). */
export const OG_LOCALE: Record<Locale, string> = {
  es: "es_LA",
  pt: "pt_BR",
  en: "en_US",
};

/** The other locales' og:locale values, for `openGraph.alternateLocale`. */
export function alternateOgLocales(locale: Locale): string[] {
  return routing.locales.filter((l) => l !== locale).map((l) => OG_LOCALE[l]);
}

/**
 * Canonical + reciprocal hreflang alternates (incl. `x-default`) for a logical
 * href like "/" or "/coaches/gio". Returns relative paths — `metadataBase`
 * absolutizes them. URLs come from `getPathname`, so they always respect
 * `localePrefix: "as-needed"` (es clean, pt/en prefixed).
 */
export function buildAlternates(href: string, locale: Locale) {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[HREFLANG[l]] = getPathname({ locale: l, href });
  }
  languages["x-default"] = getPathname({ locale: routing.defaultLocale, href });
  return {
    canonical: getPathname({ locale, href }),
    languages,
  };
}
