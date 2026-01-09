"use client"

import { useEffect, useState } from "react"
import type { Vehicle } from "@/lib/data"

interface VehicleHeroParallaxProps {
  vehicle: Vehicle
}

export function VehicleHeroParallax({ vehicle }: VehicleHeroParallaxProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const parallaxOffset = scrollY * 0.5

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Parallax image */}
      <div className="absolute inset-0 z-0" style={{ transform: `translateY(${parallaxOffset}px)` }}>
        <img src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} className="w-full h-[110vh] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end justify-center pb-16 md:pb-24">
        <div className="text-center px-6">
          <p className="text-[#C9A227] text-xs md:text-sm tracking-[0.3em] uppercase mb-4">{vehicle.brand}</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6">{vehicle.name}</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[#888] text-sm">
            <span>{vehicle.power}</span>
            <span>•</span>
            <span>{vehicle.transmission}</span>
            <span>•</span>
            <span>{vehicle.seats} places</span>
          </div>
        </div>
      </div>
    </section>
  )
}
