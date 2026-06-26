"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 1200;
const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

// Parte un valor como "6", "$51K", "2°" en prefijo / número / sufijo para poder
// animar sólo la parte numérica conservando símbolos ($, K, °, etc.).
function parseValue(raw: string) {
  const m = raw.match(/^(\D*?)([\d.,]+)(\D*)$/);
  if (!m) return null;
  const numStr = m[2].replace(/,/g, "");
  const target = parseFloat(numStr);
  if (!Number.isFinite(target)) return null;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix: m[1], target, suffix: m[3], decimals };
}

/**
 * Cuenta el número hacia arriba (0 → valor) cuando entra en viewport.
 * SSR / no-JS / reduced-motion / valor no numérico → muestra el valor final tal cual.
 */
export function CountUp({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const parsed = parseValue(value);
    const el = ref.current;
    if (!parsed || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const render = (n: number) =>
      setDisplay(`${parsed.prefix}${n.toFixed(parsed.decimals)}${parsed.suffix}`);

    let raf = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let done = false;

    const animate = () => {
      let start: number | null = null;
      const step = (ts: number) => {
        if (start === null) start = ts;
        const t = Math.min((ts - start) / DURATION, 1);
        render(parsed.target * easeOutExpo(t));
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (done || !entries.some((e) => e.isIntersecting)) return;
        done = true;
        io.disconnect();
        timer = setTimeout(animate, delay);
      },
      { threshold: 0.4 },
    );

    render(0); // arranca en cero para que el valor final no parpadee antes de contar
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      if (timer) clearTimeout(timer);
    };
  }, [value, delay]);

  return <span ref={ref}>{display}</span>;
}
