import React from 'react'

const Section = ({ title, description, children }) => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.02) 40%, rgba(0,0,0,0.00) 100%)'
      }} />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl text-[#3a2f20] font-serif tracking-tight">{title}</h2>
          {description && (
            <p className="mt-3 text-[#5a4a34]/90 max-w-3xl">{description}</p>
          )}
        </div>
        <div className="grid gap-8 md:gap-10">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section
