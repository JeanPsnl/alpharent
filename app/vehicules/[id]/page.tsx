import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VehicleHeroParallax } from "@/components/vehicles/vehicle-hero-parallax"
import { VehicleSpecs } from "@/components/vehicles/vehicle-specs"
import { PricingTable } from "@/components/vehicles/pricing-table"
import { BookingForm } from "@/components/vehicles/booking-form"
import { vehicles } from "@/lib/data"

interface VehiclePageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return vehicles.map((vehicle) => ({
    id: vehicle.id,
  }))
}

export async function generateMetadata({ params }: VehiclePageProps) {
  const { id } = await params
  const vehicle = vehicles.find((v) => v.id === id)

  if (!vehicle) {
    return { title: "Véhicule non trouvé | Alpha Rent" }
  }

  return {
    title: `${vehicle.name} | Location | Alpha Rent`,
    description: `Louez la ${vehicle.name} à Thonon-les-Bains. ${vehicle.power}, ${vehicle.transmission}. À partir de ${vehicle.prices.day24h.limited}€/24h.`,
  }
}

export default async function VehiclePage({ params }: VehiclePageProps) {
  const { id } = await params
  const vehicle = vehicles.find((v) => v.id === id)

  if (!vehicle) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="bg-[#050505]">
        {/* Back link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-28">
          <Link
            href="/vehicules"
            className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-[#C9A227] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>
        </div>

        <VehicleHeroParallax vehicle={vehicle} />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24 space-y-16 md:space-y-24">
          {/* Specs section */}
          <VehicleSpecs vehicle={vehicle} />

          {/* Pricing section */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8 text-center">Tarifs</h2>
            <PricingTable vehicle={vehicle} />
          </section>

          {/* Booking section */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 text-center">Réserver</h2>
            <p className="text-[#888] text-center mb-12 max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement pour confirmer votre
              réservation.
            </p>
            <div className="max-w-2xl mx-auto">
              <BookingForm vehicle={vehicle} />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
