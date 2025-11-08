"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Mail } from "lucide-react"
import { CONTACT_CONFIG } from "@/lib/config"

export default function ContactForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch(`https://formspree.io/f/${CONTACT_CONFIG.formspreeId}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitted(true)
        e.currentTarget.reset()
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-4 md:px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">Conectemos</h2>
          <p className="text-lg text-muted">¿Preguntas? Me encantaría escucharte.</p>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-6">
            <div>
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {CONTACT_CONFIG.email}
              </a>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-2">Redes sociales</h3>
              <div className="space-y-1 text-muted text-sm">
                <p>Instagram: {CONTACT_CONFIG.instagram}</p>
                <p>YouTube: {CONTACT_CONFIG.youtube}</p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={`mailto:${CONTACT_CONFIG.email}?subject=Solicitud%20de%20conferencia`}
                className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                Enviar por email
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Nombre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white text-foreground placeholder-muted"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white text-foreground placeholder-muted"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white text-foreground placeholder-muted resize-none"
                placeholder="Cuéntame en qué puedo ayudarte..."
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                required
                className="mt-1 w-4 h-4 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
              />
              <label htmlFor="privacy" className="text-sm text-muted">
                Acepto la política de privacidad y que Lucía me contacte para responder mi consulta.
              </label>
            </div>

            {submitted && (
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-primary text-sm font-medium">
                ✓ Gracias por tu mensaje. Te responderé pronto.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:bg-primary/50 transition-all font-medium hover-elevate disabled:hover-elevate"
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
