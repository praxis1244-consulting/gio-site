"use client";

import { useState } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "ok" }
  | { kind: "err"; message: string };

const ERROR_COPY: Record<string, string> = {
  INVALID: "Falta tu nombre y un contacto válido.",
  SEND_FAILED: "No pudimos enviarlo ahora. Intenta de nuevo en un minuto.",
  NETWORK: "Sin conexión. Revisa tu internet.",
};

const RANKS = [
  "Hierro", "Bronce", "Plata", "Oro", "Platino",
  "Diamante", "Ascendente", "Inmortal", "Radiant",
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [rank, setRank] = useState("");
  const [message, setMessage] = useState("");
  const loading = status.kind === "loading";

  async function submit() {
    if (loading) return;
    if (!name.trim() || contact.trim().length < 3) {
      setStatus({ kind: "err", message: ERROR_COPY.INVALID });
      return;
    }
    setStatus({ kind: "loading" });

    let response: Response;
    try {
      response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, rank, message }),
      });
    } catch {
      setStatus({ kind: "err", message: ERROR_COPY.NETWORK });
      return;
    }

    const data = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string };
    if (!response.ok || !data.ok) {
      const code = data.error ?? "SEND_FAILED";
      setStatus({ kind: "err", message: ERROR_COPY[code] ?? ERROR_COPY.SEND_FAILED });
      return;
    }

    setStatus({ kind: "ok" });
    setName(""); setContact(""); setRank(""); setMessage("");
  }

  if (status.kind === "ok") {
    return (
      <div className="reserva__done">
        <span className="reserva__done-mark" aria-hidden>✓</span>
        <p>Listo. Tu solicitud llegó al equipo. Te escriben directo para coordinar tu clase.</p>
      </div>
    );
  }

  return (
    <form
      className="reserva__form"
      noValidate
      onSubmit={(e) => { e.preventDefault(); void submit(); }}
    >
      <div className="reserva__row">
        <label className="reserva__field">
          <span>Nombre</span>
          <input
            type="text" name="name" placeholder="Tu nombre" autoComplete="name"
            value={name} onChange={(e) => setName(e.target.value)} disabled={loading} required
          />
        </label>
        <label className="reserva__field">
          <span>Contacto</span>
          <input
            type="text" name="contact" placeholder="Email o WhatsApp"
            value={contact} onChange={(e) => setContact(e.target.value)} disabled={loading} required
          />
        </label>
      </div>

      <label className="reserva__field">
        <span>Rango actual</span>
        <select value={rank} onChange={(e) => setRank(e.target.value)} disabled={loading}>
          <option value="">Elige tu rango</option>
          <option value="Sin rank">No sé / sin rank</option>
          {RANKS.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
      </label>

      <label className="reserva__field">
        <span>Mensaje (opcional)</span>
        <textarea
          name="message" rows={3} placeholder="Cuéntanos tu objetivo o tu disponibilidad"
          value={message} onChange={(e) => setMessage(e.target.value)} disabled={loading}
        />
      </label>

      {status.kind === "err" ? <p className="reserva__status err">{status.message}</p> : null}

      <button className="btn btn-primary reserva__submit" type="submit" disabled={loading}>
        {loading ? "Enviando…" : "Agendar mi clase →"}
      </button>
    </form>
  );
}
