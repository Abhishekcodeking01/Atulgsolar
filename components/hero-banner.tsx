"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const banners = [
  { src: "/images/hero-banner-1.jpg", alt: "Complete range of solar rooftop solutions" },
  { src: "/images/hero-banner-2.jpg", alt: "Atul Sales and Services solar systems" },
]

export function HeroBanner() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % banners.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-muted overflow-hidden">
      {banners.map((banner, i) => (
        <div
          key={banner.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== index}
        >
          <Image
            src={banner.src || "/placeholder.svg"}
            alt={banner.alt}
            fill
            className="object-cover object-center"
            priority={i === 0}
            quality={90}
          />
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-3">
        {banners.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to banner ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition-all ${i === index ? "bg-white w-8" : "bg-white/70"}`}
          />
        ))}
      </div>
    </div>
  )
}
