"use client"

import type React from "react"

import { useState } from "react"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log("[v0] Contact form submitted:", Object.fromEntries(data.entries()))
    setStatus("sent")
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium">Name</label>
          <input required name="name" className="w-full rounded-md border px-3 py-2 bg-background" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Email</label>
          <input required type="email" name="email" className="w-full rounded-md border px-3 py-2 bg-background" />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium">Phone</label>
        <input required name="phone" className="w-full rounded-md border px-3 py-2 bg-background" />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium">Message</label>
        <textarea required name="message" rows={5} className="w-full rounded-md border px-3 py-2 bg-background" />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-[color:var(--brand-green-600)] text-white px-4 py-2 hover:bg-[color:var(--brand-green-700)]"
      >
        {status === "sent" ? "Message Sent!" : "Send Message"}
      </button>
    </form>
  )
}
