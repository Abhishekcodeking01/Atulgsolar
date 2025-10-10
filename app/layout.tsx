import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {/* Brand tokens for green/orange scheme */}
        <style>{`
          :root{
            --brand-green-50: #eef8f0;
            --brand-green-600: #0f8a3b;
            --brand-green-700: #0b6a2d;
            --brand-orange-600: #e57200;
          }
        `}</style>
        <Suspense fallback={<div>Loading...</div>}>
          <SiteNavbar />
          <main className="min-h-dvh">{children}</main>
          <SiteFooter />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
