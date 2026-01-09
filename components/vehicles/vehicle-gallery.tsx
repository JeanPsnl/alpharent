"use client"

import type React from "react"

import { useState } from "react"
import { vehicles } from "@/lib/data"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export function VehicleGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const vehicle = vehicles[currentIndex]

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % vehicles.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length)
  }

  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      goToNext()
    }
    if (touchStart - touchEnd < -75) {
      goToPrevious()
    }
  }

  return (
    <div
      className="relative h-[85vh] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Vehicle fullscreen display */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#C9A227] text-xs md:text-sm tracking-[0.3em] uppercase mb-4">{vehicle.brand}</p>

          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">{vehicle.name}</h2>

          <div className="flex items-center justify-center gap-6 text-[#888] text-sm mb-8">
            <span>{vehicle.power}</span>
            <span>•</span>
            <span>{vehicle.transmission}</span>
            <span>•</span>
            <span>{vehicle.seats} places</span>
          </div>

          <p className="text-2xl md:text-3xl text-white font-light mb-8">
            À partir de <span className="text-[#C9A227]">{vehicle.prices.day24h.limited}€</span> / 24h
          </p>

          <Link
            href={`/vehicules/${vehicle.id}`}
            className="inline-block px-8 py-4 bg-[#C9A227] text-[#050505] text-sm font-medium tracking-wide uppercase hover:bg-[#D4AF37] transition-all duration-300"
          >
            Découvrir ce véhicule
          </Link>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-[#0A0A0A]/80 hover:bg-[#C9A227] text-white transition-all duration-300 group"
        aria-label="Véhicule précédent"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-[#0A0A0A]/80 hover:bg-[#C9A227] text-white transition-all duration-300 group"
        aria-label="Véhicule suivant"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Progress indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {vehicles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#C9A227] w-8" : "bg-[#333] hover:bg-[#666]"
            }`}
            aria-label={`Aller au véhicule ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-4 right-4 z-20 text-white text-sm font-light">
        <span className="text-[#C9A227]">{String(currentIndex + 1).padStart(2, "0")}</span>
        <span className="text-[#666]"> / {String(vehicles.length).padStart(2, "0")}</span>
      </div>
    </div>
  )
}
