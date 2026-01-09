"use client"

import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/black-audi-rs5-in-dark-parking-garage.jpg"
        >
          <source
            src="https://pub-e5b669319dd9424e8f48dd90e60bd93f.r2.dev/Rs5%20de%20retour%20..%20%F0%9F%A4%AB%20%23rs5%20%23audi.MP4"
            type="video/mp4"
          />
        </video>
        {/* Overlay sombre avec dégradé */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full">
        {/* Titre principal */}
        <h1
          className={`font-serif text-6xl md:text-8xl lg:text-9xl font-normal text-white mb-6 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Alpha <span className="text-[#C9A227]">Rent</span>
        </h1>

        {/* Baseline courte */}
        <p
          className={`text-[#888] text-base md:text-xl font-light tracking-widest mb-16 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Thonon — Genève
        </p>

        {/* Un seul CTA */}
        <div
          className={`transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Link
            href="/vehicules"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-[#C9A227] text-[#050505] text-sm font-medium tracking-widest uppercase hover:bg-[#D4AF37] transition-all duration-300"
          >
            Voir la flotte
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <ChevronDown className="w-6 h-6 text-[#666] animate-bounce" />
      </div>
    </section>
  )
}
