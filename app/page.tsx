import Image from "next/image"
import { HeroCarousel } from "@/components/hero-carousel"
import { OfferingsCards } from "@/components/offerings-cards"
import { StatsStrip } from "@/components/stats-strip"
import { Testimonial } from "@/components/testimonial"

export default function Page() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-6 md:grid-cols-[1.2fr_.8fr] items-center">
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
          <div className="rounded-lg overflow-hidden">
            <HeroCarousel />
          </div>
        </div>
      </section>

      <StatsStrip />
      <OfferingsCards />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Updates & Announcements</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border p-4 bg-card">
            <h3 className="font-semibold">Govt Subsidy</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Avail ₹18,000 per kW subsidy with registered vendor support. Fast processing.
            </p>
          </article>
          <article className="rounded-lg border p-4 bg-card">
            <h3 className="font-semibold">Financing</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Up to 80% loan available. Example: 2kW system around ₹2,000 per month.
            </p>
          </article>
        </div>
      </section>

      <Testimonial />

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="relative h-48 w-full rounded-lg overflow-hidden border">
          <Image src="/images/products-collage.png" alt="Microtek solar product range" fill className="object-cover" />
        </div>
      </section>
    </div>
  )
}
