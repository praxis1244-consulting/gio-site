import type { Offer } from "@/data/offers";
import type { Coach } from "@/data/coaches";
import { BookingCta } from "./booking-cta";

export function OfferCard({ offer, coach }: { offer: Offer; coach?: Coach }) {
  return (
    <article className={`offer-card${offer.featured ? " featured" : ""}`}>
      <div className="offer-card__top">
        {offer.badge ? <span className="offer-card__badge">{offer.badge}</span> : null}
        {coach ? <span className="offer-card__by">por {coach.name}</span> : null}
      </div>

      <h3 className="offer-card__title">{offer.title}</h3>
      <p className="offer-card__blurb">{offer.blurb}</p>

      <div className="offer-card__mode">
        <span className="dot" aria-hidden />
        {offer.mode}
      </div>

      <ul className="offer-card__list">
        {offer.bullets.map((b, i) => (
          <li key={i} className={b.muted ? "muted" : undefined}>{b.text}</li>
        ))}
      </ul>

      <div className="offer-card__cta">
        {coach?.calendly ? (
          <a href="#agenda" className="btn btn-primary">
            {`Agenda con ${coach.name} →`}
          </a>
        ) : (
          <BookingCta label="Agenda tu clase →" />
        )}
      </div>
    </article>
  );
}
