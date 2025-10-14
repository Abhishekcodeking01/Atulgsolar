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
          <div className="relative h-40 mt-3 rounded-md overflow-hidden bg-white border p-1">
            <Image alt="Solar agriculture pumps" src="/images/pump-banner.jpg" fill className="object-contain" />
          </div>
        </div>

        <div className="rounded-lg border p-5">
          <h2 className="font-semibold">Off-Grid Inverters</h2>
          <p className="text-muted-foreground mt-1">All range of off grid inverters.</p>
          <div className="relative h-40 mt-3 rounded-md overflow-hidden bg-white border p-1">
            <Image alt="Off grid inverters" src="/images/mppt-solar-pcu.jpg" fill className="object-contain" />
          </div>
        </div>

        <div className="rounded-lg border p-5">
          <h2 className="font-semibold">Environment-Friendly UPS</h2>
          <p className="text-muted-foreground mt-1">The most environment friendly UPS.</p>
          <div className="relative h-40 mt-3 rounded-md overflow-hidden bg-white border p-1">
            <Image alt="Environment friendly UPS" src="/images/environment-ups.jpg" fill className="object-contain" />
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
