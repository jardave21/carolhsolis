"use client"

import { useEffect, useRef, useState } from "react"
import { BookOpen, Users, Calendar } from "lucide-react"

export default function Workshops() {
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

  const workshops = [
    {
      title: "Escritura Reflexiva",
      level: "Principiante",
      format: "Online",
      spots: "5 cupos disponibles",
    },
    {
      title: "Narrativa Personal",
      level: "Intermedio",
      format: "Presencial",
      spots: "3 cupos disponibles",
    },
    {
      title: "Edición y Publicación",
      level: "Avanzado",
      format: "Híbrido",
      spots: "4 cupos disponibles",
    },
    {
      title: "Voz Auténtica en Redes",
      level: "Intermedio",
      format: "Online",
      spots: "2 cupos disponibles",
    },
    {
      title: "Storytelling para Líderes",
      level: "Avanzado",
      format: "Presencial",
      spots: "6 cupos disponibles",
    },
    {
      title: "Escritura y Sanación",
      level: "Principiante",
      format: "Online",
      spots: "8 cupos disponibles",
    },
  ]

  return (
    <section id="workshops" ref={ref} className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">
            Micro-talleres de escritura
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Espacios íntimos para explorar tu voz y desarrollar tus habilidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((workshop, idx) => (
            <div
              key={idx}
              className={`bg-background rounded-xl p-6 hover-elevate border border-border transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {/* Title */}
              <h3 className="text-lg font-bold font-poppins text-foreground mb-4">{workshop.title}</h3>

              {/* Info */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center gap-2 text-muted">
                  <BookOpen className="w-4 h-4" />
                  <span>
                    Nivel: <span className="font-medium text-foreground">{workshop.level}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <Users className="w-4 h-4" />
                  <span>{workshop.format}</span>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium text-primary">{workshop.spots}</span>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm">
                Quiero inscribirme
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
