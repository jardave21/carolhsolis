"use client"

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-background scroll-mt-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-poppins text-foreground mb-4">¿Te interesa?</h2>
        <p className="text-lg text-muted mb-8">Hablemos</p>
        <div className="space-y-4">
          <a
            href="tel:5591986137"
            className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium text-lg hover:bg-primary/90 transition-all"
          >
            📞 55 9198 6137
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
