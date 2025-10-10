export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-4">
      <h1 className="text-3xl font-semibold">Terms and Conditions</h1>
      <p>
        These Terms govern the purchase and installation of solar products and services provided by Atul-G Solar. By
        engaging our services, you agree to these Terms.
      </p>
      <h2 className="text-xl font-semibold mt-4">Products & Services</h2>
      <ul className="list-disc ml-5 text-muted-foreground">
        <li>Quotations are valid for 30 days unless stated otherwise.</li>
        <li>Installation timelines depend on site readiness and approvals.</li>
        <li>Manufacturer warranties apply to products; workmanship warranty covers installation.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-4">Payments & Financing</h2>
      <ul className="list-disc ml-5 text-muted-foreground">
        <li>Financing and subsidies are subject to eligibility and third-party approval.</li>
        <li>Milestone-based billing; delays due to force majeure may adjust schedules.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-4">Liability</h2>
      <ul className="list-disc ml-5 text-muted-foreground">
        <li>Atul-G Solar is not liable for grid failures or external equipment not supplied by us.</li>
        <li>Customers must maintain systems as per guidelines to retain warranty coverage.</li>
      </ul>
      <p className="text-sm text-muted-foreground mt-4">© Atul-G Solar 2025. All rights reserved.</p>
    </div>
  )
}
