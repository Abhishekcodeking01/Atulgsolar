"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

type Slide = { src: string; alt: string }

const slides: Slide[] = [
  { src: "/images/top-banner-1.jpg", alt: "Atul-G Solar wide banner with products and headline" },
  { src: "/images/top-banner-2.jpg", alt: "Complete range of solar rooftop solutions panoramic banner" },
]

export function IntroHero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section aria-label="Intro banner" className="w-full">
      <div className="relative w-full bg-white overflow-hidden">
        <div className="relative h-[260px] sm:h-[340px] md:h-[460px] lg:h-[540px] w-full">
          {slides.map((s, i) => (
            <div
              key={s.src}
              className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
              aria-hidden={i !== index}
            >
              <Image
                src={s.src || "/placeholder.svg"}
                alt={s.alt}
                fill
                className="object-contain" // don't crop
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to banner ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full ring-1 ring-black/10 ${i === index ? "bg-black/70" : "bg-black/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
