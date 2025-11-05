"use client";

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import MenuItem from "./menu-item";

const menuData = {
  en: [
    {
      name: "Beverages",
      items: [
        {
          name: "Ice  Mocha",
          // description: "Silky smooth foie gras with brioche and fig compote",
          price: "700",
          image: "/foie-gras-terrine-luxury-appetizer.jpg",
        },
        {
          name: "Ice Lotus",
          // description: "Silky smooth foie gras with brioche and fig compote",
          price: "700",
          image: "/foie-gras-terrine-luxury-appetizer.jpg",
        },
        {
          name: "Mojitos",
          // description: "Fresh oysters topped with herb butter and breadcrumbs",
          price: "400",
          image: "/oysters-rockefeller-fine-dining.jpg",
        },
        {
          name: "Frapuccino",
          // description: "Creamy burrata cheese with seasonal heirloom tomatoes",
          price: "450",
          image: "/burrata-heirloom-tomatoes-salad.jpg",
        },
        {
          name: "Banana milk with vanilla ",
          // description: "Rich and velvety lobster bisque with cognac",
          price: "400",
          image: "/lobster-bisque-soup-luxury.jpg",
        },
        {
          name: "Lemon with Mint",
          // description: "Rich and velvety lobster bisque with cognac",
          price: "300",
          image: "/lobster-bisque-soup-luxury.jpg",
        },
        {
          name: "Spanish Latte Mango",
          // description: "Rich and velvety lobster bisque with cognac",
          price: "700",
          image: "/spanish-latte.jpg",
        },
        {
          name: "Snickers milkshake",
          // description: "Rich and velvety lobster bisque with cognac",
          price: "700",
          image: "/lobster-bisque-soup-luxury.jpg",
        },
        {
          name: "Spanish latte with  strawberry",
          // description: "Rich and velvety lobster bisque with cognac",
          price: "700",
          image: "/spanish-latte-strawberry.jpg",
        },
      ],
    },
    {
      name: "Main Courses",
      items: [
        {
          name: "Beef Burger ",
          // description:
          //   "Prime beef tenderloin wrapped in mushroom duxelles and puff pastry",
          price: "600",
          image: "/beef-burger.jpg",
        },
        {
          name: "Beef steak sandwich",
          // description: "Delicate Dover sole with brown butter and lemon",
          price: "800",
          image: "/dover-sole-meuniere-fish.jpg",
        },
        {
          name: "Lasagna",
          // description: "Delicate Dover sole with brown butter and lemon",
          price: "800",
          image: "/dover-sole-meuniere-fish.jpg",
        },
        {
          name: "Chicken Soup",
          // description: "Delicate Dover sole with brown butter and lemon",
          price: "400",
          image: "/dover-sole-meuniere-fish.jpg",
        },
        {
          name: "Chicken with french fries",
          // description: "Delicate Dover sole with brown butter and lemon",
          price: "700",
          image: "/dover-sole-meuniere-fish.jpg",
        },
        {
          name: "Chicken curry",
          // description: "Delicate Dover sole with brown butter and lemon",
          price: "1000",
          image: "/chicken-curry.jpg",
        },
        {
          name: "Beef Stake",
          // description: "Delicate Dover sole with brown butter and lemon",
          price: "1,000",
          image: "/dover-sole-meuniere-fish.jpg",
        },
        {
          name: "Special pizza",
          // description: "Delicate Dover sole with brown butter and lemon",
          price: "1,000",
          image: "/special-pizza.jpg",
        },
        {
          name: "Fish gulash",
          // description: "Delicate Dover sole with brown butter and lemon",
          price: "700",
          image: "/fish-gulash.jpg",
        },
        {
          name: "Chicken wrap",
          // description: "Delicate Dover sole with brown butter and lemon",
          price: "750",
          image: "/chicken-wrap.jpg",
        },
        {
          name: "Spaghetti ",
          // description: "Delicate Dover sole with brown butter and lemon",
          price: "550",
          image: "/spaghetti.jpg",
        },
        {
          name: "Mixed salad",
          // description: "Slow-cooked duck leg with cherry gastrique",
          price: "400",
          image: "/duck-confit-cherry-gastrique.jpg",
        },
        {
          name: "Shish tawok plate",
          // description: "Tender lamb rack with rosemary and thyme crust",
          price: "1,000",
          image: "/herb-crusted-lamb-rack.jpg",
        },
        {
          name: "Lugaimat dusk",
          // description: "Tender lamb rack with rosemary and thyme crust",
          price: "1,500",
          image: "/herb-crusted-lamb-rack.jpg",
        },
        {
          name: "Shawarma sandwich",
          // description: "Tender lamb rack with rosemary and thyme crust",
          price: "700",
          image: "/herb-crusted-lamb-rack.jpg",
        },
        {
          name: "Rice with tomato ",
          // description: "Tender lamb rack with rosemary and thyme crust",
          price: "500",
          image: "/herb-crusted-lamb-rack.jpg",
        },
        {
          name: "Omelte eggs ",
          // description: "Tender lamb rack with rosemary and thyme crust",
          price: "400",
          image: "/omlete.jpg",
        },
      ],
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Dubai cake small",
          // description: "Warm chocolate soufflé with vanilla bean ice cream",
          price: "600",
          image: "/dubai-cake.jpg",
        },
        {
          name: "Fettuccine crepe",
          // description: "Silky panna cotta with fresh berry coulis",
          price: "400",
          image: "/panna-cotta-berries-dessert.jpg",
        },
      ],
    },
  ],
  ar: [
    {
      name: "المقبلات",
      items: [
        {
          name: "تيرين فوا جرا",
          description: "فوا جرا ناعم وحريري مع الخبز والمربى التين",
          price: "$28",
          image: "/foie-gras-terrine-luxury-appetizer.jpg",
        },
        {
          name: "المحار روكفيلر",
          description: "محار طازج مع زبدة الأعشاب والفتات",
          price: "$24",
          image: "/oysters-rockefeller-fine-dining.jpg",
        },
        {
          name: "بوراتا والطماطم الموروثة",
          description: "جبن بوراتا كريمي مع الطماطم الموسمية",
          price: "$18",
          image: "/burrata-heirloom-tomatoes-salad.jpg",
        },
        {
          name: "حساء الكركند",
          description: "حساء كركند غني وناعم مع الكونياك",
          price: "$16",
          image: "/lobster-bisque-soup-luxury.jpg",
        },
      ],
    },
    {
      name: "الأطباق الرئيسية",
      items: [
        {
          name: "لحم البقر ويلينجتون",
          description: "لحم بقري طري ملفوف بالفطر والعجينة",
          price: "$52",
          image: "/beef-wellington-fine-dining.jpg",
        },
        {
          name: "سمك موسى دوفر",
          description: "سمك موسى رقيق مع الزبدة البنية والليمون",
          price: "$48",
          image: "/dover-sole-meuniere-fish.jpg",
        },
        {
          name: "بط مطهو ببطء",
          description: "ساق بط مطهوة ببطء مع صلصة الكرز",
          price: "$44",
          image: "/duck-confit-cherry-gastrique.jpg",
        },
        {
          name: "لحم الضأن بقشرة الأعشاب",
          description: "لحم ضأن طري مع قشرة إكليل الجبل والزعتر",
          price: "$46",
          image: "/herb-crusted-lamb-rack.jpg",
        },
      ],
    },
    {
      name: "الحلويات",
      items: [
        {
          name: "سوفليه الشوكولاتة الداكنة",
          description: "سوفليه شوكولاتة دافئ مع آيس كريم الفانيليا",
          price: "$14",
          image: "/chocolate-souffle.png",
        },
        {
          name: "بانا كوتا",
          description: "بانا كوتا حريرية مع صلصة التوت الطازجة",
          price: "$13",
          image: "/panna-cotta-berries-dessert.jpg",
        },
        {
          name: "تارت الليمون",
          description: "عجينة مقرمشة مع كريمة الليمون والمرنغ",
          price: "$12",
          image: "/tarte-tatin-apple-dessert.jpg",
        },
        {
          name: "ماكارون متنوع",
          description: "ماكارون فرنسي رقيق بنكهات موسمية",
          price: "$11",
          image: "/chocolate-souffle.png",
        },
      ],
    },
  ],
};

export default function MenuSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const categories = menuData[language];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">
            {t.menu}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "ar"
              ? "اكتشف مجموعتنا المختارة بعناية من الأطباق، كل منها مُحضّر بأفضل المكونات والخبرة الطهوية"
              : "Discover our carefully curated selection of dishes, each prepared with the finest ingredients and culinary expertise"}
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.name}>
              <h3 className="font-serif text-3xl font-bold text-primary mb-8 pb-4 border-b-2 border-accent">
                {category.name}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {category.items.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
