import { Card } from "@/components/ui/card"
import { Waves, Crown, Laptop } from "lucide-react"
import { SectionAnimation } from "@/components/section-animations"

export function InterestsSection() {
  const interests = [
    {
      icon: Waves,
      title: "Natation - Footing",
      description: "Sports aquatiques et course à pied pour maintenir une bonne condition physique",
    },
    {
      icon: Crown,
      title: "Jeu d'échecs",
      description: "Stratégie et réflexion à travers ce jeu millénaire",
    },
    {
      icon: Laptop,
      title: "Culture Tech",
      description: "Veille technologique et découverte des dernières innovations",
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

        {/* Mobile: Simple horizontal layout */}
        <div className="block md:hidden">
          <div className="grid grid-cols-3 gap-3">
            {interests.map((interest, index) => (
              <Card
                key={index}
                className="p-3 text-center bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="flex justify-center mb-2">
                  <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <interest.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-sm font-semibold mb-1 leading-tight">{interest.title}</h3>
                <p className="text-muted-foreground text-xs text-pretty line-clamp-2">{interest.description}</p>
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
