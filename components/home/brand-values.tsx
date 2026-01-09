"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Infinity, MapPin } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Discrétion",
    description: "Un service sur-mesure, respectueux de votre confidentialité",
  },
  {
    icon: Infinity,
    title: "Kilométrage illimité",
    description: "Voyagez sans contraintes, sans frais supplémentaires",
  },
  {
    icon: MapPin,
    title: "Plaques françaises",
    description: "Circulez partout en Europe sans restrictions",
  },
]

export function BrandValues() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-[#050505]">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#C9A227] text-xs tracking-[0.3em] uppercase">Notre engagement</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#E5E5E5] mt-4">L'excellence automobile</h2>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-[#C9A227]/30">
                <value.icon className="w-7 h-7 text-[#C9A227]" />
              </div>
              <h3 className="font-serif text-xl text-[#E5E5E5] mb-3">{value.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
