import React from 'react'
import TotemGold from './TotemGold'

const Hero = () => {
  return (
    <section className="relative min-h-[86vh] flex items-center justify-center overflow-hidden">
      {/* Ivory backdrop */}
      <div className="absolute inset-0 bg-[var(--ivory)]" />

      {/* Watermark motif */}
      <TotemGold className="absolute -right-16 -top-24 w-[440px] h-[440px] opacity-20" />
      <TotemGold className="absolute -left-24 bottom-0 w-[360px] h-[360px] opacity-15" />

      {/* Subtle grain and vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.03) 40%, rgba(0,0,0,0.02) 60%, rgba(0,0,0,0.0) 80%)',
        mixBlendMode: 'multiply'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 text-[12px] tracking-[0.28em] uppercase text-[#b18b2e]/90 mb-6">
          <span className="h-px w-10 gold-line opacity-50" />
          Crafted Portfolio • Writing • Film • Art
          <span className="h-px w-10 gold-line opacity-50" />
        </div>
        <h1 className="serif-luxe text-5xl md:text-6xl leading-tight text-[var(--ink)] tracking-tight">
          Pages that breathe. Stories that glow.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[color:var(--ink-soft)] max-w-3xl mx-auto">
          Minimal form with cultural resonance—like a sunlit atelier on ivory paper, each work framed with quiet care.
        </p>

        {/* Signature line */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-14 gold-line rounded-full" />
          <span className="uppercase tracking-[0.22em] text-xs text-[#a8842a]">portfolio of works</span>
          <span className="h-px w-14 gold-line rounded-full" />
        </div>
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
