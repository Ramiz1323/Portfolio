import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Instagram, Download, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="relative min-h-screen grid-bg">
      <div className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1 slide-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 neon-text">
                <span className="gaming-gradient">Front-End</span> Developer
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Passionate about creating immersive web experiences with modern technologies. Specializing in React,
                Node.js, and responsive design.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-gaming-blue to-gaming-purple hover:opacity-90 transition-all duration-300 hover:shadow-lg hover-float">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pdfs/MyResume.pdf" target="_blank" download="MyResume.pdf">
                  <Button variant="outline" className="gaming-border hover-float">
                    Download CV <Download className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  href="https://github.com/Ramiz1323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover-float"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/sk-ramiz-raza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover-float"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="https://x.com/ramiz_dezi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover-float"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.instagram.com/kuro.ejs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover-float"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center slide-in-right">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gaming-blue to-gaming-purple opacity-20 blur-xl animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-muted/30 glow-effect animate-float">
                  <Image src="/images/logo.png?height=320&width=320" alt="Profile" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="py-16 bg-gaming-dark/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 fade-in">
                <h2 className="text-3xl font-bold mb-2 gaming-gradient">Featured Projects</h2>
                <p className="text-muted-foreground">Some of my recent work</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div
                    className="bg-black/60 border border-muted/20 rounded-lg overflow-hidden gaming-border hover-glow slide-up"
                    style={{ animationDelay: `${500}s` }}
                  >
                    <div className="relative h-48">
                      <Image
                        src={`/images/z-play.png?height=200&width=400&text=Project`}
                        alt={`Project `}
                        fill
                        className="object-cover z-[-1]"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Z-play</h3>
                      <p className="text-muted-foreground mb-4">
                      Z-Play is a fully functional media player with pre-added playlists.
                      </p>
                      <div className="flex justify-between">
                        <Link href="/projects">
                          <Button variant="link" className="p-0 h-auto gaming-gradient hover-float">
                            View Details
                          </Button>
                        </Link>
                        <Link href="https://github.com/Ramiz1323/mediaplayer" target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="icon" className="h-8 w-8 hover-float">
                            <Github className="h-5 w-5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>


                  <div
                    className="bg-black/60 border border-muted/20 rounded-lg overflow-hidden gaming-border hover-glow slide-up"
                    style={{ animationDelay: `${500}s` }}
                  >
                    <div className="relative h-48">
                      <Image
                        src={`/images/z-play.png?height=200&width=400&text=Project`}
                        alt={`Project `}
                        fill
                        className="object-cover z-[-1]"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Z-play</h3>
                      <p className="text-muted-foreground mb-4">
                      Z-Play is a fully functional media player with pre-added playlists.
                      </p>
                      <div className="flex justify-between">
                        <Link href="/projects">
                          <Button variant="link" className="p-0 h-auto gaming-gradient hover-float">
                            View Details
                          </Button>
                        </Link>
                        <Link href="https://github.com/Ramiz1323/mediaplayer" target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="icon" className="h-8 w-8 hover-float">
                            <Github className="h-5 w-5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
          </div>

          <div className="text-center mt-10 fade-in">
            <Link href="/projects">
              <Button variant="outline" className="gaming-border hover-float">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Skills Overview */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold mb-2 gaming-gradient">Skills Overview</h2>
            <p className="text-muted-foreground">Technologies I work with</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "Tailwind CSS",
              "C++",
              "PHP",
              "WordPress",
            ].map((skill, index) => (
              <div
                key={skill}
                className="bg-black/60 border border-muted/20 rounded-lg p-4 text-center gaming-border hover-glow scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-sm font-medium">{skill}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 fade-in">
            <Link href="/skills">
              <Button variant="outline" className="gaming-border hover-float">
                Explore Skills <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
