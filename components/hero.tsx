"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center pt-20 pb-12 px-4 md:px-6 bg-gradient-to-b from-background via-background to-background/80"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div>
              <h1 className="text-5xl md:text-6xl font-bold font-poppins text-foreground leading-tight flex items-center">
                CAROL H. SOLIS
              </h1>
              <p className="mt-6 text-lg text-muted font-inter leading-relaxed md:whitespace-nowrap">
                PERIODISTA / ANALISTA POLÍTICA / ACTIVISTA / ESCRITORA
              </p>
            </div>
          </div>

          {/* Right - Portrait with Glassmorphism */}
          <div
            className={`flex justify-center transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative w-64 h-80 md:w-80 md:h-96">
              {/* Glassmorphism Frame */}
              <div className="absolute inset-0 bg-white/30 backdrop-blur-lg rounded-3xl border border-white/50 overflow-hidden shadow-xl hover-elevate">
                <img
                  src="/images/marca_personal2.jpg"
                  alt="Carol H. Solís"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Accent Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
