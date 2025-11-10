"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { PolloMensual } from "./pollo-mensual"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm w-full">
      <nav className="max-w-5xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Carol H. Solís Logo"
            width={100}
            height={100}
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about" 
            className="text-sm text-foreground transition-colors px-3 py-1 rounded-md hover:bg-transparent hover:border hover:border-primary hover:text-primary font-open-sans"
          >
            Sobre mí
          </a>
          <a
            href="#que-hago" 
            className="text-sm text-foreground transition-colors px-3 py-1 rounded-md hover:bg-transparent hover:border hover:border-primary hover:text-primary font-open-sans"
          >
            ¿Qué hago?
          </a>
          <a
            href="#mis-temas" 
            className="text-sm text-foreground transition-colors px-3 py-1 rounded-md hover:bg-transparent hover:border hover:border-primary hover:text-primary font-open-sans"
          >
            Mis temas
          </a>
          <a
            href="#libros" 
            className="text-sm text-foreground transition-colors px-3 py-1 rounded-md hover:bg-transparent hover:border hover:border-primary hover:text-primary font-open-sans"
          >
            Libros
          </a>
          <PolloMensual />
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="px-4 py-2 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-all font-open-sans"
          >
            Contacto
          </a>
        </div>

        {/* Mobile Menu Buttons */}
        <div className="flex items-center md:hidden">
          <a href="#contact" className="p-2 text-primary" onClick={handleLinkClick}>
            <Phone className="w-6 h-6" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="max-w-5xl mx-auto px-4 py-4 space-y-3">
            <a 
              href="#about" 
              className="block text-sm text-foreground py-2 hover:text-foreground transition-colors font-open-sans"
              onClick={handleLinkClick}
            >
              Sobre mí
            </a>
            <a 
              href="#que-hago" 
              className="block text-sm text-foreground py-2 hover:text-foreground transition-colors font-open-sans"
              onClick={handleLinkClick}
            >
              ¿Qué hago?
            </a>
            <a 
              href="#mis-temas" 
              className="block text-sm text-foreground py-2 hover:text-foreground transition-colors font-open-sans"
              onClick={handleLinkClick}
            >
              Mis temas
            </a>
            <a 
              href="#libros" 
              className="block text-sm text-foreground py-2 hover:text-foreground transition-colors font-open-sans"
              onClick={handleLinkClick}
            >
              Libros
            </a>
            <div className="py-2">
              <PolloMensual />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
