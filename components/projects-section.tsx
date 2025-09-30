import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { SectionAnimation } from "@/components/section-animations"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "World Explorer",
      description: "Explorez les pays du monde entier avec des informations en temps réel, des anecdotes générées par IA, et une expérience utilisateur moderne et intuitive.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      image: "/world-explorer.png",
      github: "#",
      demo: "https://world-explorer0.netlify.app/",
    },
    {
      title: "Yobo Fast Food",
      description: "Délicieux snacks, pizzas et glaces faites maison. Commandez en ligne et recevez vos plats préférés rapidement.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      image: "/yobo.png",
      github: "#",
      demo: "https://yobo-fast-food-ice.netlify.app/",
    },
  ]

  return (
    <SectionAnimation 
      animationType="stagger" 
      className="py-12 md:py-20 px-4 bg-secondary/20"
    >
      <section id="projects">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Mes Réalisations</h2>
          <p className="text-muted-foreground text-sm md:text-lg">Projets que j'ai développés</p>
        </div>

        {/* Mobile: Horizontal scroll layout */}
        <div className="block sm:hidden">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-80 overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                {/* Mobile: Horizontal image */}
                <div className="relative overflow-hidden h-40">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 320px, 400px"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Mobile: Horizontal content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 leading-tight">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 text-pretty line-clamp-2">{project.description}</p>

                  {/* Mobile: Horizontal tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Mobile: Horizontal buttons */}
                  <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-sm border-2 border-primary/60 text-primary hover:bg-primary hover:text-white bg-background/50 hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
                      >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 text-sm bg-primary text-black hover:bg-primary/90 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 border border-primary/20 hover:border-primary/40 cursor-pointer"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden sm:grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
                <div className="relative overflow-hidden h-48">
                  <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                      className="flex-1 border-2 border-primary/60 text-primary hover:bg-primary hover:text-white bg-background/50 hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary text-black hover:bg-primary/90 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 border border-primary/20 hover:border-primary/40 cursor-pointer"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </SectionAnimation>
  )
}
