"use client"

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"

interface ContactFormProps {
  onSuccess?: () => void
  /** Pre-select a service (passed via ?servicio= query param from service cards) */
  preselectedService?: string
}

const SECTORES = [
  "Logística y transporte",
  "Hostelería y restauración",
  "Salud y bienestar",
  "Comercio y retail",
  "Servicios profesionales",
  "Industria y manufactura",
  "Otro",
]

const RETOS = [
  "Demasiado trabajo manual y repetitivo",
  "Datos dispersos en varios sistemas",
  "Quiero aplicar IA pero no sé cómo",
  "Necesito una web o app a medida",
  "Quiero integrar mis herramientas",
  "Otro",
]

export function ContactForm({ onSuccess, preselectedService }: ContactFormProps) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      nombre: formData.get("nombre") as string,
      empresa: formData.get("empresa") as string,
      email: formData.get("email") as string,
      sector: formData.get("sector") as string,
      reto: formData.get("reto") as string,
      mensaje: formData.get("mensaje") as string,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const result = await response.json().catch(() => ({ error: "Error en el servidor" }))
        setMessage({ type: "error", text: result.error || "Error al enviar el mensaje" })
        setLoading(false)
        return
      }

      setMessage({ type: "success", text: "¡Mensaje enviado correctamente! Te responderemos en menos de 24 horas." })
      form.reset()
      onSuccess?.()

      // GA4 conversion event
      if (typeof window !== "undefined" && typeof (window as Window & { gtag?: (...args: unknown[]) => void }).gtag === "function") {
        ;(window as Window & { gtag: (...args: unknown[]) => void }).gtag("event", "contact_form_submit", {
          event_category: "lead",
          sector: data.sector || "no indicado",
          reto: data.reto || "no indicado",
        })
      }
    } catch (error) {
      console.error("Error en el formulario:", error)
      setMessage({ type: "error", text: "Error de conexión. Por favor, intenta de nuevo." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
            Nombre *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Tu nombre completo"
            disabled={loading}
          />
        </div>

        <div>
          <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-2">
            Empresa *
          </label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            required
            className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Nombre de tu empresa"
            disabled={loading}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="sector" className="block text-sm font-medium text-foreground mb-2">
            Sector
          </label>
          <select
            id="sector"
            name="sector"
            className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            disabled={loading}
            defaultValue=""
          >
            <option value="" disabled>Selecciona tu sector</option>
            {SECTORES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="reto" className="block text-sm font-medium text-foreground mb-2">
            Principal reto
          </label>
          <select
            id="reto"
            name="reto"
            className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            disabled={loading}
            defaultValue=""
          >
            <option value="" disabled>¿Cuál es tu mayor problema?</option>
            {RETOS.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
          ¿Algo más que quieras añadir?
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          placeholder="Cuéntanos brevemente tu situación o cualquier detalle que nos ayude a preparar la propuesta..."
          disabled={loading}
        />
      </div>

      {message && (
        <div
          className={`p-4 rounded-md ${
            message.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="text-xs text-muted-foreground leading-relaxed">
        Al enviar este formulario, aceptas que tratemos tus datos conforme a nuestra{" "}
        <a href="/privacidad" className="text-accent hover:underline">
          Política de Privacidad
        </a>
        . Cumplimos con el RGPD y nunca compartiremos tu información con terceros.
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Solicitar diagnóstico gratuito"}
      </Button>
    </form>
  )
}
