"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-[#0F0F0F] transition-colors"
          >
            <span className="font-medium text-white pr-4">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-[#C9A227] flex-shrink-0 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-5 pb-4 border-t border-[#1A1A1A]">
              <p className="text-[#888] leading-relaxed pt-4">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
