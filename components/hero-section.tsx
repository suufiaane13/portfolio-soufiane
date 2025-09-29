"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Code, Database, Smartphone, Globe } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const floatingIconsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Délai pour s'assurer que le loader est complètement terminé
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 500) // Délai plus long pour synchroniser avec le loader

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isReady) return

    const ctx = gsap.context(() => {
      // Timeline principale
      const tl = gsap.timeline()

      // Animation du logo background
        // Logo Animation - Multiple professional effects
        if (logoRef.current) {
          tl.fromTo(logoRef.current, 
            { 
              scale: 0.3, 
              opacity: 0,
              rotation: -180,
              y: 100
            },
            { 
              scale: 1, 
              opacity: 0.05,
              rotation: 0,
              y: 0,
              duration: 2.5,
              ease: "elastic.out(1, 0.3)"
            }
          )
        }
        
        // Logo continuous breathing animation
        if (logoRef.current) {
          tl.to(logoRef.current, {
            scale: 1.05,
            duration: 3,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1
          }, "-=1.5")
          
          // Logo subtle rotation animation
          tl.to(logoRef.current, {
            rotation: 5,
            duration: 4,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1
          }, "-=2")
        }

      // Animation du titre principal avec effet de révélation
      if (titleRef.current) {
        tl.fromTo(titleRef.current,
          { 
            y: 100, 
            opacity: 0,
            scale: 0.8,
            rotationX: 90
          },
          { 
            y: 0, 
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 1.5,
            ease: "power3.out"
          }, "-=1.5"
        )
      }


      // Animation du sous-titre
      if (subtitleRef.current) {
        tl.fromTo(subtitleRef.current,
          { 
            y: 50, 
            opacity: 0 
          },
          { 
            y: 0, 
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.8"
        )
      }

      // Animation de la description
      if (descriptionRef.current) {
        tl.fromTo(descriptionRef.current,
          { 
            y: 30, 
            opacity: 0 
          },
          { 
            y: 0, 
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          }, "-=0.6"
        )
      }

      // Animation du bouton
      if (buttonRef.current) {
        tl.fromTo(buttonRef.current,
          { 
            y: 20, 
            opacity: 0,
            scale: 0.9
          },
          { 
            y: 0, 
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)"
          }, "-=0.4"
        )
      }

      // Animation des icônes flottantes
      if (floatingIconsRef.current?.children) {
        tl.fromTo(floatingIconsRef.current.children,
          { 
            y: 50, 
            opacity: 0,
            scale: 0.5
          },
          { 
            y: 0, 
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2
          }, "-=0.6"
        )
      }

      // Animation des statistiques
      if (statsRef.current?.children) {
        tl.fromTo(statsRef.current.children,
          { 
            y: 30, 
            opacity: 0,
            scale: 0.8
          },
          { 
            y: 0, 
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1
          }, "-=0.4"
        )
      }

      // Animation de l'indicateur de scroll
      tl.fromTo(scrollIndicatorRef.current,
        { 
          y: 20, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        }, "-=0.2"
      )

      // Animation continue des icônes flottantes (responsive)
      if (floatingIconsRef.current?.children) {
        const getAnimationConfig = () => {
          const isMobile = window.innerWidth < 640
          const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024
          
          return {
            y: isMobile ? -15 : isTablet ? -20 : -30,
            scale: isMobile ? 1.05 : isTablet ? 1.08 : 1.1,
            opacity: isMobile ? 0.4 : isTablet ? 0.5 : 0.6,
            duration: isMobile ? 3 : isTablet ? 3.5 : 4,
            stagger: isMobile ? 0.5 : isTablet ? 0.6 : 0.8
          }
        }
        
        const config = getAnimationConfig()
        
        gsap.to(floatingIconsRef.current.children, {
          y: config.y,
          scale: config.scale,
          opacity: config.opacity,
          duration: config.duration,
          ease: "power1.inOut",
          stagger: config.stagger,
          repeat: -1,
          yoyo: true
        })
        
        // Gestion du redimensionnement
        const handleResize = () => {
          if (floatingIconsRef.current?.children) {
            const newConfig = getAnimationConfig()
            gsap.to(floatingIconsRef.current.children, {
              y: newConfig.y,
              scale: newConfig.scale,
              opacity: newConfig.opacity,
              duration: newConfig.duration,
              ease: "power1.inOut",
              stagger: newConfig.stagger,
              repeat: -1,
              yoyo: true
            })
          }
        }
        
        window.addEventListener('resize', handleResize)
        
        // Cleanup
        return () => {
          window.removeEventListener('resize', handleResize)
        }
      }

      // Animation continue de l'indicateur de scroll
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      })

      // Logo parallax effect with multiple layers
        if (logoRef.current) {
          gsap.to(logoRef.current, {
            y: -150,
            rotation: 15,
            scale: 1.15,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.5
            }
          })
        }
      
      // Logo opacity fade on scroll
      if (logoRef.current) {
        gsap.to(logoRef.current, {
          opacity: 0.02,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "center top",
            scrub: 1
          }
        })
      }

    }, heroRef)

    return () => ctx.revert()
  }, [isReady])

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-opacity duration-500 ${!isReady ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-background opacity-90" />

        {/* Animated Logo Background */}
        <div 
          ref={logoRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[32rem] md:h-[32rem] lg:w-[40rem] lg:h-[40rem]">
            <Image
              src="/logo.png"
              alt="Soufiane HAJJI - Logo Background"
              fill
              className="object-contain select-none"
              priority
              sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 512px"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
        </div>

      {/* Floating Icons */}
      <div 
        ref={floatingIconsRef}
        className="absolute inset-0 pointer-events-none z-10"
      >
        {/* Code Icon - Responsive positioning and sizing */}
        <div className="absolute top-1/6 left-1/8 sm:top-1/5 sm:left-1/6 md:top-1/5 md:left-1/6 text-primary/50 z-20">
          <Code className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 drop-shadow-lg" />
        </div>
        
        {/* Database Icon - Responsive positioning and sizing */}
        <div className="absolute top-1/5 right-1/8 sm:top-1/4 sm:right-1/6 md:top-1/4 md:right-1/6 text-primary/50 z-20">
          <Database className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 drop-shadow-lg" />
        </div>
        
        {/* Smartphone Icon - Responsive positioning and sizing */}
        <div className="absolute bottom-1/5 left-1/6 sm:bottom-1/4 sm:left-1/5 md:bottom-1/4 md:left-1/5 text-primary/50 z-20">
          <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-11 lg:h-11 drop-shadow-lg" />
        </div>
        
        {/* Globe Icon - Responsive positioning and sizing */}
        <div className="absolute bottom-1/6 right-1/6 sm:bottom-1/5 sm:right-1/5 md:bottom-1/5 md:right-1/5 text-primary/50 z-20">
          <Globe className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-13 lg:h-13 drop-shadow-lg" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 text-balance leading-tight tracking-tight select-none"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          Soufiane HAJJI
        </h1>
        
        <h2 
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 sm:mb-6 font-semibold tracking-wide"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          Développeur Full-Stack & UI/UX Designer
        </h2>
        
        <p 
          ref={descriptionRef}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 lg:mb-10 max-w-4xl mx-auto text-pretty leading-relaxed font-medium"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          Je transforme vos idées en expériences digitales exceptionnelles. 
        </p>

        <div className="flex flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-8 sm:mb-12">
        <Button
          ref={buttonRef}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 border border-primary/20 hover:border-primary/40 flex-1 cursor-pointer"
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          Voir mes projets
        </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary/60 text-primary hover:bg-primary hover:text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 bg-background/50 hover:bg-primary/90 flex-1 cursor-pointer"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Me contacter
          </Button>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
        <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">3+</div>
          <div className="text-xs sm:text-sm text-muted-foreground">Années d'expérience</div>
        </div>
          <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">15+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Projets réalisés</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">10+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Technologies maîtrisées</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">100%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Satisfaction client</div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
