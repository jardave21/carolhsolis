"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Music2 } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      {/* Top strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-14">
          {/* GRID principal */}
          <div
            className="
              grid gap-10 md:gap-12 lg:gap-16
              grid-cols-1 sm:grid-cols-2 md:grid-cols-12
            "
          >
            {/* Logo + descripción */}
            <div className="md:col-span-7 min-w-0 items-start">
              <Link href="/" className="inline-flex items-center gap-3 mb-5">
                <Image src="/logo.png" alt="Logo de Carol H. Solís" width={96} height={96} className="h-16 w-auto md:h-20 block shrink-0" priority={false} />
                <span className="sr-only">Ir al inicio</span>
              </Link>

              <div className="text-white/80 leading-relaxed tracking-[0.005em] max-w-prose font-open-sans">
                <p>
                  <strong className="font-extrabold text-white">Habla</strong>{" "}
                  con la fuerza de quien convierte la palabra en acto de resistencia,{" "}
                  <strong className="font-extrabold text-white">Observa</strong>{" "}
                  el mundo con mirada crítica y compasiva,{" "}
                  <strong className="font-extrabold text-white">Lleva</strong>{" "}
                  más de 25 años contando historias que transforman,{" "}
                  <strong className="font-extrabold text-white">Ama</strong>{" "}
                  la verdad aunque duela,{" "}
                  <strong className="font-extrabold text-white">Piensa</strong>{" "}
                  con libertad y sin miedo,{" "}
                  <strong className="font-extrabold text-white">Reconoce</strong>{" "}
                  en cada voz una posibilidad de cambio,{" "}
                  <strong className="font-extrabold text-white">Inspira</strong>{" "}
                  a mirar lo que otros evaden,{" "}
                  <strong className="font-extrabold text-white">Nombra</strong>{" "}
                  lo que el silencio intenta ocultar,{" "}
                  <strong className="font-extrabold text-white">Crea</strong>{" "}
                  espacios para el diálogo,{" "}
                  <strong className="font-extrabold text-white">Escucha</strong>{" "}
                  con empatía,{" "}
                  <strong className="font-extrabold text-white">Siente</strong>{" "}
                  cada historia como propia,{" "}
                  <strong className="font-extrabold text-white">Abraza</strong>{" "}
                  la diversidad y{" "}
                  <strong className="font-extrabold text-white">Sostiene</strong>{" "}
                  la convicción de que la palabra puede mover el mundo.
                </p>
              </div>
            </div>

            {/* Navegación */}
            <nav aria-label="Navegación del sitio" className="md:col-span-3 min-w-0">
              <h3 className="text-sm  uppercase tracking-wide text-white/70 mb-4 font-open-sans">
                Navegación
              </h3>
              <ul className="grid grid-cols-1 gap-2 text-white/80 font-open-sans">
                <li><a href="#home" className="hover:text-white hover:underline underline-offset-4 transition-colors font-open-sans">Inicio</a></li>
                <li><a href="#about" className="hover:text-white hover:underline underline-offset-4 transition-colors font-open-sans">Sobre mí</a></li>
                <li><a href="#topics" className="hover:text-white hover:underline underline-offset-4 transition-colors font-open-sans">Mis temas</a></li>
              </ul>
            </nav>

            {/* Contacto / Redes */}
            <div className="md:col-span-2 min-w-0">
              <h3 className="text-sm  uppercase tracking-wide text-white/70 mb-4">
                Contacto
              </h3>

              <address className="not-italic font-open-sans">
                <ul className="space-y-2 text-white/80 mb-6">
                  <li>
                    <a
                      href="mailto:hola@carolhsolis.com.mx"
                      className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap"
                    >
                      hola@carolhsolis.com.mx
                    </a>
                  </li>
                </ul>
              </address>

              <h4 className="text-sm  uppercase tracking-wide text-white/70 mb-3 font-anton">
                Redes
              </h4>

              {/* Íconos alineados en una fila */}
              <div className="flex items-center gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/carolhsolis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Carol H. Solís"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition"
                >
                  <Instagram className="h-5 w-5" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/carolhsolis/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de Carol H. Solís"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition"
                >
                  <Facebook className="h-5 w-5" />
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@carolhsolis"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok de Carol H. Solís"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition"
                >
                  <Music2 className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-black/10">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70 font-open-sans">
          <p className="order-2 md:order-1 font-open-sans">© {currentYear} Todos los derechos reservados.</p>

          <div className="order-1 md:order-2 flex items-center gap-2 font-open-sans">
            <span>Powered by</span>
            <a
              href="https://www.finviacorp.com/"
              className="font-medium hover:text-white hover:underline underline-offset-4 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Finviacorp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
