import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"
import { ArrowRight, Zap, Target, Sparkles, Plane, Wrench, TrendingUp, Clock, Shield, Gauge } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Riberdigital | Automatización con IA para PYMEs en España",
  },
  description:
    "Automatización con IA, digitalización y desarrollo a medida para PYMEs. Implementamos inteligencia artificial aplicada a casos reales. Primera consulta gratuita.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Riberdigital | Automatización con IA para PYMEs en España",
    description:
      "Automatización con IA, digitalización y desarrollo a medida para PYMEs. Implementamos inteligencia artificial aplicada a casos reales.",
    url: "https://www.riberdigital.es",
  },
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">

        {/* Hero */}
        <section
          className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        >
          <div className="absolute inset-0 bg-white/75" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
            <span className="inline-block mb-5 px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
              IA aplicada para PYMEs — sin complicaciones
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Tu empresa pierde horas cada semana en tareas que debería hacer una máquina
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Automatizamos y digitalizamos los procesos de PYMEs con IA y software a medida — para que tu equipo trabaje en lo que realmente importa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Solicita un diagnóstico gratuito
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

        {/* Trust bar */}
        <section className="bg-muted/40 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Gauge className="w-4 h-4 text-accent shrink-0" />
                <span>20+ años en entornos de alta exigencia</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent shrink-0" />
                <span>3 proyectos activos en restauración, salud y logística</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>Respuesta en menos de 24h</span>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">Cómo lo hacemos</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Tres palancas que transforman cómo trabaja tu empresa
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <Zap className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Automatizamos</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tus facturas, reportes y notificaciones salen solas. Sin que nadie tenga que tocar nada.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <Target className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Digitalizamos</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    El papel y el Excel desaparecen. La información está donde la necesitas, cuando la necesitas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <Sparkles className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Aplicamos IA</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Chatbots, análisis predictivo y agentes autónomos adaptados al tamaño y presupuesto de tu empresa.
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
                  <Link href="/servicios#automatizacion" className="text-accent hover:underline inline-flex items-center">
                    Ver automatización de procesos <ArrowRight className="ml-1" size={16} />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Integraciones entre herramientas</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Conecta tu ERP, CRM, Excel y otras herramientas para que trabajen juntas sin intervención manual
                  </p>
                  <Link href="/servicios#integraciones" className="text-accent hover:underline inline-flex items-center">
                    Ver integraciones entre herramientas <ArrowRight className="ml-1" size={16} />
                  </Link>
                </CardContent>
              </Card>

              {/* IA card — highlighted as most in-demand */}
              <Card className="border-accent/40 bg-accent/5 hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Más demandado
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Soluciones basadas en IA</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Chatbots, agentes autónomos y análisis predictivo aplicados a casos reales de tu negocio
                  </p>
                  <Link href="/servicios#ia" className="text-accent hover:underline inline-flex items-center">
                    Ver soluciones de inteligencia artificial <ArrowRight className="ml-1" size={16} />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Desarrollo a medida</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Software personalizado que se adapta exactamente a las necesidades específicas de tu empresa
                  </p>
                  <Link href="/servicios#desarrollo" className="text-accent hover:underline inline-flex items-center">
                    Ver desarrollo de software a medida <ArrowRight className="ml-1" size={16} />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Resultados reales en empresas como la tuya
            </p>
            <Testimonials />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Por qué elegirnos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Plane className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Experiencia de alto nivel</h3>
                <p className="text-muted-foreground leading-relaxed">
                  20 años construyendo sistemas críticos para aerolíneas — ahora aplicados a tu PYME
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Enfoque pragmático</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Empezamos por entender tu negocio, no por venderte tecnología. Cada solución resuelve un problema real.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Resultados en semanas</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sin proyectos eternos. Mejoras visibles desde las primeras semanas, no en meses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder section */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/founder.png"
                  alt="Fundador de Riberdigital"
                  width={320}
                  height={320}
                  className="rounded-2xl object-cover w-64 h-64 lg:w-80 lg:h-80"
                />
              </div>

              <div>
                <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 block">
                  Quién hay detrás
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 text-balance">
                  Tecnología de alto nivel, aplicada a tu empresa
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pasé más de 20 años construyendo sistemas críticos para aerolíneas: plataformas de reservas,
                  automatización de operaciones, integraciones que no podían fallar. Esos entornos me enseñaron
                  que la tecnología solo vale si resuelve un problema real.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Hoy aplico esa misma exigencia a las PYMEs — porque las herramientas de alta exigencia no
                  deberían ser solo para las grandes.
                </p>
                <Link href="/nosotros">
                  <Button variant="outline">
                    Conoce más sobre Riberdigital <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Nuestro proceso de trabajo</h2>
            <p className="text-center text-primary-foreground/70 mb-12 max-w-2xl mx-auto">
              Sin sorpresas. Sabes exactamente qué va a pasar en cada momento.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Diagnóstico</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-2">
                  Analizamos tus procesos e identificamos oportunidades de mejora
                </p>
                <p className="text-accent text-xs font-medium">1 reunión · 48h</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Propuesta</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-2">
                  Soluciones concretas con costes y beneficios claros, sin compromiso
                </p>
                <p className="text-accent text-xs font-medium">3–5 días</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Implementación</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-2">
                  Desarrollamos y ponemos en marcha la solución con tu equipo
                </p>
                <p className="text-accent text-xs font-medium">2–6 semanas</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Mejora continua</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-2">
                  Optimizamos y ajustamos según los resultados obtenidos
                </p>
                <p className="text-accent text-xs font-medium">Seguimiento mensual</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA — with embedded contact form */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                  ¿Listo para dejar de perder tiempo?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Cuéntanos tu proyecto. Analizaremos tu situación y te diremos exactamente qué haríamos y cómo.
                </p>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold shrink-0 mt-0.5">1</span>
                    <span>Analizamos tu consulta y tu situación actual</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold shrink-0 mt-0.5">2</span>
                    <span>Te respondemos con una propuesta inicial en menos de 24h</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold shrink-0 mt-0.5">3</span>
                    <span>Tú decides si seguimos — sin compromiso ni coste</span>
                  </div>
                </div>
              </div>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <ContactForm />
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Respuesta en menos de 24h · Primera consulta gratuita
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
