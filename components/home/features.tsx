import { Car, MapPin, Shield, Clock } from "lucide-react"

const features = [
  {
    icon: Car,
    title: "Véhicules Premium",
    description: "Une flotte exclusive de véhicules haut de gamme, entretenus avec soin.",
  },
  {
    icon: MapPin,
    title: "Thonon - Genève",
    description: "Service disponible à Thonon-les-Bains, Évian, Annecy et Genève.",
  },
  {
    icon: Shield,
    title: "Plaques Françaises",
    description: "Tous nos véhicules sont immatriculés en France pour votre tranquillité.",
  },
  {
    icon: Clock,
    title: "Kms Illimités",
    description: "Option kilométrage illimité disponible sur tous nos véhicules.",
  },
]

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Pourquoi choisir Alpha Rent ?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un service premium pensé pour une expérience de location sans compromis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
