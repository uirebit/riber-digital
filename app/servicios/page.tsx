import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Servicios de Consultoría Digital | Automatización e IA para PYMEs - Riberdigital",
  description:
    "Servicios de consultoría digital en España: automatización de procesos empresariales, digitalización, integraciones de sistemas, soluciones de IA y desarrollo a medida. Mejora la eficiencia de tu PYME con Riberdigital.",
  keywords: [
    "servicios consultoría digital",
    "automatización procesos empresariales",
    "digitalización pymes España",
    "integraciones ERP CRM",
    "soluciones IA empresas",
    "desarrollo software a medida",
    "consultor digital España",
  ],
  openGraph: {
    title: "Servicios de Consultoría Digital para PYMEs | Riberdigital",
    description:
      "Automatización, digitalización, IA y desarrollo a medida para empresas españolas. Soluciones prácticas con resultados medibles.",
  },
}

const services = [
  {
    title: "Automatización de procesos empresariales",
    problem:
      "¿Pierdes horas en tareas repetitivas como enviar facturas, generar reportes o actualizar hojas de cálculo?",
    solution:
      "Automatizamos tus procesos manuales para que se ejecuten solos: facturación automática, informes programados, sincronización de datos entre sistemas.",
    benefits: [
      "Ahorro de hasta 20 horas semanales por empleado",
      "Reducción del 95% en errores humanos",
      "Mayor rapidez en operaciones críticas",
      "Liberación de tiempo para tareas estratégicas",
    ],
  },
  {
    title: "Digitalización de procesos internos",
    problem: "¿Aún usas papel, email y Excel para gestionar información crítica de tu empresa?",
    solution:
      "Convertimos tus procesos en papel o dispersos en sistemas digitales centralizados, seguros y accesibles desde cualquier lugar.",
    benefits: [
      "Acceso inmediato a información actualizada",
      "Trazabilidad completa de operaciones",
      "Reducción de costes de gestión documental",
      "Cumplimiento normativo simplificado",
    ],
  },
  {
    title: "Optimización de flujos de trabajo",
    problem: "¿Sientes que hay cuellos de botella en tus procesos pero no sabes cómo solucionarlos?",
    solution:
      "Analizamos y rediseñamos tus flujos de trabajo para eliminar pasos innecesarios, reducir tiempos de espera y mejorar la coordinación entre equipos.",
    benefits: [
      "Reducción de tiempos de ciclo hasta un 40%",
      "Mayor satisfacción del equipo",
      "Mejor experiencia del cliente",
      "Identificación de ineficiencias ocultas",
    ],
  },
  {
    title: "Integraciones entre herramientas",
    problem: "¿Introduces los mismos datos en varios sistemas o exportas e importas archivos manualmente?",
    solution:
      "Conectamos tus herramientas (ERP, CRM, email, Excel, APIs) para que los datos fluyan automáticamente entre ellas sin intervención manual.",
    benefits: [
      "Eliminación de duplicación de datos",
      "Actualización en tiempo real",
      "Reducción drástica de errores",
      "Visión unificada del negocio",
    ],
  },
  {
    title: "Soluciones basadas en IA para PYMEs",
    problem: "¿Quieres aprovechar la inteligencia artificial pero no sabes por dónde empezar?",
    solution:
      "Implementamos IA aplicada a casos prácticos: chatbots de atención al cliente, análisis predictivo de ventas, clasificación automática de documentos.",
    benefits: [
      "Atención al cliente 24/7",
      "Mejores decisiones basadas en datos",
      "Automatización de tareas complejas",
      "Ventaja competitiva real",
    ],
  },
  {
    title: "Desarrollo de soluciones a medida",
    problem: "¿No encuentras software que se adapte exactamente a tu forma de trabajar?",
    solution:
      "Desarrollamos aplicaciones personalizadas que resuelven tus necesidades específicas, sin limitaciones de plantillas o soluciones estándar.",
    benefits: [
      "Software que funciona como tú necesitas",
      "Propiedad completa de la solución",
      "Escalable según tu crecimiento",
      "Integración perfecta con tus sistemas",
    ],
  },
]

export default function ServiciosPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Servicios de digitalización para PYMEs
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Soluciones prácticas que transforman tu forma de trabajar y multiplican los resultados
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-card-foreground mb-4">{service.title}</h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-destructive mb-2">Problema</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.problem}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-accent mb-2">Solución</h3>
                      <p className="text-foreground leading-relaxed">{service.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-2">Beneficios</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-accent mt-1">•</span>
                            <span className="leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              ¿Necesitas una solución específica?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Cuéntanos tu proyecto y diseñaremos una solución adaptada a tus necesidades
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Solicitar asesoría
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
