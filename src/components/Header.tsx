"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  "Home",
  "Emergency Plumber",
  "Services",
  "About",
  "Contact",
  "Reviews",
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center py-4">
          {/* Logo */}
          <div className="w-36 h-12 flex items-center">
            <Image
              src="/logo.svg"
              alt="O'Shea Plumbing Logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Desktop Contact */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-semibold text-black">03 9888 2887</div>
                <div className="text-sm text-blue-600">0412 839 127</div>
              </div>
            </div>
            <div className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-bold text-white transition">
              Get Quote
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-blue-600" />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="bg-blue-600 text-white py-3 hidden md:block">
          <div className="container mx-auto px-4 max-w-7xl">
            <ul className="flex space-x-8">
              {navLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="relative group inline-block px-1 py-1 transition-colors duration-200"
                  >
                    <span className="relative z-10 group-hover:text-blue-200 transition-colors duration-200">
                      {label}
                    </span>
                    <span
                      className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Backdrop for Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg p-6 z-50 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <Image
            src="/logo.svg"
            alt="O'Shea Plumbing Logo"
            width={120}
            height={40}
            className="object-contain"
          />
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        <ul className="flex flex-col space-y-4">
          {navLinks.map((label) => (
            <li key={label}>
              <a
                href="#"
                onClick={() => setMobileOpen(false)}
                className="block text-gray-800 hover:text-blue-600 font-medium transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6 border-t">
          <div className="text-sm text-gray-600 mb-1">Call Us</div>
          <div className="font-semibold text-lg text-black">
            03 9888 2887
          </div>
          <div className="text-sm text-blue-600">0412 839 127</div>

          <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold transition">
            Get a Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
