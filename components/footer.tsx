"use client";

<<<<<<< HEAD
<<<<<<< HEAD
import { Mail, Phone, MapPin, Instagram, Globe } from "lucide-react";
=======
import { Mail, Phone, MapPin, Instagram, Tiktok } from "lucide-react";
>>>>>>> refs/rewritten/main
=======
import { Mail, Phone, MapPin, Instagram, Globe } from "lucide-react";
>>>>>>> b2b617320225890094ae8cde3224cec4d3fc112f
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer
      className={`bg-primary text-primary-foreground py-16 ${
        language === "ar" ? "text-right" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid md:grid-cols-3 gap-12 mb-12 ${
            language === "ar" ? "flex-row-reverse" : ""
          }`}
        >
          {/* About */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">dusk</h3>
            <p className="font-body text-primary-foreground/80">
              {language === "ar"
                ? "اختبر قمة الفن الطهوي الفرنسي في أجواء من الأناقة المكررة والرقي الخالد."
                : "Experience the pinnacle culinary artistry in an atmosphere of refined elegance and timeless sophistication."}
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
                className={`flex items-center gap-2 ${
                  language === "ar" ? "flex-row-reverse" : ""
                }`}
              >
                <Phone size={18} />
                <span>+251966230000</span>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b2b617320225890094ae8cde3224cec4d3fc112f

              <div
                className={`flex items-center gap-2 ${
                  language === "ar" ? "flex-row-reverse" : ""
                }`}
<<<<<<< HEAD
=======
               <div
                className={`flex items-center gap-2 ${language === "ar" ? "flex-row-reverse" : ""}`}
>>>>>>> refs/rewritten/main
=======
>>>>>>> b2b617320225890094ae8cde3224cec4d3fc112f
              >
                <Mail size={18} />
                <span>Dusk.ethio@gmail.com</span>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
              <div className={`flex items-center gap-2 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                <Instagram size={18} />
                <a href="https://www.instagram.com/dusk.restaurant?igsh=ejNiODQzZWl2NTd6"> dusk.resturant </a>
              </div>
                <div className={`flex items-center gap-2 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                  <Tiktok size={18} />
                  <a href="https://vm.tiktok.com/ZMHwHBgfp7CJQ-kKXE1/"> tiktok </a>
                </div>
>>>>>>> refs/rewritten/main
=======

>>>>>>> b2b617320225890094ae8cde3224cec4d3fc112f
              <div
                className={`flex items-center gap-2 ${
                  language === "ar" ? "flex-row-reverse" : ""
                }`}
              >
                <Instagram size={18} />
                <a href="https://www.instagram.com/dusk.restaurant?igsh=ejNiODQzZWl2NTd6">
                  dusk.resturant
                </a>
              </div>

              <div
                className={`flex items-center gap-2 ${
                  language === "ar" ? "flex-row-reverse" : ""
                }`}
              >
                <Globe size={18} />
                <a href="https://vm.tiktok.com/ZMHwHBgfp7CJQ-kKXE1/">tiktok</a>
              </div>

              <div
                className={`flex items-start gap-2 ${
                  language === "ar" ? "flex-row-reverse" : ""
                }`}
              >
                <MapPin size={18} className="mt-1" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b2b617320225890094ae8cde3224cec4d3fc112f
                <a href="https://www.google.com/maps?q=Dusk+Restaurant,+Addis+Ababa,+Ethiopia">
                  Click Here
                </a>
              </div>
<<<<<<< HEAD
=======
                <a href="https://www.google.com/maps?q=Dusk+Restaurant,+Addis+Ababa,+Ethiopia&ftid=0x164b8500103436ed:0xc43dab49422b14d9&entry=gps&lucs=,94259551,94275317,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjI3LjEuNzc3NjcxOTc0MBgAINeCAypsLDk0MjU5NTUxLDk0Mjc1MzE3LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJBRQ%3D%3D&skid=6fc72fe0-7d01-4d6a-9a48-19343d136ef1&g_st=ipc&g_st=i>Click Here</a>
  </div>
>>>>>>> refs/rewritten/main
=======
>>>>>>> b2b617320225890094ae8cde3224cec4d3fc112f
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center font-body text-primary-foreground/70">
          <p>&copy; 2025 dusk. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
