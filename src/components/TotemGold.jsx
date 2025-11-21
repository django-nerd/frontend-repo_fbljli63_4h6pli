import React from 'react'

// Malagasy-inspired totem motif in metallic gold
// Stylized geometric emblem that can be used as corner decoration or watermark
const TotemGold = ({ className = '', opacity = 1 }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Totem motif"
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E6C972"/>
          <stop offset="50%" stopColor="#D4AF37"/>
          <stop offset="100%" stopColor="#B88924"/>
        </linearGradient>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Central spear/aloalo-inspired column */}
      <g filter="url(#softGlow)" fill="url(#goldGrad)">
        <rect x="94" y="20" width="12" height="160" rx="6" />
        {/* Chevron bands */}
        {Array.from({ length: 5 }).map((_, i) => (
          <g key={i} transform={`translate(0, ${30 + i * 28})`}>
            <path d="M50 0 L100 20 L150 0 L100 40 Z" opacity="0.85" />
          </g>
        ))}
        {/* Sun disc */}
        <circle cx="100" cy="18" r="12" />
        {/* Base */}
        <rect x="70" y="172" width="60" height="8" rx="4" />
      </g>

      {/* Fine line detailing */}
      <g stroke="url(#goldGrad)" strokeWidth="1" fill="none" opacity="0.7">
        <path d="M30 60 Q100 90 170 60" />
        <path d="M30 88 Q100 118 170 88" />
        <path d="M30 116 Q100 146 170 116" />
      </g>
    </svg>
  )
}

export default TotemGold
