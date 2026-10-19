import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export function ReservationCta() {
  const t = useTranslations("reservationCta");

  return (
    <section id="reservierung" className="reservation-cta" aria-labelledby="reservation-heading">
      <div className="content-width page-padding">
        <div className="reservation-cta-inner">
          <div>
            <p className="reservation-cta-label type-label">{t("label")}</p>
            <h2 id="reservation-heading" className="reservation-cta-heading">
              {t("heading")}
            </h2>
            <p className="reservation-cta-support type-body">{t("supportingText")}</p>
          </div>
          <Link href="/#reservierung" className="button-base button-editorial reservation-cta-button">
            {t("button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
