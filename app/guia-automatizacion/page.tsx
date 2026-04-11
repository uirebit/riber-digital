"use client"

import { useState, FormEvent } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, Zap } from "lucide-react"

const TAMANOS = [
  "1–5 empleados",
  "6–20 empleados",
  "21–50 empleados",
  "51–200 empleados",
  "Más de 200",
]

const PROCESOS = [
  "Facturación y cobros automáticos",
  "Informes y reportes programados",
  "Sincronización entre ERP y CRM",
  "Notificaciones automáticas a clientes",
  "Clasificación de emails y documentos",
  "Seguimiento de pedidos y logística",
  "Gestión de citas y reservas",
  "Actualización de inventario en tiempo real",
  "Aprobaciones y flujos de validación interna",
  "Generación de propuestas comerciales",
]

export default function GuiaAutomatizacionPage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          nombre: formData.get("nombre"),
          empresa: formData.get("empresa"),
          tamano: formData.get("tamano"),
        }),
      })

      if (!response.ok) {
        const result = await response.json().catch(() => ({}))
        setError(result.error || "Error al enviar. Inténtalo de nuevo.")
        return
      }

      setSubmitted(true)

      if (typeof window !== "undefined" && typeof (window as Window & { gtag?: (...args: unknown[]) => void }).gtag === "function") {
        ;(window as Window & { gtag: (...args: unknown[]) => void }).gtag("event", "lead_magnet_download", {
          event_category: "lead",
        })
      }
    } catch {
      setError("Error de conexión. Por favor, intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-xl font-bold text-foreground">
            Riber<span className="text-accent">digital</span>
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — content */}
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20 mb-6">
              <Zap className="w-3.5 h-3.5" />
              Guía gratuita
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              10 procesos que cualquier PYME puede automatizar esta semana
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Una guía práctica con los procesos más comunes que se pueden automatizar sin necesidad de un departamento técnico — y las herramientas concretas para hacerlo.
            </p>

            <div className="space-y-3 mb-8">
              {PROCESOS.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{p}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              Sin spam. Recibirás la guía en tu email y ocasionalmente artículos de blog cuando publiquemos algo útil.
            </p>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <Card className="border-accent/40 bg-accent/5">
                <CardContent className="pt-8 pb-8 text-center">
                  <CheckCircle2 className="w-14 h-14 text-accent mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">¡Listo!</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Te hemos enviado la guía a tu email. Revisa también la carpeta de spam por si acaso.
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    ¿Quieres que analicemos qué procesos tiene sentido automatizar en tu empresa específica?
                  </p>
                  <Link href="/contacto">
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Solicitar diagnóstico gratuito <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-border bg-card shadow-sm">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold text-foreground mb-1">Recibe la guía gratis</h2>
                  <p className="text-sm text-muted-foreground mb-6">Rellena el formulario y te la enviamos ahora</p>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-1.5">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Tu nombre"
                        disabled={loading}
                      />
                    </div>

                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-1.5">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Nombre de tu empresa"
                        disabled={loading}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="tu@empresa.com"
                        disabled={loading}
                      />
                    </div>

                    <div>
                      <label htmlFor="tamano" className="block text-sm font-medium text-foreground mb-1.5">
                        Tamaño de empresa
                      </label>
                      <select
                        id="tamano"
                        name="tamano"
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        disabled={loading}
                        defaultValue=""
                      >
                        <option value="" disabled>Selecciona</option>
                        {TAMANOS.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    {error && (
                      <div className="p-3 rounded-md bg-red-50 text-red-800 border border-red-200 text-sm">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground disabled:opacity-50"
                    >
                      {loading ? "Enviando..." : "Enviarme la guía gratis"}
                      {!loading && <ArrowRight className="ml-2" size={16} />}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Sin spam. Baja cuando quieras.{" "}
                      <Link href="/privacidad" className="text-accent hover:underline">
                        Política de privacidad
                      </Link>
                    </p>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
