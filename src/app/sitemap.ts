import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { coachSlugs } from "@/data/coaches";
import { SITE_URL, HREFLANG } from "@/lib/seo";

function abs(locale: (typeof routing.locales)[number], href: string): string {
  return SITE_URL + getPathname({ locale, href });
}

// One <url> per page, each carrying the full reciprocal hreflang set (incl.
// x-default). URLs come from getPathname so they respect localePrefix "as-needed".
function entry(href: string, priority: number): MetadataRoute.Sitemap[number] {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[HREFLANG[l]] = abs(l, href);
  languages["x-default"] = abs(routing.defaultLocale, href);
  return {
    url: abs(routing.defaultLocale, href),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
    alternates: { languages },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry("/", 1),
    ...coachSlugs.map((slug) => entry(`/coaches/${slug}`, 0.8)),
  ];
}
