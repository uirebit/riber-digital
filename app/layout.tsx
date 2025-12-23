import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Riberdigital | Consultoría Digital y Automatización para PYMEs en España",
  description:
    "Consultoría digital especializada en automatización de procesos, digitalización empresarial e inteligencia artificial para pequeñas y medianas empresas en España. Mejora la eficiencia de tu negocio con Riberdigital.",
  keywords: [
    "consultoría digital España",
    "automatización de procesos para pymes",
    "digitalización de empresas España",
    "soluciones digitales para pymes",
    "consultor digital pymes",
    "transformación digital empresas",
    "automatización empresarial España",
    "consultoría tecnológica pymes",
    "optimización de procesos digitales",
    "inteligencia artificial para empresas",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Riberdigital | Consultoría Digital para PYMEs en España",
    description:
      "Automatización, digitalización y soluciones de IA para empresas españolas. Mejora tu eficiencia operativa con Riberdigital.",
    type: "website",
    locale: "es_ES",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
