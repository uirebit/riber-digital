import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog | Digitalización y Automatización para PYMEs - Riberdigital",
  description: "Artículos prácticos sobre automatización, digitalización e inteligencia artificial para PYMEs españolas. Guías reales para optimizar tu negocio.",
  keywords: [
    "blog digitalización empresas",
    "automatización para pymes",
    "inteligencia artificial empresas España",
    "consejos transformación digital",
    "blog consultoría digital España",
  ],
  alternates: {
    canonical: 'https://www.riberdigital.es/blog',
  },
  openGraph: {
    title: "Blog de Consultoría Digital | Riberdigital",
    description: "Guías prácticas sobre automatización, digitalización e IA para PYMEs en España.",
    url: 'https://www.riberdigital.es/blog',
    type: 'website',
    siteName: 'Riberdigital',
  },
}

const blogPosts = [
  {
    title: "La IA ya no espera órdenes: qué son los agentes autónomos y qué significan para tu empresa",
    excerpt:
      "Los agentes de IA ya no solo responden preguntas: identifican tareas, las planifican y las ejecutan solos. Descubre qué significa esto para tu PYME.",
    date: "5 de abril, 2026",
    category: "Inteligencia Artificial",
    slug: "ia-agentes-autonomos-pymes",
  },
  {
    title: "5 procesos que toda PYME debería automatizar en 2025",
    excerpt:
      "Los agentes de IA ya no solo responden preguntas: identifican tareas, las planifican y las ejecutan solos. Descubre qué significa esto para tu PYME.",
    date: "5 de abril, 2026",
    dateISO: "2026-04-05",
    category: "Inteligencia Artificial",
    slug: "ia-agentes-autonomos-pymes",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Blog Riberdigital",
  "description": "Artículos prácticos sobre automatización, digitalización e inteligencia artificial para PYMEs españolas.",
  "url": "https://www.riberdigital.es/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Riberdigital",
    "url": "https://www.riberdigital.es",
  },
  "blogPost": blogPosts.map((post) => ({
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.dateISO,
    "url": `https://www.riberdigital.es/blog/${post.slug}`,
    "author": {
      "@type": "Organization",
      "name": "Riberdigital",
    },
  })),
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="border-border bg-card hover:shadow-lg transition-shadow flex flex-col h-full">
                    <CardContent className="pt-6 flex flex-col flex-grow">
                      <div className="inline-block mb-3">
                        <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-card-foreground mb-3 leading-snug group-hover:text-accent transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <time dateTime={post.dateISO} className="text-sm text-muted-foreground">
                          {post.date}
                        </time>
                        <span className="text-sm font-medium text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                          Leer artículo <ArrowRight size={16} />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
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
                aria-label="Tu dirección de email"
              />
              <button className="px-6 py-2 rounded-md bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
