"use client"

import { useEffect, useMemo, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  useEffect(() => setIsVisible(true), [])

  const isValidEmail = useMemo(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  }, [email])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isValidEmail) {
      setStatus("error")
      setMessage("Ingresa un correo válido.")
      return
    }
    try {
      setStatus("loading")
      setMessage("")
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error("Error al enviar")

      setStatus("success")
      setMessage("¡Gracias! Te contactaremos pronto.")
      setEmail("")
    } catch (err) {
      setStatus("error")
      setMessage("No se pudo enviar. Intenta de nuevo.")
    } finally {
      setTimeout(() => setStatus("idle"), 2500)
    }
  }

  return (
    <section
      id="home"
      className="min-h-[20vh] md:min-h-[90vh] flex items-center pt-2 pb-12 px-4 md:px-6 bg-gradient-to-b from-background via-background to-background/80"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Izquierda */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-poppins text-foreground leading-tight">
              CAROL H. SOLIS
            </h1>
            <p className="mt-2 text-lg text-muted font-inter leading-relaxed md:whitespace-nowrap">
              PERIODISTA / ANALISTA POLÍTICA / ACTIVISTA / ESCRITORA
            </p>

            {/* Formulario correo */}
            <form onSubmit={onSubmit} className="mt-6">
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Déjame tu correo y te escribo:
              </label>
              <div className="flex w-full max-w-md gap-2">
                <input
                  id="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="tu@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-xl border border-orange-500 bg-background px-4 py-3 text-sm outline-none
                             focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500/60"
                  aria-invalid={email.length > 0 ? (!isValidEmail).toString() : undefined}
                  aria-describedby="email-help"
                  required
                />
                <button
                  type="submit"
                  disabled={status === "loading" || !isValidEmail}
                  className="rounded-xl px-4 py-3 text-sm font-semibold bg-primary text-primary-foreground
                             disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          d="M4 12a8 8 0 018-8"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      </svg>
                      Enviando…
                    </span>
                  ) : (
                    "Enviar"
                  )}
                </button>
              </div>
              <p id="email-help" className="mt-2 text-xs text-muted">
                Solo usaré tu correo para contactarte.
              </p>
              {status !== "idle" && message && (
                <p
                  className={`mt-3 text-sm ${
                    status === "success" ? "text-green-600" : status === "error" ? "text-red-600" : "text-muted"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>

          {/* Derecha: solo foto */}
          <div
            className={`flex justify-center transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-64 h-80 md:w-80 md:h-140">
              <div className="absolute inset-0 bg-white/30 backdrop-blur-lg rounded-3xl border border-white/50 overflow-hidden shadow-xl">
                <img
                  src="/images/marca_personal2.jpg"
                  alt="Carol H. Solís"
                  className="w-full h-full object-cover object-top rounded-3xl"
                />
              </div>

              {/* Elementos decorativos opcionales */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
