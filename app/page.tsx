"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { InterestsSection } from "@/components/interests-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { GlobalLoader } from "@/components/global-loader"
import { Footer } from "@/components/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoaderComplete = () => {
    setIsLoading(false)
  }

  // Préchargement des images critiques
  useEffect(() => {
    const preloadImages = [
      "/logo.png",
      "/placeholder-user.jpg"
    ]

    const imagePromises = preloadImages.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = resolve
        img.onerror = reject
        img.src = src
      })
    })

    Promise.all(imagePromises).catch(console.error)
  }, [])

  if (isLoading) {
    return <GlobalLoader onComplete={handleLoaderComplete} />
  }


    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <InterestsSection />
        <ContactSection />
        <Footer />
      </main>
    )
}
