import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="hero-shell overflow-hidden" aria-labelledby="hero-heading">
      <div className="content-width page-padding grid items-center gap-7 py-8 sm:gap-9 sm:py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-10 md:py-12 lg:gap-16 lg:py-14">
        <div className="order-2 max-w-xl md:order-1">
          <p className="hero-reveal hero-reveal-delay-1 type-label mb-5 flex items-center gap-3 text-olive-green">
            <span className="size-2 rounded-full bg-burnt-orange" aria-hidden="true" />
            {t("location")}
          </p>

          <h1 id="hero-heading" className="hero-reveal hero-reveal-delay-2 type-hero max-w-[12ch] text-charcoal">
            {t("headline")}
          </h1>

          <p className="hero-reveal hero-reveal-delay-3 type-body mt-5 max-w-md text-lg text-charcoal/70 md:mt-6">
            {t("supportingText")}
          </p>

          <div className="hero-reveal hero-reveal-delay-4 mt-7 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-4 md:mt-8">
            <Link href="/#reservierung" className="button-base hero-cta button-primary hover:-translate-y-0.5">
              {t("reserveCta")}
            </Link>
            <Link href="/#speisekarte" className="button-base hero-cta button-secondary hover:-translate-y-0.5">
              {t("menuCta")}
            </Link>
          </div>
        </div>

        <figure className="hero-media-frame hero-media-reveal order-1 md:order-2">
          <div className="relative z-10 aspect-[4/3] overflow-hidden bg-olive-green/10 md:aspect-[5/4] lg:aspect-[6/5]">
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
      </div>
    </section>
  );
}
