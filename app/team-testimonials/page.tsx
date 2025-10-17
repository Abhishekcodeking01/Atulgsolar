import Image from "next/image"

export default function Page() {
  const teamMembers = [
    {
      name: "Atul Ghute",
      designation: "Entrepreneur, Master of Technology",
      bio: "23 years of experience in the power sector",
      image: "/images/team/atul-ghute.jpg",
    },
    {
      name: "Afshan",
      designation: "Administrative Officer",
      bio: "",
      image: "/images/team/afshan.jpg",
    },
    {
      name: "Sneha",
      designation: "Online Administrator",
      bio: "",
      image: "/images/team/sneha.jpg",
    },
    {
      name: "Sandeep",
      designation: "MSDCL Work Executive",
      bio: "",
      image: "/images/team/sandeep.jpg",
    },
    {
      name: "Krishna & Shyam",
      designation: "Solar System Electrical System Installation Team",
      bio: "",
      image: "/images/team/krishna-shyam.jpg",
    },
    {
      name: "Reshikesh",
      designation: "Service Provider",
      bio: "",
      image: "/images/team/reshikesh.jpg",
    },
    {
      name: "Store Manager",
      designation: "Store Manager",
      bio: "",
      image: "/images/team/store-manager.jpg",
    },
  ]

  const installations = [
    { image: "/images/testimonials/installation-1.jpg", alt: "Solar installation in Amravati" },
    { image: "/images/testimonials/installation-2.jpg", alt: "Microtek inverter installation" },
    { image: "/images/testimonials/installation-3.jpg", alt: "Solar panels on rooftop" },
    { image: "/images/testimonials/installation-4.jpg", alt: "Solar installation with client" },
    { image: "/images/testimonials/installation-5.jpg", alt: "Solar panels installation" },
    { image: "/images/testimonials/installation-6.jpg", alt: "Residential solar installation" },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-12">
      <h1 className="text-3xl md:text-4xl font-semibold">Team & Testimonials</h1>

      {/* Team Members Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Our Team</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-lg border overflow-hidden bg-card hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 w-full bg-gray-100 p-2">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-contain" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-[color:var(--brand-green-600)] font-medium">{member.designation}</p>
                {member.bio && <p className="text-xs text-muted-foreground mt-2">{member.bio}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Installations / Our Work Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Our Work - Client Installations</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {installations.map((installation, idx) => (
            <div key={idx} className="rounded-lg border overflow-hidden bg-white hover:shadow-lg transition-shadow">
              <div className="relative h-64 w-full bg-gray-100 p-2">
                <Image
                  src={installation.image || "/placeholder.svg"}
                  alt={installation.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
