"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer
      className={`bg-primary text-primary-foreground py-16 ${language === "ar" ? "text-right" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid md:grid-cols-3 gap-12 mb-12 ${language === "ar" ? "flex-row-reverse" : ""}`}
        >
          {/* About */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">dusk</h3>
            <p className="font-body text-primary-foreground/80">
              {language === "ar"
                ? "اختبر قمة الفن الطهوي الفرنسي في أجواء من الأناقة المكررة والرقي الخالد."
                : "Experience the pinnacle of French culinary artistry in an atmosphere of refined elegance and timeless sophistication."}
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">{t.hours}</h4>
            <div className="font-body text-primary-foreground/80 space-y-2">
              <p>{t.open}</p>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">
              {language === "ar" ? "اتصل بنا" : "Contact"}
            </h4>
            <div className="font-body text-primary-foreground/80 space-y-3">
              <div
                className={`flex items-center gap-2 ${language === "ar" ? "flex-row-reverse" : ""}`}
              >
                <Phone size={18} />
                <span>+251966230000</span>
              </div>
              {/* <div
                className={`flex items-center gap-2 ${language === "ar" ? "flex-row-reverse" : ""}`}
              >
                <Mail size={18} />
                <span>reservations@dusk.com</span>
              </div> */}
              <div
                className={`flex items-start gap-2 ${language === "ar" ? "flex-row-reverse" : ""}`}
              >
                <MapPin size={18} className="mt-1" />
 <a href="https://www.google.com/maps?q=Dusk+Restaurant,+Addis+Ababa,+Ethiopia&ftid=0x164b8500103436ed:0xc43dab49422b14d9&entry=gps&lucs=,94259551,94275317,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjI3LjEuNzc3NjcxOTc0MBgAINeCAypsLDk0MjU5NTUxLDk0Mjc1MzE3LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJBRQ%3D%3D&skid=6fc72fe0-7d01-4d6a-9a48-19343d136ef1&g_st=ipc&g_st=ipc">Click Here</a>
  </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center font-body text-primary-foreground/70">
          <p>&copy; 2025 dusk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
