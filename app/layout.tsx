import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Alpha Rent | Location Prestige Thonon",
  description:
    "Location de véhicules prestige haut de gamme. Mercedes G63 AMG, Audi RS5, BMW M5 Competition. Thonon-les-Bains & Genève.",
  keywords: [
    "location voiture prestige",
    "location véhicule luxe",
    "Thonon-les-Bains",
    "Genève",
    "Mercedes G63",
    "Audi RS5",
    "BMW M5",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Alpha Rent | Location Prestige",
    description: "Location de véhicules prestige haut de gamme. Thonon-les-Bains & Genève.",
    locale: "fr_FR",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#050505",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} bg-[#050505]`}>
      <body className="font-sans antialiased bg-[#050505] text-[#E5E5E5]">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
