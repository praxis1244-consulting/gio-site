import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zero2Hero · Coaching de Valorant",
    short_name: "Zero2Hero",
    description:
      "Coaching de Valorant con coaches pro. Clases 1 a 1, cursos y comunidad. De Zero a Hero.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#ff4655",
    lang: "es",
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
