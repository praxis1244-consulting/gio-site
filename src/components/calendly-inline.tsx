"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

// Params a nivel de embed: tema oscuro + acento rojo para pegar con el sitio.
// (Solo aplican dentro del contexto de embed que inyecta widget.js, no standalone.)
const THEME = "hide_gdpr_banner=1&background_color=0c0c0d&text_color=ece4d8&primary_color=ff4655";

declare global {
  interface Window {
    Calendly?: { initInlineWidget(opts: { url: string; parentElement: HTMLElement }): void };
  }
}

/** Widget de agendamiento de Calendly embebido, robusto ante navegación client-side.
 *  Muestra un placeholder HUD ("CARGANDO AGENDA…") hasta que el iframe pinta. */
export function CalendlyInline({ url }: { url: string }) {
  const t = useTranslations("Calendly");
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;
    setLoaded(false);
    const full = `${url}${url.includes("?") ? "&" : "?"}${THEME}`;

    // Esconde el overlay de carga cuando el iframe de Calendly termina de cargar.
    const observer = new MutationObserver(() => {
      const iframe = target.querySelector("iframe");
      if (iframe) {
        iframe.addEventListener("load", () => setLoaded(true), { once: true });
        observer.disconnect();
      }
    });
    observer.observe(target, { childList: true, subtree: true });

    const render = () => {
      if (!window.Calendly || !ref.current) return;
      ref.current.innerHTML = "";
      window.Calendly.initInlineWidget({ url: full, parentElement: ref.current });
    };

    if (window.Calendly) {
      render();
    } else {
      let script = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
      if (!script) {
        script = document.createElement("script");
        script.src = SCRIPT_SRC;
        script.async = true;
        document.body.appendChild(script);
      }
      script.addEventListener("load", render, { once: true });
    }

    return () => observer.disconnect();
  }, [url]);

  return (
    <div className="calendly-wrap">
      {!loaded && (
        <div className="calendly-loading" aria-hidden>
          <span className="dot pulse-dot" />
          <span>{t("loading")}</span>
        </div>
      )}
      <div ref={ref} className="calendly-embed" aria-label={t("ariaLabel")} />
    </div>
  );
}
