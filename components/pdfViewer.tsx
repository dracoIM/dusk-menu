"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PdfMenuViewer() {
  const { language } = useLanguage();
  const [pdfUrl] = useState("/duskMenu.pdf#toolbar=0&navpanes=0");

  const title = language === "ar" ? "عرض القائمة الكاملة" : "View Full Menu";
  const description =
    language === "ar"
      ? "انقر لعرض قائمة المطعم الكاملة بصيغة PDF"
      : "Click to view the complete restaurant menu in PDF format";

  return (
    <div className="mt-8">
      <Accordion type="single" collapsible className="w-full h-full">
        <AccordionItem
          value="pdf-menu"
          className="border rounded-lg px-2 border-accent/20 bg-card/50"
        >
          <AccordionTrigger className="font-serif text-xl sm:text-2xl font-semibold text-primary/80 hover:text-primary hover:no-underline py-4 sm:py-6">
            {title}
          </AccordionTrigger>
          <AccordionContent className="pt-4 pb-6">
            <p className="text-muted-foreground mb-4 font-body text-sm sm:text-base">
              {description}
            </p>
            <div className="w-full h-64 sm:h-96 lg:h-screen rounded-lg overflow-hidden border border-accent/20">
              <iframe
                src={pdfUrl}
                className="w-full h-full"
                title="Restaurant Menu PDF"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
