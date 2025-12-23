import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Riberdigital",
  description: "Términos y Condiciones de uso de Riberdigital - Consultoría Digital",
}

export default function TerminosPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Términos y Condiciones</h1>
            <p className="text-muted-foreground">Última actualización: 23 de diciembre de 2025</p>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Información general</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Estos Términos y Condiciones regulan el uso del sitio web de Riberdigital y los servicios de consultoría digital que ofrecemos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Al acceder y utilizar este sitio web, aceptas estar vinculado por estos términos. Si no estás de acuerdo, te rogamos que no utilices nuestros servicios.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Datos identificativos</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li><strong>Denominación:</strong> Riberdigital</li>
                <li><strong>Email:</strong> contacto@riberdigital.es</li>
                <li><strong>Teléfono:</strong> +34 652675497</li>
                <li><strong>Actividad:</strong> Consultoría digital, desarrollo web y automatización de procesos</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso del sitio web</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                El usuario se compromete a utilizar el sitio web de forma lícita, respetando estos Términos y Condiciones y la legislación vigente.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Queda prohibido:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Utilizar el sitio con fines ilegales o no autorizados</li>
                <li>Intentar acceder a áreas restringidas del sistema</li>
                <li>Realizar acciones que puedan dañar, sobrecargar o deteriorar el sitio web</li>
                <li>Utilizar el contenido del sitio sin autorización expresa</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Propiedad intelectual</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño, código) son propiedad de Riberdigital o de sus respectivos titulares, y están protegidos por las leyes de propiedad intelectual e industrial.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Queda prohibida la reproducción, distribución, comunicación pública o transformación de estos contenidos sin autorización previa y por escrito del titular.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Servicios de consultoría</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Los servicios de consultoría digital que ofrecemos se regirán por las condiciones específicas acordadas en cada propuesta comercial o contrato particular.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Las propuestas incluirán:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Alcance del proyecto</li>
                <li>Plazos de entrega</li>
                <li>Precio y forma de pago</li>
                <li>Condiciones de mantenimiento y soporte</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Presupuestos y contratación</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Los presupuestos proporcionados tienen una validez de 30 días desde su emisión, salvo que se indique lo contrario.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                La contratación de servicios se formalizará mediante:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Aceptación expresa del presupuesto por parte del cliente</li>
                <li>Firma del contrato o documento de aceptación correspondiente</li>
                <li>Pago de la señal o primer pago según lo acordado</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Precios y pagos</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Los precios indicados en las propuestas incluyen IVA y son válidos según las condiciones especificadas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Las formas de pago aceptadas son:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Transferencia bancaria</li>
                <li>Pago fraccionado según hitos del proyecto (si aplica)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                El retraso en los pagos puede conllevar la suspensión temporal de los servicios hasta regularizar la situación.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Modificaciones del servicio</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cualquier modificación del alcance del proyecto inicialmente acordado deberá ser comunicada y aceptada por ambas partes. Las modificaciones pueden suponer ajustes en el precio y plazo de entrega originales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Garantías y responsabilidades</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Riberdigital se compromete a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Entregar los servicios contratados con el nivel de calidad acordado</li>
                <li>Cumplir con los plazos establecidos, salvo causa de fuerza mayor</li>
                <li>Proporcionar soporte técnico según lo acordado en el contrato</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                No nos hacemos responsables de:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Pérdidas derivadas del mal uso del producto o servicio entregado</li>
                <li>Problemas causados por modificaciones realizadas por terceros sin nuestra supervisión</li>
                <li>Interrupciones del servicio por causas ajenas a nuestra gestión (proveedores externos, etc.)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Derecho de desistimiento</h2>
              <p className="text-muted-foreground leading-relaxed">
                En servicios personalizados o iniciados con tu consentimiento expreso, el derecho de desistimiento puede verse limitado conforme a la legislación vigente. Las condiciones específicas se detallarán en el contrato particular.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Confidencialidad</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ambas partes se comprometen a mantener la confidencialidad de la información intercambiada durante la relación comercial. Esta obligación se mantendrá incluso después de la finalización del proyecto.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Resolución de conflictos</h2>
              <p className="text-muted-foreground leading-relaxed">
                En caso de controversia, ambas partes intentarán resolverla de forma amistosa. Si no fuera posible, será competente la jurisdicción correspondiente según la legislación española.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Limitación de responsabilidad</h2>
              <p className="text-muted-foreground leading-relaxed">
                Riberdigital no se hace responsable de posibles errores u omisiones en el contenido del sitio web, ni de daños indirectos o consecuenciales derivados del uso de nuestros servicios, salvo en casos de dolo o negligencia grave.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Enlaces externos</h2>
              <p className="text-muted-foreground leading-relaxed">
                El sitio web puede contener enlaces a sitios de terceros. Riberdigital no se responsabiliza del contenido, políticas de privacidad o prácticas de estos sitios externos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Modificaciones</h2>
              <p className="text-muted-foreground leading-relaxed">
                Riberdigital se reserva el derecho a modificar estos Términos y Condiciones en cualquier momento. Los cambios serán efectivos desde su publicación en el sitio web.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">16. Legislación aplicable</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estos Términos y Condiciones se rigen por la legislación española. Para cualquier controversia, será competente la jurisdicción que corresponda según dicha legislación.
              </p>
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-muted-foreground leading-relaxed">
                Para cualquier consulta sobre estos Términos y Condiciones, puedes contactarnos en{" "}
                <a href="mailto:contacto@riberdigital.es" className="text-accent hover:underline">
                  contacto@riberdigital.es
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
