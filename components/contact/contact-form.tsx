"use client"

import { MessageCircle } from "lucide-react"

export function ContactForm() {
  const whatsappHref =
    "https://wa.me/33677221498?text=Bonjour%20Alpha%20Rent%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20une%20location."

  return (
    <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg p-8 md:p-12 text-center space-y-4">
      <h3 className="text-2xl font-medium text-white">Discutons sur WhatsApp</h3>
      <p className="text-[#888]">
        Besoin d&apos;une réservation ou d&apos;un devis rapide ? Écrivez-nous directement et nous vous répondons au plus
        vite.
      </p>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A227] text-[#050505] font-medium rounded-md hover:bg-[#D4AF37] transition-colors"
      >
        Ouvrir WhatsApp
        <MessageCircle className="w-5 h-5" />
      </a>
      <p className="text-xs text-[#666]">Disponible 7j/7 — 06 77 22 14 98</p>
    </div>
  )
}
