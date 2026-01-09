import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VehicleGallery } from "@/components/vehicles/vehicle-gallery"

export const metadata = {
  title: "Nos Véhicules | Alpha Rent",
  description:
    "Découvrez notre flotte de véhicules prestige à louer : Mercedes G63 AMG, Audi RS5, BMW M5 Competition et plus encore.",
}

export default function VehiclesPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero section */}
        <section className="py-12 md:py-16 bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Nos Véhicules</h1>
            <p className="text-muted-foreground max-w-2xl">
              Une sélection exclusive de véhicules haut de gamme pour vos événements, voyages d'affaires ou simplement
              pour le plaisir de conduire.
            </p>
          </div>
        </section>

        {/* Vehicles grid */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <VehicleGallery />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
