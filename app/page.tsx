import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Zap, Target, TrendingUp, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Riberdigital | Consultoría Digital para PYMEs - Automatización y Digitalización en España",
  description:
    "Consultoría digital especializada en automatización de procesos y transformación digital para PYMEs españolas. Reduce costes, ahorra tiempo y mejora la eficiencia con soluciones prácticas de Riberdigital.",
  openGraph: {
    title: "Riberdigital | Consultoría Digital para PYMEs en España",
    description:
      "Automatización de procesos, digitalización empresarial e IA para PYMEs. Consultoría práctica y resultados medibles.",
  },
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-bg.png')" }}>
          <div className="absolute inset-0 bg-white/70"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Soluciones digitales para hacer tu empresa más eficiente
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Automatización, digitalización y optimización de procesos para PYMEs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Solicitar asesoría
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/servicios">
                <Button size="lg" variant="outline">
                  Ver servicios
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Qué hacemos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <Zap className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Automatizamos</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Eliminamos tareas repetitivas y liberamos tiempo valioso para que te centres en lo importante
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <Target className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Digitalizamos</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transformamos procesos manuales en flujos digitales eficientes y escalables
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <TrendingUp className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Optimizamos</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mejoramos tus sistemas actuales para maximizar resultados y reducir costes
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">Servicios destacados</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Soluciones prácticas que impulsan el crecimiento de tu negocio
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    Automatización de procesos empresariales
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Ahorra tiempo y reduce errores automatizando tareas rutinarias: facturación, reportes,
                    notificaciones y más
                  </p>
                  <Link href="/servicios" className="text-accent hover:underline inline-flex items-center">
                    Saber más <ArrowRight className="ml-1" size={16} />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Integraciones entre herramientas</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Conecta tu ERP, CRM, Excel y otras herramientas para que trabajen juntas sin intervención manual
                  </p>
                  <Link href="/servicios" className="text-accent hover:underline inline-flex items-center">
                    Saber más <ArrowRight className="ml-1" size={16} />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Soluciones basadas en IA</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Implementa inteligencia artificial para análisis de datos, atención al cliente y toma de decisiones
                  </p>
                  <Link href="/servicios" className="text-accent hover:underline inline-flex items-center">
                    Saber más <ArrowRight className="ml-1" size={16} />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Desarrollo a medida</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Software personalizado que se adapta exactamente a las necesidades específicas de tu empresa
                  </p>
                  <Link href="/servicios" className="text-accent hover:underline inline-flex items-center">
                    Saber más <ArrowRight className="ml-1" size={16} />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Por qué elegirnos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Experiencia práctica</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Años de experiencia trabajando con PYMEs que enfrentan los mismos retos que tú
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Enfoque pragmático</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Soluciones realistas y rentables, sin complicaciones tecnológicas innecesarias
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Resultados medibles</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nos enfocamos en mejoras concretas: ahorro de tiempo, reducción de errores y mayor eficiencia
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Nuestro proceso de trabajo</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Diagnóstico</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Analizamos tus procesos actuales e identificamos oportunidades de mejora
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Propuesta</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Presentamos soluciones concretas con costes y beneficios claros
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Implementación</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Desarrollamos y ponemos en marcha la solución con tu equipo
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Mejora continua</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Optimizamos y ajustamos según los resultados obtenidos
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              ¿Listo para digitalizar tu empresa?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Cuéntanos tu proyecto y te mostraremos cómo podemos ayudarte a ser más eficiente
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Solicitar asesoría gratuita
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
