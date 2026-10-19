import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="hero-shell relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="content-width page-padding relative">
        <div className="hero-stage">
          <figure className="hero-art hero-media-reveal hero-scroll-reveal">
            <span className="hero-art-backdrop" aria-hidden="true" />
            <div className="hero-art-image relative z-10 overflow-hidden bg-olive-green/10">
              <Image
                src="/hero-burger-placeholder.png"
                alt={t("imageAlt")}
                fill
                priority
                sizes="(max-width: 767px) 100vw, 58vw"
                className="object-cover object-[62%_center]"
              />
              <figcaption className="absolute bottom-0 left-0 bg-cream/90 px-3 py-2 text-[0.7rem] text-charcoal/65 backdrop-blur-sm">
                {t("temporaryImageNote")}
              </figcaption>
            </div>
          </figure>

          <div className="hero-copy">
            <p className="hero-reveal hero-reveal-delay-1 hero-kicker type-label text-olive-green">
              <span className="hero-kicker-mark" aria-hidden="true" />
              <span>{t("location")}</span>
              <span className="hero-kicker-index" aria-hidden="true">01</span>
            </p>

            <h1 id="hero-heading" className="hero-reveal hero-reveal-delay-2 type-hero-editorial text-charcoal">
              <span className="block">{t("headlineLine1")}</span>
              <span className="block">{t("headlineLine2")}</span>
              <span className="block text-burnt-orange">{t("headlineLine3")}</span>
            </h1>

            <p className="hero-reveal hero-reveal-delay-3 hero-support type-body mt-6 max-w-md text-lg text-charcoal/70">
              {t("supportingText")}
            </p>

            <div className="hero-reveal hero-reveal-delay-4 mt-7 grid max-w-lg grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
              <Link href="/#reservierung" className="button-base hero-cta button-editorial button-primary hover:-translate-y-0.5">
                {t("reserveCta")}
              </Link>
              <Link href="/#speisekarte" className="button-base hero-cta button-editorial button-secondary hover:-translate-y-0.5">
                {t("menuCta")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
