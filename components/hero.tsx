"use client";

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/dusk-banner.png)",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-6xl md:text-7xl font-bold text-white mb-6 text-balance">
          {t.tagline}
        </h1>
        <p className="font-body text-xl md:text-2xl text-white/90 mb-8 text-balance">
          {t.description}
        </p>
        <button className="px-8 py-3 bg-accent text-accent-foreground font-body text-lg rounded hover:opacity-90 transition">
          {t.menu}
        </button>
      </div>
    </section>
  );
}
