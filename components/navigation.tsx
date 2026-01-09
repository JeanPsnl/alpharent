"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Fixed header - appears on scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-[#050505]/90 backdrop-blur-md border-b border-[#C9A227]/10" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 md:px-12">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl tracking-wider text-[#E5E5E5] hover:text-[#C9A227] transition-colors"
          >
            ALPHA RENT
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/vehicules"
              className="text-sm tracking-widest uppercase text-[#888] hover:text-[#E5E5E5] transition-colors"
            >
              Flotte
            </Link>
            <Link
              href="/faq"
              className="text-sm tracking-widest uppercase text-[#888] hover:text-[#E5E5E5] transition-colors"
            >
              Conditions
            </Link>
            <Link
              href="/contact"
              className="text-sm tracking-widest uppercase text-[#888] hover:text-[#E5E5E5] transition-colors"
            >
              Contact
            </Link>
            <a
              href="tel:0677221498"
              className="flex items-center gap-2 text-[#C9A227] hover:text-[#D4A853] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm tracking-wider">06 77 22 14 98</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-[#E5E5E5] hover:text-[#C9A227] transition-colors"
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-[#050505] transition-transform duration-500 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-8 py-6">
          {/* Close button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-[#E5E5E5] hover:text-[#C9A227] transition-colors"
              aria-label="Fermer le menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-10">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="font-serif text-3xl text-[#E5E5E5] hover:text-[#C9A227] transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/vehicules"
              onClick={() => setIsOpen(false)}
              className="font-serif text-3xl text-[#E5E5E5] hover:text-[#C9A227] transition-colors"
            >
              Flotte
            </Link>
            <Link
              href="/faq"
              onClick={() => setIsOpen(false)}
              className="font-serif text-3xl text-[#E5E5E5] hover:text-[#C9A227] transition-colors"
            >
              Conditions
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="font-serif text-3xl text-[#E5E5E5] hover:text-[#C9A227] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Phone */}
          <a href="tel:0677221498" className="flex items-center justify-center gap-3 py-6 text-[#C9A227]">
            <Phone className="w-5 h-5" />
            <span className="text-lg tracking-wider">06 77 22 14 98</span>
          </a>
        </div>
      </div>
    </>
  )
}
