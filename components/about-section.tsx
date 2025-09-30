import React from "react"
import { Code, Database, Smartphone } from "lucide-react"
import { SectionAnimation } from "@/components/section-animations"
import Image from "next/image"

export function AboutSection() {
  const skills = [
    { icon: Code, name: "Frontend", color: "text-blue-500" },
    { icon: Database, name: "Backend", color: "text-green-500" },
  ]

  return (
    <SectionAnimation 
      animationType="fadeUp" 
      className="py-16 md:py-20 lg:py-24 px-4 bg-background"
    >
      <section id="about">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              À Propos de Moi
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Développeur passionné créant des expériences digitales exceptionnelles
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center mb-16">
            
            {/* Photo Section */}
            <div className="flex justify-center md:justify-start">
              <div className="relative group">
                <div className="relative w-32 h-40 sm:w-40 sm:h-50 md:w-72 md:h-96 lg:w-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105">
                    <Image
                      src="/profil/hajji.png"
                      alt="Soufiane HAJJI - Développeur Full-Stack"
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 288px, 320px"
                      quality={90}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-2 md:space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl md:text-3xl font-bold mb-2 md:mb-4 text-foreground text-left">
                  Soufiane HAJJI
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-2 md:mb-6">
                  Jeune développeur passionné par l'innovation technologique. Spécialisé dans la création 
                  d'applications web modernes et performantes.
                </p>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-1 md:gap-2">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-1 md:space-x-2 bg-card border border-border rounded-full px-2 py-1 md:px-3 md:py-2 hover:border-primary/50 transition-colors">
                    <skill.icon className={`w-3 h-3 md:w-4 md:h-4 ${skill.color}`} />
                    <span className="text-xs md:text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>
    </SectionAnimation>
  )
}
