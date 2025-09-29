"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Menu, X, Home, User, Code, GraduationCap, Briefcase, Heart, Mail } from "lucide-react"
import Image from "next/image"

const navItems = [
  { href: "#about", label: "À propos", icon: User },
  { href: "#skills", label: "Compétences", icon: Code },
  { href: "#education", label: "Formation", icon: GraduationCap },
  { href: "#projects", label: "Projets", icon: Briefcase },
  { href: "#interests", label: "Intérêts", icon: Heart },
  { href: "#contact", label: "Contact", icon: Mail },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMobileMenuToggle = () => {
    if (isMobileMenuOpen) {
      // Fermeture avec animation
      setIsAnimating(true)
      setTimeout(() => {
        setIsMobileMenuOpen(false)
        setIsAnimating(false)
      }, 300) // Durée de l'animation slide-out
    } else {
      // Ouverture directe
      setIsMobileMenuOpen(true)
    }
  }

  const handleNavClick = (href: string) => {
    // Fermeture avec animation
    setIsAnimating(true)
    setTimeout(() => {
      setIsMobileMenuOpen(false)
      setIsAnimating(false)
    }, 300)
    
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
        <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
            {/* Logo - Clickable */}
            <a 
              href="#hero" 
              onClick={() => handleNavClick("#hero")}
              className="flex items-center hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg"
              tabIndex={0}
              aria-label="Retour à l'accueil - Soufiane HAJJI"
            >
              <div className="relative w-14 h-14 md:w-16 md:h-16">
                <Image
                  src="/logo.png"
                  alt="Soufiane HAJJI Logo"
                  fill
                  className={`object-contain rounded-lg transition-all duration-300 ${
                    isScrolled ? '' : 'brightness-0 invert-0'
                  }`}
                  priority
                  sizes="(max-width: 768px) 56px, 64px"
                  quality={90}
                />
            </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1 ${
                  activeSection === item.href.substring(1) 
                    ? "text-primary bg-primary/10 border-b-2 border-primary font-semibold" 
                    : isScrolled 
                      ? "text-muted-foreground hover:bg-primary/5" 
                      : "text-white hover:bg-white/10"
                }`}
                tabIndex={0}
                aria-label={`Aller à la section ${item.label}`}
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </div>

            {/* Desktop Download CV Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className={`border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer ${
                  isScrolled 
                    ? "border-primary/60 text-primary hover:bg-primary hover:text-white bg-background/50 hover:bg-primary/90"
                    : "border-white text-white hover:bg-white hover:text-white"
                }`}
                tabIndex={0}
                aria-label="Télécharger le CV de Soufiane HAJJI"
                onClick={() => {
                  // Optimized PDF download with analytics
                  const link = document.createElement('a')
                  link.href = '/CV_Soufiane.pdf'
                  link.download = 'CV_Soufiane_HAJJI.pdf'
                  link.target = '_blank'
                  link.rel = 'noopener noreferrer'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Télécharger CV
              </Button>
            </div>

            {/* Mobile & Tablet Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer ${
              isScrolled 
                ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                : "border-white text-white hover:bg-white hover:text-black"
            }`}
            tabIndex={0}
            aria-label="Télécharger le CV de Soufiane HAJJI"
            onClick={() => window.open('/CV_Soufiane.pdf', '_blank')}
          >
            <Download className="w-4 h-4" />
          </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleMobileMenuToggle}
                className={`p-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer ${
                  isScrolled 
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white hover:text-white/80"
                }`}
                tabIndex={0}
                aria-label={isMobileMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile & Tablet Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div 
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm ${
              isAnimating ? 'animate-fade-out' : 'animate-fade-in'
            }`}
            onClick={() => handleMobileMenuToggle()}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation mobile"
          />
          <div 
            id="mobile-menu"
            className={`absolute top-0 right-0 h-full w-80 bg-background border-l border-border shadow-xl ${
              isAnimating ? 'animate-slide-out' : 'animate-slide-in'
            }`}
            role="navigation"
            aria-label="Menu de navigation principal"
          >
            <div className="p-6">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image
                      src="/profil/hajji.png"
                      alt="Soufiane HAJJI - Photo de profil"
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="64px"
                      quality={90}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Soufiane HAJJI</h3>
                    <p className="text-sm text-muted-foreground">Développeur Full-Stack</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleMobileMenuToggle()}
                  className="p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer"
                  tabIndex={0}
                  aria-label="Fermer le menu de navigation"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-2" role="menubar">
                {navItems.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                        activeSection === item.href.substring(1)
                          ? "bg-primary/20 text-primary border-l-4 border-primary font-semibold"
                          : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                      }`}
                      tabIndex={0}
                      role="menuitem"
                      aria-label={`Aller à la section ${item.label}`}
                    >
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                      <span className="font-medium">{item.label}</span>
                    </a>
                  )
                })}
              </nav>

              {/* Mobile Download CV Button */}
              <div className="mt-8 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  className="w-full border-2 border-primary/60 text-primary hover:bg-primary hover:text-white bg-background/50 hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer"
                  tabIndex={0}
                  aria-label="Télécharger le CV de Soufiane HAJJI"
                  onClick={() => {
                  // Optimized PDF download with analytics
                  const link = document.createElement('a')
                  link.href = '/CV_Soufiane.pdf'
                  link.download = 'CV_Soufiane_HAJJI.pdf'
                  link.target = '_blank'
                  link.rel = 'noopener noreferrer'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
          >
            <Download className="w-4 h-4 mr-2" />
            Télécharger CV
          </Button>
        </div>
      </div>
          </div>
        </div>
      )}
    </>
  )
}
