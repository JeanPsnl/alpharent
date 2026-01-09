import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQAccordion } from "@/components/faq/faq-accordion"
import { FileText, CreditCard, Shield, HelpCircle } from "lucide-react"

export const metadata = {
  title: "FAQ & Conditions | Alpha Rent",
  description:
    "Questions fréquentes et conditions de location de véhicules prestige chez Alpha Rent à Thonon-les-Bains.",
}

const faqReservation = [
  {
    question: "Comment réserver un véhicule ?",
    answer:
      "Pour réserver un véhicule, vous pouvez nous contacter par téléphone au 06 77 22 14 98, par Instagram @alpharent74, ou via le formulaire de contact sur notre site. Nous vous répondrons dans les plus brefs délais pour confirmer la disponibilité et finaliser votre réservation.",
  },
  {
    question: "Quel est le délai minimum de réservation ?",
    answer:
      "Nous recommandons de réserver au minimum 48 à 72 heures à l'avance pour garantir la disponibilité du véhicule souhaité. Cependant, n'hésitez pas à nous contacter même en dernière minute, nous ferons notre possible pour vous satisfaire.",
  },
  {
    question: "Puis-je annuler ou modifier ma réservation ?",
    answer:
      "Oui, vous pouvez annuler ou modifier votre réservation jusqu'à 48 heures avant la date de prise en charge sans frais. En cas d'annulation tardive, des frais peuvent s'appliquer. Contactez-nous pour toute modification.",
  },
  {
    question: "La livraison du véhicule est-elle possible ?",
    answer:
      "Oui, nous proposons la livraison et la récupération du véhicule dans la zone Thonon-les-Bains, Évian, Annecy et Genève. Des frais de livraison peuvent s'appliquer selon la distance. Contactez-nous pour un devis.",
  },
]

const faqDocuments = [
  {
    question: "Quels documents sont nécessaires pour louer ?",
    answer:
      "Vous devez présenter : une pièce d'identité valide (CNI ou passeport), un permis de conduire valide depuis plus de 3 ans, un justificatif de domicile de moins de 3 mois, et une carte bancaire à votre nom pour la caution.",
  },
  {
    question: "Y a-t-il un âge minimum pour louer ?",
    answer:
      "L'âge minimum requis est de 25 ans avec un permis de conduire obtenu depuis au moins 3 ans. Pour certains véhicules haut de gamme, des conditions supplémentaires peuvent s'appliquer.",
  },
  {
    question: "Puis-je ajouter un conducteur supplémentaire ?",
    answer:
      "Oui, il est possible d'ajouter un ou plusieurs conducteurs supplémentaires. Chaque conducteur additionnel doit remplir les mêmes conditions que le conducteur principal et présenter les mêmes documents.",
  },
]

const faqPaiement = [
  {
    question: "Comment fonctionne la caution ?",
    answer:
      "Une caution est demandée à la prise en charge du véhicule. Son montant varie selon le véhicule (indiqué sur chaque fiche). Elle est intégralement remboursée dans les 7 jours suivant la restitution du véhicule en bon état.",
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer:
      "Nous acceptons les paiements par carte bancaire (Visa, Mastercard), virement bancaire et espèces. La caution doit obligatoirement être réglée par carte bancaire ou en espèces.",
  },
  {
    question: "Les tarifs incluent-ils l'assurance ?",
    answer:
      "Oui, tous nos véhicules sont assurés tous risques. Une franchise reste à la charge du locataire en cas de sinistre responsable. Le montant de la franchise correspond généralement au montant de la caution.",
  },
]

const faqAssurance = [
  {
    question: "Que couvre l'assurance incluse ?",
    answer:
      "L'assurance tous risques incluse couvre les dommages matériels au véhicule, le vol, l'incendie et la responsabilité civile. Une franchise s'applique en cas de sinistre responsable.",
  },
  {
    question: "Que se passe-t-il en cas d'accident ?",
    answer:
      "En cas d'accident, vous devez immédiatement nous contacter et remplir un constat amiable. Les frais de réparation sont couverts par l'assurance, mais la franchise reste à votre charge si vous êtes responsable.",
  },
  {
    question: "L'assistance est-elle incluse ?",
    answer:
      "Oui, une assistance 24h/24 et 7j/7 est incluse. En cas de panne ou d'accident, un numéro d'urgence vous sera communiqué lors de la prise en charge du véhicule.",
  },
]

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24 bg-[#050505]">
        {/* Hero section */}
        <section className="py-12 md:py-16 border-b border-[#1A1A1A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h1 className="font-serif text-3xl md:text-4xl text-white mb-4">FAQ & Conditions</h1>
            <p className="text-[#888] max-w-2xl">
              Retrouvez les réponses à vos questions sur notre service de location de véhicules prestige.
            </p>
          </div>
        </section>

        {/* Quick links */}
        <section className="py-8 md:py-12 border-b border-[#1A1A1A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a
                href="#reservation"
                className="p-4 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg hover:border-[#C9A227]/30 transition-colors flex items-center gap-3"
              >
                <HelpCircle className="w-5 h-5 text-[#C9A227]" />
                <span className="text-sm text-white">Réservation</span>
              </a>
              <a
                href="#documents"
                className="p-4 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg hover:border-[#C9A227]/30 transition-colors flex items-center gap-3"
              >
                <FileText className="w-5 h-5 text-[#C9A227]" />
                <span className="text-sm text-white">Documents</span>
              </a>
              <a
                href="#paiement"
                className="p-4 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg hover:border-[#C9A227]/30 transition-colors flex items-center gap-3"
              >
                <CreditCard className="w-5 h-5 text-[#C9A227]" />
                <span className="text-sm text-white">Paiement</span>
              </a>
              <a
                href="#assurance"
                className="p-4 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg hover:border-[#C9A227]/30 transition-colors flex items-center gap-3"
              >
                <Shield className="w-5 h-5 text-[#C9A227]" />
                <span className="text-sm text-white">Assurance</span>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ sections */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12 md:space-y-16">
            {/* Réservation */}
            <div id="reservation">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-6 h-6 text-[#C9A227]" />
                <h2 className="font-serif text-xl md:text-2xl text-white">Réservation</h2>
              </div>
              <FAQAccordion items={faqReservation} />
            </div>

            {/* Documents */}
            <div id="documents">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-[#C9A227]" />
                <h2 className="font-serif text-xl md:text-2xl text-white">Documents requis</h2>
              </div>
              <FAQAccordion items={faqDocuments} />
            </div>

            {/* Paiement */}
            <div id="paiement">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-6 h-6 text-[#C9A227]" />
                <h2 className="font-serif text-xl md:text-2xl text-white">Paiement & Caution</h2>
              </div>
              <FAQAccordion items={faqPaiement} />
            </div>

            {/* Assurance */}
            <div id="assurance">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-[#C9A227]" />
                <h2 className="font-serif text-xl md:text-2xl text-white">Assurance & Assistance</h2>
              </div>
              <FAQAccordion items={faqAssurance} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 border-t border-[#1A1A1A]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-serif text-xl md:text-2xl text-white mb-4">Une question non répondue ?</h2>
            <p className="text-[#888] mb-6">Notre équipe est disponible pour répondre à toutes vos questions.</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#C9A227] text-[#050505] font-medium rounded-md hover:bg-[#D4AF37] transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
