import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="hero-editorial relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="content-width page-padding relative">
        <div className="hero-editorial-topline hero-reveal hero-reveal-delay-1">
          <span className="hero-editorial-rule" aria-hidden="true" />
          <span>{t("location")}</span>
          <span className="hero-editorial-number" aria-hidden="true">01</span>
        </div>

        <div className="hero-editorial-stage">
          <div className="hero-editorial-copy">
            <h1 id="hero-heading" className="hero-editorial-title hero-reveal hero-reveal-delay-2 text-charcoal">
              <span>{t("headlineLine1")}</span>
              <span>{t("headlineLine2")}</span>
              <span className="text-burnt-orange">{t("headlineLine3")}</span>
            </h1>

            <div className="hero-editorial-actions hero-reveal hero-reveal-delay-3">
              <p className="hero-editorial-support type-body text-charcoal/70">{t("supportingText")}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/#reservierung" className="button-base hero-cta button-editorial button-primary">
                  {t("reserveCta")}
                </Link>
                <Link href="/#speisekarte" className="button-base hero-cta button-editorial button-secondary">
                  {t("menuCta")}
                </Link>
              </div>
            </div>
          </div>

          <figure className="hero-editorial-art hero-burger-reveal">
            <Image
              src="/hero-burger-cutout.png"
              alt={t("imageAlt")}
              fill
              priority
              sizes="(max-width: 767px) 92vw, 58vw"
              className="object-contain"
            />
            <figcaption className="hero-editorial-caption">{t("temporaryImageNote")}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
