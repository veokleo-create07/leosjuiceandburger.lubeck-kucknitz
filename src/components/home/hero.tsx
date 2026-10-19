import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="hero-reference" aria-labelledby="hero-heading">
      <div className="hero-reference-canvas content-width page-padding">
        <span className="hero-reference-mark hero-reference-mark-left" aria-hidden="true" />
        <span className="hero-reference-mark hero-reference-mark-top" aria-hidden="true" />
        <span className="hero-reference-mark hero-reference-mark-bottom" aria-hidden="true" />

        <h1 id="hero-heading" className="hero-reference-title text-charcoal">
          <span className="hero-reference-line hero-reference-line-black hero-reference-reveal hero-reference-reveal-delay-1">
            {t("headlineLine1")}
          </span>
          <span className="hero-reference-line hero-reference-line-orange hero-reference-reveal hero-reference-reveal-delay-2 text-burnt-orange">
            {t("headlineLine2")}
          </span>
          <span className="hero-reference-line hero-reference-line-orange hero-reference-line-final hero-reference-reveal hero-reference-reveal-delay-3 text-burnt-orange">
            {t("headlineLine3")}
          </span>
        </h1>

        <p className="hero-reference-support hero-reference-reveal hero-reference-reveal-delay-4 type-body text-charcoal/70">
          {t("supportingText")}
        </p>

        <div className="hero-reference-actions hero-reference-reveal hero-reference-reveal-delay-4">
          <Link href="/#reservierung" className="button-base hero-cta button-editorial button-primary">
            {t("reserveCta")}
          </Link>
          <Link href="/#speisekarte" className="button-base hero-cta button-editorial button-secondary">
            {t("menuCta")}
          </Link>
        </div>

        <figure className="hero-reference-art hero-reference-art-reveal">
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
