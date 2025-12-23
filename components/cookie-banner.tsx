"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Verificar si el usuario ya aceptó o rechazó las cookies
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-card-foreground leading-relaxed">
              Este sitio web utiliza cookies para mejorar tu experiencia de navegación. 
              Las cookies técnicas son necesarias para el funcionamiento del sitio. 
              Puedes aceptar todas las cookies o configurar tus preferencias.{" "}
              <Link href="/privacidad#cookies" className="text-accent hover:underline font-medium">
                Más información
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={rejectCookies}
              className="flex-1 sm:flex-none"
            >
              Solo necesarias
            </Button>
            <Button
              size="sm"
              onClick={acceptCookies}
              className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1 sm:flex-none"
            >
              Aceptar todas
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
