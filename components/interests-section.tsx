import { Card } from "@/components/ui/card"
import { Waves, Crown, Laptop } from "lucide-react"
import { SectionAnimation } from "@/components/section-animations"

export function InterestsSection() {
  const interests = [
    {
      icon: Waves,
      title: "Sport & Fitness",
      description: "Natation, course à pied et activités physiques pour maintenir un équilibre de vie sain",
      shortDescription: "Sport & Fitness",
    },
    {
      icon: Crown,
      title: "Stratégie",
      description: "Échecs, jeux de stratégie et réflexion pour développer la pensée analytique",
      shortDescription: "Stratégie",
    },
    {
      icon: Laptop,
      title: "Innovation",
      description: "Veille technologique, découverte des dernières tendances et innovations digitales",
      shortDescription: "Innovation",
    },
  ]

  return (
    <SectionAnimation 
      animationType="fadeUp" 
      className="py-12 md:py-20 px-4"
    >
      <section id="interests">
        <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Centres d'Intérêt</h2>
          <p className="text-muted-foreground text-sm md:text-lg">Ce qui me passionne en dehors du code</p>
        </div>

        {/* Mobile: Professional 3-column grid */}
        <div className="block md:hidden">
          <div className="grid grid-cols-3 gap-3">
            {interests.map((interest, index) => (
              <Card
                key={index}
                className="relative p-3 text-center bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group hover:scale-105 overflow-hidden"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon with professional styling */}
                <div className="relative flex justify-center mb-3">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/30 rounded-xl group-hover:from-primary/30 group-hover:to-primary/40 transition-all duration-300 shadow-lg">
                    <interest.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                {/* Title with better typography */}
                <h3 className="relative text-sm font-bold mb-2 leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {interest.title}
                </h3>
                
                {/* Description with improved readability */}
                <p className="relative text-muted-foreground text-xs text-pretty leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {interest.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {interests.map((interest, index) => (
            <Card
              key={index}
              className="p-6 text-center bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <interest.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3">{interest.title}</h3>
              <p className="text-muted-foreground text-sm text-pretty">{interest.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </SectionAnimation>
  )
}
