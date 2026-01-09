"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

export function VideoHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Simulate loader delay then show content
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/images/56bbbc43-b9e8-4348-aa29-ff395a4dcd2d-rs5-20de-20retour-20.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/30 to-[#050505]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Logo / Brand */}
        <div
          className={`transition-all duration-1000 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-[#C9A227] text-sm tracking-[0.4em] uppercase mb-4">
            Location de véhicules prestige
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#E5E5E5] tracking-tight">Alpha Rent</h1>
          <p className="mt-6 text-[#888] text-lg md:text-xl tracking-wide max-w-md mx-auto">
            Thonon-les-Bains & Genève
          </p>
        </div>

        {/* CTA */}
        <div
          className={`mt-12 transition-all duration-1000 delay-300 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="/vehicules"
            className="inline-block px-10 py-4 border border-[#C9A227] text-[#C9A227] text-sm tracking-[0.2em] uppercase hover:bg-[#C9A227] hover:text-[#050505] transition-all duration-300"
          >
            Découvrir la flotte
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-[#888] hover:text-[#E5E5E5] transition-all duration-1000 delay-500 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Défiler vers le bas"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
