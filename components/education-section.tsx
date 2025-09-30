import { Card } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"
import { SectionAnimation } from "@/components/section-animations"

export function EducationSection() {
  const education = [
    {
      year: "2023-2025",
      title: "Technicien Spécialisé en Développement Digital",
      description: "Formation en développement web, Mobile",
      institution: "Centre Mixte de Formation Professionnelle, Oujda",
      current: false,
    },
    {
      year: "2022-2023",
      title: "Baccalauréat Sciences Physiques - Option Français",
      description: "Diplôme du baccalauréat avec spécialisation en sciences physiques",
      institution: "Lycée Ennahda, Ahfir",
      current: false,
    },
  ]

  return (
    <SectionAnimation 
      animationType="fadeUp" 
      className="py-12 md:py-20 px-4"
    >
      <section id="education">
        <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Formation</h2>
          <p className="text-muted-foreground text-sm md:text-lg">Mon parcours académique</p>
        </div>

        <div className="relative">
          {/* Timeline Line - Mobile optimized */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-4 md:space-y-8">
            {education.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot - Always visible */}
                <div className="absolute left-2 md:left-6 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full border-2 md:border-4 border-background" />

                <Card
                  className={`ml-6 md:ml-16 p-4 md:p-6 bg-card border-border hover:border-primary transition-all duration-300 ${
                    item.current ? "border-primary shadow-lg shadow-primary/10" : ""
                  }`}
                >
                  {/* Mobile: Compact header */}
                  <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="p-1.5 md:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base md:text-xl font-semibold leading-tight">{item.title}</h3>
                        <div className="flex items-center space-x-2 text-xs md:text-sm text-muted-foreground mt-1">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                          <span>{item.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-3 md:mt-4">
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-2">{item.description}</p>
                    {item.institution && (
                      <p className="text-xs md:text-sm text-accent font-medium">{item.institution}</p>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </SectionAnimation>
  )
}
