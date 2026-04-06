import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { nombre, email, vehiculo, fecha } = await req.json();
    console.log("📨 [API Email] Iniciando envío para:", email);

    // 1. Aquí usamos Resend API para enviar el correo (es gratuito y profesional)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.warn("⚠️ No se ha configurado RESEND_API_KEY. Simulando envío para desarrollo.");
      return NextResponse.json({ success: true, simulado: true });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Forner Classics <onboarding@resend.dev>', // Usamos onboarding hasta que verifiques tu Gmail o dominio en Resend
        to: [email],
        replyTo: 'carforfig@gmail.com',
        subject: 'Hemos recibido tu solicitud de reserva - Forner Classics',
        html: `
          <div style="font-family: 'Georgia', serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; padding: 40px; background-color: #fafafa;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #C9A84C; font-weight: normal; margin: 0; font-size: 24px; letter-spacing: 2px; text-transform: uppercase;">Forner Classics</h1>
              <div style="height: 1px; background-color: #C9A84C; width: 60px; margin: 15px auto;"></div>
            </div>
            
            <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #444;">
              Estimado/a <strong>${nombre}</strong>,
            </p>
            
            <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #444;">
              Gracias por confiar en <strong>Forner Classics</strong>. Hemos recibido correctamente tu solicitud de reserva para el vehículo <strong>${vehiculo}</strong> en la fecha <strong>${fecha}</strong>.
            </p>
            
            <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #444;">
              Actualmente nuestro equipo está revisando la disponibilidad y los detalles de tu evento. Nos pondremos en contacto contigo en las próximas <strong>24 horas</strong> para proporcionarte un presupuesto detallado y formalizar la reserva.
            </p>
            
            <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #444;">
              Si tienes alguna duda urgente, puedes responder a este correo o contactarnos directamente por WhatsApp al <a href="https://wa.me/34601329162" style="color: #C9A84C; font-weight: bold; text-decoration: none;">+34 601 32 91 62</a>.
            </p>
            
            <div style="margin-top: 40px; text-align: center; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; color: #888; border-top: 1px solid #ddd; padding-top: 20px;">
              <p style="margin: 0;">© ${new Date().getFullYear()} Forner Classics. Todos los derechos reservados.</p>
              <p style="margin: 5px 0 0 0;">Gandía, Valencia, España</p>
            </div>
          </div>
        `,
      }),
    });

    if (res.ok) {
      console.log("✅ [API Email] Correo enviado correctamente via Resend");
      return NextResponse.json({ success: true });
    } else {
      const errorText = await res.text();
      console.error("❌ [API Email] Error de Resend:", errorText);
      return NextResponse.json({ error: 'Error enviando el email', details: errorText }, { status: 500 });
    }
  } catch (error) {
    console.error('💥 [API Email] Error crítico del servidor:', error);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
