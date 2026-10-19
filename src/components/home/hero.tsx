import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="hero-campaign" aria-labelledby="hero-heading">
      <div className="hero-campaign-canvas content-width page-padding">
        <p className="hero-campaign-location hero-campaign-reveal hero-campaign-reveal-delay-1 type-label">
          {t("location")}
        </p>

        <h1 id="hero-heading" className="hero-campaign-title text-charcoal">
          <span className="hero-campaign-line hero-campaign-line-primary hero-campaign-reveal hero-campaign-reveal-delay-1">
            {t("headlineLine1")}
          </span>
          <span className="hero-campaign-line hero-campaign-line-accent hero-campaign-reveal hero-campaign-reveal-delay-2 text-burnt-orange">
            {t("headlineLine2")}
          </span>
        </h1>

        <p className="hero-campaign-support hero-campaign-reveal hero-campaign-reveal-delay-3 type-body text-charcoal/70">
          {t("supportingText")}
        </p>

        <div className="hero-campaign-actions hero-campaign-reveal hero-campaign-reveal-delay-4">
          <Link href="/#reservierung" className="button-base hero-cta button-editorial button-primary">
            {t("reserveCta")}
          </Link>
          <Link href="/#speisekarte" className="button-base hero-cta button-editorial button-secondary">
            {t("menuCta")}
          </Link>
        </div>

        <figure className="hero-campaign-art hero-campaign-art-reveal">
          <Image
            src="/hero-burger-cutout.png"
            alt={t("imageAlt")}
            fill
            priority
            sizes="(max-width: 767px) 100vw, (max-width: 1100px) 48vw, 43vw"
            className="object-contain"
          />
        </figure>
      </div>
    </section>
  );
}
