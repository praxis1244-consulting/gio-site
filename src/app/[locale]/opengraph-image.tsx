import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const alt = "Zero2Hero · Valorant coaching";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #160b0e 0%, #050505 55%)",
          padding: "72px 80px",
          color: "#ECE4D8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 34,
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          <span>ZERO2HERO</span>
          <span style={{ color: "#ff4655" }}>·GG</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#ff4655",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {t("heroKicker")}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 104,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            {t("heroTitle1")} {t("heroTitle2")}
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#9a948c" }}>
            {t("heroMicro")}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", width: 120, height: 8, background: "#ff4655" }} />
          <div style={{ display: "flex", fontSize: 28, color: "#9a948c" }}>zero2hero.gg</div>
        </div>
      </div>
    ),
    size,
  );
}
