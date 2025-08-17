import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-muted/20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="relative h-8 w-8 mr-2">
              <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
            </div>
            <span className="text-lg font-bold gaming-gradient">Portfolio</span>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link
              href="https://github.com/Ramiz1323"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sk-ramiz-raza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://x.com/ramiz_dezi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/kuro.ejs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:ramizraza2313@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} All rights reserved</div>
        </div>
      </div>
    </footer>
  )
}
