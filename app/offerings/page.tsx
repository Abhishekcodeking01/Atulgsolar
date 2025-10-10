import Image from "next/image"

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <h1 className="text-3xl font-semibold">Offerings & Solutions</h1>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-5">
          <h2 className="font-semibold">Renewable Solar Energy</h2>
          <p className="text-muted-foreground mt-1">Residential, commercial, and industrial installations.</p>
        </div>
        <div className="rounded-lg border p-5">
          <h2 className="font-semibold">Sourkrushi Pump</h2>
          <p className="text-muted-foreground mt-1">
            Uninterrupted daytime power for irrigation; reliable and bill-free operation.
          </p>
          <div className="relative h-40 mt-3 rounded-md overflow-hidden">
            <Image alt="Solar agriculture pumps" src="/images/pump-banner.jpg" fill className="object-cover" />
          </div>
        </div>
        <div className="rounded-lg border p-5">
          <h2 className="font-semibold">Solar Loan Financing</h2>
          <ul className="list-disc ml-5 mt-2 text-muted-foreground">
            <li>80% loan available</li>
            <li>₹18,000/kW subsidy</li>
            <li>2kW system ≈ ₹2,000 monthly</li>
            <li>Registered vendor, quality work, clean & safe energy</li>
          </ul>
          <div className="relative h-40 mt-3 rounded-md overflow-hidden">
            <Image alt="Solar loan details" src="/images/loan-banner.jpg" fill className="object-cover" />
          </div>
        </div>
        <div className="rounded-lg border p-5">
          <h2 className="font-semibold">Microtek Products</h2>
          <p className="text-muted-foreground mt-1">Inverters, batteries, and panel options.</p>
          <div className="relative h-40 mt-3 rounded-md overflow-hidden">
            <Image alt="Microtek product lineup" src="/images/products-collage.png" fill className="object-cover" />
          </div>
        </div>
        <div className="rounded-lg border p-5 md:col-span-2">
          <h2 className="font-semibold">Consultation & Installation</h2>
          <ul className="list-disc ml-5 mt-2 text-muted-foreground">
            <li>Free consultation</li>
            <li>Custom proposal & tailored solutions</li>
            <li>Fast installation by experts</li>
            <li>Financing/zero-down options</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
