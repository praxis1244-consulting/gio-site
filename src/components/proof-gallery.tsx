"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { useTranslations } from "next-intl";
import type { ResultProof } from "@/data/coaches";
import { useFocusTrap } from "@/lib/focus-trap";

/** Masonry de capturas + lightbox para verlas en grande sin salir de la página. */
export function ProofGallery({
  results,
  coachName,
}: {
  results: ResultProof[];
  coachName: string;
}) {
  const t = useTranslations("Proof");
  const [open, setOpen] = useState<number | null>(null);
  const isOpen = open !== null;
  const dialogRef = useRef<HTMLDivElement>(null);

  useFocusTrap(dialogRef, isOpen);

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: number) =>
      setOpen((i) =>
        i === null ? i : (i + dir + results.length) % results.length,
      ),
    [results.length],
  );

  // Lock body scroll + teclas (Esc cierra, ← → navegan) mientras está abierto.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, go]);

  const current = open !== null ? results[open] : null;

  return (
    <>
      <div className="proofwall">
        {results.map((r, i) => (
          <a
            className="proof"
            key={r.img}
            href={r.img}
            onClick={(e) => {
              e.preventDefault();
              setOpen(i);
            }}
            style={{ "--i": i } as CSSProperties}
          >
            <div className="proof__tag">
              <span className="proof__result">{r.result}</span>
              <span className="proof__who">{r.who}</span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="proof__img"
              src={r.img}
              alt={t("alt", { who: r.who, result: r.result, coach: coachName })}
              loading="lazy"
            />
          </a>
        ))}
      </div>

      {current ? (
        <div
          ref={dialogRef}
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${current.result} — ${current.who}`}
          onClick={close}
        >
          <button type="button" className="lightbox__close" aria-label={t("closeAria")} onClick={close}>
            <span />
            <span />
          </button>

          {results.length > 1 ? (
            <button
              type="button"
              className="lightbox__nav prev"
              aria-label={t("prevAria")}
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
            >
              ‹
            </button>
          ) : null}

          <figure className="lightbox__stage" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="lightbox__img"
              src={current.img}
              alt={t("alt", { who: current.who, result: current.result, coach: coachName })}
            />
            <figcaption className="lightbox__cap">
              <span className="lightbox__result">{current.result}</span>
              <span className="lightbox__who">{current.who}</span>
            </figcaption>
          </figure>

          {results.length > 1 ? (
            <button
              type="button"
              className="lightbox__nav next"
              aria-label={t("nextAria")}
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
            >
              ›
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
