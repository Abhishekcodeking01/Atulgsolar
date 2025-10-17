"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/offerings", label: "Offerings/Solutions" },
  { href: "/team-testimonials", label: "Team & Testimonials" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
]

export function SiteNavbar() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Atul-G Solar Home">
          <Image src="/images/logo.png" alt="Atul-G Solar logo" width={40} height={40} className="rounded-sm" />
          <span className="font-semibold tracking-tight">Atul-G Solar</span>
        </Link>
        <ul className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm transition-colors",
                  pathname === l.href ? "bg-[color:var(--brand-green-600)] text-white" : "hover:bg-muted",
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
