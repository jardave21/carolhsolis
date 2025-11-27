import type React from "react"
import type { Metadata, Viewport } from "next"
import { Anton, Open_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.carolhsolis.com.mx"),
  title: {
    default: "Carol H Solis | Conferencista y Analista Política en México",
    template: "%s | Carol H Solis",
  },
  description:
    "Conferencista, analista política y activista. Conferencias y talleres para empresas, emprendedores y líderes políticos en México. Contrata a Carol H Solis.",
  keywords: [
    "Carol H Solis",
    "conferencista México",
    "analista política México",
    "talleres liderazgo",
    "conferencias empresas",
    "activista México",
    "speaker política",
    "editorialista independiente",
  ],
  authors: [{ name: "Carol H Solis" }],
  creator: "Carol H Solis",
  publisher: "Carol H Solis",
  openGraph: {
    title: "Carol H Solis | Conferencista y Analista Política en México",
    description:
      "Conferencista, analista política y activista. Conferencias y talleres para empresas, emprendedores y líderes políticos en México.",
    url: "https://www.carolhsolis.com.mx",
    siteName: "Carol H Solis",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Carol H Solis - Conferencista y Analista Política",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carol H Solis | Conferencista y Analista Política en México",
    description: "Conferencista, analista política y activista en México.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "https://www.carolhsolis.com.mx",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${anton.variable} ${openSans.variable}`}>
      <body className={`font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1 pt-[96px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
