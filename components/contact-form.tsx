"use client"

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-background scroll-mt-24">
      <div className="max-w-3xl mx-auto text-center font-open-sans">
        <h2 className="text-3xl font-bold font-anton text-foreground mb-4">¿Te interesa?</h2>
        <p className="text-lg text-muted mb-8 font-open-sans">Mándame un WhatsApp</p>
        <div className="space-y-4">
          <a
            href="https://wa.me/525591986137?text=Hola%20Caro%2C%20me%20gustaría%20pedir%20informes%20sobre%20tus%20talleres."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium text-lg hover:bg-primary/90 transition-all"
          >
            💬 55 9198 6137
          </a>
          <p className="text-muted">
            o encuéntrame en{" "}
            <a
              href="https://www.instagram.com/carolhsolis/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @carolhsolis
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
