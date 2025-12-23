import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Política de Privacidad | Riberdigital",
  description: "Política de Privacidad de Riberdigital - Consultoría Digital",
}

export default function PrivacidadPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Política de Privacidad</h1>
            <p className="text-muted-foreground">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Responsable del tratamiento</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                El responsable del tratamiento de tus datos personales es:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li><strong>Identidad:</strong> Riberdigital</li>
                <li><strong>Email de contacto:</strong> contacto@riberdigital.es</li>
                <li><strong>Teléfono:</strong> +34 652675497</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Datos que recopilamos</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Recopilamos los siguientes datos personales cuando nos contactas a través de nuestro formulario:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Nombre completo</li>
                <li>Nombre de empresa</li>
                <li>Dirección de correo electrónico</li>
                <li>Mensaje o consulta</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Finalidad del tratamiento</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Tus datos serán tratados para las siguientes finalidades:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Responder a tus consultas y solicitudes de información</li>
                <li>Gestionar y mantener la relación comercial</li>
                <li>Enviarte propuestas comerciales relacionadas con nuestros servicios (solo si nos das tu consentimiento)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Base legal</h2>
              <p className="text-muted-foreground leading-relaxed">
                El tratamiento de tus datos se basa en:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Tu consentimiento expreso al enviarnos el formulario de contacto</li>
                <li>El interés legítimo en responder a tus consultas</li>
                <li>La ejecución de medidas precontractuales cuando solicitas información sobre nuestros servicios</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Conservación de datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conservaremos tus datos personales durante el tiempo necesario para gestionar tu consulta y, en su caso, durante el periodo de la relación comercial. Una vez finalizada la relación, mantendremos tus datos bloqueados durante los plazos legalmente exigibles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Destinatarios</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tus datos no serán cedidos a terceros, salvo obligación legal. Utilizamos proveedores de servicios de alojamiento web que pueden tener acceso a datos como encargados del tratamiento, comprometidos contractualmente a cumplir con el RGPD.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Tus derechos</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Tienes derecho a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre ti</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos</li>
                <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos</li>
                <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento</li>
                <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Para ejercer estos derechos, puedes contactarnos en: <a href="mailto:contacto@riberdigital.es" className="text-accent hover:underline">contacto@riberdigital.es</a>
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si consideras que no hemos tratado tus datos conforme a la normativa.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Medidas de seguridad</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales contra el acceso no autorizado, la pérdida, destrucción o alteración. Utilizamos conexiones seguras (HTTPS) y sistemas de almacenamiento cifrados.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" id="cookies">9. Política de Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Este sitio web utiliza cookies para mejorar la experiencia del usuario y el funcionamiento del sitio.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">¿Qué son las cookies?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan para que el sitio funcione correctamente, para mejorar su rendimiento y para obtener información sobre cómo interactúas con él.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Tipos de cookies que utilizamos</h3>
              
              <div className="ml-4 space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Cookies técnicas (necesarias)</h4>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Son imprescindibles para el correcto funcionamiento del sitio web. Permiten la navegación y el uso de las diferentes opciones o servicios que existen en ella.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Estas cookies no requieren tu consentimiento previo.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Cookies de preferencias</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Permiten recordar información para que accedas al sitio con determinadas características (idioma, región, tema claro/oscuro, etc.).
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Cookies analíticas</h4>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Si en el futuro implementamos cookies analíticas, serán utilizadas para realizar análisis estadísticos del uso del sitio, medir el tráfico y el rendimiento. Estos datos nos ayudarían a mejorar el contenido y la experiencia del usuario.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Estas cookies requieren tu consentimiento previo.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Gestión de cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Puedes configurar tu navegador para rechazar cookies o para que te avise cuando se envíen. Sin embargo, algunas funcionalidades del sitio pueden verse afectadas si deshabilitas las cookies técnicas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Instrucciones para gestionar cookies en los navegadores principales:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft Edge</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Safari</a></li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Actualizaciones de la política de cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Podemos actualizar esta política de cookies cuando implementemos nuevas funcionalidades. Te recomendamos revisar esta página periódicamente para estar informado sobre cómo utilizamos las cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Modificaciones</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nos reservamos el derecho a modificar esta Política de Privacidad. Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente.
              </p>
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-muted-foreground leading-relaxed">
                Si tienes cualquier duda sobre nuestra Política de Privacidad, no dudes en contactarnos en{" "}
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
