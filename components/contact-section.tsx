"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { SectionAnimation } from "@/components/section-animations"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Toast de chargement
    const loadingToast = toast.loading("Envoi du message en cours...", {
      description: "Veuillez patienter quelques instants",
    })

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" })
        
        // Toast de succès
        toast.dismiss(loadingToast)
        toast.success("Message envoyé avec succès !", {
          description: "Je vous répondrai dans les plus brefs délais",
          duration: 5000,
        })
      } else {
        // Toast d'erreur
        toast.dismiss(loadingToast)
        toast.error("Erreur lors de l'envoi", {
          description: result.error || 'Veuillez réessayer plus tard',
          duration: 5000,
        })
      }
    } catch (error) {
      // Toast d'erreur de connexion
      toast.dismiss(loadingToast)
      toast.error("Erreur de connexion", {
        description: "Vérifiez votre connexion internet et réessayez",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hjisfn@gmail.com",
      href: "mailto:hjisfn@gmail.com",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+212 6 41 45 45 72",
      href: "tel:+212642454572",
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "Hay Saada Rue Khaibar N°07 Ahfir",
      href: "#",
    },
  ]

  const languages = [
    { flag: "🇲🇦", name: "Arabe", level: "Langue Maternelle" },
    { flag: "🇫🇷", name: "Français", level: "Courant" },
    { flag: "🇬🇧", name: "Anglais", level: "Courant" },
  ]

  return (
    <SectionAnimation 
      animationType="fadeUp" 
      className="py-12 md:py-16 lg:py-20 px-4 bg-secondary/20"
    >
      <section id="contact">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Contact</h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
            Discutons de votre prochain projet. Je suis disponible pour des collaborations et opportunités.
          </p>
        </div>

        {/* Mobile & Tablet: Compact Layout */}
        <div className="block lg:hidden">
          {/* Contact Info - Single Line */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Informations</h3>
            <div className="flex space-x-2">
              {contactInfo.map((info, index) => (
                <Card key={index} className="flex-1 p-3 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-1.5 bg-primary/10 rounded-lg">
                        <info.icon className="w-3.5 h-3.5 text-primary" />
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mb-1">{info.label}</div>
                    <a 
                      href={info.href} 
                      className="font-medium text-xs hover:text-primary transition-colors break-words block leading-tight"
                    >
                      {info.value}
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages - Single Line */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Langues</h3>
            <div className="flex space-x-2">
              {languages.map((lang, index) => (
                <Card key={index} className="flex-1 p-3 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="text-center">
                    <span className="text-xl block mb-1">{lang.flag}</span>
                    <div className="font-medium text-xs">{lang.name}</div>
                    <div className="text-xs text-muted-foreground leading-tight">{lang.level}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form - Full Width */}
          <Card className="p-4 bg-card border-border hover:border-primary/30 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Envoyez-moi un message</h3>
              <p className="text-sm text-muted-foreground">
                Remplissez le formulaire et je vous répondrai rapidement.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nom *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-input border-border focus:border-primary transition-colors text-sm"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-input border-border focus:border-primary transition-colors text-sm"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-input border-border focus:border-primary resize-none transition-colors text-sm"
                  placeholder="Votre message..."
                />
              </div>


              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-black hover:bg-primary/90 hover:text-black font-medium py-2.5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 border border-primary/20 hover:border-primary/40 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>

        {/* Desktop: Original Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          
          {/* Contact Information - Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Info Cards */}
              <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Informations</h3>
                {contactInfo.map((info, index) => (
                <Card key={index} className="p-4 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <info.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-muted-foreground mb-1">{info.label}</div>
                      <a 
                        href={info.href} 
                        className="font-medium text-sm hover:text-primary transition-colors break-words block"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </Card>
                ))}
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Langues</h3>
              <Card className="p-4 bg-card border-border">
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center space-x-3">
                      <span className="text-lg flex-shrink-0">{lang.flag}</span>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-sm">{lang.name}</div>
                        <div className="text-xs text-muted-foreground">{lang.level}</div>
                    </div>
                  </div>
                ))}
              </div>
              </Card>
            </div>
          </div>

          {/* Contact Form - Right Column */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Envoyez-moi un message</h3>
                <p className="text-sm text-muted-foreground">
                  Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom complet *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                      className="bg-input border-border focus:border-primary transition-colors"
                      placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Adresse email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                      className="bg-input border-border focus:border-primary transition-colors"
                  placeholder="votre@email.com"
                />
                  </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                    className="bg-input border-border focus:border-primary resize-none transition-colors"
                    placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>


                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-black hover:bg-primary/90 hover:text-black font-medium py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 border border-primary/20 hover:border-primary/40 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                <Send className="w-4 h-4 mr-2" />
                Envoyer le message
                    </>
                  )}
              </Button>
            </form>
          </Card>
        </div>
        </div>

      </div>
    </section>
    </SectionAnimation>
  )
}
