import type { Coach } from "@/data/coaches";

export function CoachCard({ coach }: { coach: Coach }) {
  return (
    <a className="coach-card" href={`/coaches/${coach.slug}`}>
      {/* Poster figure — TODO: swap to <img src={coach.photo} alt={coach.name} /> when real 4:5 photos are in. */}
      <div className="coach-card__poster">
        <div className="coach-card__corner tl">● COACH</div>
        <div className="coach-card__corner tr">VAL · 2026</div>
        <div className="coach-card__figure">
          FOTO DE {coach.name.toUpperCase()}<br />
          <span style={{ opacity: 0.6 }}>[ placeholder · 4:5 ]</span>
        </div>
        <div className="coach-card__name">{coach.name}</div>
        <div className="coach-card__sub">{coach.rank} · {coach.role}</div>
      </div>

      <div className="coach-card__body">
        <span className="coach-card__creds">{coach.creds}</span>
        <div className="coach-card__role">{coach.role}</div>
        <p className="coach-card__tag">{coach.tagline}</p>
        <div className="coach-card__meta">
          <span className="coach-card__rank">{coach.rank}</span>
          <span className="coach-card__langs">{coach.langs.join(" · ")}</span>
        </div>
        <span className="coach-card__cta">Ver perfil →</span>
      </div>
    </a>
  );
}
