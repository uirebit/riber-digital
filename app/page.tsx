import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "ribersistemas | Consultor técnico independiente para PYMEs",
  },
  description:
    "Resuelvo problemas de operaciones, ventas y marketing construyendo software e IA a medida. Sin agencias, sin subcontratas, sin PowerPoints. Primera llamada gratuita.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ribersistemas | Consultor técnico independiente para PYMEs",
    description:
      "Resuelvo problemas de operaciones, ventas y marketing construyendo software e IA a medida. Sin agencias, sin subcontratas, sin PowerPoints.",
    url: "https://ribersistemas.es",
  },
}

// ─── Shared style helpers ────────────────────────────────────────────────────

const TEXT_PRIMARY = { color: "#e6edf7" } as const
const TEXT_SECONDARY = { color: "#9fb0c8" } as const
const TEXT_MUTED = { color: "rgba(159, 176, 200, 0.7)" } as const
const BORDER_SUBTLE = { border: "0.5px solid #26324a" } as const
const CARD_STYLE = {
  backgroundColor: "#1c2740",
  border: "0.5px solid #26324a",
  borderRadius: "10px",
} as const

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="min-h-[90vh] flex items-center"
          style={{ backgroundColor: "#121a2b" }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center w-full">
            <h1
              className="mb-8 leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              <span
                className="block text-[32px] sm:text-[44px] lg:text-[52px] font-normal"
                style={TEXT_PRIMARY}
              >
                Tu problema operativo,
              </span>
              <span
                className="block text-[32px] sm:text-[44px] lg:text-[52px]"
                style={{
                  color: "rgba(230, 237, 247, 0.38)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                entregado resuelto
              </span>
              <span
                className="block text-[32px] sm:text-[44px] lg:text-[52px] font-normal"
                style={TEXT_PRIMARY}
              >
                en semanas, no en meses.
              </span>
            </h1>

            <p
              className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
              style={TEXT_SECONDARY}
            >
              Consultor técnico independiente. Resuelvo problemas de operaciones, ventas y marketing
              construyendo software e IA a medida — sin agencias, sin subcontratas, sin PowerPoints.
            </p>

            <div className="flex flex-col sm:flex-row gap-[10px] justify-center mb-12">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#ffffff", color: "#121a2b" }}
              >
                Cuéntame tu problema →
              </Link>
              <a
                href="#casos"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-medium transition-colors hover:text-[#e6edf7]"
                style={{
                  ...BORDER_SUBTLE,
                  color: "#9fb0c8",
                }}
              >
                Ver casos reales
              </a>
            </div>

            <p
              className="text-xs tracking-[0.08em]"
              style={TEXT_MUTED}
            >
              3 proyectos en producción&nbsp;&nbsp;·&nbsp;&nbsp;ES · RO · EN&nbsp;&nbsp;·&nbsp;&nbsp;Respuesta en 24h
            </p>
          </div>
        </section>

        {/* ── 2. ¿ESTO TE SUENA? ──────────────────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h2
                className="text-[26px] sm:text-[32px] lg:text-[40px] font-normal mb-4"
                style={{ ...TEXT_PRIMARY, letterSpacing: "-0.02em" }}
              >
                ¿Esto te suena?
              </h2>
              <p className="text-base font-normal" style={TEXT_SECONDARY}>
                Si te identificas con alguno de estos, probablemente puedo ayudarte.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Pierdes horas gestionando pedidos con Excel y PDFs, y sabes que tiene que haber una forma mejor.",
                "Tu tienda online vende, pero sospechas que estás dejando dinero sobre la mesa con los clientes que ya tienes en la base de datos.",
                "Abres un negocio nuevo y no tienes ni web, ni presencia digital, ni tiempo para pelearte con diez herramientas distintas.",
                "Tienes un proceso repetitivo que come horas a tu equipo cada semana y que podría estar automatizado.",
              ].map((text, i) => (
                <div key={i} className="p-6" style={CARD_STYLE}>
                  <p className="text-base leading-relaxed font-normal" style={TEXT_SECONDARY}>
                    "{text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. CÓMO TRABAJO ─────────────────────────────────────────────── */}
        <section id="como-trabajo" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <h2
                className="text-[26px] sm:text-[32px] lg:text-[40px] font-normal mb-4"
                style={{ ...TEXT_PRIMARY, letterSpacing: "-0.02em" }}
              >
                Cómo trabajo
              </h2>
              <p className="text-base font-normal" style={TEXT_SECONDARY}>
                Tres pasos. Sin sorpresas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              {[
                {
                  num: "01",
                  title: "Entendemos tu problema.",
                  body: "Una llamada de 30 minutos, gratis y sin compromiso. Me cuentas qué te frena. Te digo si puedo ayudarte y cómo. Si no puedo, te digo a quién llamar.",
                },
                {
                  num: "02",
                  title: "Te paso una propuesta concreta.",
                  body: "Alcance cerrado, precio fijo, plazo. Sin \u201cdepende de\u201d, sin estimaciones infladas, sin letra peque\u00f1a.",
                },
                {
                  num: "03",
                  title: "Lo construyo y te lo entrego funcionando.",
                  body: "En tu infraestructura, documentado, con sesión de traspaso. El sistema es tuyo al 100% desde el día uno.",
                },
              ].map(({ num, title, body }) => (
                <div key={num} className="flex flex-col gap-4">
                  <span
                    className="text-[56px] font-normal leading-none select-none"
                    style={{ ...TEXT_MUTED, letterSpacing: "-0.02em" }}
                  >
                    {num}
                  </span>
                  <h3
                    className="text-[20px] font-medium leading-snug"
                    style={TEXT_PRIMARY}
                  >
                    {title}
                  </h3>
                  <p className="text-base leading-relaxed font-normal" style={TEXT_SECONDARY}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. CASOS REALES ─────────────────────────────────────────────── */}
        <section id="casos" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <h2
                className="text-[26px] sm:text-[32px] lg:text-[40px] font-normal mb-4"
                style={{ ...TEXT_PRIMARY, letterSpacing: "-0.02em" }}
              >
                Sistemas reales. Resultados medidos.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              {/* Caso 1 — Restauración */}
              <div className="p-6 flex flex-col gap-5" style={CARD_STYLE}>
                <p
                  className="text-[11px] font-medium tracking-[0.08em] uppercase"
                  style={TEXT_MUTED}
                >
                  Restauración · Gestión de reseñas con IA
                </p>
                <div>
                  {/* TODO: rellenar por Tiberiu antes del deploy */}
                  <p
                    className="text-[36px] font-medium leading-none mb-1"
                    style={{ ...TEXT_PRIMARY, letterSpacing: "-0.02em" }}
                  >
                    [PENDIENTE]
                  </p>
                  <p className="text-sm font-normal" style={TEXT_MUTED}>
                    [descripción de la cifra — ej: "de reseñas respondidas en menos de 2 h"]
                  </p>
                </div>
                <div
                  className="pt-5 flex flex-col gap-4"
                  style={{ borderTop: "0.5px solid #26324a" }}
                >
                  <div>
                    <p
                      className="text-[11px] font-medium tracking-[0.08em] uppercase mb-2"
                      style={TEXT_MUTED}
                    >
                      Problema
                    </p>
                    <p className="text-sm leading-relaxed font-normal" style={TEXT_SECONDARY}>
                      Un restaurante no tenía capacidad de responder sus reseñas de Google a tiempo.
                      Cada reseña sin respuesta era un cliente potencial yéndose a la competencia.
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[11px] font-medium tracking-[0.08em] uppercase mb-2"
                      style={TEXT_MUTED}
                    >
                      Solución
                    </p>
                    <p className="text-sm leading-relaxed font-normal" style={TEXT_SECONDARY}>
                      Sistema de respuesta automática con IA montado en AWS, que mantiene el tono
                      de la marca y responde en minutos sin intervención humana.
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[11px] font-medium tracking-[0.08em] uppercase mb-2"
                      style={TEXT_MUTED}
                    >
                      Resultado
                    </p>
                    {/* TODO: rellenar por Tiberiu antes del deploy */}
                    <p className="text-sm leading-relaxed font-normal" style={TEXT_SECONDARY}>
                      [PENDIENTE — cifra concreta antes/después]
                    </p>
                  </div>
                </div>
              </div>

              {/* Caso 2 — Ecommerce */}
              <div className="p-6 flex flex-col gap-5" style={CARD_STYLE}>
                <p
                  className="text-[11px] font-medium tracking-[0.08em] uppercase"
                  style={TEXT_MUTED}
                >
                  Ecommerce · Automatización de email marketing
                </p>
                <div>
                  {/* TODO: rellenar por Tiberiu antes del deploy */}
                  <p
                    className="text-[36px] font-medium leading-none mb-1"
                    style={{ ...TEXT_PRIMARY, letterSpacing: "-0.02em" }}
                  >
                    [PENDIENTE]
                  </p>
                  <p className="text-sm font-normal" style={TEXT_MUTED}>
                    [descripción de la cifra — ej: "7.500 contactos segmentados"]
                  </p>
                </div>
                <div
                  className="pt-5 flex flex-col gap-4"
                  style={{ borderTop: "0.5px solid #26324a" }}
                >
                  <div>
                    <p
                      className="text-[11px] font-medium tracking-[0.08em] uppercase mb-2"
                      style={TEXT_MUTED}
                    >
                      Problema
                    </p>
                    <p className="text-sm leading-relaxed font-normal" style={TEXT_SECONDARY}>
                      Una tienda online con miles de clientes en su base de datos que no estaba
                      aprovechando. Cada venta dependía de captar clientes nuevos, ignorando a
                      los que ya habían comprado.
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[11px] font-medium tracking-[0.08em] uppercase mb-2"
                      style={TEXT_MUTED}
                    >
                      Solución
                    </p>
                    <p className="text-sm leading-relaxed font-normal" style={TEXT_SECONDARY}>
                      Análisis y segmentación GDPR de la base de contactos, templates HTML por flujo
                      (bienvenida, carrito abandonado, reactivación, VIP, post-compra), 5 automatizaciones
                      configuradas en TheMarketer + Gomag.
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[11px] font-medium tracking-[0.08em] uppercase mb-2"
                      style={TEXT_MUTED}
                    >
                      Resultado
                    </p>
                    {/* TODO: rellenar por Tiberiu antes del deploy */}
                    <p className="text-sm leading-relaxed font-normal" style={TEXT_SECONDARY}>
                      [PENDIENTE — cifra concreta antes/después]
                    </p>
                  </div>
                </div>
              </div>

              {/* Caso 3 — Logística */}
              <div className="p-6 flex flex-col gap-5" style={CARD_STYLE}>
                <p
                  className="text-[11px] font-medium tracking-[0.08em] uppercase"
                  style={TEXT_MUTED}
                >
                  Logística · Sistema de gestión de pedidos
                </p>
                <div>
                  {/* TODO: rellenar por Tiberiu antes del deploy */}
                  <p
                    className="text-[36px] font-medium leading-none mb-1"
                    style={{ ...TEXT_PRIMARY, letterSpacing: "-0.02em" }}
                  >
                    [PENDIENTE]
                  </p>
                  <p className="text-sm font-normal" style={TEXT_MUTED}>
                    [descripción de la cifra — ej: "0 errores de transcripción"]
                  </p>
                </div>
                <div
                  className="pt-5 flex flex-col gap-4"
                  style={{ borderTop: "0.5px solid #26324a" }}
                >
                  <div>
                    <p
                      className="text-[11px] font-medium tracking-[0.08em] uppercase mb-2"
                      style={TEXT_MUTED}
                    >
                      Problema
                    </p>
                    <p className="text-sm leading-relaxed font-normal" style={TEXT_SECONDARY}>
                      Una empresa gestionaba sus pedidos desde PDFs y hojas de Excel, con errores de
                      transcripción y retrasos en el picking que costaban tiempo y dinero cada día.
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[11px] font-medium tracking-[0.08em] uppercase mb-2"
                      style={TEXT_MUTED}
                    >
                      Solución
                    </p>
                    <p className="text-sm leading-relaxed font-normal" style={TEXT_SECONDARY}>
                      Sistema completo de gestión de pedidos en AWS con carga automática desde PDF,
                      gestión de picking y trazabilidad del proceso end-to-end.
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[11px] font-medium tracking-[0.08em] uppercase mb-2"
                      style={TEXT_MUTED}
                    >
                      Resultado
                    </p>
                    {/* TODO: rellenar por Tiberiu antes del deploy */}
                    <p className="text-sm leading-relaxed font-normal" style={TEXT_SECONDARY}>
                      [PENDIENTE — cifra concreta antes/después]
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 5. QUIÉN SOY ────────────────────────────────────────────────── */}
        <section
          id="sobre-mi"
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#121a2b" }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Foto */}
              <div className="flex justify-center lg:justify-end">
                <div
                  className="w-64 h-64 lg:w-72 lg:h-72 rounded-[10px] overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: "#1c2740", ...BORDER_SUBTLE }}
                >
                  <Image
                    src="/founder.png"
                    alt="Tiberiu, consultor técnico independiente"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Texto */}
              <div>
                <h2
                  className="text-[26px] sm:text-[32px] font-normal mb-6"
                  style={{ ...TEXT_PRIMARY, letterSpacing: "-0.02em" }}
                >
                  Hola, soy Tiberiu.
                </h2>
                <p className="text-base leading-relaxed font-normal mb-6" style={TEXT_SECONDARY}>
                  Consultor técnico independiente basado en España. Trabajo en español, rumano e inglés,
                  con clientes de ambos lados de Europa. Lo que me mueve: resolver problemas reales,
                  no coordinarlos; que el código funcione en producción, no en slides; y trabajar
                  directamente con el dueño del negocio, sin capas intermedias.
                </p>
                <p className="text-sm font-normal" style={TEXT_MUTED}>
                  Con sede en España&nbsp;&nbsp;·&nbsp;&nbsp;Trabajo en ES, RO, EN&nbsp;&nbsp;·&nbsp;&nbsp;Disponible para proyectos puntuales y retainers mensuales
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── 6. CTA FINAL ────────────────────────────────────────────────── */}
        <section
          className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-center"
          style={{ backgroundColor: "#121a2b" }}
        >
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-[26px] sm:text-[36px] lg:text-[44px] font-normal mb-6"
              style={{ ...TEXT_PRIMARY, letterSpacing: "-0.02em" }}
            >
              ¿Y si lo resolvemos?
            </h2>
            <p className="text-base sm:text-lg leading-relaxed font-normal mb-10" style={TEXT_SECONDARY}>
              30 minutos. Sin compromiso. Te digo exactamente dónde estás perdiendo tiempo y dinero.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#ffffff", color: "#121a2b" }}
            >
              Cuéntame tu problema →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
