"use client"

import { useEffect, useRef, useState } from "react"

export default function ConversionBlock() {
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

  return (
    <section ref={ref} className="py-16 px-4 md:px-6">
      <div
        className={`max-w-4xl mx-auto rounded-2xl p-8 md:p-12 bg-gradient-to-r from-primary to-secondary text-white text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      > 
        <h2 className="text-3xl md:text-4xl font-bold font-anton mb-4">¿Lista para transformar tu voz?</h2>
        <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto font-open-sans">
          Descubre cómo una conferencia o taller puede cambiar tu forma de comunicar y de ser escuchada.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-white text-primary rounded-full font-bold hover:bg-white/90 transition-all hover-elevate font-open-sans"
        >
          Agenda tu sesión hoy
        </a>
      </div>
    </section>
  )
}
