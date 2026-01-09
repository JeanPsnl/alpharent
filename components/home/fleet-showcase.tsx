"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { vehicles } from "@/lib/data"

export function FleetShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Take first 4 vehicles for showcase
  const showcaseVehicles = vehicles.slice(0, 4)

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#0A0A0A]">
      {/* Section header */}
      <div
        className={`px-6 md:px-12 mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[#C9A227] text-xs tracking-[0.3em] uppercase">Notre collection</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#E5E5E5] mt-4">Véhicules d'exception</h2>
          </div>
          <Link
            href="/vehicules"
            className="inline-flex items-center gap-2 text-[#C9A227] text-sm tracking-wider hover:gap-4 transition-all"
          >
            Voir toute la flotte
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Horizontal scroll on mobile, grid on desktop */}
      <div className="md:px-12">
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto hide-scrollbar px-6 md:px-0 pb-4 md:pb-0 max-w-7xl mx-auto">
          {showcaseVehicles.map((vehicle, index) => (
            <Link
              key={vehicle.id}
              href={`/vehicules/${vehicle.id}`}
              className={`group flex-shrink-0 w-[280px] md:w-auto transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Image container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0F0F0F] mb-4">
                <Image
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#C9A227]/0 group-hover:bg-[#C9A227]/10 transition-colors duration-300" />
              </div>

              {/* Info */}
              <div className="space-y-1">
                <span className="text-[#666] text-xs tracking-wider uppercase">{vehicle.brand}</span>
                <h3 className="text-[#E5E5E5] font-medium group-hover:text-[#C9A227] transition-colors">
                  {vehicle.name}
                </h3>
                <p className="text-[#C9A227] text-sm">À partir de {vehicle.prices.day24h.limited}€ / jour</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
