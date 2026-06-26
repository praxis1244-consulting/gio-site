import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "pt", "en"],
  defaultLocale: "es",
  // es keeps clean URLs (/, /coaches/gio); pt/en get prefixes (/pt, /en).
  localePrefix: "as-needed",
  // / always serves es (clean canonical); language changes explicitly via the switcher.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];

/** Short code shown in the UI. pt → "BR" (the audience is Brazilian; "PT" reads as Portugal).
 *  The routing locale and URL stay "pt". */
export const displayCode = (locale: string) => (locale === "pt" ? "BR" : locale.toUpperCase());
