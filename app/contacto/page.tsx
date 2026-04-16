import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Testimonials } from "@/components/testimonials"
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contacto - Asesoría Digital para PYMEs",
  description: "Solicita asesoría gratuita de consultoría digital. Análisis de procesos y propuesta personalizada de automatización para tu PYME. Respuesta en 24 horas.",
  keywords: [
    "consultoría digital España contacto",
    "asesoría digitalización pymes",
    "consultor digital contacto",
    "solicitar consultoría automatización",
  ],
  alternates: {
    canonical: '/contacto',
  },
  openGraph: {
    title: "Contacta con ribersistemas",
    description: "Asesoría gratuita para digitalizar y automatizar tu PYME. Respuesta en 24 horas.",
    url: 'https://ribersistemas.es/contacto',
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
                    <ContactForm />
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
                        <p className="text-sm text-muted-foreground">contacto@ribersistemas.es</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Teléfono</p>
                        <a href="tel:+34652675497" className="text-sm text-muted-foreground hover:text-foreground transition-colors">+34 652675497</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MessageCircle className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <p className="text-sm font-medium text-foreground">WhatsApp</p>
                        <a
                          href="https://wa.me/34652675497"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Escríbenos ahora
                        </a>
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

                <Testimonials compact limit={1} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
