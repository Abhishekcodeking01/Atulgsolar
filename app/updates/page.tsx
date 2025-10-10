import Image from "next/image"

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <h1 className="text-3xl font-semibold">Updates & Testimonials</h1>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-lg border p-5 bg-card">
          <h2 className="font-semibold">Government Schemes</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Eligible customers can access ₹18,000/kW subsidy under current programs.
          </p>
          <div className="relative h-44 mt-3 rounded-md overflow-hidden">
            <Image alt="Subsidy banner" src="/images/slide-2.jpg" fill className="object-cover" />
          </div>
        </article>

        <article className="rounded-lg border p-5 bg-card">
          <h2 className="font-semibold">Product Launches</h2>
          <p className="text-sm text-muted-foreground mt-1">Explore the latest Microtek inverters and batteries.</p>
          <div className="relative h-44 mt-3 rounded-md overflow-hidden">
            <Image alt="Product collage" src="/images/slide-5.png" fill className="object-cover" />
          </div>
        </article>
      </section>

      <section className="rounded-lg border p-6 bg-card">
        <h2 className="font-semibold">Customer Review</h2>
        <p className="mt-2 text-pretty">
          “Thanks to Atul Sales and services, our company is now running for clean energy. We’re saving money and
          showing our commitment to sustainability!”
        </p>
      </section>
    </div>
  )
}
