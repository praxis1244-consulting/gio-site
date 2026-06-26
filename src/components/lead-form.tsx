"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "ok" }
  | { kind: "err"; code: string };

export function LeadForm() {
  const t = useTranslations("Forms");
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [email, setEmail] = useState("");
  const loading = status.kind === "loading";

  const errorMessage = (code: string) => {
    if (code === "INVALID_EMAIL") return t("errInvalidEmail");
    if (code === "NETWORK") return t("errNetwork");
    return t("errSendFailed");
  };

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
      setStatus({ kind: "err", code: "NETWORK" });
      return;
    }

    const data = (await response.json().catch(() => ({}))) as {
      ok?: boolean;
      error?: string;
    };
    if (!response.ok || !data.ok) {
      setStatus({ kind: "err", code: data.error ?? "SEND_FAILED" });
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
          placeholder={t("emailPlaceholder")}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          aria-label={t("emailAria")}
        />
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? t("submitting") : t("download")}
        </button>
      </form>
      <div className="lead-b__meta">
        <span>{t("metaPages")}</span>
        <span>{t("metaMaps")}</span>
        <span>{t("metaSpam")}</span>
      </div>
      {status.kind === "ok" && (
        <div className="lead-b__status ok" role="status">
          {t("leadSuccess")}
        </div>
      )}
      {status.kind === "err" && (
        <div className="lead-b__status err" role="alert">
          {errorMessage(status.code)}
        </div>
      )}
    </>
  );
}
