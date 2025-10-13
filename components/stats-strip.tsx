export function StatsStrip() {
  return (
    <div className="bg-[color:var(--brand-green-50)] text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-md border p-4 bg-white">
          <div className="text-sm text-muted-foreground">Government Subsidy</div>
          <div className="text-xl font-semibold">₹78,000 per kW</div>
          <p className="text-xs text-muted-foreground mt-1">As communicated; subject to policy/eligibility.</p>
        </div>
        <div className="rounded-md border p-4 bg-white">
          <div className="text-sm text-muted-foreground">Loan Availability</div>
          <div className="text-xl font-semibold">100% Loan</div>
          <p className="text-xs text-muted-foreground mt-1">Financing options available with partners.</p>
        </div>
      </div>
    </div>
  )
}
