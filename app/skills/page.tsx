import { Card, CardContent } from "@/components/ui/card"

export default function SkillsPage() {
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PHP", level: 70 },
      ],
    },
    {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "C", level: 75 },
        { name: "C++", level: 70 },
        { name: "PHP", level: 70 },
      ],
    },
    {
      name: "Tools & Platforms",
      skills: [
        { name: "Git", level: 85 },
        { name: "WordPress", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 70 },
      ],
    },
  ]

  return (
    <div className="pt-24 pb-16 min-h-screen grid-bg">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 gaming-gradient text-center fade-in">My Skills</h1>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-muted-foreground mb-12 fade-in" style={{ animationDelay: "0.1s" }}>
            I've acquired a diverse set of skills throughout my journey as a developer. Here's an overview of my
            technical expertise and proficiency levels.
          </p>

          <div className="space-y-12">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.name}
                className="bg-black/60 border border-muted/20 rounded-lg p-6 gaming-border slide-up"
                style={{ animationDelay: `${catIndex * 0.2}s` }}
              >
                <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="slide-in-right"
                      style={{ animationDelay: `${catIndex * 0.2 + skillIndex * 0.1}s` }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-gaming-blue to-gaming-purple transition-all duration-1000"
                          style={{ width: `${skill.level}%`, transitionDelay: `${skillIndex * 0.1}s` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-16 bg-black/60 border border-muted/20 rounded-lg p-6 gaming-border fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <h2 className="text-2xl font-bold mb-6">My Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                className="bg-black/60 border-muted/20 gaming-border hover-glow bounce-in"
                style={{ animationDelay: "0.9s" }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">1. Planning & Research</h3>
                  <p className="text-muted-foreground">
                    I begin each project with thorough planning and research to understand requirements and identify the
                    best technologies to use.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="bg-black/60 border-muted/20 gaming-border hover-glow bounce-in"
                style={{ animationDelay: "1s" }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">2. Design & Prototyping</h3>
                  <p className="text-muted-foreground">
                    Creating wireframes and prototypes to visualize the project before diving into development.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="bg-black/60 border-muted/20 gaming-border hover-glow bounce-in"
                style={{ animationDelay: "1.1s" }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">3. Development</h3>
                  <p className="text-muted-foreground">
                    Writing clean, efficient, and maintainable code while following best practices and design patterns.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="bg-black/60 border-muted/20 gaming-border hover-glow bounce-in"
                style={{ animationDelay: "1.2s" }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">4. Testing & Deployment</h3>
                  <p className="text-muted-foreground">
                    Thoroughly testing the application and deploying it using modern CI/CD practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
