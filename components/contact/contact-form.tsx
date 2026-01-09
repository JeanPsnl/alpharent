"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg p-8 md:p-12 text-center">
        <CheckCircle className="w-16 h-16 text-[#C9A227] mx-auto mb-6" />
        <h3 className="text-xl font-medium text-white mb-3">Message envoyé</h3>
        <p className="text-[#888]">Merci pour votre message. Nous vous répondrons dans les plus brefs délais.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg p-6 md:p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-firstName" className="block text-sm text-[#888] mb-2">
            Prénom
          </label>
          <input
            type="text"
            id="contact-firstName"
            name="firstName"
            required
            className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-md text-white placeholder:text-[#666] focus:outline-none focus:border-[#C9A227]/50"
            placeholder="Jean"
          />
        </div>
        <div>
          <label htmlFor="contact-lastName" className="block text-sm text-[#888] mb-2">
            Nom
          </label>
          <input
            type="text"
            id="contact-lastName"
            name="lastName"
            required
            className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-md text-white placeholder:text-[#666] focus:outline-none focus:border-[#C9A227]/50"
            placeholder="Dupont"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm text-[#888] mb-2">
          Email
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-md text-white placeholder:text-[#666] focus:outline-none focus:border-[#C9A227]/50"
          placeholder="jean.dupont@email.com"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm text-[#888] mb-2">
          Téléphone
        </label>
        <input
          type="tel"
          id="contact-phone"
          name="phone"
          required
          className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-md text-white placeholder:text-[#666] focus:outline-none focus:border-[#C9A227]/50"
          placeholder="06 12 34 56 78"
        />
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-sm text-[#888] mb-2">
          Sujet
        </label>
        <select
          id="contact-subject"
          name="subject"
          required
          className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-md text-white focus:outline-none focus:border-[#C9A227]/50"
        >
          <option value="">Sélectionnez un sujet</option>
          <option value="reservation">Demande de réservation</option>
          <option value="information">Demande d'information</option>
          <option value="tarif">Question sur les tarifs</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm text-[#888] mb-2">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-md text-white placeholder:text-[#666] focus:outline-none focus:border-[#C9A227]/50 resize-none"
          placeholder="Décrivez votre demande..."
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-4 bg-[#C9A227] text-[#050505] font-medium rounded-md hover:bg-[#D4AF37] transition-colors flex items-center justify-center gap-2"
      >
        Envoyer le message
        <Send className="w-4 h-4" />
      </button>
    </form>
  )
}
