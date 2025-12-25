import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { CookieBanner } from "@/components/cookie-banner"
import { generateOrganizationSchema } from "@/lib/structured-data"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.riberdigital.es'),
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Riberdigital | Consultoría Digital para PYMEs en España",
    description:
      "Automatización, digitalización y soluciones de IA para empresas españolas. Mejora tu eficiencia operativa con Riberdigital.",
    type: "website",
    locale: "es_ES",
    url: 'https://www.riberdigital.es',
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = generateOrganizationSchema()
  
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
