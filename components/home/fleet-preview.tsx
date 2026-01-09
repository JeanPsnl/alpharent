import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { vehicles } from "@/lib/data"

export function FleetPreview() {
  const featuredVehicles = vehicles.slice(0, 3)

  return (
    <section className="py-24 md:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">La Flotte</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredVehicles.map((vehicle) => (
            <Link
              key={vehicle.id}
              href={`/vehicules/${vehicle.id}`}
              className="group bg-[#0A0A0A] border border-[#1a1a1a] overflow-hidden hover:border-[#C9A227]/30 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white font-light text-xl mb-3">{vehicle.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-light text-[#C9A227]">{vehicle.prices.day24h.limited}€</span>
                  <span className="text-sm text-[#666]">/ 24h</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/vehicules"
            className="inline-flex items-center gap-3 text-[#C9A227] hover:text-[#D4AF37] transition-colors text-sm tracking-widest uppercase"
          >
            Voir tous les véhicules
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
