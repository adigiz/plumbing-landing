import Image from "next/image";
import { Phone } from "lucide-react";
import MobileMenu from "./MobileMenu";

const navLinks = [
  "Home",
  "Emergency Plumber",
  "Services",
  "About",
  "Contact",
  "Reviews",
];

export default function Header({
  settings,
}: {
  settings: {
    logo?: { url: string };
    primaryPhone: string;
    secondaryPhone: string;
    headerCTAText: string;
    themeColorPrimary: string;
    themeTextColorOnPrimary: string;
  };
}) {
  const {
    logo,
    primaryPhone,
    secondaryPhone,
    headerCTAText,
    themeColorPrimary,
    themeTextColorOnPrimary,
  } = settings;

  const logoUrl = logo?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${logo.url}`
    : "/logo.svg";

  return (
    <>
      <style>{`
        :root {
          --primary-color: ${themeColorPrimary || "#0070f3"};
          --text-on-primary: ${themeTextColorOnPrimary || "#ffffff"};
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center py-4">
          {/* Logo */}
          <div className="relative w-36 h-12 flex items-center">
            <Image src={logoUrl} alt="Logo" fill className="object-contain" />
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone
                className="h-5 w-5"
                style={{ color: "var(--primary-color)" }}
              />
              <div>
                <div className="font-semibold text-black">{primaryPhone}</div>
                {secondaryPhone && (
                  <div
                    className="text-sm"
                    style={{ color: "var(--primary-color)" }}
                  >
                    {secondaryPhone}
                  </div>
                )}
              </div>
            </div>
            <div
              className="px-4 py-2 rounded font-bold transition"
              style={{
                backgroundColor: "var(--primary-color)",
                color: "var(--text-on-primary)",
              }}
            >
              {headerCTAText || "Get Quote"}
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            <MobileMenu
              logoUrl={logoUrl}
              navLinks={navLinks}
              primaryPhone={primaryPhone}
              secondaryPhone={secondaryPhone}
              headerCTAText={headerCTAText}
              themeColorPrimary={themeColorPrimary}
              themeTextColorOnPrimary={themeTextColorOnPrimary}
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav
          className="py-3 hidden md:block"
          style={{ backgroundColor: "var(--primary-color)" }}
        >
          <div className="container mx-auto px-4 max-w-7xl">
            <ul className="flex space-x-8">
              {navLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="relative group inline-block px-1 py-1 transition-colors duration-200"
                    style={{ color: "var(--text-on-primary)" }}
                  >
                    <span className="relative z-10 group-hover:opacity-80">
                      {label}
                    </span>
                    <span
                      className="absolute left-0 bottom-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: "var(--text-on-primary)" }}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
