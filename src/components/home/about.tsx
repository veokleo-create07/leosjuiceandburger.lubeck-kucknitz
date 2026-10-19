import Image from "next/image";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("about");

  return (
    <section id="ueber-leos" className="about-section section-spacing" aria-labelledby="about-heading">
      <div className="content-width page-padding">
        <div className="about-grid">
          <div className="about-copy">
            <p className="about-label type-label text-olive-green">{t("label")}</p>
            <h2 id="about-heading" className="about-heading text-charcoal">
              <span>{t("headingLine1")}</span>
              <span className="text-burnt-orange">{t("headingLine2")}</span>
            </h2>
            <p className="about-intro type-body text-charcoal/70">{t("intro")}</p>
            <p className="about-location type-label text-charcoal">{t("location")}</p>
          </div>

          <div className="about-images">
            <figure className="about-figure about-atmosphere about-reveal about-reveal-delay-1">
              <Image
                src="/about-atmosphere-temporary.png"
                alt={t("atmosphere.imageAlt")}
                fill
                sizes="(max-width: 767px) 100vw, 52vw"
                className="about-image about-image-parallax"
              />
              <figcaption className="about-image-note">{t("temporaryImageNote")}</figcaption>
            </figure>
            <figure className="about-figure about-preparation about-reveal about-reveal-delay-2">
              <Image
                src="/about-preparation-temporary.png"
                alt={t("preparation.imageAlt")}
                fill
                sizes="(max-width: 767px) 100vw, 34vw"
                className="about-image"
              />
              <figcaption className="about-image-note">{t("temporaryImageNote")}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
