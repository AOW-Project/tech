import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "../components/header"
import Footer from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

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
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
