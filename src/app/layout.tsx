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
  title: "Zero2Hero · Coaching de Valorant",
  description:
    "Zero2Hero.gg — una comunidad de coaches pro de Valorant. Sesiones 1v1 en vivo, cursos y membresía Discord con Gio, Adverso y más. De Zero a Hero, en español LATAM.",
  metadataBase: new URL("https://zero2hero.gg"),
  openGraph: {
    title: "Zero2Hero · Coaching de Valorant",
    description:
      "De Zero a Hero. Coaching de Valorant con coaches pro — 1v1 en vivo, cursos y comunidad Discord. Elige tu coach, elige tu offer.",
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
