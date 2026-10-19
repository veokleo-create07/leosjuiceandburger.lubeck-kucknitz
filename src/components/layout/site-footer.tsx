import { useTranslations } from "next-intl";

import { businessInfo } from "@/config/business";
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
    <footer className="site-footer bg-charcoal text-cream">
      <div className="content-width page-padding section-spacing">
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <p className="site-footer-logo">
              Leo&apos;s <span className="text-burnt-orange">Juice &amp; Burger</span>
            </p>
            <p className="type-body mt-4 max-w-xs text-cream/65">{t("intro")}</p>
          </div>

          <div className="site-footer-column">
            <h2 className="site-footer-heading">{t("restaurant")}</h2>
            <address className="site-footer-list type-body not-italic">
              <p>{businessInfo.address ?? t("address")}</p>
              <p>{businessInfo.city}</p>
            </address>
          </div>

          <div className="site-footer-column">
            <h2 className="site-footer-heading">{t("openingHours")}</h2>
            <div className="site-footer-list type-body">
              <p>{t("days")}</p>
              <p>{businessInfo.openingHours ?? t("hours")}</p>
              <p className="site-footer-note">{t("placeholderNote")}</p>
            </div>
          </div>

          <div className="site-footer-column">
            <h2 className="site-footer-heading">{t("navigation")}</h2>
            <nav className="site-footer-list" aria-label={t("navigation")}>
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="site-footer-link">
                  {tNavigation(item.key)}
                </Link>
              ))}
            </nav>
          </div>

          <div className="site-footer-column">
            <h2 className="site-footer-heading">{t("contact")}</h2>
            <address className="site-footer-list type-body not-italic">
              <p>{businessInfo.phone ?? t("phone")}</p>
              <p>{businessInfo.email ?? t("email")}</p>
            </address>
            <p className="site-footer-subheading">{t("social")}</p>
            <div className="site-footer-social">
              {socialLinks.map((item) => (
                <Link key={item.href} href={item.href} className="site-footer-link">
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p>{t("copyright")}</p>
          <div className="flex flex-wrap gap-5">
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
