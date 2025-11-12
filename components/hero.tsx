"use client"

import { useEffect, useMemo, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  useEffect(() => setIsVisible(true), [])

  const isValidEmail = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()), [email])

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
      className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-6 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/images/bg-textura.png')] bg-cover bg-center opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texto principal */}
        <div
          className={`text-center md:text-left transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1
            className="text-[3.5rem] md:text-[6rem] font-anton uppercase leading-none tracking-tight text-[#ffde59]"
            style={{
              WebkitTextStroke: "1px black",
              textShadow:
                "1px 1px 2px rgba(0,0,0,0.4)", // sombra ligera para contraste suave
            }}
          >
            CAROL H. SOLIS
          </h1>

          <p className="mt-3 text-lg md:text-xl tracking-[0.3em] font-open-sans text-black">
            PERIODISTA
          </p>

          {/* Formulario correo */}
          <form onSubmit={onSubmit} className="mt-8 max-w-md mx-auto md:mx-0">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2 font-open-sans"
            >
              Déjame tu correo y te escribo:
            </label>
            <div className="flex gap-2">
              <input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="tu@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-xl border border-[#ffde59] bg-white px-4 py-3 text-sm outline-none font-open-sans
                           focus:ring-2 focus:ring-[#ffde59]/60 focus:border-[#ffde59]/60"
                required
              />
              <button
                type="submit"
                disabled={status === "loading" || !isValidEmail}
                className="rounded-xl px-5 py-3 text-sm font-semibold bg-[#ffde59] text-black font-open-sans hover:bg-[#ffd633]
                           transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Enviando…" : "Enviar"}
              </button>
            </div>
            {status !== "idle" && message && (
              <p
                className={`mt-3 text-sm ${
                  status === "success"
                    ? "text-green-600"
                    : status === "error"
                    ? "text-red-600"
                    : "text-gray-600"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>

        {/* Imagen principal */}
        <div
          className={`relative transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative w-64 h-96 md:w-[24rem] md:h-[34rem]">
            <img
              src="/images/marca_personal2.jpg"
              alt="Carol H. Solís"
              className="w-full h-full object-cover object-top rounded-3xl border border-white shadow-2xl grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
