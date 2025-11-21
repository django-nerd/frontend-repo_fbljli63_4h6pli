import React from 'react'
import Hero from './components/Hero'
import Section from './components/Section'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#F6F1E7] text-[#3a2f20]">
      {/* Hero */}
      <Hero />

      {/* Writing */}
      <Section
        title="Writing"
        description="Slow-made essays, letters, and narrative fragments organized like chapters."
      >
        <Gallery />
      </Section>

      {/* Films */}
      <Section
        title="Art Films"
        description="Quiet moving images—short films and video poems exploring place and identity."
      >
        <Gallery />
      </Section>

      {/* Drawings & Photographs */}
      <Section
        title="Drawings & Photographs"
        description="Graphite studies, ink sketches, and photographs arranged as a lyrical sequence."
      >
        <Gallery />
      </Section>

      <Footer />
    </div>
  )
}

export default App
