"use client";

import type React from "react";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main
      className={`min-h-screen bg-background ${language === "ar" ? "text-right" : ""}`}
    >
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            {t.contactTitle}
          </h1>
          <p className="font-body text-lg text-foreground/80">
            {t.contactDesc}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 ${language === "ar" ? "flex-row-reverse" : ""}`}
        >
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-8">
                {t.getInTouch}
              </h2>
            </div>

            <div className="space-y-6">
              <div
                className={`border-l-4 border-accent pl-6 ${language === "ar" ? "border-l-0 border-r-4 pr-6 pl-0" : ""}`}
              >
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  {t.address}
                </h3>
               
                   <a href="https://www.google.com/maps?q=Dusk+Restaurant,+Addis+Ababa,+Ethiopia&ftid=0x164b8500103436ed:0xc43dab49422b14d9&entry=gps&lucs=,94259551,94275317,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjI3LjEuNzc3NjcxOTc0MBgAINeCAypsLDk0MjU5NTUxLDk0Mjc1MzE3LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJBRQ%3D%3D&skid=6fc72fe0-7d01-4d6a-9a48-19343d136ef1&g_st=ipc&g_st=ipc">Click Here</a>
              
              </div>

              <div
                className={`border-l-4 border-accent pl-6 ${language === "ar" ? "border-l-0 border-r-4 pr-6 pl-0" : ""}`}
              >
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  {t.phone}
                </h3>
                <p className="font-body text-foreground/80">
                  <a
                    href="tel:+251966230000"
                    className="hover:text-accent transition"
                  >
                    +251966230000
                  </a>
                </p>
              </div>

              <div
                className={`border-l-4 border-accent pl-6 ${language === "ar" ? "border-l-0 border-r-4 pr-6 pl-0" : ""}`}
              >
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  Email
                </h3>
                <p className="font-body text-foreground/80">
                  {/* <a
                    href="mailto:info@dusk.fr"
                    className="hover:text-accent transition"
                  >
                    info@dusk.fr
                  </a> */}
                </p>
              </div>

              <div
                className={`border-l-4 border-accent pl-6 ${language === "ar" ? "border-l-0 border-r-4 pr-6 pl-0" : ""}`}
              >
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  {t.hours}
                </h3>
                <p className="font-body text-foreground/80">
                  {t.open}
                 
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">
              {t.getInTouch}
            </h2>

            {submitted ? (
              <div className="bg-accent/10 border border-accent rounded-lg p-6 text-center">
                <p className="font-serif text-xl text-accent mb-2">
                  {language === "ar" ? "شكراً لك!" : "Thank you!"}
                </p>
                <p className="font-body text-foreground/80">
                  {language === "ar"
                    ? "لقد استقبلنا رسالتك وسنرد عليك قريباً."
                    : "We've received your message and will get back to you shortly."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body text-sm font-medium text-foreground mb-2"
                  >
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent ${language === "ar" ? "text-right" : ""}`}
                    placeholder={language === "ar" ? "اسمك" : "Your name"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-body text-sm font-medium text-foreground mb-2"
                  >
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent ${language === "ar" ? "text-right" : ""}`}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-body text-sm font-medium text-foreground mb-2"
                  >
                    {t.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent ${language === "ar" ? "text-right" : ""}`}
                    placeholder="+2519------"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-body text-sm font-medium text-foreground mb-2"
                  >
                    {t.subject}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent ${language === "ar" ? "text-right" : ""}`}
                  >
                    <option value="">
                      {language === "ar" ? "اختر موضوعاً" : "Select a subject"}
                    </option>
                    <option value="inquiry">{t.inquiry}</option>
                    <option value="feedback">{t.feedback}</option>
                    <option value="other">{t.other}</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-body text-sm font-medium text-foreground mb-2"
                  >
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-2 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none ${language === "ar" ? "text-right" : ""}`}
                    placeholder={
                      language === "ar" ? "رسالتك..." : "Your message..."
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-accent-foreground font-serif font-bold rounded-lg hover:opacity-90 transition"
                >
                  {t.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
