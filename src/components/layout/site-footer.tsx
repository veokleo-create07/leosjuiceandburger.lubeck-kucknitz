import Link from "next/link";

const navigation = [
  { label: "Startseite", href: "/" },
  { label: "Speisekarte", href: "/#speisekarte" },
  { label: "Galerie", href: "/#galerie" },
  { label: "Kontakt", href: "/#kontakt" },
];

const socialLinks = [
  { label: "Instagram (Platzhalter)", href: "#instagram" },
  { label: "Facebook (Platzhalter)", href: "#facebook" },
];

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="content-width page-padding section-spacing">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-8">
          <div>
            <p className="font-heading text-3xl font-semibold tracking-tight">
              Leo&apos;s <span className="text-burnt-orange">Juice &amp; Burger</span>
            </p>
            <p className="type-body mt-4 max-w-xs text-cream/65">
              Gute Zutaten, ehrlicher Geschmack und ein Platz für alle. Weitere Restaurantdetails folgen.
            </p>
          </div>

          <div>
            <h2 className="type-label text-cream/50">Restaurant</h2>
            <address className="type-body mt-4 space-y-1 not-italic text-cream/80">
              <p>Adresse folgt</p>
              <p>Lübeck-Kücknitz</p>
              <p>Telefon folgt</p>
              <p>E-Mail folgt</p>
            </address>
          </div>

          <div>
            <h2 className="type-label text-cream/50">Öffnungszeiten</h2>
            <div className="type-body mt-4 space-y-1 text-cream/80">
              <p>Montag – Sonntag</p>
              <p>Öffnungszeiten folgen</p>
              <p className="pt-2 text-sm text-cream/50">Platzhalter bis bestätigt</p>
            </div>
          </div>

          <div>
            <h2 className="type-label text-cream/50">Auf einen Blick</h2>
            <nav className="mt-4 flex flex-col items-start gap-2" aria-label="Footer-Navigation">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-cream/80 transition-colors hover:text-cream">
                  {item.label}
                </Link>
              ))}
              {socialLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-cream/80 transition-colors hover:text-cream">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/15 pt-6 text-sm text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Leo&apos;s Juice &amp; Burger</p>
          <div className="flex gap-5">
            <Link href="#impressum" className="transition-colors hover:text-cream">
              Impressum
            </Link>
            <Link href="#datenschutz" className="transition-colors hover:text-cream">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
