import Link from "next/link"
import { Instagram, Phone, Mail } from "lucide-react"

export function MinimalFooter() {
  return (
    <footer className="py-12 px-6 bg-[#050505] border-t border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-xl text-[#E5E5E5] tracking-wider">
              ALPHA RENT
            </Link>
            <p className="text-[#666] text-sm mt-2">Location de véhicules prestige</p>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <a
              href="tel:0677221498"
              className="flex items-center gap-2 text-[#888] hover:text-[#C9A227] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">06 77 22 14 98</span>
            </a>
            <a
              href="mailto:contact@alpharent.fr"
              className="flex items-center gap-2 text-[#888] hover:text-[#C9A227] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">contact@alpharent.fr</span>
            </a>
            <a
              href="https://instagram.com/alpharent74"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#888] hover:text-[#C9A227] transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span className="text-sm">@alpharent74</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-[#1A1A1A] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[#555] text-xs">
          <p>© {new Date().getFullYear()} Alpha Rent. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/faq" className="hover:text-[#888] transition-colors">
              Conditions
            </Link>
            <Link href="/contact" className="hover:text-[#888] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
