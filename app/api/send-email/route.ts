import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { nombre, email, telefono, vehiculo, fecha, fechaRaw, segmento, precio, mensaje } = await req.json();
    console.log("📨 [API Sync] Iniciando flujo para:", email);

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const NOTION_TOKEN = process.env.NOTION_TOKEN;
    const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

    // 1. Sincronizar con Notion (Independiente del email)
    if (NOTION_TOKEN && NOTION_DATABASE_ID) {
      try {
        const precioLimpio = typeof precio === 'string' 
          ? Number(precio.replace(/[^0-9,.]/g, '').replace(',', '.')) 
          : Number(precio);

        let fechaISO = new Date().toISOString().split('T')[0];
        try {
          if (fechaRaw) {
            fechaISO = fechaRaw.split('T')[0];
          } else {
            const d = new Date(fecha);
            if (!isNaN(d.getTime())) {
              fechaISO = d.toISOString().split('T')[0];
            }
          }
        } catch (e) {
          console.warn("⚠️ [API Notion] No se pudo parsear la fecha, usando fecha actual.");
        }

        console.log("📝 [API Notion] Sincronizando:", { nombre, email, vehiculo, fechaISO, precioLimpio });

        const notionRes = await fetch('https://api.notion.com/v1/pages', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${NOTION_TOKEN}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28'
          },
          body: JSON.stringify({
            parent: { database_id: NOTION_DATABASE_ID },
            properties: {
              'Nombre': { title: [{ text: { content: nombre || 'Sin nombre' } }] },
              'Email': { email: email },
              'Teléfono': { phone_number: telefono || '' },
              'Vehículo': { select: { name: vehiculo || 'Sin vehículo' } },
              'Fecha Evento': { date: { start: fechaISO } },
              'Segmento': { select: { name: segmento || 'Turismo' } },
              'Precio': { number: isNaN(precioLimpio) ? 0 : precioLimpio },
              'Mensaje': { rich_text: [{ text: { content: mensaje || '' } }] }
            }
          })
        });
        
        if (notionRes.ok) {
          console.log("✅ [API Notion] Sincronizado correctamente");
        } else {
          const errorNotion = await notionRes.json();
          console.error("❌ [API Notion] Error de sincronización DETALLADO:", JSON.stringify(errorNotion, null, 2));
        }
      } catch (err) {
        console.error("💥 [API Notion] Error crítico:", err);
      }
    }

    // 2. Envío de Email (Resend)
    if (RESEND_API_KEY) {
      try {
        // En modo "onboarding" (sin dominio verificado), Resend solo permite enviar a tu propio mail
        // Si el mail termina en un dominio extraño, mandamos copia a tu mail personal para evitar el 403
        const isVerifiedRecipient = email.toLowerCase() === 'carforfig@gmail.com';
        const toEmail = isVerifiedRecipient ? email : 'carforfig@gmail.com';

        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Forner Classics <onboarding@resend.dev>',
            to: [toEmail],
            replyTo: 'carforfig@gmail.com',
            subject: `Nueva Solicitud: ${nombre} - ${vehiculo}`,
            html: `
              <div style="font-family: 'Georgia', serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; padding: 40px; background-color: #fafafa;">
                <h2 style="color: #C9A84C; text-align: center;">Nueva Solicitud de Reserva</h2>
                <p><strong>Cliente:</strong> ${nombre}</p>
                <p><strong>Vehículo:</strong> ${vehiculo}</p>
                <p><strong>Email del cliente:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${telefono}</p>
                <p><strong>Fecha:</strong> ${fecha}</p>
                <p><strong>Precio estimado:</strong> ${precio}</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <p><em>Este mensaje es una copia de seguridad enviada a carforfig@gmail.com porque el destinatario original (${email}) no está verificado en Resend.</em></p>
              </div>
            `,
          }),
        });

        if (res.ok) {
          console.log("✅ [API Email] Correo enviado correctamente");
        } else {
          const errorText = await res.text();
          console.error("❌ [API Email] Error de Resend:", errorText);
        }
      } catch (emailErr) {
        console.error("💥 [API Email] Error crítico enviando mail:", emailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('💥 [API Email] Error crítico del servidor:', error);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
