"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Check } from "lucide-react"

export default function EmailCapture() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setEmail("")
        setTimeout(() => setIsSuccess(false), 5000)
      }
    } catch (error) {
      console.error("Error subscribing:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-md mx-auto">
        <div className="bg-white/50 backdrop-blur-lg border border-white/30 rounded-2xl p-8 shadow-lg hover-elevate transition-all">
          <div className="flex justify-center mb-4">
            <Mail className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-2xl font-bold font-anton text-foreground text-center mb-2">Mantente conectado</h2>
          <p className="text-sm text-muted text-center mb-6 font-open-sans">
            Recibe las últimas conferencias, análisis y contenido de Carol.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 font-open-sans">
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary"
              required
              disabled={isLoading || isSuccess}
            />

            <button
              type="submit"
              disabled={isLoading || isSuccess || !email}
              className="w-full px-4 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-open-sans"
            >
              {isSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  ¡Confirmado!
                </>
              ) : isLoading ? (
                "Enviando..."
              ) : (
                "Suscribirse"
              )}
            </button>
          </form>
          
          <p className="text-xs text-muted text-center mt-4 font-open-sans">No compartimos tu email. Respetamos tu privacidad.</p>
        </div>
      </div>
    </section>
  )
}
