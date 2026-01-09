import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { FleetPreview } from "@/components/home/fleet-preview"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FleetPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
