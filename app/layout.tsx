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
  metadataBase: new URL('https://www.ribersistemas.es'),
  title: {
    default: "ribersistemas | Consultor técnico independiente para PYMEs",
    template: "%s | ribersistemas",
  },
  description: "Resuelvo problemas de operaciones, ventas y marketing construyendo software e IA a medida. Sin agencias, sin subcontratas, sin PowerPoints. Primera llamada gratuita.",
  keywords: [
    "consultor técnico independiente pymes",
    "automatización con IA para pymes",
    "software a medida para pymes España",
    "digitalización de empresas España",
    "agentes IA para empresas",
    "consultor digital pymes",
    "desarrollo software pymes",
    "automatización empresarial España",
    "inteligencia artificial para pymes",
    "ribersistemas consultor",
  ],
  generator: "v0.app",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ribersistemas | Consultor técnico independiente para PYMEs",
    description:
      "Resuelvo problemas de operaciones, ventas y marketing construyendo software e IA a medida. Sin agencias, sin subcontratas, sin PowerPoints.",
    type: "website",
    locale: "es_ES",
    url: 'https://www.ribersistemas.es',
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
