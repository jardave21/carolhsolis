import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins, Inter } from "next/font/google"
import "./globals.css"

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
  title: "Conferencista | Talleres de Escritura para Mujeres",
  description:
    "Conferencias y micro-talleres de escritura que transforman. Descubre cómo contar tus historias con poder y cuidado.",
  generator: "v0.app",
  openGraph: {
    title: "Conferencista | Talleres de Escritura",
    description:
      "Transformar con la palabra. Conferencias y talleres para mujeres que desean escribir, liderar y ser escuchadas.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Conferencista",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
