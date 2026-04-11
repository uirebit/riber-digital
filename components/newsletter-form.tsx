"use client"

import { useState, FormEvent } from "react"

export function NewsletterForm() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        setError("Error al suscribirse. Inténtalo de nuevo.")
        return
      }

      setSubmitted(true)
    } catch {
      setError("Error de conexión. Inténtalo de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <p className="text-accent font-medium">
        ¡Apuntado! Te avisaremos cuando publiquemos algo útil.
      </p>
    )
  }

  return (
    <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        required
        placeholder="tu@email.com"
        className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label="Tu dirección de email"
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-2 rounded-md bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-colors disabled:opacity-50"
      >
        {loading ? "..." : "Suscribirme"}
      </button>
      {error && <p className="text-sm text-red-600 w-full text-center">{error}</p>}
    </form>
  )
}
