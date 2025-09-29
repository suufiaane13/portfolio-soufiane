import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    // Configuration du transporteur SMTP Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Mot de passe d'application Gmail
      },
    })

    // Configuration de l'email avec design moderne
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Email de réception
      subject: `🚀 Nouveau message de ${name} - Portfolio Soufiane HAJJI`,
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouveau message - Portfolio</title>
        </head>
        <body style="margin: 0; padding: 0; background: #000000; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
            
            <!-- Header avec gradient noir -->
            <div style="background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
              <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1);">
                <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                  🚀 Nouveau Message
                </h1>
                <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0 0; font-size: 16px;">
                  Portfolio Soufiane HAJJI
                </p>
              </div>
            </div>

            <!-- Contenu principal -->
            <div style="padding: 30px;">
              
              <!-- Informations du contact -->
              <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 12px; padding: 24px; margin-bottom: 24px; border: 1px solid #dee2e6;">
                <div style="display: flex; align-items: center; margin-bottom: 16px;">
                  <div style="background: #000000; width: 8px; height: 8px; border-radius: 50%; margin-right: 12px;"></div>
                  <h3 style="color: #000000; margin: 0; font-size: 18px; font-weight: 600;">Informations du contact</h3>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                  <div style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #dee2e6;">
                    <p style="margin: 0; color: #6c757d; font-size: 14px; font-weight: 500;">Nom complet</p>
                    <p style="margin: 4px 0 0 0; color: #000000; font-size: 16px; font-weight: 600;">${name}</p>
                  </div>
                  <div style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #dee2e6;">
                    <p style="margin: 0; color: #6c757d; font-size: 14px; font-weight: 500;">Email</p>
                    <p style="margin: 4px 0 0 0; color: #000000; font-size: 16px; font-weight: 600;">${email}</p>
                  </div>
                </div>
              </div>
              
              <!-- Message -->
              <div style="background: #ffffff; border-radius: 12px; padding: 24px; border: 1px solid #dee2e6; margin-bottom: 24px;">
                <div style="display: flex; align-items: center; margin-bottom: 16px;">
                  <div style="background: #000000; width: 8px; height: 8px; border-radius: 50%; margin-right: 12px;"></div>
                  <h3 style="color: #000000; margin: 0; font-size: 18px; font-weight: 600;">Message</h3>
                </div>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #000000;">
                  <p style="margin: 0; line-height: 1.6; color: #000000; font-size: 16px;">${message.replace(/\n/g, '<br>')}</p>
                </div>
              </div>
              
              <!-- Call to action -->
              <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 12px; padding: 20px; text-align: center; border: 1px solid #dee2e6;">
                <div style="background: #ffffff; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                  <p style="margin: 0; color: #000000; font-size: 16px; font-weight: 600;">
                    💡 Répondez directement à cet email pour contacter ${name}
                  </p>
                </div>
                <p style="margin: 0; color: #6c757d; font-size: 14px;">
                  <strong>Portfolio Soufiane HAJJI</strong> - Développeur Full-Stack & UI/UX Designer
                </p>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #dee2e6;">
              <p style="margin: 0; color: #6c757d; font-size: 14px;">
                Message envoyé depuis le portfolio professionnel
              </p>
            </div>
            
          </div>
        </body>
        </html>
      `,
      replyTo: email, // Permet de répondre directement au client
    }

    // Envoi de l'email
    await transporter.sendMail(mailOptions)

    // Email de confirmation au client avec design moderne
    const confirmationMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: '✅ Message reçu - Soufiane HAJJI Portfolio',
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Message reçu - Portfolio</title>
        </head>
        <body style="margin: 0; padding: 0; background: #000000; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
            
            <!-- Header avec gradient noir -->
            <div style="background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
              <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1);">
                <div style="background: #ffffff; border-radius: 50%; width: 60px; height: 60px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
                  <span style="font-size: 24px;">✅</span>
                </div>
                <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                  Message Reçu !
                </h1>
                <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0 0; font-size: 16px;">
                  Portfolio Soufiane HAJJI
                </p>
              </div>
            </div>

            <!-- Contenu principal -->
            <div style="padding: 30px;">
              
              <!-- Message de confirmation -->
              <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 12px; padding: 24px; margin-bottom: 24px; border: 1px solid #dee2e6;">
                <div style="display: flex; align-items: center; margin-bottom: 16px;">
                  <div style="background: #000000; width: 8px; height: 8px; border-radius: 50%; margin-right: 12px;"></div>
                  <h3 style="color: #000000; margin: 0; font-size: 18px; font-weight: 600;">Confirmation de réception</h3>
                </div>
                <p style="margin: 0; color: #000000; font-size: 16px; line-height: 1.6;">
                  <strong>Bonjour ${name},</strong><br>
                  J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais. 
                  Merci pour votre intérêt pour mes services !
                </p>
              </div>
              
              <!-- Votre message -->
              <div style="background: #ffffff; border-radius: 12px; padding: 24px; border: 1px solid #dee2e6; margin-bottom: 24px;">
                <div style="display: flex; align-items: center; margin-bottom: 16px;">
                  <div style="background: #000000; width: 8px; height: 8px; border-radius: 50%; margin-right: 12px;"></div>
                  <h3 style="color: #000000; margin: 0; font-size: 18px; font-weight: 600;">Votre message</h3>
                </div>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #000000;">
                  <p style="margin: 0; line-height: 1.6; color: #000000; font-size: 16px;">${message.replace(/\n/g, '<br>')}</p>
                </div>
              </div>
              
              <!-- Informations de contact -->
              <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 12px; padding: 24px; text-align: center; border: 1px solid #dee2e6;">
                <div style="background: #ffffff; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
                  <h3 style="color: #000000; margin: 0 0 12px 0; font-size: 18px; font-weight: 600;">Soufiane HAJJI</h3>
                  <p style="margin: 0 0 8px 0; color: #6c757d; font-size: 16px; font-weight: 500;">
                    Développeur Full-Stack & UI/UX Designer
                  </p>
                  <p style="margin: 0; color: #000000; font-size: 16px; font-weight: 600;">
                    <a href="mailto:${process.env.GMAIL_USER}" style="color: #000000; text-decoration: none;">${process.env.GMAIL_USER}</a>
                  </p>
                </div>
                <p style="margin: 0; color: #6c757d; font-size: 14px;">
                  <strong>Portfolio Professionnel</strong> - Solutions web modernes et performantes
                </p>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #dee2e6;">
              <p style="margin: 0; color: #6c757d; font-size: 14px;">
                Email automatique - Portfolio Soufiane HAJJI
              </p>
            </div>
            
          </div>
        </body>
        </html>
      `,
    }

    await transporter.sendMail(confirmationMailOptions)

    return NextResponse.json(
      { message: 'Message envoyé avec succès !' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}
