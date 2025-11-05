"use client"

import type React from "react"
import { useLanguage } from "@/lib/language-context"

function LanguageDirectionWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()

  return <div dir={language === "ar" ? "rtl" : "ltr"}>{children}</div>
}

export default function RootClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <LanguageDirectionWrapper>{children}</LanguageDirectionWrapper>
}
