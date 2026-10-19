import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="hero-poster relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="content-width page-padding">
        <div className="hero-poster-location hero-reveal hero-reveal-delay-1 type-label">
          {t("location")}
        </div>

        <div className="hero-poster-stage">
          <div className="hero-poster-copy">
            <h1 id="hero-heading" className="hero-poster-title hero-reveal hero-reveal-delay-1 text-charcoal">
              <span>{t("headlineLine1")}</span>
              <span className="text-burnt-orange">{t("headlineLine2")}</span>
            </h1>
            <p className="hero-poster-support hero-reveal hero-reveal-delay-2 type-body text-charcoal/70">
              {t("supportingText")}
            </p>
            <div className="hero-poster-actions hero-reveal hero-reveal-delay-3">
              <Link href="/#reservierung" className="button-base hero-cta button-editorial button-primary">
                {t("reserveCta")}
              </Link>
              <Link href="/#speisekarte" className="button-base hero-cta button-editorial button-secondary">
                {t("menuCta")}
              </Link>
            </div>
          </div>

          <figure className="hero-poster-art hero-burger-reveal">
            <Image
              src="/hero-burger-cutout.png"
              alt={t("imageAlt")}
              fill
              priority
              sizes="(max-width: 767px) 100vw, (max-width: 1100px) 43vw, 40vw"
              className="object-contain"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
