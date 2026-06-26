import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { DM_Sans, JetBrains_Mono, Tomorrow, Chakra_Petch } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { RevealRunner } from "@/components/reveal-runner";
import { routing, type Locale } from "@/i18n/routing";
import { SITE_URL, OG_LOCALE, alternateOgLocales, buildAlternates } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/json-ld";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../globals.css";

// `js-on` se setea directo en el className del <html> (SSR, antes del paint, sin
// script inline que React 19 rompa en el soft-nav de idioma). El ocultamiento de
// reveals ya está gateado por `prefers-reduced-motion: no-preference`, así que
// reduced-motion no se afecta. Para no-JS, este fallback los deja visibles.
const NO_JS_REVEAL_FALLBACK =
  ".ehead,.estat,.team,.estep,.fight,.equote,.proof,.lead-b,.faq-b details,.guarantee,.outro h2,.outro__ctas,.foot-b__inner,.coach-card,.offer-card,.feature,.community{opacity:1!important;transform:none!important}";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const tomorrow = Tomorrow({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const chakraPetch = Chakra_Petch({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const alternates = buildAlternates("/", loc);
  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(SITE_URL),
    alternates,
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: alternates.canonical,
      siteName: "Zero2Hero",
      locale: OG_LOCALE[loc],
      alternateLocale: alternateOgLocales(loc),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
    appleWebApp: {
      capable: true,
      title: "Zero2Hero",
      statusBarStyle: "black-translucent",
    },
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  // Required so the page can be statically rendered per locale.
  setRequestLocale(locale);
  const tm = await getTranslations({ locale, namespace: "Metadata" });

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`js-on ${dmSans.variable} ${jetbrainsMono.variable} ${tomorrow.variable} ${chakraPetch.variable}`}
    >
      <body>
        <noscript dangerouslySetInnerHTML={{ __html: `<style>${NO_JS_REVEAL_FALLBACK}</style>` }} />
        <JsonLd
          data={[organizationSchema(tm("description")), websiteSchema(locale, tm("description"))]}
        />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <RevealRunner />
        <Analytics />
        <SpeedInsights />
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        ) : null}
      </body>
    </html>
  );
}
