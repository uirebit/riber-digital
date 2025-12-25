import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Target, Users, Lightbulb, Award, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quiénes Somos | Riberdigital - Consultoría Digital para PYMEs en España",
  description:
    "Conoce a Riberdigital, tu consultor digital de confianza. Especialistas en automatización de procesos, digitalización empresarial e IA para pequeñas y medianas empresas españolas. Transformación digital práctica y resultados medibles.",
  keywords: [
    "riberdigital quienes somos",
    "consultoría digital España",
    "empresa transformación digital pymes",
    "consultores digitales España",
  ],
  alternates: {
    canonical: '/nosotros',
  },
  openGraph: {
    title: "Quiénes Somos | Riberdigital Consultoría Digital",
    description:
      "Tu socio en transformación digital. Ayudamos a PYMEs españolas a automatizar procesos y crecer de forma sostenible.",
    url: 'https://www.riberdigital.es/nosotros',
  },
}

export default function NosotrosPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">Quiénes somos</h1>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    En <span className="font-semibold text-foreground">Riber<span className="text-accent">digital</span></span> ayudamos a empresas a mejorar sus procesos y sistemas digitales con soluciones prácticas, fiables y bien diseñadas, orientadas a resolver problemas reales y aportar valor desde el primer día.
                  </p>
                  <p>
                    Detrás de <span className="font-semibold text-foreground">Riber<span className="text-accent">digital</span></span> hay un equipo liderado por un consultor tecnológico con más de 20 años de experiencia, desarrollando herramientas y plataformas para aerolíneas y entornos empresariales de alta exigencia. Amplia experiencia tanto en definición de soluciones con el cliente como en la implementación de aplicaciones críticas, sistemas backend y procesos de automatización donde la precisión y la escalabilidad son clave.
                  </p>
                  <p>
                    Hoy, esa experiencia se aplica a pequeñas y medianas empresas, combinando desarrollo, automatización e inteligencia artificial aplicada, con una forma de trabajar cercana, directa y enfocada a resultados.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/riberdigital-logo.png"
                  alt="Riberdigital Logo"
                  width={400}
                  height={400}
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Active Projects */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">Proyectos en activo</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Actualmente colaboro con empresas de distintos sectores, desde negocios locales hasta entornos operativos más complejos, desarrollando soluciones digitales adaptadas a sus necesidades reales.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3 text-card-foreground">Proyecto de presencia digital</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Desarrollo y mantenimiento de la web y gestión de la presencia online para un negocio de restauración.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3 text-card-foreground">Proyecto de presencia digital profesional</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Diseño y desarrollo de la página web para un centro de fisioterapia, orientada a visibilidad local y captación de pacientes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3 text-card-foreground">Proyecto de software a medida</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Diseño y desarrollo de un sistema de gestión de pedidos para un entorno logístico, enfocado en optimización de procesos y trazabilidad.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <Target className="w-12 h-12 text-accent mb-4" />
                  <h2 className="text-2xl font-bold mb-4 text-card-foreground">Nuestra Misión</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ayudar a las PYMEs a competir en la era digital mediante soluciones de automatización y
                    digitalización que mejoren su eficiencia operativa, reduzcan costes y liberen tiempo para enfocarse
                    en el crecimiento del negocio.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <Lightbulb className="w-12 h-12 text-accent mb-4" />
                  <h2 className="text-2xl font-bold mb-4 text-card-foreground">Nuestra Visión</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser el socio tecnológico de confianza para las PYMEs españolas, democratizando el acceso a la
                    transformación digital con soluciones prácticas, asequibles y medibles que generen un impacto real
                    en sus resultados.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">Nuestros Valores</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Los principios que guían nuestro trabajo diario
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Cercanía</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hablamos tu idioma, entendemos tus retos y trabajamos codo a codo contigo para conseguir resultados
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Pragmatismo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Soluciones realistas y rentables que se adaptan a tu presupuesto y generan valor desde el primer día
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Excelencia</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Compromiso con la calidad en cada proyecto, utilizando las mejores prácticas y tecnologías del sector
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Believe */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">En qué creemos</h2>
            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                    La tecnología debe ser un medio, no un fin
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No implementamos tecnología por implementarla. Cada solución que proponemos debe resolver un
                    problema real y generar valor medible para tu negocio.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                    Las PYMEs merecen el mismo acceso a la innovación
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    La transformación digital no es solo para grandes corporaciones. Con las herramientas y el enfoque
                    adecuados, cualquier empresa puede aprovechar la automatización e IA para crecer.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                    La simplicidad es la máxima sofisticación
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Las mejores soluciones son aquellas que tu equipo puede entender y utilizar sin necesidad de
                    formación compleja. Priorizamos la usabilidad sobre la complejidad técnica.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">¿Quieres conocernos mejor?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Hablemos sobre los retos de tu empresa y cómo podemos ayudarte a superarlos
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Solicitar una reunión
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
