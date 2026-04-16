import Link from "next/link"

export function Footer() {
  return (
    <footer
      className="py-8"
      style={{
        backgroundColor: "#05070c",
        borderTop: "0.5px solid rgba(232, 234, 237, 0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p style={{ color: "rgba(232, 234, 237, 0.4)" }}>
            ribersistemas · © {new Date().getFullYear()}
          </p>
          <div
            className="flex items-center gap-6"
            style={{ color: "rgba(232, 234, 237, 0.4)" }}
          >
            <a
              href="https://www.linkedin.com/in/andrei-tiberiu-david/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#e8eaed]"
            >
              LinkedIn
            </a>
            {/* TODO: rellenar por Tiberiu antes del deploy — sustituir href y texto */}
            <a
              href="mailto:[PENDIENTE]"
              className="transition-colors hover:text-[#e8eaed]"
            >
              [email@pendiente.es]
            </a>
            <Link href="/privacidad" className="transition-colors hover:text-[#e8eaed]">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
