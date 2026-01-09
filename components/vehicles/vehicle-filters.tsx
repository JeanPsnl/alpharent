"use client"

interface VehicleFiltersProps {
  selectedBrand: string
  selectedCategory: string
  onBrandChange: (brand: string) => void
  onCategoryChange: (category: string) => void
}

const brands = ["Tous", "Mercedes", "Audi", "BMW", "Volkswagen"]
const categories = [
  { value: "all", label: "Toutes catégories" },
  { value: "suv", label: "SUV" },
  { value: "berline", label: "Berline" },
  { value: "sportive", label: "Sportive" },
  { value: "compacte", label: "Compacte" },
]

export function VehicleFilters({
  selectedBrand,
  selectedCategory,
  onBrandChange,
  onCategoryChange,
}: VehicleFiltersProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8 md:mb-12">
      {/* Brand filters */}
      <div className="flex flex-wrap gap-2">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => onBrandChange(brand === "Tous" ? "all" : brand)}
            className={`px-4 py-2 text-sm rounded-md transition-colors ${
              (brand === "Tous" && selectedBrand === "all") || brand === selectedBrand
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-foreground hover:border-primary/30"
            }`}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* Category filter */}
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="px-4 py-2 bg-card border border-border rounded-md text-foreground text-sm focus:outline-none focus:border-primary/50"
      >
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  )
}
