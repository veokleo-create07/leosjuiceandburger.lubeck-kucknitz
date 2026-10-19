import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

const specialties = [
  { key: "burgers", image: "/speciality-burgers-temporary.png", className: "specialty-item-burgers" },
  { key: "juices", image: "/speciality-juices-temporary.png", className: "specialty-item-juices" },
  { key: "sides", image: "/speciality-sides-temporary.png", className: "specialty-item-sides" },
] as const;

export function Specialties() {
  const t = useTranslations("specialties");

  return (
    <section id="speisekarte" className="specialties-section section-spacing" aria-labelledby="specialties-heading">
      <div className="content-width page-padding">
        <div className="specialties-intro">
          <div>
            <p className="specialties-label type-label text-olive-green">{t("label")}</p>
            <h2 id="specialties-heading" className="specialties-heading text-charcoal">
              <span>{t("headingLine1")}</span>
              <span className="text-burnt-orange">{t("headingLine2")}</span>
            </h2>
          </div>
          <p className="specialties-lead type-body text-charcoal/70">{t("intro")}</p>
          <Link href="/#speisekarte" className="button-base button-editorial button-primary specialties-cta">
            {t("menuCta")}
          </Link>
        </div>

        <div className="specialties-grid">
          {specialties.map((specialty, index) => (
            <article key={specialty.key} className={`specialty-item ${specialty.className}`}>
              <figure className={`specialty-figure specialties-reveal specialties-reveal-delay-${index + 1}`}>
                <Image
                  src={specialty.image}
                  alt={t(`${specialty.key}.imageAlt`)}
                  fill
                  sizes="(max-width: 767px) 100vw, 38vw"
                  className="specialty-image"
                />
                <figcaption className="specialty-image-note">{t("temporaryImageNote")}</figcaption>
              </figure>
              <div className="specialty-copy specialties-reveal specialties-reveal-delay-2">
                <h3 className="specialty-title">{t(`${specialty.key}.title`)}</h3>
                <p className="type-body text-charcoal/70">{t(`${specialty.key}.description`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
