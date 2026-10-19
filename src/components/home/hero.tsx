import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="hero-color-block relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="hero-color-block-copy">
        <div className="content-width page-padding">
          <div className="hero-color-block-content">
            <h1 id="hero-heading" className="hero-color-block-title hero-reveal hero-reveal-delay-1 text-charcoal">
              <span>{t("headlineLine1")}</span>
              <span>{t("headlineLine2")}</span>
            </h1>
            <p className="hero-color-block-support hero-reveal hero-reveal-delay-2 type-body text-charcoal/70">
              {t("supportingText")}
            </p>
            <div className="hero-color-block-actions hero-reveal hero-reveal-delay-3">
              <Link href="/#reservierung" className="button-base hero-cta button-editorial button-primary">
                {t("reserveCta")}
              </Link>
              <Link href="/#speisekarte" className="button-base hero-cta button-editorial button-secondary">
                {t("menuCta")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-color-block-image">
        <figure className="hero-color-block-art hero-burger-reveal">
          <Image
            src="/hero-burger-cutout.png"
            alt={t("imageAlt")}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
            className="object-contain"
          />
        </figure>
      </div>
    </section>
  );
}
