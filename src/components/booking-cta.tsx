"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Coach } from "@/data/coaches";
import { CalendlyInline } from "./calendly-inline";
import { useFocusTrap } from "@/lib/focus-trap";

/**
 * CTA de reserva del offer colectivo: abre un modal donde primero se elige
 * coach y enseguida aparece su calendario de Calendly, sin salir de la página.
 * Recibe los coaches con Calendly resueltos por locale desde el server.
 */
export function BookingCta({ label, coaches }: { label: string; coaches: Coach[] }) {
  const t = useTranslations("Booking");
  const ta = useTranslations("Alt");
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState<Coach | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setPicked(null);
  }, []);

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

  // Trap focus inside the modal while it's open.
  useFocusTrap(dialogRef, open);
  // When the calendar step mounts, move focus to the back button so the user
  // isn't dropped onto the body after the coach-picker buttons unmount.
  useEffect(() => {
    if (open && picked) backRef.current?.focus({ preventScroll: true });
  }, [open, picked]);

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
          ref={dialogRef}
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
                      <Image
                        className="booking__coach-img"
                        src={c.cutout}
                        alt={ta("coachPhoto", { name: c.name })}
                        width={54}
                        height={64}
                      />
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
                  <button ref={backRef} type="button" className="booking__back" onClick={() => setPicked(null)}>
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
