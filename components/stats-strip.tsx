export function StatsStrip() {
  return (
    <div className="bg-[color:var(--brand-green-50)] text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-md border p-4 bg-white">
          <div className="text-sm text-muted-foreground">Loan Availability</div>
          <div className="text-xl font-semibold">80% Loan</div>
        </div>
        <div className="rounded-md border p-4 bg-white">
          <div className="text-sm text-muted-foreground">Government Subsidy</div>
          <div className="text-xl font-semibold">₹18,000 per kW</div>
        </div>
        <div className="rounded-md border p-4 bg-white">
          <div className="text-sm text-muted-foreground">2kW System Monthly</div>
          <div className="text-xl font-semibold">₹2,000 approx.</div>
        </div>
      </div>
    </div>
  )
}
