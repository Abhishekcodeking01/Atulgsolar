export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <h1 className="text-3xl font-semibold">About Us</h1>
      <p>
        “Atul-G Solar (Atul Sales and Services) is a leading provider of innovative solar technology, empowering a
        greener, energy-independent world. We serve residential, commercial, and industrial clients in Amravati and
        beyond. Fastest growing solar company in our region.”
      </p>

      <section>
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-pretty mt-2">
          “To accelerate the transition to a sustainable future by providing affordable and reliable solar energy
          solutions.”
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Values</h3>
          <ul className="list-disc ml-5 mt-2 text-muted-foreground">
            <li>Green energy & sustainability</li>
            <li>Reliability</li>
            <li>Customer satisfaction (1000+ happy customers)</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Reference Scheme</h3>
          <p className="text-muted-foreground mt-2">Refer a customer to get free panel cleaning services.</p>
        </div>
      </section>
    </div>
  )
}
