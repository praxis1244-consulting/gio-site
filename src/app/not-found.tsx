import Link from "next/link";

// Root-level 404 (paths that don't resolve to a locale). The root layout is a
// passthrough, so this supplies its own <html>/<body>.
export default function NotFound() {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#050505",
          color: "#ece4d8",
          fontFamily: "ui-monospace, monospace",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <main>
          <p style={{ letterSpacing: "0.2em", color: "#ff4655", margin: "0 0 8px" }}>
            404
          </p>
          <h1 style={{ fontWeight: 400, margin: "0 0 20px" }}>Página no encontrada</h1>
          <Link href="/" style={{ color: "#ff4655" }}>
            Volver al inicio →
          </Link>
        </main>
      </body>
    </html>
  );
}
