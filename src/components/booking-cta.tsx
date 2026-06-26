"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import type { Coach } from "@/data/coaches";
import { CalendlyInline } from "./calendly-inline";

/**
 * CTA de reserva del offer colectivo: abre un modal donde primero se elige
 * coach y enseguida aparece su calendario de Calendly, sin salir de la página.
 * Recibe los coaches con Calendly resueltos por locale desde el server.
 */
export function BookingCta({ label, coaches }: { label: string; coaches: Coach[] }) {
  const t = useTranslations("Booking");
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState<Coach | null>(null);

  const close = useCallback(() => setOpen(false), []);

  // Bloquea el scroll del body y mapea Esc (vuelve al selector o cierra).
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (picked) setPicked(null);
      else close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, picked, close]);

  // Al cerrar, vuelve al paso de selección para la próxima apertura.
  useEffect(() => {
    if (!open) setPicked(null);
  }, [open]);

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={() => setOpen(true)}>
        {label}
      </button>

      {open
        ? // Portal to <body>: the offer card has will-change/transform from its
          // reveal animation, which would otherwise anchor this fixed overlay to
          // the card instead of the viewport.
          createPortal(
        <div
          className="booking"
          role="dialog"
          aria-modal="true"
          aria-label={t("openAria")}
          onClick={close}
        >
          <div
            className={`booking__panel${picked ? " booking__panel--cal" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="booking__close" aria-label={t("closeAria")} onClick={close}>
              <span />
              <span />
            </button>

            {!picked ? (
              <div className="booking__pick">
                <span className="lbl" style={{ color: "var(--val-red)" }}>{t("label")}</span>
                <h3>
                  {t("pickTitlePre")} <em>{t("pickTitleEm")}</em>
                </h3>
                <p className="booking__hint">{t("hint")}</p>
                <div className="booking__coaches">
                  {coaches.map((c) => (
                    <button
                      type="button"
                      key={c.slug}
                      className="booking__coach"
                      onClick={() => setPicked(c)}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="booking__coach-img" src={c.cutout} alt="" />
                      <span className="booking__coach-meta">
                        <span className="booking__coach-name">{c.name}</span>
                        <span className="booking__coach-role">{c.role}</span>
                        <span className="booking__coach-creds">{c.creds}</span>
                      </span>
                      <span className="booking__coach-go" aria-hidden>
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="booking__cal-wrap">
                <div className="booking__bar">
                  <button type="button" className="booking__back" onClick={() => setPicked(null)}>
                    {t("back")}
                  </button>
                  <span className="booking__bar-name">
                    {t("classWith")} <b>{picked.name}</b>
                  </span>
                </div>
                <div className="booking__cal">
                  <CalendlyInline url={picked.calendly as string} />
                </div>
              </div>
            )}
          </div>
        </div>,
            document.body,
          )
        : null}
    </>
  );
}
