import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects | Sk Ramiz Raza",
  description: "Explore a showcase of my web development projects, ranging from full-stack e-commerce platforms to media players and interactive dashboards.",
}

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen grid-bg">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 gaming-gradient text-center fade-in">My Projects</h1>

        <p
          className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          I am currently working on some exciting new projects. Check back soon to see a showcase of my latest work
          and technical implementations.
        </p>

        <div className="flex flex-col items-center justify-center py-20 fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative w-full max-w-lg p-12 bg-black/60 border border-muted/20 rounded-2xl gaming-border text-center hover-glow shadow-2xl">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gaming-blue to-gaming-purple px-6 py-2 rounded-full text-sm font-bold animate-pulse">
              WORK IN PROGRESS
            </div>
            <h2 className="text-3xl font-bold mb-4 gaming-gradient">Coming Soon</h2>
            <p className="text-muted-foreground mb-8">
              My full portfolio of projects is currently being curated for the best presentation. 
              Stay tuned for interactive demos and technical deep dives!
            </p>
            <div className="flex justify-center gap-4">
              <div className="h-2 w-24 bg-muted/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-gaming-blue to-gaming-purple w-2/3 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-sm text-muted-foreground mb-4">In the meantime, feel free to check my GitHub for recent activity.</p>
          <Link href="https://github.com/Ramiz1323" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-gaming-blue to-gaming-purple hover:opacity-90 transition-all duration-300 hover:shadow-lg hover-float">
              <Github className="mr-2 h-4 w-4" /> Visit GitHub profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
