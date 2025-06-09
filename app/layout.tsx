import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import Header from "../components/header"
import Footer from "../components/footer"
import { Inter, Nunito } from "next/font/google"

// Load fonts with CSS variables for Tailwind
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })

export const metadata: Metadata = {
  title: "NOW UI/UX Design Agency",
  description: "Professional UI/UX design services that drive business growth and user satisfaction.",
  keywords: "UI design, UX design, user experience, user interface, web design, mobile app design, digital agency",
  authors: [{ name: "NOW Design Agency" }],
  openGraph: {
    title: "NOW UI/UX Design Agency",
    description: "Professional UI/UX design services that drive business growth",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable}`}>
      <body className="font-inter">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
