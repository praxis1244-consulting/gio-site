import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getCoach, coachSlugs } from "@/data/coaches";
import { routing, type Locale } from "@/i18n/routing";

export const runtime = "nodejs";
export const alt = "Zero2Hero coach";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    coachSlugs.map((slug) => ({ locale, slug })),
  );
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const coach = getCoach(locale as Locale, slug);

  if (!coach) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#050505",
            color: "#fff",
            fontSize: 64,
            fontWeight: 800,
            fontFamily: "sans-serif",
          }}
        >
          ZERO2HERO·GG
        </div>
      ),
      size,
    );
  }

  const photo = await readFile(join(process.cwd(), "public", coach.photo));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #160b0e 0%, #050505 60%)",
          color: "#ECE4D8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 0 72px 80px",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            <span>ZERO2HERO</span>
            <span style={{ color: "#ff4655" }}>·GG</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                display: "flex",
                fontSize: 26,
                color: "#ff4655",
                fontWeight: 700,
                letterSpacing: "0.16em",
              }}
            >
              COACH
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 100,
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-0.03em",
                color: "#ffffff",
              }}
            >
              {coach.name}
            </div>
            <div style={{ display: "flex", fontSize: 34, color: "#ECE4D8" }}>
              {coach.handle}
            </div>
            <div style={{ display: "flex", fontSize: 28, color: "#9a948c" }}>
              {coach.role} · {coach.rank}
            </div>
          </div>

          <div style={{ display: "flex", fontSize: 26, color: "#9a948c" }}>
            {coach.creds}
          </div>
        </div>

        <div style={{ display: "flex", width: 460, height: "100%" }}>
          <img
            src={photoSrc}
            width={460}
            height={630}
            style={{ objectFit: "cover", objectPosition: "top center" }}
            alt=""
          />
        </div>
      </div>
    ),
    size,
  );
}
