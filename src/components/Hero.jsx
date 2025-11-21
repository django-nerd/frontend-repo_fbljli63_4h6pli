import React from 'react'
import TotemGold from './TotemGold'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Ivory backdrop */}
      <div className="absolute inset-0 bg-[#F6F1E7]" />

      {/* Watermark motif */}
      <TotemGold className="absolute -right-20 -top-24 w-[420px] h-[420px] opacity-20" />
      <TotemGold className="absolute -left-24 bottom-0 w-[360px] h-[360px] opacity-15" />

      {/* Subtle grain and vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.03) 40%, rgba(0,0,0,0.02) 60%, rgba(0,0,0,0.0) 80%)',
        mixBlendMode: 'multiply'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 text-[13px] tracking-[0.25em] uppercase text-[#b18b2e]/90 mb-6">
          <span className="h-px w-10 bg-[#b18b2e]/40" />
          Portfolio • Art • Story
          <span className="h-px w-10 bg-[#b18b2e]/40" />
        </div>
        <h1 className="text-5xl md:text-6xl leading-tight text-[#3a2f20] font-serif tracking-tight">
          A curated journey through writing, film, drawing, and photographs
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#5a4a34]/90 max-w-3xl mx-auto">
          Minimal form. Cultural resonance. Crafted like a luxury art book—each page a quiet room for the work to breathe.
        </p>
      </div>

      {/* Corner emboss details */}
      <div className="absolute top-6 left-6 opacity-60">
        <TotemGold className="w-10 h-10" />
      </div>
      <div className="absolute bottom-6 right-6 opacity-60 rotate-180">
        <TotemGold className="w-10 h-10" />
      </div>
    </section>
  )
}

export default Hero
