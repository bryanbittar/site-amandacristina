import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SelectedWorks } from './components/SelectedWorks'
import { Services } from './components/Services'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SelectedWorks />
        <Services />
        <About />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
