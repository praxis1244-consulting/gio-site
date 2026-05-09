"use client";

import { useState } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "ok" }
  | { kind: "err"; message: string };

const ERROR_COPY: Record<string, string> = {
  INVALID_EMAIL: "Email inválido. Revisa el formato.",
  SEND_FAILED: "No pudimos enviarlo ahora. Intenta de nuevo en un minuto.",
  NETWORK: "Sin conexión. Revisa tu internet.",
};

export function LeadForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [email, setEmail] = useState("");
  const loading = status.kind === "loading";

  async function submit(value: string) {
    if (loading) return;
    setStatus({ kind: "loading" });

    let response: Response;
    try {
      response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });
    } catch {
      setStatus({ kind: "err", message: ERROR_COPY.NETWORK });
      return;
    }

    const data = (await response.json().catch(() => ({}))) as {
      ok?: boolean;
      error?: string;
    };
    if (!response.ok || !data.ok) {
      const code = data.error ?? "SEND_FAILED";
      setStatus({ kind: "err", message: ERROR_COPY[code] ?? ERROR_COPY.SEND_FAILED });
      return;
    }

    setStatus({ kind: "ok" });
    setEmail("");
  }

  return (
    <>
      <form
        className="lead-b__form"
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          void submit(email);
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="tu@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          aria-label="Correo electrónico"
        />
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? "Enviando…" : "Descargar PDF →"}
        </button>
      </form>
      <div className="lead-b__meta">
        <span>· 28 páginas</span>
        <span>· 9 mapas</span>
        <span>· 0 spam</span>
      </div>
      {status.kind === "ok" && (
        <div className="lead-b__status ok" role="status">
          Listo. Revisa tu correo en 1-2 minutos.
        </div>
      )}
      {status.kind === "err" && (
        <div className="lead-b__status err" role="alert">
          {status.message}
        </div>
      )}
    </>
  );
}
