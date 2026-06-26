import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

// Brand mark "Z2" — high-contrast red field so it stays visible as a favicon
// on both light and dark browser chrome.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ff4655",
          color: "#0a0a0a",
          fontSize: 300,
          fontWeight: 800,
          letterSpacing: "-0.06em",
          fontFamily: "sans-serif",
        }}
      >
        Z2
      </div>
    ),
    size,
  );
}
