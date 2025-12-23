import { NextRequest, NextResponse } from 'next/server'

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

    // Aquí enviarías el email usando Resend o Nodemailer
    // Por ahora, lo registramos en consola
    console.log('Nuevo contacto:', { nombre, empresa, email, mensaje })

    // Si tienes RESEND_API_KEY configurado
    if (process.env.RESEND_API_KEY) {
      const resend = await import('resend').then(m => new m.Resend(process.env.RESEND_API_KEY))
      
      await resend.emails.send({
        from: 'formulario-web@riberdigital.es',
        to: 'contacto@riberdigital.es',
        replyTo: email,
        subject: `Nuevo contacto de ${empresa} - ${nombre}`,
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Empresa:</strong> ${empresa}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${mensaje.replace(/\n/g, '<br>')}</p>
        `,
      })
    }

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error al enviar el mensaje:', error)
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    )
  }
}
