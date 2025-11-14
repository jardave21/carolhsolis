import type React from "react"
import type { Metadata } from "next"
import { Anton, Open_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

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
  title: "Carolina 'Carol H.' Solís | Periodista y Speaker",
  description:
    "Carolina 'Carol H.' Solís es una destacada periodista y conferencista mexicana con más de 25 años de experiencia, reconocida por su enfoque en temas de política, derechos humanos, feminismo y responsabilidad social.",
  generator: "v0.app",
  openGraph: {
    title: "Carolina 'Carol H.' Solís | Periodista y Speaker",
    description:
      "Con más de 25 años de experiencia, Carolina 'Carol H.' Solís es una voz influyente en el periodismo mexicano, enfocada en política, derechos humanos y feminismo.",
    type: "website",
    images: [
      {
        url: "/logo.png",
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
