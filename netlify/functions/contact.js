const nodemailer = require('nodemailer')

exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    }
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const { name, email, message } = JSON.parse(event.body)

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' }),
      }
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Email to owner
    const ownerEmail = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Nouveau message de ${name} - Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="margin: 0; color: #fff; text-align: center;">Nouveau Message Portfolio</h1>
          </div>
          
          <div style="background: #111; padding: 20px; border-radius: 8px; border: 1px solid #333;">
            <h2 style="color: #3b82f6; margin-top: 0;">Informations du contact</h2>
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString('fr-FR')}</p>
          </div>
          
          <div style="background: #111; padding: 20px; border-radius: 8px; border: 1px solid #333; margin-top: 15px;">
            <h2 style="color: #3b82f6; margin-top: 0;">Message</h2>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 15px; background: #111; border-radius: 8px;">
            <p style="margin: 0; color: #666;">Message envoyé depuis le portfolio Soufiane HAJJI</p>
          </div>
        </div>
      `,
    }

    // Email to client
    const clientEmail = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Confirmation - Message reçu',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); padding: 20px; border-radius: 10px; margin-bottom: 20px; text-align: center;">
            <h1 style="margin: 0; color: #fff;">Message Reçu !</h1>
            <p style="margin: 10px 0 0 0; color: #e0e7ff;">Merci pour votre intérêt</p>
          </div>
          
          <div style="background: #111; padding: 20px; border-radius: 8px; border: 1px solid #333;">
            <p>Bonjour <strong>${name}</strong>,</p>
            <p>Votre message a été reçu avec succès. Je vous répondrai dans les plus brefs délais.</p>
            
            <div style="background: #1a1a1a; padding: 15px; border-radius: 6px; margin: 15px 0;">
              <h3 style="color: #3b82f6; margin-top: 0;">Votre message :</h3>
              <p style="white-space: pre-wrap; line-height: 1.6; color: #ccc;">${message}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 15px; background: #111; border-radius: 8px;">
            <p style="margin: 0; color: #666;">Cordialement,<br><strong>Soufiane HAJJI</strong><br>Développeur Full-Stack & UI/UX Designer</p>
          </div>
        </div>
      `,
    }

    // Send emails
    await transporter.sendMail(ownerEmail)
    await transporter.sendMail(clientEmail)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Message envoyé avec succès' 
      }),
    }

  } catch (error) {
    console.error('Error sending email:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Erreur lors de l\'envoi du message' 
      }),
    }
  }
}
