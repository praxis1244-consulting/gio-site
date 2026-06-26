import { getLocale, getTranslations } from "next-intl/server";
import { site } from "@/data/site";
import { getCommunity } from "@/data/content";
import type { Locale } from "@/i18n/routing";

export async function CommunityBand() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("Home");
  const community = getCommunity(locale);

  return (
    <section className="section" id="comunidad">
      <div className="wrap">
        <div className="community">
          <div className="community__copy">
            <span className="eyebrow">{t("communityEyebrow")} · {site.discord.label}</span>
            <h2 className="community__title">{community.title}</h2>
            <p className="community__body">{community.body}</p>
            <div className="community__ctas">
              <a
                href={site.discord.invite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {community.cta}
              </a>
            </div>
          </div>

          <ul className="community__perks">
            {community.perks.map((perk, i) => (
              <li key={i} className="community__perk">{perk}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
