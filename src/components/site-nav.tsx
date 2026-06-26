"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";

/** Keep in sync with the .nav-drawer.is-closing exit animation in globals.css. */
const DRAWER_EXIT_MS = 430;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number | null>(null);

  const openMenu = useCallback(() => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setClosing(false);
    setMenuOpen(true);
  }, []);

  // Play the exit animation, then unmount-hide once it finishes.
  const closeMenu = useCallback(() => {
    if (closeTimer.current !== null) return;
    setClosing(true);
    closeTimer.current = window.setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
      closeTimer.current = null;
    }, DRAWER_EXIT_MS);
  }, []);

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
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    };
  }, []);

  // Lock body scroll + close the drawer on Escape while it's open.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen, closeMenu]);

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
        <a href={site.discord.invite} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-b__cta">
          Unirse →
        </a>
        <button
          type="button"
          className="nav-b__burger"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          aria-controls="nav-drawer"
          onClick={openMenu}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Full-screen mobile drawer */}
      <div
        id="nav-drawer"
        className={`nav-drawer${menuOpen && !closing ? " is-open" : ""}${closing ? " is-closing" : ""}`}
        aria-hidden={!menuOpen || closing}
      >
        <div className="nav-drawer__head">
          <Link className="mark" href="/" onClick={closeMenu}>
            {site.brand.mark}<em>{site.brand.accent}</em>
          </Link>
          <button
            type="button"
            className="nav-drawer__close"
            aria-label="Cerrar menú"
            onClick={closeMenu}
          >
            <span /><span />
          </button>
        </div>
        <ul className="nav-drawer__links">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu}>{item.label}</a>
            </li>
          ))}
        </ul>
        <a
          href={site.discord.invite}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary nav-drawer__cta"
          onClick={closeMenu}
        >
          Unirse al Discord →
        </a>
      </div>
    </>
  );
}
