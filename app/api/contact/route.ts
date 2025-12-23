import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, empresa, email, mensaje } = body

    // Validación básica
    if (!nombre || !empresa || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      )
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email no válido' },
        { status: 400 }
      )
    }

    // Configuración del transportador de email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || '465'),
      secure: true, // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER, // tu email
        pass: process.env.SMTP_PASS, // tu contraseña de aplicación
      },
      connectionTimeout: 10000,
      greetingTimeout: 8000,
    })

    // Configuración del email
    const mailOptions = {
      from: `"Riber Digital" <${process.env.SMTP_USER}>`,
      sender: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: `"${nombre}" <${email}>`,
      subject: `Nuevo contacto de ${empresa} - ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">📧 Nuevo Mensaje de Contacto</h1>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; margin-top: 0;">Información del Cliente</h2>
            
            <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>👤 Nombre:</strong> ${nombre}</p>
              <p><strong>🏢 Empresa:</strong> ${empresa}</p>
              <p><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
            </div>
            
            <div style="background-color: #e7f3ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">💬 Mensaje</h3>
              <p style="white-space: pre-wrap;">${mensaje}</p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${email}?subject=Re: Contacto desde Riber Digital" 
                 style="display: inline-block; background-color: #2563eb; color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                ✉️ Responder al Cliente
              </a>
            </div>
          </div>
        </div>
      `,
    }

    // Enviar email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { 
        message: 'Mensaje enviado correctamente',
        success: true 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error al enviar email:', error)
    return NextResponse.json(
      { 
        error: 'Error al procesar el mensaje. Por favor, intenta nuevamente.',
        success: false 
      },
      { status: 500 }
    )
  }
}
