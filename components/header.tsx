"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#050505] border-b border-[#1a1a1a]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className={`relative w-32 h-10 md:w-40 md:h-12 transition-opacity duration-300 ${
              isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src="/images/e68eaade-25e7-44c5-a7c1.jpeg"
              alt="Alpha Rent"
              fill
              className="object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link href="/vehicules" className="text-sm text-[#888] hover:text-white transition-colors">
              Flotte
            </Link>
            <Link href="/faq" className="text-sm text-[#888] hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-sm text-[#888] hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white" aria-label="Menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-[#1a1a1a]">
            <nav className="flex flex-col gap-4">
              <Link href="/vehicules" onClick={() => setIsMenuOpen(false)} className="text-white py-2">
                Flotte
              </Link>
              <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="text-white py-2">
                FAQ
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-white py-2">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
