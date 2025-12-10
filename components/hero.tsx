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
      className="relative min-h-[90vh] bg-white overflow-hidden flex flex-col items-center pt-5 md:pt-0"
    >
      {/* Fondo textura (Desktop only) */}

      {/* Franja amarilla */}
      <div
        className="
          hidden md:block
          absolute left-0 w-full
          top-[120px] lg:top-[180px]
          h-[55%] md:h-auto lg:bottom-30
          bg-[#ffde59]/20
          z-[1]
        "
      />

      {/* CONTENEDOR DEL TÍTULO + PERSONA */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-10 flex flex-col items-center lg:block lg:justify-center">

        {/* Persona (sin mover) */}
        <div className="relative w-full order-2 lg:static lg:order-none">
          <div className="absolute inset-0 bg-[#ffde59]/20 -z-10 md:hidden" />
          <img
            src="/images/marca_personal3.png"
            className="
              relative block w-full h-[45vh] object-contain object-bottom mx-auto
              md:h-[60vh] md:w-auto

              /* DESKTOP FIJO Y ALINEADO */
              lg:absolute lg:h-auto lg:mx-0
              lg:left-[57%]           /* Antes 55% → ahora más a la izquierda */
              lg:top-[30%]            /* Estable en pantallas 1080–1440p */
              lg:-translate-x-1/2
              lg:w-[260px]

              xl:w-[22vw] xl:max-w-[440px]
            "
            style={{
              zIndex: 15,
              filter: "drop-shadow(10px 10px 12px rgba(0, 0, 0, 0.4))",
            }}
            alt="Carol H. Solís"
          />

        </div>

        {/* TÍTULO */}
        <h1
          className="
            /* MOBILE */
            order-1 mt-4 text-[12vw] leading-none font-anton font-normal text-[#ffde59] uppercase text-center tracking-tight select-none
            
            /* TABLET */
            md:text-[13vw]

            /* DESKTOP */
            lg:order-none lg:mt-0 
            lg:text-[160px] 
            xl:text-[200px]
            lg:text-center lg:w-full
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
          mt-8 md:mt-12
          relative 
          lg:absolute lg:top-[55%] lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 
          z-10 order-3 lg:order-none pointer-events-none
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
            <span className="block lg:hidden">
              PERIODISTA / ANALISTA POLITICA<br />
              ACTIVISTA / ESCRITORA
            </span>
            <span className="hidden lg:block">
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
