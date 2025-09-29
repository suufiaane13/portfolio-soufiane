"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Enregistrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface SectionAnimationProps {
  children: React.ReactNode
  className?: string
  animationType?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn" | "stagger"
  delay?: number
  duration?: number
  stagger?: number
}

export function SectionAnimation({ 
  children, 
  className = "", 
  animationType = "fadeUp",
  delay = 0,
  duration = 0.8,
  stagger = 0.1
}: SectionAnimationProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const element = sectionRef.current!
      
      // Configuration initiale selon le type d'animation
      const initialConfig = getInitialConfig(animationType)
      gsap.set(element, initialConfig)

      // Animation avec ScrollTrigger
      const animationConfig = getAnimationConfig(animationType, duration, stagger)
      
      gsap.to(element, {
        ...animationConfig,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [animationType, duration, stagger])

  const getInitialConfig = (type: string) => {
    switch (type) {
      case "fadeUp":
        return { opacity: 0, y: 50 }
      case "fadeIn":
        return { opacity: 0 }
      case "slideLeft":
        return { opacity: 0, x: -50 }
      case "slideRight":
        return { opacity: 0, x: 50 }
      case "scaleIn":
        return { opacity: 0, scale: 0.8 }
      case "stagger":
        return { opacity: 0, y: 30 }
      default:
        return { opacity: 0, y: 50 }
    }
  }

  const getAnimationConfig = (type: string, duration: number, stagger: number) => {
    const baseConfig = {
      opacity: 1,
      duration,
      ease: "power3.out",
      delay
    }

    switch (type) {
      case "fadeUp":
        return { ...baseConfig, y: 0 }
      case "fadeIn":
        return baseConfig
      case "slideLeft":
        return { ...baseConfig, x: 0 }
      case "slideRight":
        return { ...baseConfig, x: 0 }
      case "scaleIn":
        return { ...baseConfig, scale: 1 }
      case "stagger":
        return { 
          ...baseConfig, 
          y: 0,
          stagger: stagger,
          onComplete: () => {
            // Animation des enfants avec stagger
            const children = sectionRef.current?.children
            if (children) {
              gsap.fromTo(children, 
                { opacity: 0, y: 20 },
                { 
                  opacity: 1, 
                  y: 0, 
                  duration: 0.6, 
                  stagger: stagger,
                  ease: "power2.out"
                }
              )
            }
          }
        }
      default:
        return { ...baseConfig, y: 0 }
    }
  }

  return (
    <section ref={sectionRef} className={className}>
      {children}
    </section>
  )
}

// Hook pour les animations de cartes
export function useCardAnimation() {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current, 
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, cardRef)

    return () => ctx.revert()
  }, [])

  return cardRef
}

// Hook pour les animations de texte
export function useTextAnimation() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const ctx = gsap.context(() => {
      // Animation du texte avec effet de révélation
      gsap.fromTo(textRef.current, 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, textRef)

    return () => ctx.revert()
  }, [])

  return textRef
}
