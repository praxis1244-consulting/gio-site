import Link from "next/link";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="foot-b">
      <div className="foot-b__inner">
        <div className="foot-b__mark">{site.brand.mark}<em>{site.brand.accent}</em></div>
        <div className="foot-b__cols">
          <div>
            <span className="h">Coaches</span>
            <Link href="/coaches/gio">Gio</Link>
            <Link href="/coaches/adverso">Adverso</Link>
            <a href="#coaches">Ver roster</a>
          </div>
          <div>
            <span className="h">Clases</span>
            <a href="#offers">Clases 1v1</a>
            <a href="#offers">Agenda tu clase</a>
            <a href="#comunidad">Comunidad</a>
          </div>
          <div>
            <span className="h">Comunidad</span>
            <a href={site.discord.invite} target="_blank" rel="noopener noreferrer">{site.discord.label}</a>
            <a href="#offers">Reservar</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <span className="h">Síguenos</span>
            <a href={site.socials.twitch} target="_blank" rel="noopener noreferrer">Twitch</a>
            <a href={site.socials.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href={site.socials.x} target="_blank" rel="noopener noreferrer">X / Twitter</a>
          </div>
        </div>
        <div className="foot-b__copy">
          <span>© 2026 {site.brand.name.toUpperCase()} · {site.brand.domain}</span>
          <span>HECHO EN LATAM · PARA LATAM</span>
        </div>
      </div>
    </footer>
  );
}
