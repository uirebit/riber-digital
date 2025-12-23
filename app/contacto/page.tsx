import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contacto | Consultoría Digital Personalizada para tu PYME - Riberdigital",
  description:
    "Solicita asesoría de consultoría digital para tu empresa en España. Análisis gratuito de procesos y propuesta personalizada de automatización y digitalización. Contacta con Riberdigital hoy.",
  keywords: [
    "consultoría digital España contacto",
    "asesoría digitalización pymes",
    "consultor digital contacto",
    "solicitar consultoría automatización",
  ],
  openGraph: {
    title: "Contacta con Riberdigital | Consultoría Digital",
    description: "Asesoría gratuita para digitalizar y automatizar tu PYME. Respuesta en 24 horas.",
  },
}

export default function ContactoPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">Cuéntanos tu proyecto</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Analizaremos tu situación y te mostraremos cómo podemos ayudarte a ser más eficiente
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="border-border bg-card">
                  <CardContent className="pt-6">
                    <form className="space-y-6">
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
                        />
                      </div>

                      <div className="text-xs text-muted-foreground leading-relaxed">
                        Al enviar este formulario, aceptas que tratemos tus datos conforme a nuestra{" "}
                        <a href="/privacidad" className="text-accent hover:underline">
                          Política de Privacidad
                        </a>
                        . Cumplimos con el RGPD y nunca compartiremos tu información con terceros.
                      </div>

                      <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        Enviar solicitud
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Info Sidebar */}
              <div className="space-y-6">
                <Card className="border-border bg-muted/50">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-4">Respuesta en 24 horas</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Analizamos tu consulta y te respondemos con una propuesta inicial sin compromiso
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Email</p>
                        <p className="text-sm text-muted-foreground">contacto@riberdigital.es</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Teléfono</p>
                        <p className="text-sm text-muted-foreground">+34 652675497</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Ubicación</p>
                        <p className="text-sm text-muted-foreground">España</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-accent/5">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-2">Asesoría sin coste</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      La primera consulta es totalmente gratuita. Te explicaremos qué podemos hacer por tu empresa y
                      cómo
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
