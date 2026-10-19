import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

const navigation = [
  { key: "start", href: "/" },
  { key: "menu", href: "/#speisekarte" },
  { key: "gallery", href: "/#galerie" },
  { key: "contact", href: "/#kontakt" },
];

const socialLinks = [
  { key: "instagram", href: "#instagram" },
  { key: "facebook", href: "#facebook" },
];

export function SiteFooter() {
  const tNavigation = useTranslations("navigation");
  const t = useTranslations("footer");

  return (
    <footer className="bg-charcoal text-cream">
      <div className="content-width page-padding section-spacing">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-8">
          <div>
            <p className="font-heading text-3xl font-semibold tracking-tight">
              Leo&apos;s <span className="text-burnt-orange">Juice &amp; Burger</span>
            </p>
            <p className="type-body mt-4 max-w-xs text-cream/65">{t("intro")}</p>
          </div>

          <div>
            <h2 className="type-label text-cream/50">{t("restaurant")}</h2>
            <address className="type-body mt-4 space-y-1 not-italic text-cream/80">
              <p>{t("address")}</p>
              <p>{t("city")}</p>
              <p>{t("phone")}</p>
              <p>{t("email")}</p>
            </address>
          </div>

          <div>
            <h2 className="type-label text-cream/50">{t("openingHours")}</h2>
            <div className="type-body mt-4 space-y-1 text-cream/80">
              <p>{t("days")}</p>
              <p>{t("hours")}</p>
              <p className="pt-2 text-sm text-cream/50">{t("placeholderNote")}</p>
            </div>
          </div>

          <div>
            <h2 className="type-label text-cream/50">{t("overview")}</h2>
            <nav className="mt-4 flex flex-col items-start gap-2" aria-label={t("overview")}>
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-cream/80 transition-colors hover:text-cream">
                  {tNavigation(item.key)}
                </Link>
              ))}
              {socialLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-cream/80 transition-colors hover:text-cream">
                  {t(item.key)}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/15 pt-6 text-sm text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("copyright")}</p>
          <div className="flex gap-5">
            <Link href="#impressum" className="transition-colors hover:text-cream">
              {t("imprint")}
            </Link>
            <Link href="#datenschutz" className="transition-colors hover:text-cream">
              {t("privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
