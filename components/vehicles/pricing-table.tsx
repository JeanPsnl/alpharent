import type { Vehicle } from "@/lib/data"

interface PricingTableProps {
  vehicle: Vehicle
}

export function PricingTable({ vehicle }: PricingTableProps) {
  const { prices, kmLimits } = vehicle

  return (
    <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#1A1A1A]">
              <th className="text-left p-4 md:p-5 text-sm font-medium text-[#666]">Durée</th>
              <th className="text-center p-4 md:p-5 text-sm font-medium text-[#666]">Km limités</th>
              <th className="text-center p-4 md:p-5 text-sm font-medium text-[#666]">Km illimités</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#1A1A1A]">
              <td className="p-4 md:p-5">
                <span className="text-white font-medium">24h semaine</span>
                <span className="block text-xs text-[#666] mt-1">{kmLimits.day24h} km inclus</span>
              </td>
              <td className="p-4 md:p-5 text-center">
                <span className="text-lg md:text-xl font-light text-white">{prices.day24h.limited}€</span>
              </td>
              <td className="p-4 md:p-5 text-center">
                <span className="text-lg md:text-xl font-light text-[#C9A227]">{prices.day24h.unlimited}€</span>
              </td>
            </tr>
            <tr className="border-b border-[#1A1A1A]">
              <td className="p-4 md:p-5">
                <span className="text-white font-medium">48h week-end</span>
                <span className="block text-xs text-[#666] mt-1">{kmLimits.weekend48h} km inclus</span>
              </td>
              <td className="p-4 md:p-5 text-center">
                <span className="text-lg md:text-xl font-light text-white">{prices.weekend48h.limited}€</span>
              </td>
              <td className="p-4 md:p-5 text-center">
                <span className="text-lg md:text-xl font-light text-[#C9A227]">{prices.weekend48h.unlimited}€</span>
              </td>
            </tr>
            <tr>
              <td className="p-4 md:p-5">
                <span className="text-white font-medium">72h week-end</span>
                <span className="block text-xs text-[#666] mt-1">{kmLimits.weekend72h} km inclus</span>
              </td>
              <td className="p-4 md:p-5 text-center">
                <span className="text-lg md:text-xl font-light text-white">{prices.weekend72h.limited}€</span>
              </td>
              <td className="p-4 md:p-5 text-center">
                <span className="text-lg md:text-xl font-light text-[#C9A227]">{prices.weekend72h.unlimited}€</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-4 md:p-5 border-t border-[#1A1A1A] bg-[#0A0A0A]">
        <p className="text-sm text-[#888]">
          <span className="text-white font-medium">Caution : {vehicle.caution.toLocaleString("fr-FR")}€</span>
          <span className="block mt-1">Remboursable intégralement à la restitution du véhicule en bon état.</span>
        </p>
      </div>
    </div>
  )
}
