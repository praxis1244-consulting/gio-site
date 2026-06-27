import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Coach } from "@/data/coaches";

export async function CoachCard({ coach }: { coach: Coach }) {
  const t = await getTranslations("Coach");
  const ta = await getTranslations("Alt");

  return (
    <Link className="coach-card" href={`/coaches/${coach.slug}`}>
      <div className="coach-card__poster">
        <Image
          className="coach-card__img"
          src={coach.cutout}
          alt={ta("coachPhoto", { name: coach.name })}
          fill
          sizes="(max-width: 1000px) 100vw, 640px"
        />
        <div className="coach-card__shade" aria-hidden />
        <div className="coach-card__corner tl">● COACH</div>
        <div className="coach-card__corner tr">VAL · 2026</div>
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
        <span className="coach-card__cta">{t("seeProfile")}</span>
      </div>
    </Link>
  );
}
