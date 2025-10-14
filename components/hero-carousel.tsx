"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const slides = [
  { src: "/images/mppt-solar-pcu.jpg", alt: "Off-grid inverters - All range" },
  { src: "/images/environment-ups.jpg", alt: "The most environment friendly UPS" },
  { src: "/images/pump-banner.jpg", alt: "Sourkrushi Pump" },
  { src: "/images/battery-banner.jpg", alt: "Stay Powered Up - ADC battery" },
]

export function HeroCarousel() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="relative w-full aspect-[16/5] bg-muted overflow-hidden rounded-lg p-2 md:p-3 border">
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== index}
        >
          <Image src={s.src || "/placeholder.svg"} alt={s.alt} fill className="object-contain" priority={i === 0} />
        </div>
      ))}
      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  )
}
