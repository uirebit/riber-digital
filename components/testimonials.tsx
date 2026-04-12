import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  quote: string
  name: string
  role: string
  sector: string
  service: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Antes las reseñas de Google se nos acumulaban sin responder, no había tiempo. Ahora el sistema las lee solo, nos propone una respuesta y en dos clics está publicada. Respondemos el 100% de las reseñas y nos lleva cinco minutos a la semana.",
    name: "Mirabela",
    role: "Propietaria",
    sector: "Restauración",
    service: "Automatización con IA",
  },
  {
    quote:
      "Llevábamos años gestionando los pedidos con papel y teléfono. Ahora los PDFs entran solos al sistema y los operarios ven en pantalla exactamente qué tienen que preparar. Se han eliminado los errores de picking y el proceso es mucho más rápido.",
    name: "Antonio",
    role: "Responsable de almacén",
    sector: "Distribución",
    service: "Digitalización de procesos",
  },
  {
    quote:
      "Hacíamos los envíos de email de forma manual, sin saber bien a qué clientes impactaba cada campaña. Ahora el sistema segmenta solo y cada cliente recibe el mensaje adecuado. Las campañas funcionan mejor y no tenemos que pensar en ello.",
    name: "Adrian",
    role: "Propietario",
    sector: "E-commerce · Rumanía",
    service: "Automatización de marketing con IA",
  },
]

interface TestimonialsProps {
  /** Show only the first N testimonials (default: all) */
  limit?: number
  /** Compact single-card layout for sidebars */
  compact?: boolean
}

export function Testimonials({ limit, compact = false }: TestimonialsProps) {
  const items = limit ? testimonials.slice(0, limit) : testimonials

  if (compact) {
    const t = items[0]
    return (
      <Card className="border-border bg-accent/5">
        <CardContent className="pt-6">
          <Quote className="w-5 h-5 text-accent mb-3" />
          <p className="text-sm text-muted-foreground leading-relaxed italic mb-4">&ldquo;{t.quote}&rdquo;</p>
          <div>
            <p className="text-sm font-semibold text-foreground">{t.name}</p>
            <p className="text-xs text-muted-foreground">
              {t.role} · {t.sector}
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((t, i) => (
        <Card key={i} className="border-border bg-card flex flex-col">
          <CardContent className="pt-6 flex flex-col flex-1">
            <Quote className="w-6 h-6 text-accent mb-4 shrink-0" />
            <p className="text-muted-foreground leading-relaxed italic flex-1 mb-6">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="border-t border-border pt-4">
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
              <p className="text-xs text-accent mt-1">{t.sector}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
