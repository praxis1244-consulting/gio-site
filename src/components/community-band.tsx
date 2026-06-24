import { site } from "@/data/site";
import { community } from "@/data/content";

export function CommunityBand() {
  return (
    <section className="section" id="comunidad">
      <div className="wrap">
        <div className="community">
          <div className="community__copy">
            <span className="eyebrow">Comunidad · {site.discord.label}</span>
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
