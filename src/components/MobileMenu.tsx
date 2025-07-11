"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function MobileMenu({
  logoUrl,
  navLinks,
  primaryPhone,
  secondaryPhone,
  headerCTAText,
  themeColorPrimary,
  themeTextColorOnPrimary,
}: {
  logoUrl: string;
  navLinks: string[];
  primaryPhone: string;
  secondaryPhone: string;
  headerCTAText: string;
  themeColorPrimary: string;
  themeTextColorOnPrimary: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <button onClick={() => setMobileOpen(true)} aria-label="Open menu">
        <Menu className="h-6 w-6" style={{ color: themeColorPrimary }} />
      </button>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-72 bg-white shadow-lg p-6 z-50 transition-transform duration-300">
            <div className="flex justify-between items-center mb-6">
              <Image
                src={logoUrl}
                alt="Logo"
                width={120}
                height={40}
                className="object-contain"
              />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-gray-800" />
              </button>
            </div>

            <ul className="flex flex-col space-y-4">
              {navLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    onClick={() => setMobileOpen(false)}
                    className="block font-medium transition-colors"
                    style={{
                      color: "#1f2937", // fallback gray-800
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = themeColorPrimary)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#1f2937")
                    }
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6 border-t">
              <div className="text-sm text-gray-600 mb-1">Call Us</div>
              <div className="font-semibold text-lg text-black">
                {primaryPhone}
              </div>
              <div className="text-sm" style={{ color: themeColorPrimary }}>
                {secondaryPhone}
              </div>
              <button
                className="w-full mt-4 py-2 rounded-lg font-bold transition"
                style={{
                  backgroundColor: themeColorPrimary,
                  color: themeTextColorOnPrimary,
                }}
              >
                {headerCTAText}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
