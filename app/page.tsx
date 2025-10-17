import Image from "next/image"
import { HeroCarousel } from "@/components/hero-carousel"
import { StatsStrip } from "@/components/stats-strip"
import { Testimonial } from "@/components/testimonial"

export default function Page() {
  const clientInstallations = [
    { image: "/images/testimonials/installation-1.jpg", alt: "Solar installation in Amravati" },
    { image: "/images/testimonials/installation-2.jpg", alt: "Microtek inverter installation" },
    { image: "/images/testimonials/installation-3.jpg", alt: "Solar panels on rooftop" },
    { image: "/images/testimonials/installation-4.jpg", alt: "Solar installation with client" },
    { image: "/images/testimonials/installation-5.jpg", alt: "Solar panels installation" },
    { image: "/images/testimonials/installation-6.jpg", alt: "Residential solar installation" },
  ]

  return (
    <div>
      <section className="w-full">
        <div className="w-full bg-white border-y">
          <div className="relative h-[420px] md:h-[560px] w-full p-2 md:p-4">
            <Image
              src="/images/main-banner.jpg"
              alt="Atul Sales and Services - Solar Systems"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="relative h-[300px] w-full rounded-lg overflow-hidden border">
          <Image
            src="/images/rooftop-solutions.jpg"
            alt="Complete Range of Solar Rooftop Solutions"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-6 md:grid-cols-1 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-balance">
              Renewable Solar Energy Solutions for Homes, Businesses, and Farms
            </h1>
            <p className="mt-3 text-muted-foreground">
              Atul-G Solar provides end-to-end solar design, financing, and installation with reliable products.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[color:var(--brand-green-600)] text-white px-4 py-2 hover:bg-[color:var(--brand-green-700)]"
              >
                Get Free Consultation
              </a>
              <a href="/offerings" className="inline-flex items-center justify-center rounded-md border px-4 py-2">
                Explore Offerings
              </a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden mt-6">
            <HeroCarousel />
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Our Work - Client Installations</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clientInstallations.map((installation, idx) => (
            <div key={idx} className="rounded-lg border overflow-hidden bg-white hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full bg-gray-100 p-2">
                <Image
                  src={installation.image || "/placeholder.svg"}
                  alt={installation.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Updates & Announcements</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border p-4 bg-card">
            <h3 className="font-semibold">Govt Subsidy</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Avail ₹78,000 per kW subsidy with registered vendor support. Fast processing.
            </p>
          </article>
          <article className="rounded-lg border p-4 bg-card">
            <h3 className="font-semibold">Financing</h3>
            <p className="text-sm text-muted-foreground mt-1">100% loan available for solar installations.</p>
          </article>
        </div>
      </section>

      <Testimonial />

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="relative h-64 w-full rounded-lg overflow-hidden border bg-white">
          <Image
            src="/images/battery-banner.jpg"
            alt="Microtek Advanced Dura Core Battery"
            fill
            className="object-contain"
          />
        </div>
      </section>
    </div>
  )
}
