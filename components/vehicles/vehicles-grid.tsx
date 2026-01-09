"use client"

import { useState, useMemo } from "react"
import { vehicles } from "@/lib/data"
import { VehicleCard } from "./vehicle-card"
import { VehicleFilters } from "./vehicle-filters"

export function VehiclesGrid() {
  const [selectedBrand, setSelectedBrand] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const brandMatch = selectedBrand === "all" || vehicle.brand === selectedBrand
      const categoryMatch = selectedCategory === "all" || vehicle.category === selectedCategory
      return brandMatch && categoryMatch
    })
  }, [selectedBrand, selectedCategory])

  return (
    <>
      <VehicleFilters
        selectedBrand={selectedBrand}
        selectedCategory={selectedCategory}
        onBrandChange={setSelectedBrand}
        onCategoryChange={setSelectedCategory}
      />

      {filteredVehicles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Aucun véhicule ne correspond à vos critères.</p>
        </div>
      )}
    </>
  )
}
