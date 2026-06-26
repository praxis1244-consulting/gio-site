import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { DM_Sans, JetBrains_Mono, Tomorrow, Chakra_Petch } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { RevealRunner } from "@/components/reveal-runner";
import { routing } from "@/i18n/routing";
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

const OG_LOCALE: Record<string, string> = { es: "es_CL", pt: "pt_BR", en: "en_US" };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://zero2hero.gg"),
    alternates: {
      canonical: locale === "es" ? "/" : `/${locale}`,
      languages: { "es-CL": "/", "pt-BR": "/pt", "en-US": "/en" },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      locale: OG_LOCALE[locale],
      type: "website",
    },
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

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`js-on ${dmSans.variable} ${jetbrainsMono.variable} ${tomorrow.variable} ${chakraPetch.variable}`}
    >
      <body>
        <noscript dangerouslySetInnerHTML={{ __html: `<style>${NO_JS_REVEAL_FALLBACK}</style>` }} />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <RevealRunner />
      </body>
    </html>
  );
}
