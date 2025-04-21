import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      image: "/placeholder.svg?height=300&width=600&text=E-Commerce+Platform",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality and real-time updates.",
      image: "/placeholder.svg?height=300&width=600&text=Task+Management+App",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with a modern design.",
      image: "/placeholder.svg?height=300&width=600&text=Portfolio+Website",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather and forecasts for multiple locations.",
      image: "/placeholder.svg?height=300&width=600&text=Weather+Dashboard",
      technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A blog platform with content management system and user authentication.",
      image: "/placeholder.svg?height=300&width=600&text=Blog+Platform",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "An application to find recipes based on available ingredients and dietary preferences.",
      image: "/placeholder.svg?height=300&width=600&text=Recipe+Finder",
      technologies: ["React", "API Integration", "CSS"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="pt-24 pb-16 min-h-screen grid-bg">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 gaming-gradient text-center fade-in">My Projects</h1>

        <p
          className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Here are some of the projects I've worked on. Each project represents different skills and technologies I've
          mastered throughout my development journey.
        </p>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center fade-in" style={{ animationDelay: "0.2s" }}>
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-black/60 border-muted/20 gaming-border overflow-hidden hover-glow slide-up"
                style={{ animationDelay: `${0.3 + index * 0.15}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="gaming-border">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gaming-border hover-float">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Button>
                    </Link>
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-gaming-blue to-gaming-purple hover:opacity-90 transition-opacity hover-float"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center fade-in" style={{ animationDelay: "0.6s" }}>
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-black/60 border-muted/20 gaming-border overflow-hidden hover-glow slide-up"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="gaming-border">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gaming-border hover-float">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Button>
                    </Link>
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-gaming-blue to-gaming-purple hover:opacity-90 transition-opacity hover-float"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
