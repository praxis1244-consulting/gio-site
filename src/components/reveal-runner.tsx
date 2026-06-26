"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = [
  ".ehead",
  ".estat",
  ".team",
  ".estep",
  ".fight",
  ".equote",
  ".lead-b",
  ".faq-b details",
  ".guarantee",
  ".outro h2",
  ".outro__ctas",
  ".foot-b__inner",
  ".coach-card",
  ".offer-card",
  ".proof",
  ".feature",
  ".community",
].join(", ");

export function RevealRunner() {
  // Re-run on every client-side navigation: the root layout (and this component)
  // persists across route changes, so without a pathname dep the effect would only
  // fire on the first hard load, leaving reveal-gated sections stuck at opacity:0.
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = document.querySelectorAll<HTMLElement>(SELECTOR);
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );

    for (const el of targets) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        el.classList.add("is-in");
      } else {
        io.observe(el);
      }
    }

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
