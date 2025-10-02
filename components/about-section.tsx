import React, { useState } from "react"
import { Code, Database, Smartphone, Globe, Zap, Award, Users, Target } from "lucide-react"
import { SectionAnimation } from "@/components/section-animations"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function AboutSection() {
  const [imageLoaded, setImageLoaded] = useState(false)
  
  const expertise = [
    { icon: Code, title: "Frontend Development", description: "React, Next.js", color: "text-blue-500" },
    { icon: Database, title: "Backend Development", description: "Node.js, PHP, Python", color: "text-green-500" },
    { icon: Smartphone, title: "Mobile & Responsive", description: "Design adaptatif & PWA", color: "text-purple-500" },
    { icon: Globe, title: "Web Performance", description: "Optimisation & SEO", color: "text-orange-500" },
  ]

  return (
    <SectionAnimation 
      animationType="fadeUp" 
      className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-background via-background to-secondary/5"
      delay={0.1}
      duration={0.8}
    >
      <section id="about">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              À Propos de Moi
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Développeur Full-Stack passionné par l'innovation technologique et la création d'expériences digitales exceptionnelles
            </p>
          </div>

          {/* Main Content - Modern Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            
            {/* Photo Section - Enhanced */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-700 hover:scale-105 hover:shadow-primary/20">
                  
                  {/* Skeleton Loading */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted/30 animate-pulse">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>
                  )}
                  
                  <Image
                    src="/profil/hajji.png"
                    alt="Soufiane HAJJI - Développeur Full-Stack"
                    fill
                    className={`object-cover object-center transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    priority
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                    quality={95}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    onLoad={() => setImageLoaded(true)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Content Section - Enhanced */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground text-center lg:text-left">
                  Soufiane HAJJI
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  Jeune développeur passionné par l'innovation technologique. Spécialisé dans la création 
                  d'applications web modernes, performantes et centrées sur l'expérience utilisateur.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Mon approche combine créativité et expertise technique pour transformer vos idées 
                  en solutions digitales innovantes et performantes.
                </p>
              </div>

              {/* Expertise Cards */}
              <div className="grid grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <Card key={index} className="p-4 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </SectionAnimation>
  )
}
