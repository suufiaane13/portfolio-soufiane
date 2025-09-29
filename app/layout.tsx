import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "sonner"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Soufiane HAJJI - Développeur Full-Stack & UI/UX Designer",
  description:
    "Portfolio de Soufiane HAJJI, Développeur Full-Stack & UI/UX Designer spécialisé en React, Next.js, Node.js. Créateur d'expériences digitales exceptionnelles.",
  keywords: ["développeur", "full-stack", "ui/ux", "web", "React", "Next.js", "Node.js", "TypeScript", "portfolio", "freelance"],
  authors: [{ name: "Soufiane HAJJI" }],
  creator: "Soufiane HAJJI",
  openGraph: {
    title: "Soufiane HAJJI - Développeur Full-Stack & UI/UX Designer",
    description: "Créateur d'expériences digitales exceptionnelles avec React, Next.js et Node.js",
    type: "website",
    locale: "fr_FR",
    url: "https://soufiane-hajji.vercel.app",
    siteName: "Soufiane HAJJI Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Soufiane HAJJI - Logo Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soufiane HAJJI - Développeur Full-Stack & UI/UX Designer",
    description: "Créateur d'expériences digitales exceptionnelles",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://soufiane-hajji.vercel.app",
  },
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Toaster 
          position="top-right"
          expand={true}
          richColors={true}
          closeButton={true}
        />
        <Analytics />
      </body>
    </html>
  )
}
