"use client"

import { useEffect, useRef, useState } from "react"
import { Quote } from "lucide-react"
import { testimonials } from "@/lib/data"

export function TestimonialsSection() {
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
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#C9A227] text-xs tracking-[0.3em] uppercase">Témoignages</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#E5E5E5] mt-4">Ce qu'ils disent</h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative p-8 border border-[#1A1A1A] bg-[#0A0A0A] transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <Quote className="w-8 h-8 text-[#C9A227]/30 mb-6" />
              <p className="text-[#999] text-sm leading-relaxed mb-6">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center">
                  <span className="text-[#C9A227] font-serif text-lg">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-[#E5E5E5] text-sm font-medium">{testimonial.name}</p>
                  <p className="text-[#666] text-xs">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
