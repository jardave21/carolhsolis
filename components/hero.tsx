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
      className="relative min-h-[90vh] bg-white flex flex-col items-center justify-end"
      style={{
        backgroundImage: "url('/captura.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* SUBTÍTULO + FORMULARIO */}
      <div className="w-full max-w-xl px-6 md:px-10 pb-20 relative z-10">
        <form onSubmit={onSubmit} className="max-w-sm mx-auto">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-100 mb-2 text-center"
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
              className={`mt-3 text-sm text-center ${status === "success"
                ? "text-green-400"
                : status === "error"
                  ? "text-red-400"
                  : "text-gray-200"
                }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>

      {/* Separator */}
      <div className="w-full max-w-5xl h-4 bg-[#F23827] rounded-full absolute bottom-10 left-1/2 -translate-x-1/2 z-20"></div>
    </section>
  )
}
