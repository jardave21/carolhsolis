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
      className="relative min-h-[90vh] bg-white overflow-hidden flex flex-col items-center"
    >
      {/* Fondo textura */}
      <div className="absolute inset-0 bg-[url('/images/bg-textura.png')] bg-cover bg-center opacity-30" />

      {/* Franja amarilla */}
      <div
        className="
          absolute left-0 w-full
          top-[180px]
          h-[65%]
          bg-[#ffde59]/20
          z-[1]
        "
      />

      {/* CONTENEDOR DEL TÍTULO + PERSONA */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-10 flex justify-center">

        {/* Persona */}
        <img
          src="/images/marca_personal3.png"
          className="
            absolute
            left-[55%] -translate-x-1/2 top-[10px] w-[120px]
            sm:w-[180px]
            md:w-[260px] md:right-[26%] md:left-auto md:translate-x-0 md:top-[30%]
            lg:w-[420px]
            object-contain
          "
          style={{
            zIndex: 5,
            filter: 'drop-shadow(12px 12px 8px rgba(107, 127, 215, 0.5)) drop-shadow(6px 6px 5px rgba(139, 127, 181, 0.4)) drop-shadow(0px 20px 15px rgba(0, 0, 0, 0.15))'
          }}
          alt="Carol H. Solís"
        />

        {/* TÍTULO AJUSTADO */}
        <h1
          className="
            font-anton uppercase text-[#ffde59]
            text-center leading-none
            text-[44px] sm:text-[100px] md:text-[160px] lg:text-[200px]
          "
          style={{
            WebkitTextStroke: "0.35px rgba(0,0,0,0.30)",
            textShadow: "0px 1.8px 2px rgba(62,62,47,0.45)",
          }}
        >
          CAROL H. SOLIS
        </h1>
      </div>

      {/* SUBTÍTULO + FORMULARIO */}
      <div className="w-full max-w-7xl px-6 md:px-10 mt-48 sm:mt-32 md:mt-24 relative z-10">
        <p
          className="
            font-semibold text-black
            text-[15px] leading-tight
            tracking-[0.12em]
            sm:text-lg sm:leading-snug sm:tracking-[0.25em]
            md:text-xl md:tracking-[0.35em]
            mb-6
          "
        >
          PERIODISTA / ANALISTA POLITICA <br />
          ACTIVISTA / ESCRITORA
        </p>

        <form onSubmit={onSubmit} className="max-w-sm">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
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
              className={`mt-3 text-sm ${status === "success"
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
    </section>
  )
}
