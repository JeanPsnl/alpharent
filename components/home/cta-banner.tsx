"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Phone } from "lucide-react"

export function CtaBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-[#0A0A0A]">
      <div
        className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-serif text-3xl md:text-5xl text-[#E5E5E5] mb-6">Prêt à vivre l'expérience ?</h2>
        <p className="text-[#888] text-lg mb-10 max-w-xl mx-auto">
          Contactez-nous pour réserver votre véhicule ou obtenir plus d'informations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-10 py-4 bg-[#C9A227] text-[#050505] text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#D4A853] transition-colors"
          >
            Réserver
          </Link>
          <a
            href="tel:0677221498"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 border border-[#333] text-[#E5E5E5] text-sm tracking-[0.15em] uppercase hover:border-[#C9A227] hover:text-[#C9A227] transition-colors"
          >
            <Phone className="w-4 h-4" />
            Appeler
          </a>
        </div>
      </div>
    </section>
  )
}
