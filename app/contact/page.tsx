import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { Phone, Mail, MapPin, Instagram, Clock } from "lucide-react"

export const metadata = {
  title: "Contact | Alpha Rent",
  description:
    "Contactez Alpha Rent pour réserver un véhicule prestige à Thonon-les-Bains. Téléphone, email ou formulaire en ligne.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24 bg-[#050505]">
        {/* Hero section */}
        <section className="py-12 md:py-16 border-b border-[#1A1A1A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h1 className="font-serif text-3xl md:text-4xl text-white mb-4">Contact</h1>
            <p className="text-[#888] max-w-2xl">
              Une question ? Une demande de réservation ? N'hésitez pas à nous contacter, nous vous répondrons dans les
              plus brefs délais.
            </p>
          </div>
        </section>

        {/* Contact content */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact info */}
              <div>
                <h2 className="font-serif text-xl md:text-2xl text-white mb-6">Nos coordonnées</h2>

                <div className="space-y-6 mb-10">
                  <a
                    href="tel:0677221498"
                    className="flex items-start gap-4 p-4 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg hover:border-[#C9A227]/30 transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#C9A227]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#C9A227]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Téléphone</p>
                      <p className="text-[#888]">06 77 22 14 98</p>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@alpharent.fr"
                    className="flex items-start gap-4 p-4 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg hover:border-[#C9A227]/30 transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#C9A227]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#C9A227]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <p className="text-[#888]">contact@alpharent.fr</p>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/alpharent74"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg hover:border-[#C9A227]/30 transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#C9A227]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-5 h-5 text-[#C9A227]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Instagram</p>
                      <p className="text-[#888]">@alpharent74</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg">
                    <div className="w-10 h-10 bg-[#C9A227]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#C9A227]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Localisation</p>
                      <p className="text-[#888]">Thonon-les-Bains, Haute-Savoie</p>
                      <p className="text-sm text-[#666] mt-1">Zone de service : Évian, Annecy, Genève</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg">
                    <div className="w-10 h-10 bg-[#C9A227]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#C9A227]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Horaires</p>
                      <p className="text-[#888]">Lundi - Samedi : 9h - 19h</p>
                      <p className="text-sm text-[#666] mt-1">Dimanche sur rendez-vous</p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="aspect-[4/3] bg-[#0A0A0A] rounded-lg overflow-hidden border border-[#1A1A1A]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44186.65880955285!2d6.442371!3d46.3701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c36ed7f2b8b0d%3A0x408ab2ae4baa710!2sThonon-les-Bains!5e0!3m2!1sfr!2sfr!4v1704067200000!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation Alpha Rent - Thonon-les-Bains"
                  />
                </div>
              </div>

              {/* Contact form */}
              <div>
                <h2 className="font-serif text-xl md:text-2xl text-white mb-6">Envoyez-nous un message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
