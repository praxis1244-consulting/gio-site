"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing, displayCode } from "@/i18n/routing";
import { LangSwitcher } from "./lang-switcher";
import { site } from "@/data/site";

/** Keep in sync with the .nav-drawer.is-closing exit animation in globals.css. */
const DRAWER_EXIT_MS = 430;

export function SiteNav() {
  const t = useTranslations("Nav");
  const tl = useTranslations("LangSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

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

  const switchLocale = useCallback(
    (next: string) => {
      if (next !== locale) router.replace(pathname, { locale: next, scroll: false });
      closeMenu();
    },
    [locale, pathname, router, closeMenu],
  );

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
        <span>{t("banner")}</span>
        <em>{t("join")}</em>
      </a>

      <nav ref={navRef} className={`nav-b${scrolled ? " is-scrolled" : ""}`}>
        <Link className="mark" href="/">{site.brand.mark}<em>{site.brand.accent}</em></Link>
        <ul>
          {site.nav.map((item) => (
            <li key={item.key}><Link href={item.href}>{t(item.key)}</Link></li>
          ))}
        </ul>
        <div className="nav-b__right">
          <LangSwitcher />
          <a href={site.discord.invite} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-b__cta">
            {t("join")}
          </a>
        </div>
        <button
          type="button"
          className="nav-b__burger"
          aria-label={t("openMenu")}
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
            aria-label={t("closeMenu")}
            onClick={closeMenu}
          >
            <span /><span />
          </button>
        </div>
        <ul className="nav-drawer__links">
          {site.nav.map((item) => (
            <li key={item.key}>
              <Link href={item.href} onClick={closeMenu}>{t(item.key)}</Link>
            </li>
          ))}
        </ul>
        <div className="nav-drawer__lang" role="group" aria-label={tl("aria")}>
          {routing.locales.map((l) => (
            <button
              type="button"
              key={l}
              className={`lang-seg${l === locale ? " is-active" : ""}`}
              aria-current={l === locale}
              onClick={() => switchLocale(l)}
            >
              <span className="lang-seg__code">{displayCode(l)}</span>
              <span className="lang-seg__name">{tl(l)}</span>
            </button>
          ))}
        </div>
        <a
          href={site.discord.invite}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary nav-drawer__cta"
          onClick={closeMenu}
        >
          {t("joinDiscordArrow")}
        </a>
      </div>
    </>
  );
}
