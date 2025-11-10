import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins, Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})
const _inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Carolina 'Carol H.' Solís | Periodista y Speakerq",
  description:
    "Carolina 'Carol H.' Solís es una destacada periodista y conferencista mexicana con más de 25 años de experiencia, reconocida por su enfoque en temas de política, derechos humanos, feminismo y responsabilidad social.",
  generator: "v0.app",
  openGraph: {
    title: "Carolina 'Carol H.' Solís | Periodista y Speakerq",
    description:
      "Con más de 25 años de experiencia, Carolina 'Carol H.' Solís es una voz influyente en el periodismo mexicano, enfocada en política, derechos humanos y feminismo.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Carolina 'Carol H.' Solís",
      },
    ],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
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
