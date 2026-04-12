import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Testimonials } from "@/components/testimonials"
import { CheckCircle2, Phone, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Automatización de Procesos para PYMEs | Riberdigital",
  description:
    "¿Tu equipo pierde horas en tareas repetitivas? Automatizamos tus procesos empresariales con IA. Diagnóstico gratuito sin compromiso.",
  robots: {
    index: false, // Ads landing pages should not be indexed
    follow: false,
  },
}

const BENEFITS = [
  "Ahorro de hasta 20 horas semanales por empleado",
  "Reducción del 95% en errores manuales",
  "Implementación en semanas, no en meses",
  "Sin necesidad de departamento técnico propio",
  "Primera consulta gratuita y sin compromiso",
]

export default function LpAutomatizacionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Stripped header — logo only */}
      <header className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-foreground">
            Riber<span className="text-accent">digital</span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="tel:+34652675497"
              className="hidden sm:flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              +34 652 675 497
            </a>
            <a
              href="https://wa.me/34652675497"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero + Form above the fold */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              {/* Left — value proposition */}
              <div className="lg:pt-4">
                <span className="inline-block mb-4 px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
                  Consultoría de automatización para PYMEs
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-5 text-balance leading-tight">
                  ¿Cuántas horas pierde tu equipo cada semana en tareas que podría hacer una máquina?
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Identificamos qué procesos de tu empresa se pueden automatizar y lo ponemos en marcha — con IA y software a medida, en semanas.
                </p>

                <ul className="space-y-3 mb-8">
                  {BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground">
                  <a
                    href="tel:+34652675497"
                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                  >
                    <Phone className="w-4 h-4 text-accent" />
                    +34 652 675 497
                  </a>
                  <a
                    href="https://wa.me/34652675497"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-accent" />
                    Escríbenos por WhatsApp
                  </a>
                </div>
              </div>

              {/* Right — form */}
              <Card className="border-border bg-card shadow-md">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold text-foreground mb-1">Solicita tu diagnóstico gratuito</h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Analizamos tu situación y te respondemos en menos de 24h
                  </p>
                  <ContactForm />
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Respuesta en menos de 24h · Sin compromiso · Primera consulta gratuita
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground text-center mb-10">
              Lo que dicen los clientes que ya han automatizado
            </h2>
            <Testimonials />
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-10">¿Qué pasa cuando contactas?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { n: "1", title: "Análisis en 24h", desc: "Analizamos tu consulta y tu situación actual sin coste" },
                { n: "2", title: "Propuesta concreta", desc: "Te enviamos qué automatizaríamos y cómo, con estimación de ahorro" },
                { n: "3", title: "Tú decides", desc: "Sin presión. Empezamos solo si ves valor real en la propuesta" },
              ].map((step) => (
                <div key={step.n} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-xl mb-4">
                    {step.n}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Riberdigital. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <Link href="/privacidad" className="hover:text-foreground transition-colors">Política de Privacidad</Link>
            <Link href="/terminos" className="hover:text-foreground transition-colors">Términos y Condiciones</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
