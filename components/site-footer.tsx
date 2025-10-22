import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t mt-12 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold mb-2">Atul-G Solar</h3>
          <p className="text-sm text-muted-foreground">
            Reliable solar energy solutions for homes, businesses, and farms.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">
            Phone:{" "}
            <a className="underline" href="tel:7972110717">
              7972110717
            </a>
            ,{" "}
            <a className="underline" href="tel:9420274175">
              9420274175
            </a>
            <br />
            Email:{" "}
            <a className="underline" href="mailto:atulgindian@gmail.com">
              atulgindian@gmail.com
            </a>
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Address</h4>
          <p className="text-sm">Shop no 6, Sriram Super Market, Rajapeth, Amravati, Maharashtra 444605</p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-4 border-t flex gap-6 justify-center text-sm">
        <Link href="/terms" className="text-muted-foreground hover:text-foreground underline">
          Terms and Conditions
        </Link>
        <Link href="/privacy" className="text-muted-foreground hover:text-foreground underline">
          Privacy Policy
        </Link>
      </div>
      <div className="bg-[color:var(--brand-green-700)] text-white text-center text-sm py-3">
        © 2025 Atul sales and Services. All rights reserved
      </div>
    </footer>
  )
}
