"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { Link as LocalizedLink, usePathname } from "@/i18n/navigation";

const navigation = [
  { key: "start", href: "/" },
  { key: "menu", href: "/#speisekarte" },
  { key: "gallery", href: "/#galerie" },
  { key: "contact", href: "/#kontakt" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("navigation");
  const otherLocale = locale === "de" ? "en" : "de";

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-cream/95 backdrop-blur-md">
      <div className="content-width page-padding">
        <div className="flex h-20 items-center justify-between gap-6">
          <LocalizedLink
            href="/"
            className="group flex shrink-0 items-center gap-3 text-charcoal"
            aria-label={t("logoAria")}
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-burnt-orange font-heading text-xl font-semibold text-cream transition-transform duration-200 group-hover:-rotate-6">
              L
            </span>
            <span className="font-heading text-lg font-semibold leading-none tracking-tight">
              Leo&apos;s <span className="text-burnt-orange">Juice &amp; Burger</span>
            </span>
          </LocalizedLink>

          <nav className="hidden items-center gap-6 md:flex lg:gap-8" aria-label={t("mainNavigation")}>
            {navigation.map((item) => (
              <LocalizedLink
                key={item.href}
                href={item.href}
                className="relative py-2 text-sm font-medium text-charcoal/75 transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-burnt-orange after:transition-transform after:duration-200 hover:text-charcoal hover:after:origin-left hover:after:scale-x-100"
              >
                {t(item.key)}
              </LocalizedLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <LocalizedLink href="/#reservierung" className="button-base button-editorial button-primary">
              {t("reserve")}
            </LocalizedLink>
            <LocalizedLink
              href={pathname}
              locale={otherLocale}
              className="rounded-sm border border-charcoal/15 px-3 py-2 text-xs font-semibold text-charcoal transition-colors hover:border-charcoal"
              aria-label={t("switchTo", { language: otherLocale === "de" ? t("german") : t("english") })}
            >
              {otherLocale === "de" ? "de" : "en"}
            </LocalizedLink>
          </div>

          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:border-charcoal md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-2 h-px w-5 bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-4 h-px w-5 bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${menuOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav className="flex flex-col border-t border-charcoal/10 pt-4" aria-label={t("mobileNavigation")}>
            {navigation.map((item) => (
              <LocalizedLink
                key={item.href}
                href={item.href}
                className="border-b border-charcoal/10 py-4 font-heading text-2xl tracking-tight text-charcoal transition-colors hover:text-burnt-orange"
                onClick={() => setMenuOpen(false)}
              >
                {t(item.key)}
              </LocalizedLink>
            ))}
            <LocalizedLink
              href="/#reservierung"
              className="button-base button-primary mt-5 w-full"
              onClick={() => setMenuOpen(false)}
            >
              {t("reserve")}
            </LocalizedLink>
            <div className="mt-5 flex items-center justify-between border border-charcoal/15 px-4 py-3">
              <span className="text-sm font-medium text-charcoal/65">{t("languageLabel")}</span>
              <div className="flex gap-2">
                <LocalizedLink
                  href={pathname}
                  locale="de"
                  className={`rounded-sm px-3 py-1.5 text-xs font-semibold transition-colors ${locale === "de" ? "bg-charcoal text-cream" : "text-charcoal/65 hover:text-charcoal"}`}
                  onClick={() => setMenuOpen(false)}
                >
                  de
                </LocalizedLink>
                <LocalizedLink
                  href={pathname}
                  locale="en"
                  className={`rounded-sm px-3 py-1.5 text-xs font-semibold transition-colors ${locale === "en" ? "bg-charcoal text-cream" : "text-charcoal/65 hover:text-charcoal"}`}
                  onClick={() => setMenuOpen(false)}
                >
                  en
                </LocalizedLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
