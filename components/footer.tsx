"use client"

import Link from "next/link"
import { Instagram, Youtube, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-secondary block mb-2">
              LV
            </Link>
            <p className="text-white/70">
              Conferencista y tallerista comprometida con empoderar a las mujeres a través de la palabra.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-white mb-4">Navegación</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#conferences" className="hover:text-white transition-colors">
                  Conferencias
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-white transition-colors">
                  Talleres
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-white mb-4">Redes</h3>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="mailto:contact@tudominio.com" className="text-white/70 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-white/60 text-sm">
          <p>© {currentYear} Lucía Vargas. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
