"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between ${language === "ar" ? "flex-row-reverse" : ""}`}
      >
        <Link
          href="/"
          className="font-serif text-3xl font-bold text-primary hover:text-accent transition"
        >
          Dusk
        </Link>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex items-center gap-8 ${language === "ar" ? "flex-row-reverse" : ""}`}
        >
          <Link
            href="/"
            className="font-body text-foreground hover:text-accent transition"
          >
            {t.menu}
          </Link>
          <Link
            href="/about"
            className="font-body text-foreground hover:text-accent transition"
          >
            {t.about}
          </Link>
          <Link
            href="/contact"
            className="font-body text-foreground hover:text-accent transition"
          >
            {t.contact}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden border-t border-border bg-card ${language === "ar" ? "text-right" : ""}`}
        >
          <div className="px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block font-body text-foreground hover:text-accent"
            >
              {t.menu}
            </Link>
            <Link
              href="/about"
              className="block font-body text-foreground hover:text-accent"
            >
              {t.about}
            </Link>
            <Link
              href="/contact"
              className="block font-body text-foreground hover:text-accent"
            >
              {t.contact}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
