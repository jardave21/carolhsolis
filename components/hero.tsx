"use client"

import { useEffect, useMemo, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle")
  const [message, setMessage] = useState("")

  useEffect(() => setIsVisible(true), [])

  const isValidEmail = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()),
    [email]
  )

  async function onSubmit(e) {
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
    } catch {
      setStatus("error")
      setMessage("No se pudo enviar. Intenta de nuevo.")
    } finally {
      setTimeout(() => setStatus("idle"), 2500)
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[90vh] bg-white overflow-hidden flex flex-col items-center pt-10 md:pt-0"
    >
      {/* Fondo textura (Desktop only) */}
      <div className="hidden md:block absolute inset-0 bg-[url('/images/bg-textura.png')] bg-cover bg-center opacity-30" />

      {/* Franja amarilla */}
      <div
        className="
          absolute left-0 w-full
          top-[120px] md:top-[180px]
          h-[55%] md:h-auto md:bottom-30
          bg-[#ffde59]/20
          z-[1]
        "
      />

      {/* CONTENEDOR DEL TÍTULO + PERSONA */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-10 flex flex-col md:block md:justify-center">

        {/* Persona (sin mover) */}
        <img
          src="/images/marca_personal3.png"
          className="
            /* MOBILE: Relative block, first in order */
            relative block w-full h-[45vh] object-contain object-bottom mx-auto order-1
            
            /* DESKTOP: Absolute positioned as requested */
            md:absolute md:order-none md:h-auto md:mx-0
            md:left-[55%] md:-translate-x-1/2 md:top-[10px]
            md:w-[260px] md:right-[26%] md:left-auto md:translate-x-0 md:top-[30%]
            lg:w-[420px]
          "
          style={{
            zIndex: 15,
            filter: "drop-shadow(10px 10px 12px rgba(0, 0, 0, 0.4))",
          }}
          alt="Carol H. Solís"
        />

        {/* TÍTULO */}
        <h1
          className="
            /* MOBILE */
            order-2 mt-4 text-[12vw] leading-none font-anton font-normal text-[#ffde59] uppercase text-center tracking-tight select-none
            /* DESKTOP */
            md:order-none md:mt-0 
            md:text-[160px] lg:text-[200px]
            md:text-center md:w-full
          "
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          CAROL H. SOLIS
        </h1>
      </div>

      {/* SUBTÍTULO + FORMULARIO */}
      <div
        className="
          w-full max-w-5xl px-4 md:px-6 
          mt-8 md:mt-0 
          relative 
          md:absolute md:top-[55%] md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 
          z-10 order-3 md:order-none pointer-events-none
        "
      >
        <div className="pointer-events-auto w-full md:w-auto">
          <p
            className="
              font-semibold text-black uppercase text-center
              text-xs tracking-[0.2em] mb-6
              sm:text-lg sm:leading-snug sm:tracking-[0.25em]
              md:text-xl md:tracking-[0.35em] md:text-left md:mb-6
            "
          >
            <span className="block md:hidden">
              PERIODISTA / ANALISTA POLITICA<br />
              ACTIVISTA / ESCRITORA
            </span>
            <span className="hidden md:block">
              PERIODISTA / <br />
              ANALISTA POLITICA / <br />
              ACTIVISTA / ESCRITORA
            </span>
          </p>

          <form onSubmit={onSubmit} className="max-w-sm mx-auto md:mx-0">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2 text-center md:text-left"
            >
              Déjame tu correo y te escribo:
            </label>

            <div className="flex gap-2">
              <input
                id="email"
                type="email"
                placeholder="tu@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-xl border border-[#ffde59] px-4 py-3 text-sm bg-white
                           outline-none focus:ring-2 focus:ring-[#ffde59]/60"
                required
              />

              <button
                type="submit"
                disabled={status === "loading" || !isValidEmail}
                className="rounded-xl px-5 py-3 text-sm font-semibold bg-[#ffde59] text-black
                           hover:bg-[#ffd633] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Enviando…" : "Enviar"}
              </button>
            </div>

            {status !== "idle" && message && (
              <p
                className={`mt-3 text-sm text-center md:text-left ${status === "success"
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
      </div>

      {/* Línea roja abajo del hero */}
      <div
        className="
          w-full max-w-5xl
          h-4 bg-[#F23827] rounded-full
          absolute bottom-10 md:bottom-32
          left-1/2 -translate-x-1/2
          z-20
        "
      />
    </section>
  )
}
