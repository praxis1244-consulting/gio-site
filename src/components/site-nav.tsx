"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Expose the nav's real height so the hero can slide up behind it.
    const setNavH = () => {
      const h = navRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty("--nav-h", `${h}px`);
    };
    setNavH();
    window.addEventListener("resize", setNavH);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", setNavH);
    };
  }, []);

  return (
    <>
      {/* Thin Discord banner — goaching pattern */}
      <a className="discord-banner" href={site.discord.invite} target="_blank" rel="noopener noreferrer">
        <span className="dot live pulse-dot" />
        <span>El aula vive en el Discord — reviews grupales, eventos y guías gratis.</span>
        <em>Unirse →</em>
      </a>

      <nav ref={navRef} className={`nav-b${scrolled ? " is-scrolled" : ""}`}>
        <Link className="mark" href="/">{site.brand.mark}<em>{site.brand.accent}</em></Link>
        <ul>
          {site.nav.map((item) => (
            <li key={item.href}><a href={item.href}>{item.label}</a></li>
          ))}
        </ul>
        <a href={site.discord.invite} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Unirse →
        </a>
      </nav>
    </>
  );
}
