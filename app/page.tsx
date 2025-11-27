import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import SecondaryContent from "@/components/secondary-content"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Carol H Solis | Conferencista y Analista Política en México",
  description:
    "Conferencista, analista política y activista. Conferencias y talleres para empresas, emprendedores y líderes políticos en México. Contrata a Carol H Solis.",
  alternates: {
    canonical: "https://www.carolhsolis.com.mx",
  },
}

export default function Home() {
  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Carol H Solis",
    alternateName: "Carolina Solís",
    jobTitle: "Conferencista, Analista Política y Activista",
    url: "https://www.carolhsolis.com.mx",
    address: {
      "@type": "PostalAddress",
      addressCountry: "MX",
    },
    description:
      "Conferencista, analista política, activista y escritora en México. Especializada en conferencias y talleres para empresas, emprendedores y líderes políticos.",
    knowsAbout: [
      "Análisis Político",
      "Activismo",
      "Liderazgo",
      "Conferencias",
      "Talleres Corporativos",
      "Derechos Humanos",
      "Feminismo",
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <SecondaryContent />
      <ContactForm />
    </>
  )
}
