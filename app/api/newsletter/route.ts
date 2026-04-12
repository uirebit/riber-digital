import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, nombre, empresa, tamano } = body

    if (!email) {
      return NextResponse.json({ error: 'El email es obligatorio' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email no válido' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      connectionTimeout: 10000,
      greetingTimeout: 8000,
    })

    // Notify the owner
    await transporter.sendMail({
      from: `"Riber Digital" <${process.env.SMTP_USER}>`,
      sender: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `Nueva descarga de guía: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb;">Nueva descarga de guía</h2>
          <p><strong>Email:</strong> ${email}</p>
          ${nombre ? `<p><strong>Nombre:</strong> ${nombre}</p>` : ''}
          ${empresa ? `<p><strong>Empresa:</strong> ${empresa}</p>` : ''}
          ${tamano ? `<p><strong>Tamaño empresa:</strong> ${tamano}</p>` : ''}
        </div>
      `,
    })

    return NextResponse.json({ message: 'Registro completado', success: true }, { status: 200 })
  } catch (error) {
    console.error('Error en newsletter:', error)
    return NextResponse.json({ error: 'Error al procesar la solicitud.' }, { status: 500 })
  }
}
