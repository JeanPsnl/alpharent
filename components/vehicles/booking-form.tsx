"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import type { Vehicle } from "@/lib/data"

interface BookingFormProps {
  vehicle: Vehicle
}

export function BookingForm({ vehicle }: BookingFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg p-6 md:p-8 text-center">
        <CheckCircle className="w-12 h-12 text-[#C9A227] mx-auto mb-4" />
        <h3 className="text-lg font-medium text-white mb-2">Demande envoyée</h3>
        <p className="text-[#888] text-sm">
          Nous avons bien reçu votre demande pour la {vehicle.name}. Nous vous recontacterons dans les plus brefs
          délais.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg p-5 md:p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm text-[#888] mb-1.5">
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-md text-white placeholder:text-[#666] focus:outline-none focus:border-[#C9A227]/50"
              placeholder="Jean"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm text-[#888] mb-1.5">
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-md text-white placeholder:text-[#666] focus:outline-none focus:border-[#C9A227]/50"
              placeholder="Dupont"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-[#888] mb-1.5">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-md text-white placeholder:text-[#666] focus:outline-none focus:border-[#C9A227]/50"
            placeholder="jean.dupont@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm text-[#888] mb-1.5">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-md text-white placeholder:text-[#666] focus:outline-none focus:border-[#C9A227]/50"
            placeholder="06 12 34 56 78"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="startDate" className="block text-sm text-[#888] mb-1.5">
              Date de début
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              required
              className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-md text-white focus:outline-none focus:border-[#C9A227]/50"
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm text-[#888] mb-1.5">
              Date de fin
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              required
              className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-md text-white focus:outline-none focus:border-[#C9A227]/50"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-[#888] mb-1.5">
            Message (optionnel)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-md text-white placeholder:text-[#666] focus:outline-none focus:border-[#C9A227]/50 resize-none"
            placeholder="Précisions, questions..."
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-6 py-4 bg-[#C9A227] text-[#050505] font-medium rounded-md hover:bg-[#D4AF37] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isLoading ? (
            "Envoi en cours..."
          ) : (
            <>
              Envoyer ma demande
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
