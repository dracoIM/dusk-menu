"use client";

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { StaffMember } from "@/components/staff-member";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];
  const staffMembers = [
    // {
    //   name: language === "ar" ? "ميشيل لوران" : "Michel Laurent",
    //   position: language === "ar" ? "الشيف التنفيذي" : "Executive Chef",
    //   bio:
    //     language === "ar"
    //       ? "بخبرة تزيد عن 25 سنة في المطاعم الحاصلة على نجوم ميشلان، يقود ميشيل فريقنا بشغف وإبداع."
    //       : "With over 25 years at Michelin-starred restaurants, Michel leads our kitchen with passion and creativity.",
    //   image: "/01.png",
    // },
    {
      name: language === "ar" ? "سارة دوبوا" : "Yohannes takele",
      position: language === "ar" ? "الشيفة مساعد" : "Supervisor ",
      bio:
        language === "ar"
          ? "متخصصة في الحلويات الفاخرة والتقنيات الحديثة، تضيف سارة اللمسة الأخيرة لكل طبق."
          : "One of our hard working imploye that makes you feel like it's your home.",
      image: "/02.png",
    },
    {
      name: language === "ar" ? "جان بيير مارتن" : "Adem Mohamed ",
      position: language === "ar" ? "مدير الطاولة" : "Pastry chef'",
      bio:
        language === "ar"
          ? "مع احترافية بارزة في إدارة الضيوف، يضمن جان بيير تجربة خدمة استثنائية."
          : "With distinguished expertise in pastry Adem gives us a taste of tradition with sweets.",
      image: "/03.png",
    },
  ];

  return (
    <main
      className={`min-h-screen bg-background ${language === "ar" ? "text-right" : ""}`}
    >
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            {t.aboutTitle}
          </h1>
          <p className="font-body text-lg text-foreground/80 leading-relaxed">
            {language === "ar"
              ? "تأسست لوميير برغبة في التميز الطهوي والالتزام بتقديم تجربة طعام لا تُنسى منذ عام 1995."
              : "Dusk has been a beacon of culinary excellence since it's begining, dedicated to crafting unforgettable dining experiences through the finest ingredients and masterful technique."}
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Mission */}
          <div
            className={`grid md:grid-cols-2 gap-12 items-center ${language === "ar" ? "flex-row-reverse" : ""}`}
          >
            <div>
              <h2 className="font-serif text-4xl font-bold text-primary mb-4">
                {t.ourStory}
              </h2>
              <p className="font-body text-foreground/80 leading-relaxed mb-4">
                {t.storyText}
              </p>
            </div>
            <div className="bg-accent/10 rounded-lg h-full flex items-center justify-center border border-accent/20">
              <img
                src="/dusk-interior2.jpg"
                alt="Our kitchen"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Chef's Philosophy */}
          <div
            className={`grid md:grid-cols-2 gap-12 items-center ${language === "ar" ? "flex-row-reverse" : ""}`}
          >
            <div className="bg-accent/10 rounded-lg  flex items-center justify-center border border-accent/20">
              <img
                src="/01.png"
                alt="Chef"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-primary mb-4">
                {t.ourChef}
              </h2>
              <p className="font-body text-foreground/80 leading-relaxed mb-4">
                {t.chefText}
              </p>
            </div>
          </div>

          {/* Values */}
          {/*<div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="font-serif text-4xl font-bold text-primary mb-8 text-center">
              {t.ourValues}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-serif text-2xl font-bold text-accent mb-3">
                  {language === "ar" ? "التميز" : "Excellence"}
                </h3>
                <p className="font-body text-foreground/80">
                  {language === "ar"
                    ? "نسعى للكمال في كل جوانب حرفتنا، من اختيار المكونات إلى تقديم الطبق."
                    : "We pursue perfection in every aspect of our craft, from ingredient selection to plate presentation."}
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl font-bold text-accent mb-3">
                  {language === "ar" ? "النزاهة" : "Integrity"}
                </h3>
                <p className="font-body text-foreground/80">
                  {language === "ar"
                    ? "نحن نصدر بمسؤولية ونحافظ على أعلى معايير الجودة والأصالة."
                    : "We source responsibly and maintain the highest standards of quality and authenticity."}
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl font-bold text-accent mb-3">
                  {language === "ar" ? "الابتكار" : "Innovation"}
                </h3>
                <p className="font-body text-foreground/80">
                  {language === "ar"
                    ? "نحترم التقاليد بينما نحتضن الإبداع والتقنيات الطهوية الجديدة."
                    : "We honor tradition while embracing creativity and new culinary techniques."}
                </p>
              </div>
            </div>
          </div>*/}
          <div className="space-y-8">
            <h2 className="font-serif text-4xl font-bold text-primary text-center">
              Our Staff
            </h2>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              {staffMembers.map((member, index) => (
                <StaffMember key={index} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
