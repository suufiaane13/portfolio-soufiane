import { Card } from "@/components/ui/card"
import { Waves, Crown, Laptop } from "lucide-react"
import { SectionAnimation } from "@/components/section-animations"

export function InterestsSection() {
  const interests = [
    {
      icon: Waves,
      title: "Natation",
    },
    {
      icon: Crown,
      title: "Jeu d'échecs",
    },
    {
      icon: Waves,
      title: "Voyages",
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
                  className="relative flex flex-col items-center justify-center p-3 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group hover:scale-105 overflow-hidden"
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Icon and Title vertically centered */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/30 rounded-xl group-hover:from-primary/30 group-hover:to-primary/40 transition-all duration-300 shadow-lg mb-2">
                      <interest.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-bold leading-tight text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                      {interest.title}
                    </h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {interests.map((interest, index) => (
            <Card
              key={index}
                className="flex flex-col items-center justify-center p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group hover:scale-105 text-center"
            >
                <div className="flex flex-col items-center justify-center">
                  <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors mb-3">
                  <interest.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{interest.title}</h3>
                </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </SectionAnimation>
  )
}
