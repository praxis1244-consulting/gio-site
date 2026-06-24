import type { Offer } from "@/data/offers";
import type { Coach } from "@/data/coaches";

export function OfferCard({ offer, coach }: { offer: Offer; coach?: Coach }) {
  return (
    <article className={`offer-card${offer.featured ? " featured" : ""}`}>
      <div className="offer-card__top">
        {offer.badge ? <span className="offer-card__badge">{offer.badge}</span> : null}
        {coach ? <span className="offer-card__by">por {coach.name}</span> : null}
      </div>

      <h3 className="offer-card__title">{offer.title}</h3>
      <p className="offer-card__blurb">{offer.blurb}</p>

      <div className="offer-card__price">
        <span className="v">{offer.price.v}</span>
        <span className="u">{offer.price.u}</span>
      </div>

      <ul className="offer-card__list">
        {offer.bullets.map((b, i) => (
          <li key={i} className={b.muted ? "muted" : undefined}>{b.text}</li>
        ))}
      </ul>

      <div className="offer-card__cta">
        <a
          href={offer.whopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-${offer.cta.variant}`}
        >
          {offer.cta.label}
        </a>
      </div>
    </article>
  );
}
