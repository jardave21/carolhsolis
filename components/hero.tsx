"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center pt-20 pb-12 px-4 md:px-6 bg-gradient-to-b from-background via-background to-background/80"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div>
              <h1 className="text-5xl md:text-6xl font-bold font-poppins text-foreground leading-tight">
                Carol H. Solís
                <span className="text-primary block text-3xl md:text-4xl font-normal">Periodista. Escritora. Voz</span>
              </h1>
              <p className="mt-6 text-lg text-muted font-inter leading-relaxed">
                Más de 20 años cubriendo periodismo, análisis y contenido con enfoque social. Especializada en la voz de
                las mujeres en medios y el poder del discurso público.
              </p>
            </div>

            {/* Value Bullets */}
            <div className="space-y-3 pt-4">
              {[
                { icon: "✓", text: "Periodismo de investigación y análisis" },
                { icon: "✓", text: "Empoderamiento femenino en medios" },
                { icon: "✓", text: "Discurso público con propósito" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-primary text-lg font-bold mt-0.5">{item.icon}</span>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="https://adiscusion.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-all"
              >
                adiscusion.com
              </a>
              <a
                href="https://instagram.com/carolhsolis"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border-2 border-primary text-primary rounded-full font-medium text-sm hover:bg-primary/5 transition-all"
              >
                @carolhsolis
              </a>
              <a
                href="https://podcast.dementes.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border-2 border-secondary text-secondary rounded-full font-medium text-sm hover:bg-secondary/5 transition-all"
              >
                Podcast
              </a>
            </div>

            {/* Trust Badge */}
            <div className="flex gap-6 pt-8 text-sm">
              <div>
                <span className="block text-2xl font-bold text-primary font-poppins">20+</span>
                <span className="text-muted">Años experiencia</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-secondary font-poppins">Medios</span>
                <span className="text-muted">Nacionales e internacionales</span>
              </div>
            </div>
          </div>

          {/* Right - Portrait with Glassmorphism */}
          <div
            className={`flex justify-center transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative w-72 h-96 md:w-80 md:h-full">
              {/* Glassmorphism Frame */}
              <div className="absolute inset-0 bg-white/30 backdrop-blur-lg rounded-3xl border border-white/50 overflow-hidden shadow-xl hover-elevate">
                <img src="/professional-woman-journalist-portrait.jpg" alt="Carol H. Solís" className="w-full h-full object-cover" />
              </div>

              {/* Accent Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
