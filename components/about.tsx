"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, MessageCircle, Shield } from "lucide-react"

export default function About() {
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

  const values = [
    { icon: Heart, label: "Empatía", description: "Comprendo tus historias y necesidades" },
    { icon: MessageCircle, label: "Claridad", description: "Comunicación directa y honesta" },
    { icon: Shield, label: "Autocuidado", description: "Espacios seguros y respetuosos" },
  ]

  const timeline = [
    { year: "2008", milestone: "Inicia mi carrera como conferencista" },
    { year: "2015", milestone: "Lanzo mis primeros micro-talleres" },
    { year: "2023", milestone: "Impacto a más de 5000 mujeres" },
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">Sobre mí</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Conferencista y tallerista; acompaño a mujeres a encontrar su voz y a contar sus historias con poder y
              cuidado.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.label} className="p-6 bg-background rounded-2xl hover-elevate">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold font-poppins text-foreground mb-2">{value.label}</h3>
                  <p className="text-muted text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-poppins text-foreground mb-8 text-center">Mi recorrido</h3>
            <div className="space-y-4">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                    {idx < timeline.length - 1 && <div className="w-1 h-16 bg-border my-2"></div>}
                  </div>
                  <div className="pb-4">
                    <span className="text-sm font-bold text-primary">{item.year}</span>
                    <p className="text-foreground mt-1">{item.milestone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
