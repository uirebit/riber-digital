import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import { CookieBannerWrapper } from "@/components/cookie-banner-wrapper"
import { generateOrganizationSchema } from "@/lib/structured-data"
import "./globals.css"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.riberdigital.es'),
  title: {
    default: "Riberdigital | Consultoría Digital para PYMEs en España",
    template: "%s | Riberdigital",
  },
  description: "Automatización con IA, digitalización y desarrollo a medida para PYMEs. Implementamos inteligencia artificial aplicada a casos reales. Primera consulta gratuita.",
  keywords: [
    "automatización con IA para pymes",
    "consultoría digital España",
    "automatización de procesos para pymes",
    "digitalización de empresas España",
    "agentes IA para empresas",
    "consultor digital pymes",
    "transformación digital empresas",
    "automatización empresarial España",
    "inteligencia artificial para pymes",
    "integración ERP CRM automatización",
  ],
  generator: "v0.app",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Riberdigital | Consultoría Digital para PYMEs en España",
    description:
      "Automatización con IA, digitalización y desarrollo a medida para PYMEs. Implementamos inteligencia artificial aplicada a casos reales.",
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
        <CookieBannerWrapper />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
