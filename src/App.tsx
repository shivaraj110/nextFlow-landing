import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './sections/HeroSection'
import { FeaturesSection } from './sections/FeaturesSection'
import { DemoSection } from './sections/DemoSection'
import { PricingSection } from './sections/PricingSection'
import { FAQSection } from './sections/FAQSection'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="relative">
        <HeroSection />
        <FeaturesSection />
        <DemoSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}

export default App