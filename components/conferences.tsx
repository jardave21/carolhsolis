"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Clock } from "lucide-react"

export default function Conferences() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const conferences = [
    {
      title: "La Voz de la Mujer Líder",
      outcomes: [
        "Descubre cómo amplificar tu mensaje",
        "Desarrolla confianza al hablar público",
        "Crea tu narrativa de liderazgo",
      ],
      duration: "90 minutos",
      audience: "Mujeres empresarias y líderes",
      tag: "Liderazgo",
    },
    {
      title: "Escribir tu Historia",
      outcomes: [
        "Encuentra autenticidad en tus palabras",
        "Transforma experiencias en narrativas",
        "Conecta emocionalmente con tu audiencia",
      ],
      duration: "120 minutos",
      audience: "Mujeres de todas las edades",
      tag: "Comunicación",
    },
    {
      title: "Empoderamiento a Través de la Palabra",
      outcomes: [
        "Usa tu voz para crear cambio",
        "Desarrolla mensajes con propósito",
        "Inspira a otros con tus historias",
      ],
      duration: "100 minutos",
      audience: "Comunidades y grupos corporativos",
      tag: "Empoderamiento",
    },
  ]

  return (
    <section id="conferences" ref={ref} className="py-20 px-4 md:px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">Conferencias</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Charlas diseñadas para inspirar, transformar y empoderar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {conferences.map((conf, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-6 md:p-8 hover-elevate border border-border transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Tag */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  {conf.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-poppins text-foreground mb-4">{conf.title}</h3>

              {/* Outcomes */}
              <div className="space-y-2 mb-6">
                {conf.outcomes.map((outcome, i) => (
                  <div key={i} className="flex gap-2 text-sm text-foreground">
                    <span className="text-secondary font-bold">•</span>
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>

              {/* Meta */}
              <div className="border-t border-border pt-4 mb-6 space-y-2 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{conf.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{conf.audience}</span>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium text-sm">
                Solicitar información
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
