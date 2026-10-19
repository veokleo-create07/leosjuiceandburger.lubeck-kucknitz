import Image from "next/image";
import { useTranslations } from "next-intl";

import { businessInfo } from "@/config/business";
import { Link } from "@/i18n/navigation";

export function Visit() {
  const t = useTranslations("visit");
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.mapsQuery)}`;

  const address = businessInfo.address ?? t("placeholderAddress");
  const openingHours = businessInfo.openingHours ?? t("placeholderHours");
  const phone = businessInfo.phone ?? t("placeholderPhone");

  return (
    <section id="besuch" className="visit-section section-spacing" aria-labelledby="visit-heading">
      <div className="content-width page-padding">
        <div className="visit-grid">
          <div className="visit-copy">
            <p className="visit-label type-label text-olive-green">{t("label")}</p>
            <h2 id="visit-heading" className="visit-heading text-charcoal">
              <span>{t("headingLine1")}</span>
              <span className="text-burnt-orange">{t("headingLine2")}</span>
            </h2>
            <p className="visit-intro type-body text-charcoal/70">{t("intro")}</p>

            <dl className="visit-details">
              <div>
                <dt>{t("addressLabel")}</dt>
                <dd>{address}</dd>
              </div>
              <div>
                <dt>{t("hoursLabel")}</dt>
                <dd>{openingHours}</dd>
              </div>
              <div>
                <dt>{t("phoneLabel")}</dt>
                <dd>{phone}</dd>
              </div>
            </dl>

            <div className="visit-actions">
              <Link href="/#reservierung" className="button-base button-editorial button-primary">
                {t("reserveCta")}
              </Link>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="button-base button-editorial button-secondary">
                {t("directionsCta")}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <figure className="visit-figure visit-reveal">
            <Image
              src="/visit-atmosphere-temporary.png"
              alt={t("imageAlt")}
              fill
              sizes="(max-width: 767px) 100vw, 58vw"
              className="visit-image"
            />
            <figcaption className="visit-image-note">{t("temporaryImageNote")}</figcaption>
            <span className="visit-location" aria-label={`${t("locationLabel")}: ${businessInfo.city}`}>
              {businessInfo.city}
            </span>
          </figure>
        </div>
      </div>
    </section>
  );
}
