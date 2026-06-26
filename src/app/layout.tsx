import type { ReactNode } from "react";

// El <html>/<body> vive en [locale]/layout.tsx para que `lang` sea dinámico.
// Este root layout sólo deja pasar a los children.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
