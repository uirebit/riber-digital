"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { href: "/#casos", label: "Casos" },
  { href: "/#como-trabajo", label: "Cómo trabajo" },
  { href: "/#sobre-mi", label: "Sobre mí" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(5, 7, 12, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "0.5px solid rgba(232, 234, 237, 0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-base font-medium transition-opacity hover:opacity-80"
            style={{ color: "#e8eaed", letterSpacing: "-0.02em" }}
          >
            ribersistemas
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm transition-colors hover:text-[#e8eaed]"
                style={{ color: "rgba(232, 234, 237, 0.68)" }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="px-5 py-2 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#ffffff", color: "#0b1220" }}
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden transition-opacity hover:opacity-70"
            aria-label="Toggle menu"
            style={{ color: "#e8eaed" }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden pb-6 pt-4 space-y-4 border-t"
            style={{ borderColor: "rgba(232, 234, 237, 0.15)" }}
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block text-sm py-1 transition-colors hover:text-[#e8eaed]"
                style={{ color: "rgba(232, 234, 237, 0.68)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="inline-block mt-2 px-5 py-2 rounded-full text-sm font-medium"
              style={{ backgroundColor: "#ffffff", color: "#0b1220" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
