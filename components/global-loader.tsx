"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import Image from "next/image"

interface GlobalLoaderProps {
  onComplete: () => void
}

export function GlobalLoader({ onComplete }: GlobalLoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const percentageRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showPercentage, setShowPercentage] = useState(false)

  useEffect(() => {
    // Délai pour s'assurer que le composant est monté
    const timer = setTimeout(() => {
      setIsAnimating(true)
    }, 50)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isAnimating) return

    const ctx = gsap.context(() => {
      // Animation initiale - tout invisible
      gsap.set([logoRef.current, progressRef.current, textRef.current, percentageRef.current], {
        opacity: 0,
        y: 30
      })

      // Timeline principale
      const tl = gsap.timeline()

      // 1. Animation simple, fluide et professionnelle du logo (6 secondes)
      if (logoRef.current) {
        tl.fromTo(logoRef.current, {
          opacity: 0,
          scale: 0.3,
          rotation: -180,
          y: 80,
          x: 0
        }, {
          opacity: 1,
          scale: 1.2,
          rotation: 0,
          y: 0,
          x: 0,
          duration: 2.0,
          ease: "power3.out"
        })
        // Animation de rotation fluide
        .to(logoRef.current, {
          rotation: 360,
          duration: 1.5,
          ease: "power2.inOut"
        })
        // Animation continue de pulsation professionnelle
        .to(logoRef.current, {
          scale: 1.05,
          duration: 1.5,
          ease: "power2.inOut",
          yoyo: true,
          repeat: 1
        })
        // Animation finale de stabilisation
        .to(logoRef.current, {
          scale: 1.0,
          duration: 1.0,
          ease: "power3.out"
        })
      }



      // 2. Révélation du texte (après les 6 secondes du logo)
      if (textRef.current) {
        tl.to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "+=0.5") // Commence après les 6 secondes du logo
      }

      // 3. Révélation simultanée de la barre de progression et du pourcentage
      if (progressRef.current && percentageRef.current) {
        tl.to([progressRef.current, percentageRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out"
        }, "+=0.3") // Commence après le texte
      }

      // 4. Remontement de tout le contenu (logo + texte + barre + pourcentage)
      if (logoRef.current && textRef.current && progressRef.current && percentageRef.current) {
        tl.to([logoRef.current, textRef.current, progressRef.current, percentageRef.current], {
          y: -60,  // Remonter tout le contenu y compris le pourcentage
          duration: 0.8,
          ease: "power2.out"
        }, "+=0.2") // Commence après la barre de progression
      }

      // 5. Animation synchronisée de la barre de progression et du pourcentage
      const progressBar = progressRef.current?.querySelector('.progress-fill')
      if (progressBar) {
        // Supprimer le style CSS initial
        gsap.set(progressBar, { width: "0%" })
        
        // Animation de la barre de progression avec synchronisation parfaite
        tl.to(progressBar, {
          width: "100%",
          duration: 2.5,
          ease: "power2.inOut",
          onStart: function() {
            // Commencer à afficher le pourcentage quand l'animation de la barre commence
            setProgress(0)
            setShowPercentage(true)
          },
          onUpdate: function() {
            // Synchronisation parfaite entre la barre et le pourcentage
            const progress = Math.round(this.progress() * 100)
            setProgress(progress)
          }
        })
      }

      // 6. Animation de sortie
      tl.to(loaderRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => {
          onComplete()
        }
      }, "-=0.3")

    }, loaderRef)

    return () => ctx.revert()
  }, [onComplete, isAnimating])

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
    >
      {/* Background Gradient (comme le hero) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-background opacity-90" />
      
      {/* Logo animé plus grand */}
      <div 
        ref={logoRef}
        className={`relative w-48 h-48 mb-8 z-10 ${!isAnimating ? 'opacity-0' : ''}`}
      >
        <Image
          src="/logo.png"
          alt="Soufiane HAJJI Logo"
          fill
          className="object-contain"
          priority
        />
        
      </div>

      {/* Texte de chargement */}
      <div 
        ref={textRef}
        className={`text-center mb-8 z-10 ${!isAnimating ? 'opacity-0' : ''}`}
      >
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Soufiane HAJJI
        </h2>
        <p className="text-muted-foreground text-lg">
          Développeur Full-Stack & UI/UX Designer
        </p>
      </div>

      {/* Barre de progression avec design moderne */}
      <div 
        ref={progressRef}
        className={`w-80 h-2 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm border border-primary/20 z-10 ${!isAnimating ? 'opacity-0' : ''}`}
      >
        <div 
          className="progress-fill h-full bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/30"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Pourcentage avec animation */}
      <div 
        ref={percentageRef}
        className="mt-6 text-lg font-semibold text-foreground z-10"
      >
        {showPercentage ? `${progress}%` : ''}
      </div>
      
    </div>
  )
}

