import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Riber<span className="text-accent">digital</span>
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Soluciones digitales para hacer tu empresa más eficiente
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/servicios"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="/contacto"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/privacidad"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terminos"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Riberdigital. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
