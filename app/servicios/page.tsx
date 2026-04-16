import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AiBadge } from "@/components/ai-badge"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Servicios de Consultoría Digital para PYMEs",
  description: "Automatización de procesos, digitalización, integraciones de sistemas, IA y desarrollo a medida para PYMEs españolas. Soluciones prácticas con resultados medibles.",
  keywords: [
    "servicios consultoría digital",
    "automatización procesos empresariales",
    "digitalización pymes España",
    "integraciones ERP CRM",
    "soluciones IA empresas",
    "desarrollo software a medida",
    "consultor digital España",
  ],
  alternates: {
    canonical: '/servicios',
  },
  openGraph: {
    title: "Servicios de Consultoría Digital para PYMEs | ribersistemas",
    description:
      "Automatización, digitalización, IA y desarrollo a medida para empresas españolas. Soluciones prácticas con resultados medibles.",
    url: 'https://www.ribersistemas.es/servicios',
  },
}

const services = [
  {
    id: "automatizacion",
    slug: "automatizacion",
    title: "Automatización de procesos empresariales",
    hasAi: false,
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
    cta: "Solicita un análisis de tus procesos — gratis",
  },
  {
    id: "digitalizacion",
    slug: "digitalizacion",
    title: "Digitalización de procesos internos",
    hasAi: false,
    problem: "¿Aún usas papel, email y Excel para gestionar información crítica de tu empresa?",
    solution:
      "Convertimos tus procesos en papel o dispersos en sistemas digitales centralizados, seguros y accesibles desde cualquier lugar.",
    benefits: [
      "Acceso inmediato a información actualizada",
      "Trazabilidad completa de operaciones",
      "Reducción de costes de gestión documental",
      "Cumplimiento normativo simplificado",
    ],
    cta: "Hablemos de cómo digitalizar tu empresa",
  },
  {
    id: "flujos",
    slug: "flujos",
    title: "Optimización de flujos de trabajo",
    hasAi: false,
    problem: "¿Sientes que hay cuellos de botella en tus procesos pero no sabes cómo solucionarlos?",
    solution:
      "Analizamos y rediseñamos tus flujos de trabajo para eliminar pasos innecesarios, reducir tiempos de espera y mejorar la coordinación entre equipos.",
    benefits: [
      "Reducción de tiempos de ciclo hasta un 40%",
      "Mayor satisfacción del equipo",
      "Mejor experiencia del cliente",
      "Identificación de ineficiencias ocultas",
    ],
    cta: "Identifica los cuellos de botella de tu empresa",
  },
  {
    id: "integraciones",
    slug: "integraciones",
    title: "Integraciones entre herramientas",
    hasAi: false,
    problem: "¿Introduces los mismos datos en varios sistemas o exportas e importas archivos manualmente?",
    solution:
      "Conectamos tus herramientas (ERP, CRM, email, Excel, APIs) para que los datos fluyan automáticamente entre ellas sin intervención manual.",
    benefits: [
      "Eliminación de duplicación de datos",
      "Actualización en tiempo real",
      "Reducción drástica de errores",
      "Visión unificada del negocio",
    ],
    cta: "Conecta tus herramientas — sin trabajo manual",
  },
  {
    id: "ia",
    slug: "ia",
    title: "Soluciones basadas en IA para PYMEs",
    hasAi: true,
    problem: "¿Quieres aprovechar la inteligencia artificial pero no sabes por dónde empezar ni qué tiene sentido para tu negocio?",
    solution:
      "Implementamos IA aplicada a casos prácticos y rentables desde el primer día. No vendemos tecnología por venderte tecnología: identificamos dónde la IA genera un retorno real en tu empresa y lo ponemos en marcha.",
    benefits: [
      "Chatbot de atención al cliente entrenado con tus FAQs — responde 24/7 en web o WhatsApp",
      "Agente de seguimiento de pedidos que notifica a clientes automáticamente",
      "Clasificación automática de emails de proveedores y clientes",
      "Análisis predictivo de demanda para optimizar stock y planificación",
      "Generación automática de propuestas e informes a partir de plantillas",
      "Agentes autónomos que detectan tareas, las planifican y las ejecutan solos",
    ],
    cta: "¿Qué IA tiene sentido para tu empresa? Te lo decimos gratis",
  },
  {
    id: "desarrollo",
    slug: "desarrollo",
    title: "Desarrollo de soluciones a medida",
    hasAi: false,
    problem: "¿No encuentras software que se adapte exactamente a tu forma de trabajar?",
    solution:
      "Desarrollamos aplicaciones personalizadas que resuelven tus necesidades específicas, sin limitaciones de plantillas o soluciones estándar.",
    benefits: [
      "Software que funciona como tú necesitas",
      "Propiedad completa de la solución",
      "Escalable según tu crecimiento",
      "Integración perfecta con tus sistemas",
    ],
    cta: "Cuéntanos qué necesitas construir",
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
            {services.map((service) => (
              <Card
                key={service.id}
                id={service.id}
                className={service.hasAi ? "border-accent/40 bg-accent/5" : "border-border bg-card"}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <h2 className="text-2xl font-bold text-card-foreground">{service.title}</h2>
                    {service.hasAi && <AiBadge className="mt-1 shrink-0" />}
                  </div>

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

                    <div className="pt-2">
                      <Link href={`/contacto?servicio=${service.slug}`}>
                        <Button variant="outline" size="sm" className="text-accent border-accent/30 hover:bg-accent/5">
                          {service.cta} <ArrowRight className="ml-1.5" size={14} />
                        </Button>
                      </Link>
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
