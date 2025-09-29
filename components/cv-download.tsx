"use client"

import { useState } from "react"
import { Download, CheckCircle, AlertCircle } from "lucide-react"
import { toast } from "sonner"

interface CVDownloadProps {
  className?: string
  children?: React.ReactNode
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
}

export function CVDownload({ 
  className = "", 
  children, 
  variant = "outline",
  size = "default"
}: CVDownloadProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)

  const handleDownload = async () => {
    try {
      setIsDownloading(true)
      setDownloadProgress(0)

      // Show loading toast
      const loadingToast = toast.loading("Préparation du téléchargement...", {
        description: "Optimisation du CV en cours",
      })

      // Simulate download progress
      const progressInterval = setInterval(() => {
        setDownloadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + 10
        })
      }, 100)

      // Create optimized download link
      const link = document.createElement('a')
      link.href = '/CV_Soufiane.pdf'
      link.download = 'CV_Soufiane_HAJJI_2025.pdf'
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      
      // Add preload attributes for better performance
      link.setAttribute('preload', 'metadata')
      
      document.body.appendChild(link)
      
      // Simulate download delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500))
      
      link.click()
      document.body.removeChild(link)
      
      // Complete progress
      setDownloadProgress(100)
      clearInterval(progressInterval)
      
      // Dismiss loading toast
      toast.dismiss(loadingToast)
      
      // Show success toast
      toast.success("CV téléchargé avec succès !", {
        description: "Merci pour votre intérêt",
        duration: 4000,
      })

      // Reset state
      setTimeout(() => {
        setIsDownloading(false)
        setDownloadProgress(0)
      }, 1000)

    } catch (error) {
      console.error('Download error:', error)
      toast.error("Erreur lors du téléchargement", {
        description: "Veuillez réessayer",
      })
      setIsDownloading(false)
      setDownloadProgress(0)
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`
        inline-flex items-center justify-center gap-2
        px-4 py-2 rounded-md font-medium
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        cursor-pointer
        ${variant === 'outline' ? 'border-2 border-primary/60 text-primary hover:bg-primary hover:text-white bg-background/50 hover:bg-primary/90' : ''}
        ${variant === 'default' ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}
        ${variant === 'ghost' ? 'text-primary hover:bg-primary/10' : ''}
        ${size === 'sm' ? 'text-sm px-3 py-1.5' : ''}
        ${size === 'lg' ? 'text-lg px-6 py-3' : ''}
        ${className}
      `}
      aria-label="Télécharger le CV de Soufiane HAJJI"
    >
      {isDownloading ? (
        <>
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span>Téléchargement... {downloadProgress}%</span>
        </>
      ) : (
        <>
          <Download className="w-4 h-4" />
          {children || "Télécharger CV"}
        </>
      )}
    </button>
  )
}
