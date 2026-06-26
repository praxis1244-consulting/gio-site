import { getTranslations } from "next-intl/server";
import type { Offer } from "@/data/offers";
import type { Coach } from "@/data/coaches";
import { BookingCta } from "./booking-cta";

export async function OfferCard({
  offer,
  coach,
  bookableCoaches,
}: {
  offer: Offer;
  coach?: Coach;
  /** Coaches con Calendly, para el modal de reserva del offer colectivo. */
  bookableCoaches?: Coach[];
}) {
  const t = await getTranslations("CoachPage");

  return (
    <article className={`offer-card${offer.featured ? " featured" : ""}`}>
      <div className="offer-card__top">
        {offer.badge ? <span className="offer-card__badge">{offer.badge}</span> : null}
        {coach ? <span className="offer-card__by">{t("offerBy")} {coach.name}</span> : null}
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
            {t("bookWith", { name: coach.name })}
          </a>
        ) : (
          <BookingCta label={t("bookClass")} coaches={bookableCoaches ?? []} />
        )}
      </div>
    </article>
  );
}
