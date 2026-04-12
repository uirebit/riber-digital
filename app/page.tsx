import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ArrowRight, Zap, Target, Sparkles, Plane, Wrench, TrendingUp, Clock, Shield, Gauge, Check } from "lucide-react"
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
              Identifico qué está frenando tu negocio y lo resuelvo con código e IA
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Sin equipos grandes, sin proyectos de seis meses, sin tecnicismos.
              Llego, entiendo tu problema operativo real, y lo construyo — yo directamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Solicita un diagnóstico gratuito
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="#como-trabajo">
                <Button size="lg" variant="outline">
                  Ver cómo trabajo
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              30 minutos. Sin compromiso. Te digo exactamente dónde estás perdiendo tiempo y dinero.
            </p>
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

        {/* Problem identification */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Si esto te suena, podemos trabajar juntos</h2>
            <div className="space-y-4">
              {[
                "Tienes procesos que tu equipo hace a mano y que nadie sabe cómo automatizar",
                "Has hablado con agencias y te han propuesto proyectos largos y caros que nunca acaban de arrancar",
                "Sabes que la tecnología podría ayudarte, pero no tienes a nadie de confianza que lo entienda y lo construya",
                "Tienes datos que no estás aprovechando — pedidos, clientes, reseñas — y no sabes qué hacer con ellos",
                "Necesitas a alguien que entienda tu negocio, no solo la tecnología",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-muted/40 border border-border">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How I work */}
        <section id="como-trabajo" className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">No subcontrato. No delego. Lo construyo yo.</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Eso significa que cuando hablamos, estás hablando con quien va a resolver tu problema. Sin intermediarios, sin teléfono roto, sin sorpresas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <Zap className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Diagnóstico honesto</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Antes de proponer nada, entiendo qué está pasando en tu operación. Si el problema se resuelve con algo simple, te lo digo. No te vendo lo que no necesitas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <Target className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Construcción directa</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Escribo el código y configuro la IA yo mismo. Eso se traduce en velocidad real — semanas, no meses.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <Sparkles className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Sin dependencia tecnológica</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No necesitas un equipo técnico para mantener lo que construyo. Queda en tus manos y funciona solo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-background">
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

        {/* Real cases */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">Problemas reales que ya he resuelto</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="border-border bg-card flex flex-col">
                <CardContent className="pt-6 flex flex-col flex-1">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Restauración · Gestión de reseñas con IA</p>
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-4">
                    Un restaurante no tenía capacidad de responder sus reseñas de Google a tiempo. Cada reseña sin respuesta era un cliente potencial que se iba a la competencia.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Construí un sistema de respuesta automática con IA que mantiene el tono de la marca y responde en menos de dos horas a cualquier reseña, sin intervención humana. Montado sobre AWS.
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold text-foreground">De responder el 20% de las reseñas a responder el 100%, de forma consistente.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card flex flex-col">
                <CardContent className="pt-6 flex flex-col flex-1">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Ecommerce · Automatización de email marketing</p>
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-4">
                    Una tienda online tenía miles de clientes en su base de datos que no estaba aprovechando. Cada venta nueva dependía de captar clientes nuevos, ignorando a los que ya habían comprado.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Implementé segmentación y automatización de email marketing adaptada a su catálogo y comportamiento de compra.
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold text-foreground">Ingresos recurrentes a partir de clientes existentes, sin invertir en captación.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card flex flex-col">
                <CardContent className="pt-6 flex flex-col flex-1">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Logística · Sistema de gestión de pedidos</p>
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-4">
                    Una empresa gestionaba sus pedidos desde PDFs y Excel, con errores de transcripción y retrasos en el picking que costaban tiempo y dinero cada día.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Construí un sistema completo de gestión de pedidos en AWS con carga automática desde PDF, gestión de picking y trazabilidad del proceso.
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold text-foreground">Proceso digitalizado, sin errores manuales, escalable al volumen de la empresa.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Differentiation table */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Por qué trabajar conmigo y no con una agencia</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 bg-muted/50 border border-border rounded-tl-lg text-muted-foreground font-semibold">Con una agencia</th>
                    <th className="text-left p-4 bg-accent/10 border border-accent/30 rounded-tr-lg text-accent font-semibold">Conmigo</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Hablas con un comercial", "Hablas con quien lo construye"],
                    ["Proyecto de 3–6 meses", "Primeros resultados en semanas"],
                    ["Solución genérica adaptada a ti", "Construido específicamente para tu problema"],
                    ["Dependes de ellos para cualquier cambio", "Queda en tus manos"],
                    ["Presupuesto inflado", "Solo pagas lo que necesitas"],
                  ].map(([agency, me], i) => (
                    <tr key={i}>
                      <td className="p-4 border border-border text-muted-foreground text-sm">{agency}</td>
                      <td className="p-4 border border-accent/20 bg-accent/5 text-foreground text-sm font-medium">{me}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Así funciona trabajar conmigo</h2>
            <p className="text-center text-primary-foreground/70 mb-12 max-w-2xl mx-auto">
              Sin sorpresas. Sabes exactamente qué va a pasar en cada momento.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Diagnóstico gratuito</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-2">
                  Me cuentas qué está pasando en tu operación. Yo identifico qué se puede automatizar y qué resultado realista puedes esperar.
                </p>
                <p className="text-accent text-xs font-medium">30 min</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Propuesta concreta</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-2">
                  Sin tecnicismos. Qué voy a construir, en cuánto tiempo, y qué va a cambiar en tu día a día.
                </p>
                <p className="text-accent text-xs font-medium">En 48h</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Implementación</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-2">
                  Empezamos. Sin reuniones interminables, sin burocracia. Construyo, pruebo, entrego.
                </p>
                <p className="text-accent text-xs font-medium">2–6 semanas</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Lo dejas funcionando</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-2">
                  No necesitas depender de mí para que siga funcionando. Pero si necesitas evolucionarlo, estoy.
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
                  ¿Tienes un proceso que sabes que se puede automatizar pero nadie te ha sabido resolver cómo?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Eso es exactamente lo que hago.
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
                    30 minutos. Sin compromiso. Si no veo cómo ayudarte, te lo digo.
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
