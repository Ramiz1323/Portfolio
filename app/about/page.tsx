"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"

export default function AboutPage() {
  const certificates = [
    {
      id: 1,
      title: "Web Development Internship",
      issuer: "GAO Tek Inc.",
      date: "April 2025 - July 2025",
      image: "/images/internship.jpg?height=40&width=60",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress", "Web Design"],
    },
    {
      id: 2,
      title: "MERN Stack Development",
      issuer: "Coursera",
      date: "March 2023",
      image: "/placeholder.svg?height=400&width=600&text=Certificate+2",
      skills: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      id: 3,
      title: "Advanced React Patterns",
      issuer: "Frontend Masters",
      date: "June 2023",
      image: "/placeholder.svg?height=400&width=600&text=Certificate+3",
      skills: ["React", "Redux", "Context API"],
    },
    {
      id: 4,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "August 2022",
      image: "/placeholder.svg?height=400&width=600&text=Certificate+4",
      skills: ["HTML", "CSS", "Responsive Design"],
    },
  ]

  return (
    <div className="pt-24 pb-16 min-h-screen grid-bg">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 gaming-gradient text-center fade-in">About Me</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-lg overflow-hidden gaming-border glow-effect slide-in-left">
                <Image src="/images/me.jpg?height=400&width=400" alt="Profile" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-black/60 border border-muted/20 rounded-lg p-6 gaming-border mb-8 slide-in-right">
              <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
              <p className="text-muted-foreground mb-4">
                Hello, I'm Sk Ramiz Raza, a dedicated student and aspiring professional with a strong foundation in both science and technology. I completed my 10th and 12th grades from Mitra Institution Bhowanipur Branch, securing 83% and 87% respectively, with a focus on pure science. My academic journey reflects a deep passion for physics and computer science, which I am currently pursuing through dual degree programs. I am enrolled in Physics Honours at Netaji Subhash Open University and a Bachelor of Computer Applications (BCA) at Netaji Subhas Engineering College.
              </p>
              <p className="text-muted-foreground mb-4">
                I am actively enhancing my skills in full-stack web development and cloud computing, alongside a solid understanding of programming languages such as C, C++, and basic knowledge of Python. My goal is to merge my interests in physics and technology to innovate and contribute meaningfully in the tech industry.
              </p>
              <p className="text-muted-foreground">
                I am driven by a curiosity for how things work and a desire to build solutions that can make a difference. I am continuously learning and evolving, committed to developing a versatile skill set that spans both the physical and digital worlds.
              </p>
            </div>

            <div
              className="bg-black/60 border border-muted/20 rounded-lg p-6 gaming-border slide-in-right"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-2xl font-bold mb-4">My Journey</h2>
              <div className="space-y-6">
                <div className="relative pl-8 border-l border-muted/30 slide-up" style={{ animationDelay: "0.3s" }}>
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-gradient-to-r from-gaming-blue to-gaming-purple"></div>
                  <h3 className="text-xl font-semibold">Started Learning Web Development</h3>
                  <p className="text-sm text-muted-foreground mb-2">February 2024</p>
                  <p className="text-muted-foreground">Began my journey with HTML, CSS, and JavaScript fundamentals.</p>
                </div>

                <div className="relative pl-8 border-l border-muted/30 slide-up" style={{ animationDelay: "0.5s" }}>
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-gradient-to-r from-gaming-blue to-gaming-purple"></div>
                  <h3 className="text-xl font-semibold">Built Projects</h3>
                  <p className="text-sm text-muted-foreground mb-2">August 2024</p>
                  <p className="text-muted-foreground">
                    Created My Portfolio using basics & created a media-player and many more.
                  </p>
                </div>

                <div className="relative pl-8 border-l border-muted/30 slide-up" style={{ animationDelay: "0.4s" }}>
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-gradient-to-r from-gaming-blue to-gaming-purple"></div>
                  <h3 className="text-xl font-semibold">Learned React and Node.js</h3>
                  <p className="text-sm text-muted-foreground mb-2">January 2025</p>
                  <p className="text-muted-foreground">
                    Expanded my skills to include modern frontend frameworks and backend technologies.
                  </p>
                </div>

                <div className="relative pl-8 slide-up" style={{ animationDelay: "0.6s" }}>
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-gradient-to-r from-gaming-blue to-gaming-purple"></div>
                  <h3 className="text-xl font-semibold">Continuing to Grow</h3>
                  <p className="text-sm text-muted-foreground mb-2">Present</p>
                  <p className="text-muted-foreground">
                    Constantly learning new technologies and improving my skills as a developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 gaming-gradient text-center fade-in">Certificates & Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card
                key={cert.id}
                className="bg-black/60 border-muted/20 gaming-border overflow-hidden hover-glow slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-gaming-blue to-gaming-purple hover:opacity-90"
                        onClick={() => window.open(cert.image, "_blank")}
                      >
                        <Eye className="mr-2 h-4 w-4" /> View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="gaming-border"
                        onClick={() => {
                          const link = document.createElement("a")
                          link.href = cert.image
                          link.download = `${cert.title.replace(/\s+/g, "-")}.jpg`
                          document.body.appendChild(link)
                          link.click()
                          document.body.removeChild(link)
                        }}
                      >
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {cert.issuer} • {cert.date}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="gaming-border">
                        {skill}
                      </Badge>
                    ))}
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
