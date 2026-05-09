import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Tomorrow, Chakra_Petch } from "next/font/google";
import Script from "next/script";
import { RevealRunner } from "@/components/reveal-runner";
import "./globals.css";

const NO_FLASH_SCRIPT = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-on')}}catch(e){}`;

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

export const metadata: Metadata = {
  title: "GIO · Coaching Valorant LATAM",
  description:
    "Coaching 1v1 con Gio — ex-pro VCL LATAM Sur, Radiant, IGL Smoker. Diagnóstico, plan y seguimiento hasta que subas de rango. Para todos los ranks, en español.",
  metadataBase: new URL("https://gio.gg"),
  openGraph: {
    title: "GIO · Coaching Valorant LATAM",
    description:
      "Tu próximo rank no es suerte. Es método. Coaching privado de Valorant con un ex-pro de la VCL LATAM Sur.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${dmSans.variable} ${jetbrainsMono.variable} ${tomorrow.variable} ${chakraPetch.variable}`}
    >
      <body>
        <Script id="no-flash-reveals" strategy="beforeInteractive">
          {NO_FLASH_SCRIPT}
        </Script>
        {children}
        <RevealRunner />
      </body>
    </html>
  );
}
