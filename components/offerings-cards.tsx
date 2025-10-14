import Image from "next/image"

const offerings = [
  {
    title: "Off-Grid Inverters",
    desc: "All range of off grid inverters",
    img: "/images/mppt-solar-pcu.jpg",
  },
  {
    title: "Sourkrushi Pump",
    desc: "Daytime reliable power for irrigation with bill-free operation.",
    img: "/images/pump-banner.jpg",
  },
  {
    title: "Environment-Friendly UPS",
    desc: "The most environment friendly UPS",
    img: "/images/environment-ups.jpg",
  },
  {
    title: "Consultation & Installation",
    desc: "Free consultation, tailored proposal, fast professional install.",
    img: "/images/slide-1.jpg",
  },
]

export function OfferingsCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-balance">Our Offerings</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {offerings.map((o) => (
          <div key={o.title} className="rounded-lg border overflow-hidden bg-card">
            <div className="relative h-40 w-full bg-white">
              <Image src={o.img || "/placeholder.svg"} alt={o.title} fill className="object-contain p-2" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{o.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{o.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
