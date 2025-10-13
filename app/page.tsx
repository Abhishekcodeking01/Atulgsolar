import Image from "next/image"
import { HeroBanner } from "@/components/hero-banner"
import { HeroCarousel } from "@/components/hero-carousel"
import { OfferingsCards } from "@/components/offerings-cards"
import { StatsStrip } from "@/components/stats-strip"
import { Testimonial } from "@/components/testimonial"

export default function Page() {
  return (
    <div>
      <HeroBanner />

      <StatsStrip />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our Work & Solutions</h2>
        <HeroCarousel />
      </section>

      <OfferingsCards />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Updates & Announcements</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border p-4 bg-card">
            <h3 className="font-semibold">Fast Processing</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Quick approval and installation with registered vendor support for government schemes.
            </p>
          </article>
          <article className="rounded-lg border p-4 bg-card">
            <h3 className="font-semibold">Zero Down Payment</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Ask about our zero down payment financing options. Start saving from day one.
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
