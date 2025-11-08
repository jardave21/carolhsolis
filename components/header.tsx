"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <nav className="max-w-5xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-primary">
          Carol H. Solís
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8"></div>

        {/* CTA Button */}
        <div className="hidden md:flex"></div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted/20 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="max-w-5xl mx-auto px-4 py-4 space-y-3">
            {/* Removed all items */}
            <p className="text-sm text-foreground py-2">Menú vacío</p>
          </div>
        </div>
      )}
    </header>
  )
}
