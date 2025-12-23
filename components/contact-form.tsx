"use client"

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"

interface ContactFormProps {
  onSuccess?: () => void
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      nombre: formData.get('nombre') as string,
      empresa: formData.get('empresa') as string,
      email: formData.get('email') as string,
      mensaje: formData.get('mensaje') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setMessage({ type: 'success', text: '¡Mensaje enviado correctamente! Te responderemos en breve.' })
        e.currentTarget.reset()
        onSuccess?.()
      } else {
        setMessage({ type: 'error', text: result.error || 'Error al enviar el mensaje' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error de conexión. Por favor, intenta de nuevo.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
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

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={6}
          className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          placeholder="Cuéntanos qué procesos quieres mejorar o qué desafíos enfrenta tu empresa..."
          disabled={loading}
        />
      </div>

      {message && (
        <div
          className={`p-4 rounded-md ${
            message.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
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
        {loading ? 'Enviando...' : 'Enviar solicitud'}
      </Button>
    </form>
  )
}
