import { Instagram, Github, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
          
          {/* Logo et nom */}
          <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Soufiane HAJJI Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="48px"
                  quality={90}
                />
              </div>
            <div>
              <h3 className="font-bold text-foreground text-lg">Soufiane HAJJI</h3>
              <p className="text-sm text-muted-foreground">Développeur Full-Stack & UI/UX Designer</p>
            </div>
          </div>

          {/* Icônes sociales */}
          <div className="flex items-center justify-center lg:justify-end space-x-8">
            
            {/* Instagram */}
            <a 
              href="https://instagram.com/suuf.iaane" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 group cursor-pointer"
            >
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium hidden sm:block">@suuf.iaane</span>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/suufiaane" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 group cursor-pointer"
            >
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium hidden sm:block">@suufiaane</span>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/212602353136" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 group cursor-pointer"
            >
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium hidden sm:block">+212 602 353 136</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-right">
            <p className="text-sm text-muted-foreground">
              © 2025 Soufiane HAJJI. Tous droits réservés.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Développé avec ❤️ en React & Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
