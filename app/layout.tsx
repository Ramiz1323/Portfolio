import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sk Ramiz Raza",
  "url": "https://portfolio-ramiz.vercel.app",
  "jobTitle": "Front-End Developer",
  "sameAs": [
    "https://github.com/Ramiz1323",
    "https://www.linkedin.com/in/sk-ramiz-raza",
    "https://x.com/ramiz_dezi",
    "https://www.instagram.com/kuro.ejs"
  ],
  "knowsAbout": ["React", "JavaScript", "Tailwind CSS", "Next.js", "Web Development"],
  "description": "Professional portfolio of Sk Ramiz Raza, a front-end developer specializing in modern web experiences."
};

export const metadata: Metadata = {
  title: "Ramiz's Portfolio | Front-End Developer",
  description: "Professional portfolio showcasing advanced web development skills, React projects, and immersive digital experiences.",
  keywords: ["Front-End Developer", "React", "Next.js", "Portfolio", "Web Development", "UI/UX"],
  authors: [{ name: "Ramiz Raza" }],
  openGraph: {
    title: "Ramiz's Portfolio | Front-End Developer",
    description: "Professional portfolio showcasing advanced web development skills and immersive digital experiences.",
    url: "https://portfolio-ramiz.vercel.app", // Placeholder, usually replaced later
    siteName: "Ramiz Raza Portfolio",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Ramiz Raza Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramiz's Portfolio | Front-End Developer",
    description: "Professional portfolio showcasing advanced web development skills and immersive digital experiences.",
    images: ["/images/logo.png"],
    creator: "@ramiz_dezi",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
