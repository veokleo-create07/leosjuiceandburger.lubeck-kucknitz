"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Startseite", href: "/" },
  { label: "Speisekarte", href: "/#speisekarte" },
  { label: "Galerie", href: "/#galerie" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3 text-charcoal"
            aria-label="Leo's Juice & Burger, Startseite"
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-burnt-orange font-heading text-xl font-semibold text-cream transition-transform duration-200 group-hover:-rotate-6">
              L
            </span>
            <span className="font-heading text-lg font-semibold leading-none tracking-tight">
              Leo&apos;s <span className="text-burnt-orange">Juice &amp; Burger</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-2 text-sm font-medium text-charcoal/75 transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-burnt-orange after:transition-transform after:duration-200 hover:text-charcoal hover:after:origin-left hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/#reservierung" className="button-base button-primary">
              Tisch reservieren
            </Link>
          </div>

          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:border-charcoal md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
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
          <nav className="flex flex-col border-t border-charcoal/10 pt-4" aria-label="Mobile Hauptnavigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-charcoal/10 py-4 font-heading text-2xl tracking-tight text-charcoal transition-colors hover:text-burnt-orange"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#reservierung"
              className="button-base button-primary mt-5 w-full"
              onClick={() => setMenuOpen(false)}
            >
              Tisch reservieren
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
