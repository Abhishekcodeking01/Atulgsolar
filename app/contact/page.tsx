import { ContactForm } from "@/components/contact-form"

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border p-5">
          <ContactForm />
        </div>
        <div className="rounded-lg border p-5">
          <h2 className="font-semibold">Find Us</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Shop no 6, Sriram Super Market, Rajapeth, Amravati, Maharashtra 444605
          </p>
          <div className="mt-4 overflow-hidden rounded-md">
            <iframe
              title="Atul-G Solar Location"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md"
              src={
                "https://www.google.com/maps?q=Sriram%20Super%20Market%2C%20Rajapeth%2C%20Amravati%2C%20Maharashtra%20444605&output=embed"
              }
            />
          </div>
          <div className="mt-4 text-sm">
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
          </div>
        </div>
      </div>
    </div>
  )
}
