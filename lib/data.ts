export interface Vehicle {
  id: string
  name: string
  brand: string
  category: "suv" | "berline" | "sportive" | "compacte"
  power: string
  transmission: string
  seats: number
  image: string
  gallery: string[]
  prices: {
    day24h: { limited: number; unlimited: number }
    weekend48h: { limited: number; unlimited: number }
    weekend72h: { limited: number; unlimited: number }
  }
  kmLimits: {
    day24h: number
    weekend48h: number
    weekend72h: number
  }
  caution: number
  features: string[]
}

export const vehicles: Vehicle[] = [
  {
    id: "mercedes-g63-amg",
    name: "Mercedes G63 AMG",
    brand: "Mercedes",
    category: "suv",
    power: "585 ch",
    transmission: "Automatique 9G-Tronic",
    seats: 5,
    image: "/black-mercedes-g63-amg-luxury-suv.jpg",
    gallery: ["/black-mercedes-g63-amg-front-view.jpg", "/black-mercedes-g63-amg-side-view.jpg", "/black-mercedes-g63-amg-interior.jpg"],
    prices: {
      day24h: { limited: 800, unlimited: 950 },
      weekend48h: { limited: 1500, unlimited: 1800 },
      weekend72h: { limited: 2100, unlimited: 2500 },
    },
    kmLimits: { day24h: 200, weekend48h: 400, weekend72h: 500 },
    caution: 8000,
    features: ["GPS", "Sièges chauffants", "Toit ouvrant", "Caméra 360°"],
  },
  {
    id: "audi-rs5-sportback",
    name: "Audi RS5 Sportback 2023",
    brand: "Audi",
    category: "berline",
    power: "450 ch",
    transmission: "Automatique Tiptronic",
    seats: 5,
    image: "/black-audi-rs5-sportback-luxury-car.jpg",
    gallery: ["/black-audi-rs5-front-view.jpg", "/black-audi-rs5-side-view.jpg", "/black-audi-rs5-interior.jpg"],
    prices: {
      day24h: { limited: 400, unlimited: 500 },
      weekend48h: { limited: 750, unlimited: 950 },
      weekend72h: { limited: 1000, unlimited: 1300 },
    },
    kmLimits: { day24h: 200, weekend48h: 400, weekend72h: 500 },
    caution: 5000,
    features: ["GPS", "Sièges sport", "Virtual Cockpit", "Bang & Olufsen"],
  },
  {
    id: "bmw-m5-competition",
    name: "BMW M5 Competition",
    brand: "BMW",
    category: "berline",
    power: "625 ch",
    transmission: "Automatique M Steptronic",
    seats: 5,
    image: "/black-bmw-m5-competition-sedan.jpg",
    gallery: ["/black-bmw-m5-front-view.jpg", "/black-bmw-m5-side-view.jpg", "/black-bmw-m5-interior.jpg"],
    prices: {
      day24h: { limited: 500, unlimited: 600 },
      weekend48h: { limited: 900, unlimited: 1100 },
      weekend72h: { limited: 1200, unlimited: 1500 },
    },
    kmLimits: { day24h: 200, weekend48h: 400, weekend72h: 500 },
    caution: 6000,
    features: ["GPS", "Sièges M", "Harman Kardon", "Head-up Display"],
  },
  {
    id: "vw-golf-8r-akrapovic",
    name: "VW Golf 8R Akrapovic",
    brand: "Volkswagen",
    category: "compacte",
    power: "320 ch",
    transmission: "Automatique DSG 7",
    seats: 5,
    image: "/blue-volkswagen-golf-8r-sports-car.jpg",
    gallery: ["/blue-golf-8r-front-view.jpg", "/blue-golf-8r-side-view.jpg", "/placeholder.svg?height=600&width=800"],
    prices: {
      day24h: { limited: 300, unlimited: 350 },
      weekend48h: { limited: 650, unlimited: 750 },
      weekend72h: { limited: 850, unlimited: 950 },
    },
    kmLimits: { day24h: 200, weekend48h: 400, weekend72h: 500 },
    caution: 4500,
    features: ["GPS", "Échappement Akrapovic", "Sièges sport", "Digital Cockpit"],
  },
  {
    id: "audi-rs3-2022",
    name: "Audi RS3 2022",
    brand: "Audi",
    category: "compacte",
    power: "400 ch",
    transmission: "Automatique S Tronic",
    seats: 5,
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    prices: {
      day24h: { limited: 350, unlimited: 400 },
      weekend48h: { limited: 700, unlimited: 800 },
      weekend72h: { limited: 900, unlimited: 1050 },
    },
    kmLimits: { day24h: 200, weekend48h: 400, weekend72h: 500 },
    caution: 5000,
    features: ["GPS", "Virtual Cockpit", "Sièges RS", "Mode RS Performance"],
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Laurent M.",
    location: "Genève",
    text: "Service impeccable, la G63 était en parfait état. L'équipe est très professionnelle et réactive. Je recommande vivement.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophie D.",
    location: "Annecy",
    text: "Excellente expérience avec l'Audi RS5. Véhicule propre, bien entretenu et livraison à l'heure. Je reviendrai sans hésiter.",
    rating: 5,
  },
  {
    id: 3,
    name: "Marc T.",
    location: "Évian",
    text: "Troisième location chez Alpha Rent. Toujours aussi satisfait du service et de la qualité des véhicules. Équipe au top !",
    rating: 5,
  },
]
