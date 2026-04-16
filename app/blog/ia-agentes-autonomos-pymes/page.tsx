import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "La IA ya no espera órdenes: agentes autónomos para tu empresa | ribersistemas",
  description: "Los agentes de IA ya no solo responden preguntas: identifican tareas, las planifican y las ejecutan solos. Descubre qué significa esto para tu PYME.",
  keywords: [
    "agentes de IA para empresas",
    "IA agéntica PYME",
    "automatización inteligente empresas",
    "inteligencia artificial autónoma España",
    "transformación digital pymes",
  ],
  alternates: {
    canonical: "https://www.ribersistemas.es/blog/ia-agentes-autonomos-pymes",
  },
  openGraph: {
    title: "La IA ya no espera órdenes: agentes autónomos para tu empresa",
    description: "Los agentes de IA ya no solo responden preguntas: identifican tareas, las planifican y las ejecutan solos.",
    url: "https://www.ribersistemas.es/blog/ia-agentes-autonomos-pymes",
    type: "article",
    siteName: "ribersistemas",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "La IA ya no espera órdenes: qué son los agentes autónomos y qué significan para tu empresa",
  description: "Los agentes de IA ya no solo responden preguntas: identifican tareas, las planifican y las ejecutan solos.",
  datePublished: "2026-04-05",
  dateModified: "2026-04-05",
  url: "https://www.ribersistemas.es/blog/ia-agentes-autonomos-pymes",
  author: { "@type": "Person", name: "Tiberiu David", url: "https://www.ribersistemas.es/nosotros", sameAs: "https://www.linkedin.com/in/andrei-tiberiu-david/" },
  publisher: { "@type": "Organization", name: "ribersistemas", url: "https://www.ribersistemas.es" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.ribersistemas.es/blog/ia-agentes-autonomos-pymes" },
  articleSection: "Inteligencia Artificial",
  inLanguage: "es-ES",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.ribersistemas.es" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.ribersistemas.es/blog" },
      { "@type": "ListItem", position: 3, name: "La IA ya no espera órdenes", item: "https://www.ribersistemas.es/blog/ia-agentes-autonomos-pymes" },
    ],
  },
}

export default function BlogPostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main className="pt-16 bg-background">

        {/* Hero del artículo */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li><Link href="/" className="hover:text-foreground transition-colors">Inicio</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li aria-hidden>/</li>
                <li className="text-foreground">La IA ya no espera órdenes</li>
              </ol>
            </nav>

            {/* Categoría + fecha */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                Inteligencia Artificial
              </span>
              <time dateTime="2026-04-05" className="text-sm text-muted-foreground">
                5 de abril de 2026
              </time>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              La IA ya no espera órdenes: qué son los agentes autónomos y qué significan para tu empresa
            </h1>
          </div>
        </section>

        {/* Contenido del artículo */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Hasta hace poco, la inteligencia artificial era como una calculadora muy lista: le preguntabas algo y te respondía. Ahora ha dado un paso más. Los llamados <strong className="text-foreground">agentes de IA</strong> no esperan instrucciones: identifican una tarea, la planifican y la ejecutan solos. Y lo que parecía ciencia ficción hace dos años ya lo están usando empresas de todos los tamaños.
              </p>

              {/* Sección 1 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">¿Qué es exactamente un agente de IA?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Un agente de IA es un programa que puede tomar decisiones y actuar de forma autónoma para completar un objetivo. No solo responde preguntas: puede buscar información, redactar correos, actualizar registros, gestionar tickets de soporte o coordinar tareas entre varios sistemas, todo sin que nadie pulse un botón.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La diferencia con la IA que conocías es que <strong className="text-foreground">actúa</strong>, no solo contesta. Piensa en él como un empleado digital que trabaja en segundo plano y solo te avisa cuando necesita tu aprobación o cuando ha terminado.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Los últimos modelos han reducido notablemente los errores gracias al «pensamiento adaptativo» —un mecanismo interno que revisa el propio razonamiento antes de actuar—. Según{" "}
                  <a href="https://bostoninstituteofanalytics.org/blog/agentic-ai-weekly-roundup-march-29-april-3-2026-biggest-breakthroughs-risks-trends/" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors">
                    datos recientes
                  </a>
                  , los fallos han caído un 40% respecto a generaciones anteriores.
                </p>
              </div>

              {/* Sección 2 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">El mercado ya lo ha decidido: esto va en serio</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  No hablamos de tendencias futuras. Según una{" "}
                  <a href="https://crewai.com/blog/the-state-of-agentic-ai-in-2026" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors">
                    encuesta de CrewAI a 500 directivos
                  </a>
                  , el 100% de las grandes empresas planea ampliar su uso de agentes de IA en 2026. El 65% ya los tiene en marcha y el 31% de sus flujos de trabajo internos ya están automatizados.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Para una PYME, eso se traduce en algo muy concreto: tareas repetitivas que hoy ocupan horas de tu equipo pueden delegarse a un agente que las ejecuta, las registra y te informa del resultado.
                </p>
              </div>

              {/* Sección 3 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">Lo que debes tener en cuenta antes de lanzarte</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La oportunidad es real, pero también lo son los riesgos. El principal es la gobernanza: saber qué están haciendo tus agentes, qué datos manejan y cuándo necesitan supervisión humana.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  En Europa, las obligaciones del AI Act empiezan a aplicarse progresivamente. No es para alarmar: es para recordar que antes de automatizar, conviene definir quién revisa qué y hasta dónde llega la autonomía del sistema.
                </p>
              </div>

              {/* Sección 4 — CTA visual */}
              <div className="mb-10 bg-accent/5 border border-accent/20 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Qué puedes hacer tú</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Si diriges una empresa de entre 10 y 50 personas, no necesitas un departamento de IA para empezar:
                </p>
                <ul className="space-y-3">
                  {[
                    { bold: "Identifica una tarea repetitiva", text: "con pasos claros: clasificar correos, generar informes semanales, responder FAQs de clientes." },
                    { bold: "Prueba herramientas como Microsoft Copilot", text: "(ya integradas en el paquete 365) o soluciones específicas para tu sector." },
                    { bold: "Define límites claros:", text: "qué puede hacer el agente solo y qué debe consultarte antes de ejecutar." },
                    { bold: "Empieza pequeño:", text: "un agente que funciona bien en una tarea vale más que diez a medias." },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center font-bold">{i + 1}</span>
                      <span><strong className="text-foreground">{item.bold}</strong> {item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cierre */}
              <p className="text-lg text-foreground font-medium leading-relaxed border-l-4 border-accent pl-5">
                La IA agéntica no es el futuro. Es lo que está pasando ahora mismo. Las empresas que aprendan a trabajar con ella ganarán tiempo, reducirán errores y podrán crecer sin necesidad de contratar proporcionalmente.
              </p>

            </article>

            {/* Volver al blog */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                <ArrowLeft size={16} /> Ver todos los artículos
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
