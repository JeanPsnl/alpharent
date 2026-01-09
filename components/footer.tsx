import Link from "next/link"
import { Instagram, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="relative w-28 h-8">
            <Image src="/images/e375466f-56f0-4256-bdd8.jpeg" alt="Alpha Rent" fill className="object-contain" />
          </Link>

          {/* Links minimalistes */}
          <div className="flex items-center gap-8 text-sm text-[#666]">
            <a href="tel:0677221498" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              06 77 22 14 98
            </a>
            <a
              href="https://instagram.com/alpharent74"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @alpharent74
            </a>
            <span className="hidden md:inline">© {new Date().getFullYear()} Alpha Rent</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
