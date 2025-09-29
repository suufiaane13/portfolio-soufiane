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

      // 1. Révélation du logo avec effet "zoom-in" professionnel
      tl.fromTo(logoRef.current, {
        opacity: 0,
        scale: 0.1,
        rotation: -45,
        y: 80,
        x: 0
      }, {
        opacity: 1,
        scale: 1.3,  // Logo plus grand
        rotation: 0,
        y: 0,
        x: 0,
        duration: 1.8,
        ease: "power3.out"
      })

      // 1.5. Ajustement de la taille finale
      tl.to(logoRef.current, {
        scale: 1.2,  // Taille finale plus grande
        duration: 0.4,
        ease: "power2.out"
      })

      // 2. Animation de "bounce" professionnel (ajusté pour la grande taille)
      tl.to(logoRef.current, {
        y: -20,  // Mouvement plus grand
        duration: 0.6,
        ease: "power2.out"
      })
      .to(logoRef.current, {
        y: 0,
        duration: 0.8,
        ease: "bounce.out"
      })

      // 3. Animation de "tilt" élégant (ajusté pour la grande taille)
      tl.to(logoRef.current, {
        rotation: 4,
        scale: 1.25,  // Plus grand pendant le tilt
        duration: 0.4,
        ease: "power2.inOut"
      })
      .to(logoRef.current, {
        rotation: -3,
        scale: 1.22,  // Ajusté pour la grande taille
        duration: 0.4,
        ease: "power2.inOut"
      })
      .to(logoRef.current, {
        rotation: 0,
        scale: 1.2,  // Retour à la taille finale
        duration: 0.6,
        ease: "power3.out"
      })

      // 4. Animation de "float" subtile (ajusté pour la grande taille)
      tl.to(logoRef.current, {
        y: -12,  // Mouvement plus grand
        duration: 1.2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1
      })

      // 5. Animation continue de "breathing" professionnel (ajusté pour la grande taille)
      tl.to(logoRef.current, {
        scale: 1.25,  // Respiration plus visible
        y: -5,  // Mouvement plus grand
        duration: 2.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      }, "-=0.5")


      // 3. Révélation du texte
      tl.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.3")

      // 4. Révélation simultanée de la barre de progression et du pourcentage
      tl.to([progressRef.current, percentageRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.2")

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
        className={`relative w-40 h-40 mb-8 z-10 ${!isAnimating ? 'opacity-0' : ''}`}
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

