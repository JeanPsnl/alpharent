"use client"

import { useEffect, useState } from "react"
import { Check } from "lucide-react"
import type { Vehicle } from "@/lib/data"

interface VehicleSpecsProps {
  vehicle: Vehicle
}

export function VehicleSpecs({ vehicle }: VehicleSpecsProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <h2 className="font-serif text-3xl md:text-4xl text-white mb-8 text-center">Caractéristiques</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        <div className="text-center">
          <p className="text-[#C9A227] text-2xl md:text-3xl font-light mb-2">{vehicle.power}</p>
          <p className="text-[#666] text-sm">Puissance</p>
        </div>
        <div className="text-center">
          <p className="text-[#C9A227] text-2xl md:text-3xl font-light mb-2">Auto</p>
          <p className="text-[#666] text-sm">Transmission</p>
        </div>
        <div className="text-center">
          <p className="text-[#C9A227] text-2xl md:text-3xl font-light mb-2">{vehicle.seats}</p>
          <p className="text-[#666] text-sm">Places</p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-2xl mx-auto">
        <h3 className="text-white text-lg mb-4 text-center">Équipements inclus</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {vehicle.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 text-[#888]">
              <Check className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
