"use client";

import { useEffect, useRef } from "react";

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

// Params a nivel de embed: tema oscuro + acento rojo para pegar con el sitio.
// (Solo aplican dentro del contexto de embed que inyecta widget.js, no standalone.)
const THEME = "hide_gdpr_banner=1&background_color=0c0c0d&text_color=ece4d8&primary_color=ff4655";

declare global {
  interface Window {
    Calendly?: { initInlineWidget(opts: { url: string; parentElement: HTMLElement }): void };
  }
}

/** Widget de agendamiento de Calendly embebido, robusto ante navegación client-side. */
export function CalendlyInline({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;
    const full = `${url}${url.includes("?") ? "&" : "?"}${THEME}`;

    const render = () => {
      if (!window.Calendly || !ref.current) return;
      ref.current.innerHTML = "";
      window.Calendly.initInlineWidget({ url: full, parentElement: ref.current });
    };

    if (window.Calendly) {
      render();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", render, { once: true });
    return () => script?.removeEventListener("load", render);
  }, [url]);

  return <div ref={ref} className="calendly-embed" aria-label="Calendario de reserva" />;
}
