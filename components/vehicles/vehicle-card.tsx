import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Vehicle } from "@/lib/data"

interface VehicleCardProps {
  vehicle: Vehicle
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <Link
      href={`/vehicules/${vehicle.id}`}
      className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all shadow-sm hover:shadow-lg hover:shadow-black/10"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={vehicle.image || "/placeholder.svg"}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 md:p-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] text-primary uppercase tracking-[0.2em]">{vehicle.brand}</p>
          <span className="text-[11px] text-muted-foreground capitalize">{vehicle.category}</span>
        </div>
        <h3 className="text-lg text-foreground font-semibold mb-3">{vehicle.name}</h3>
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="text-xs text-muted-foreground border border-border/70 rounded-full px-3 py-1">
            {vehicle.power}
          </span>
          <span className="text-xs text-muted-foreground border border-border/70 rounded-full px-3 py-1">
            {vehicle.transmission}
          </span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="text-xl font-semibold text-foreground">{vehicle.prices.day24h.limited}€</span>
            <span className="text-sm text-muted-foreground"> /24h</span>
          </div>
          <span className="flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
            Détails
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}
