"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [current, setCurrent] = useState(0)
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

  const testimonials = [
    {
      name: "María González",
      role: "Emprendedora",
      text: "La conferencia de Lucía transformó completamente cómo comunico mi marca. Ahora tengo claridad en mi mensaje.",
      rating: 5,
    },
    {
      name: "Sofía Martínez",
      role: "Directora Ejecutiva",
      text: "Sus talleres de escritura me ayudaron a encontrar mi voz auténtica. Recomiendo ampliamente su trabajo.",
      rating: 5,
    },
    {
      name: "Elena Rodríguez",
      role: "Consultora de Marketing",
      text: "El contenido es profundo, práctico y transformador. Es evidente la pasión de Lucía por empoderar a las mujeres.",
      rating: 5,
    },
  ]

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" ref={ref} className="py-20 px-4 md:px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">Testimonios</h2>
          <p className="text-lg text-muted">Historias de transformación</p>
        </div>

        {/* Slider */}
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="bg-white rounded-2xl p-8 md:p-12 hover-elevate border border-border">
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>

            <p className="text-lg text-foreground mb-8 leading-relaxed italic">"{testimonials[current].text}"</p>

            <div className="border-t border-border pt-6">
              <p className="font-bold text-foreground">{testimonials[current].name}</p>
              <p className="text-muted text-sm">{testimonials[current].role}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === current ? "bg-primary w-8" : "bg-border"}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                className="p-2 hover:bg-border rounded-lg transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-2 hover:bg-border rounded-lg transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
