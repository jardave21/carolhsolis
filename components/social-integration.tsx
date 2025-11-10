"use client"

import { useEffect, useRef, useState } from "react"
import { Instagram, Youtube } from "lucide-react"

export default function SocialIntegration() {
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

  const instagramPosts = [1, 2, 3, 4, 5, 6]
  const youtubeVideo = {
    title: "Cómo encontrar tu voz auténtica",
    videoId: "dQw4w9WgXcQ",
  }

  return (
    <section id="social" ref={ref} className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Instagram Feed */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Instagram className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold font-anton text-foreground">Sígueme en Instagram</h2>
          </div>

          <div
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {instagramPosts.map((post) => (
              <div
                key={post}
                className="aspect-square rounded-lg overflow-hidden hover-elevate cursor-pointer bg-gradient-to-br from-primary/20 to-secondary/20 hover:shadow-lg transition-all"
              >
                <div className="w-full h-full flex items-center justify-center font-open-sans">
                  <span className="text-muted">Post {post}</span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-block mt-6 px-6 py-2 text-primary font-medium hover:text-primary/80 transition-colors font-open-sans"
          >
            Ver más en Instagram →
          </a>
        </div>

        {/* YouTube Video */}
        <div className="font-open-sans">
          <div className="flex items-center gap-2 mb-8">
            <Youtube className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold font-anton text-foreground">Último video</h2>
          </div>

          <div className={`transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="group rounded-2xl overflow-hidden hover-elevate bg-muted/20 border border-border">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center cursor-pointer">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                </div>
              </div>
              <div className="p-6 font-open-sans">
                <h3 className="text-lg font-bold font-poppins text-foreground mb-2">{youtubeVideo.title}</h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Ver canal completo
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
