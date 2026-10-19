import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="hero-shell overflow-hidden" aria-labelledby="hero-heading">
      <div className="content-width page-padding grid min-h-[calc(100svh-5rem)] items-center gap-10 py-10 md:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] md:gap-12 md:py-16 lg:gap-20 lg:py-20">
        <div className="order-2 max-w-xl md:order-1">
          <p className="hero-reveal hero-reveal-delay-1 type-label mb-6 flex items-center gap-3 text-olive-green">
            <span className="size-2 rounded-full bg-burnt-orange" aria-hidden="true" />
            {t("location")}
          </p>

          <h1 id="hero-heading" className="hero-reveal hero-reveal-delay-2 type-display max-w-[10ch] text-charcoal">
            {t("headline")}
          </h1>

          <p className="hero-reveal hero-reveal-delay-3 type-body mt-7 max-w-md text-lg text-charcoal/70 md:mt-8">
            {t("supportingText")}
          </p>

          <div className="hero-reveal hero-reveal-delay-4 mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link href="/#reservierung" className="button-base button-primary hover:-translate-y-0.5">
              {t("reserveCta")}
            </Link>
            <Link href="/#speisekarte" className="button-base button-secondary hover:-translate-y-0.5">
              {t("menuCta")}
            </Link>
          </div>
        </div>

        <figure className="hero-media-reveal order-1 md:order-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-olive-green/10 md:aspect-[4/5] lg:aspect-[5/6]">
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
