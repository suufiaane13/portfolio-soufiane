import { Card } from "@/components/ui/card"
import { Code, Server, Settings, Palette, Database, GitBranch, Globe, Image } from "lucide-react"
import { SectionAnimation } from "@/components/section-animations"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "FRONT-END",
      icon: Code,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "BACK-END",
      icon: Server,
      skills: ["PHP", "Python", "Node.js", "Laravel", "Express.js", "API REST"],
    },
    {
      title: "BASE DE DONNÉES",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Supabase"],
    },
    {
      title: "OUTILS & MÉTHODES",
      icon: Settings,
      skills: ["Git/GitHub", "VS Code", "Canva", "Agile/Scrum"],
    },
  ]

  const iconMap = {
    HTML5: Globe,
    CSS3: Palette,
    JavaScript: Code,
    React: Code,
    "Tailwind CSS": Palette,
    Bootstrap: Palette,
    PHP: Server,
    Python: Server,
    "Node.js": Server,
    Laravel: Server,
    "Express.js": Server,
    "API REST": Server,
    MySQL: Database,
    MongoDB: Database,
    Supabase: Database,
    "Git/GitHub": GitBranch,
    "VS Code": Settings,
    Canva: Image,
    "Agile/Scrum": Settings,
  }

  return (
    <SectionAnimation 
      animationType="stagger" 
      className="py-8 md:py-12 px-4 bg-secondary/20"
      delay={0.2}
      duration={0.7}
      stagger={0.1}
    >
      <section id="skills">
        <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3">Compétences</h2>
          <p className="text-muted-foreground text-sm md:text-base">Technologies et outils que je maîtrise</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Header */}
              <div className="relative p-4 md:p-5">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    <category.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className={`grid gap-2 ${
                  category.title === "BASE DE DONNÉES" 
                    ? "grid-cols-2" 
                    : "grid-cols-2"
                }`}>
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = iconMap[skill as keyof typeof iconMap] || Code
                    const isSupabase = skill === "Supabase"
                    return (
                      <div
                        key={skillIndex}
                        className={`group/skill flex items-center space-x-2 px-3 py-2 bg-background/50 border border-border/50 rounded-lg hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 hover:scale-105 ${
                          isSupabase ? "col-span-2 flex justify-center" : ""
                        }`}
                      >
                        <IconComponent className="w-3.5 h-3.5 text-primary/70 group-hover/skill:text-primary transition-colors duration-300" />
                        <span className="text-xs font-medium text-foreground/80 group-hover/skill:text-foreground transition-colors duration-300 truncate">
                          {skill}
                        </span>
                      </div>
                    )
                  })}
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
