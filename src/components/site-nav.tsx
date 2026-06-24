import Link from "next/link";
import { site } from "@/data/site";

export function SiteNav() {
  return (
    <>
      {/* Thin Discord banner — goaching pattern */}
      <a className="discord-banner" href={site.discord.invite} target="_blank" rel="noopener noreferrer">
        <span className="dot live pulse-dot" />
        <span>El aula vive en el Discord — reviews grupales, eventos y guías gratis.</span>
        <em>Unirse →</em>
      </a>

      <nav className="nav-b">
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
