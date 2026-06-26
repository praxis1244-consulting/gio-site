import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/data/site";

export async function SiteFooter() {
  const t = await getTranslations("Footer");

  return (
    <footer className="foot-b">
      <div className="foot-b__inner">
        <div className="foot-b__mark">{site.brand.mark}<em>{site.brand.accent}</em></div>
        <div className="foot-b__cols">
          <div>
            <span className="h">{t("colCoaches")}</span>
            <Link href="/coaches/gio">Gio</Link>
            <Link href="/coaches/adverso">Adverso</Link>
            <Link href="/#coaches">{t("seeRoster")}</Link>
          </div>
          <div>
            <span className="h">{t("colClasses")}</span>
            <Link href="/#offers">{t("classes1v1")}</Link>
            <Link href="/#offers">{t("bookClass")}</Link>
            <Link href="/#comunidad">{t("community")}</Link>
          </div>
          <div>
            <span className="h">{t("colCommunity")}</span>
            <a href={site.discord.invite} target="_blank" rel="noopener noreferrer">{site.discord.label}</a>
            <Link href="/#offers">{t("reserve")}</Link>
            <Link href="/#faq">{t("faq")}</Link>
          </div>
          <div>
            <span className="h">{t("colFollow")}</span>
            <a href={site.socials.twitch} target="_blank" rel="noopener noreferrer">Twitch</a>
            <a href={site.socials.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href={site.socials.x} target="_blank" rel="noopener noreferrer">X / Twitter</a>
          </div>
        </div>
        <div className="foot-b__copy">
          <span>© 2026 {site.brand.name.toUpperCase()} · {site.brand.domain}</span>
          <span>{t("madeIn")}</span>
        </div>
      </div>
    </footer>
  );
}
