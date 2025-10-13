export function StatsStrip() {
  return (
    <div className="bg-[color:var(--brand-green-50)] text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border p-6 bg-white shadow-sm">
            <div className="text-base text-muted-foreground mb-2">Government Subsidy</div>
            <div className="text-3xl md:text-4xl font-bold text-[color:var(--brand-green-600)]">
              ₹78,000 <span className="text-xl font-normal text-muted-foreground">per kW</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Avail central government subsidy with registered vendor support
            </p>
          </div>
          <div className="rounded-lg border p-6 bg-white shadow-sm">
            <div className="text-base text-muted-foreground mb-2">Loan Availability</div>
            <div className="text-3xl md:text-4xl font-bold text-[color:var(--brand-orange-600)]">
              100% <span className="text-xl font-normal text-muted-foreground">Loan</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Complete financing available. Example: 2kW system ≈ ₹2,000/month
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
