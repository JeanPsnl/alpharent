"use client"

import { MessageCircle } from "lucide-react"
import type { Vehicle } from "@/lib/data"

interface BookingFormProps {
  vehicle: Vehicle
}

export function BookingForm({ vehicle }: BookingFormProps) {
  const whatsappHref = `https://wa.me/33677221498?text=Bonjour%20Alpha%20Rent%2C%20je%20souhaite%20réserver%20la%20${encodeURIComponent(
    vehicle.name
  )}.`

  return (
    <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg p-6 md:p-8 text-center space-y-4">
      <h3 className="text-xl font-medium text-white">Réserver via WhatsApp</h3>
      <p className="text-[#888] text-sm">
        Cliquez pour ouvrir une discussion pré-remplie avec notre équipe au sujet de la {vehicle.name}.
      </p>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#C9A227] text-[#050505] font-medium rounded-md hover:bg-[#D4AF37] transition-colors"
      >
        Discuter sur WhatsApp
        <MessageCircle className="w-4 h-4" />
      </a>
      <p className="text-xs text-[#666]">Réponse rapide • 06 77 22 14 98</p>
    </div>
  )
}
