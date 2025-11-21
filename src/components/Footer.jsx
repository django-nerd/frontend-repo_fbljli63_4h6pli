import React from 'react'
import TotemGold from './TotemGold'

const Footer = () => {
  return (
    <footer className="relative py-14">
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="text-[color:var(--ink-soft)]/80">© {new Date().getFullYear()} All works by the artist.</p>
          <p className="text-sm text-[color:var(--ink-soft)]/70">Crafted on ivory paper with a Malagasy gold totem.</p>
        </div>
        <div className="flex items-center gap-3 opacity-80">
          <TotemGold className="w-8 h-8" />
          <span className="uppercase tracking-[0.22em] text-xs text-[#a8842a]">thank you for visiting</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
