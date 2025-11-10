"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Logo de Carol H. Solís"
                width={100}
                height={100}
                priority={false}
                className="h-20 w-auto"
              />
              <span className="sr-only">Ir al inicio</span>
            </Link>
            <p className="mt-3 text-white/70">
              Periodista y conferencista con más de 25 años de experiencia, reconocida por su enfoque en
              política, derechos humanos, feminismo y responsabilidad social.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navegación del sitio">
            <h3 className="font-bold text-white mb-4">Navegación</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">Sobre mí</a>
              </li>

            </ul>
          </nav>

          {/* Social */}
          <div>
            <h3 className="font-bold text-white mb-4">Redes</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/carolhsolis/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Carol H. Solís"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube de Carol H. Solís"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="mailto:carolhsolis@gmail.com"
                aria-label="Enviar correo a carolhsolis@gmail.com"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-white/60 text-sm">
          <p>© {currentYear} Todos los derechos reservados.</p>
          <div className="flex gap-2 mt-4 md:mt-0">
            <span>Powered by</span>
            <a
              href="https://finviacorp.com"
              className="hover:text-white transition-colors font-medium"
            >
              Finviacorp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
