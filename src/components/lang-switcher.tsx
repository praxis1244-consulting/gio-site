"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, displayCode } from "@/i18n/routing";

/** Keep in sync with the .lang-switch__menu.is-closing exit animation in globals.css. */
const EXIT_MS = 240;

/** Switcher de idioma (ES/PT/EN): botón con dropdown animado. Cambia de locale
 *  conservando la ruta actual. Para el drawer móvil hay un control segmentado
 *  inline en site-nav. */
export function LangSwitcher() {
  const t = useTranslations("LangSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timer = useRef<number | null>(null);

  const close = useCallback(() => {
    if (timer.current !== null) return;
    setClosing(true);
    timer.current = window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
      timer.current = null;
    }, EXIT_MS);
  }, []);

  const openMenu = useCallback(() => {
    if (timer.current !== null) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
    setClosing(false);
    setOpen(true);
  }, []);

  const switchTo = (next: string) => {
    if (next !== locale) router.replace(pathname, { locale: next, scroll: false });
    close();
  };

  // Close on Escape / click-outside while the dropdown is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onDown);
    };
  }, [open, close]);

  useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  return (
    <div className="lang-switch" ref={ref}>
      <button
        type="button"
        className="lang-switch__btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("aria")}
        onClick={() => (open ? close() : openMenu())}
      >
        <span className="lang-switch__cur">{displayCode(locale)}</span>
        <span className="lang-switch__caret" aria-hidden>▾</span>
      </button>
      {open ? (
        <ul className={`lang-switch__menu${closing ? " is-closing" : ""}`} role="listbox">
          {routing.locales.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={l === locale}
                className={`lang-switch__opt${l === locale ? " is-active" : ""}`}
                onClick={() => switchTo(l)}
              >
                <span className="lang-switch__code">{displayCode(l)}</span>
                <span className="lang-switch__name">{t(l)}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
