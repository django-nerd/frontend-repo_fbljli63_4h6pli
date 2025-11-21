import React from 'react'
import TotemGold from './TotemGold'

const Footer = () => {
  return (
    <footer className="relative py-12">
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 flex items-center justify-between">
        <p className="text-[#5a4a34]/80">© {new Date().getFullYear()} All works by the artist.</p>
        <div className="flex items-center gap-3 opacity-70">
          <TotemGold className="w-8 h-8" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
