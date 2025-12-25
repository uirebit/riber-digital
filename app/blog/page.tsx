import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog de Digitalización y Automatización para PYMEs | Riberdigital",
  description:
    "Artículos sobre consultoría digital, automatización de procesos, inteligencia artificial y casos prácticos para PYMEs españolas. Guías y consejos de digitalización empresarial por Riberdigital.",
  keywords: [
    "blog digitalización empresas",
    "automatización para pymes",
    "consejos transformación digital",
    "casos uso IA empresas",
    "blog consultoría digital España",
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: "Blog de Consultoría Digital | Riberdigital",
    description: "Guías prácticas sobre automatización, digitalización e IA para PYMEs en España.",
    url: 'https://www.riberdigital.es/blog',
  },
}

const blogPosts = [
  {
    title: "5 procesos que toda PYME debería automatizar en 2025",
    excerpt:
      "Descubre qué tareas repetitivas están consumiendo el tiempo de tu equipo y cómo automatizarlas para ahorrar hasta 20 horas semanales.",
    date: "15 de marzo, 2025",
    category: "Automatización",
  },
  {
    title: "Cómo digitalizar tu empresa sin morir en el intento",
    excerpt:
      "Guía práctica paso a paso para pequeñas empresas que quieren modernizarse sin complicaciones técnicas ni grandes inversiones.",
    date: "10 de marzo, 2025",
    category: "Digitalización",
  },
  {
    title: "IA para PYMEs: casos de uso reales que dan resultados",
    excerpt:
      "Ejemplos concretos de cómo empresas como la tuya están usando inteligencia artificial para mejorar atención al cliente y toma de decisiones.",
    date: "5 de marzo, 2025",
    category: "Inteligencia Artificial",
  },
  {
    title: "Por qué tu ERP y CRM no se hablan (y cómo solucionarlo)",
    excerpt:
      "Las integraciones entre sistemas eliminan trabajo manual y errores. Te explicamos cómo conectar tus herramientas empresariales.",
    date: "28 de febrero, 2025",
    category: "Integraciones",
  },
  {
    title: "El coste real de los procesos manuales en tu empresa",
    excerpt:
      "Calcula cuánto dinero pierdes cada mes por tareas manuales y descubre el retorno de inversión de la automatización.",
    date: "20 de febrero, 2025",
    category: "Eficiencia",
  },
  {
    title: "De Excel a sistema: cuándo es el momento de dar el salto",
    excerpt: "Señales claras de que tu empresa ha superado las hojas de cálculo y necesita soluciones más robustas.",
    date: "12 de febrero, 2025",
    category: "Digitalización",
  },
]

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Blog de digitalización para empresas
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Consejos prácticos, casos reales y guías para optimizar tu negocio
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow flex flex-col">
                  <CardContent className="pt-6 flex flex-col flex-grow">
                    <div className="inline-block mb-3">
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-card-foreground mb-3 leading-snug">{post.title}</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80">
                        Leer más <ArrowRight className="ml-1" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Recibe consejos en tu email
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Suscríbete para recibir artículos sobre automatización y digitalización directamente en tu bandeja
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-foreground"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Suscribirse</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
