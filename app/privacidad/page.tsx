'use client';

import Link from 'next/link';

export default function PrivacidadPage() {
  return (
    <main style={{ background: '#000', minHeight: '100vh', padding: '8rem 1.25rem 4rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <Link
            href="/"
            style={{
              color: '#C9A84C',
              textDecoration: 'none',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            ← Volver al inicio
          </Link>
        </div>

        <div style={{ borderBottom: '1px solid rgba(201,168,76,0.2)', paddingBottom: '2rem', marginBottom: '3rem' }}>
          <span style={{
            display: 'block',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.3em',
            color: '#C9A84C',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            Legal
          </span>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 300,
            color: '#E8D5A3',
            lineHeight: 1.2,
          }}>
            Política de Privacidad
          </h1>
        </div>

        <div style={{ fontFamily: 'DM Sans, sans-serif', color: '#A09070', lineHeight: 1.8 }}>

          <Section title="1. Responsable del Tratamiento">
            <p>En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPD-GDD), le informamos que el responsable del tratamiento de sus datos personales es:</p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li><strong style={{ color: '#E8D5A3' }}>Titular:</strong> Forner Classics</li>
              <li><strong style={{ color: '#E8D5A3' }}>Domicilio:</strong> Gandía, Valencia, España</li>
              <li><strong style={{ color: '#E8D5A3' }}>Correo electrónico:</strong> hola@fornerclassics.com</li>
              <li><strong style={{ color: '#E8D5A3' }}>Teléfono:</strong> +34 601 329 162</li>
            </ul>
          </Section>

          <Section title="2. Datos que Recopilamos">
            <p>Recopilamos únicamente los datos que usted nos facilita voluntariamente a través del formulario de contacto o reserva:</p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Información sobre el evento o servicio solicitado</li>
              <li>Fecha y hora del servicio</li>
            </ul>
          </Section>

          <Section title="3. Finalidad del Tratamiento">
            <p>Sus datos se utilizan para:</p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Gestionar su solicitud de reserva o presupuesto</li>
              <li>Contactarle para confirmar disponibilidad y condiciones del servicio</li>
              <li>Enviarle información relacionada con el servicio contratado</li>
            </ul>
          </Section>

          <Section title="4. Base Legal">
            <p>El tratamiento de sus datos se basa en el consentimiento expreso que usted otorga al enviar el formulario de contacto, así como en la ejecución del contrato de prestación de servicios.</p>
          </Section>

          <Section title="5. Conservación de Datos">
            <p>Conservaremos sus datos durante el tiempo necesario para atender su solicitud y, en caso de formalizar un servicio, durante el tiempo legalmente exigido para cumplir nuestras obligaciones fiscales y mercantiles (mínimo 5 años).</p>
          </Section>

          <Section title="6. Comunicación a Terceros">
            <p>No cedemos sus datos a terceros, salvo obligación legal. Podemos utilizar proveedores de servicios de correo electrónico (como Formspree) para gestionar la comunicación, quienes actúan como encargados del tratamiento bajo nuestras instrucciones.</p>
          </Section>

          <Section title="7. Sus Derechos">
            <p>Tiene derecho a acceder, rectificar, suprimir, oponerse, limitar y solicitar la portabilidad de sus datos. Puede ejercer estos derechos enviando un correo a <strong style={{ color: '#E8D5A3' }}>hola@fornerclassics.com</strong>.</p>
            <p style={{ marginTop: '1rem' }}>Si considera que el tratamiento no se ajusta a la normativa, puede presentar una reclamación ante la <strong style={{ color: '#E8D5A3' }}>Agencia Española de Protección de Datos (www.aepd.es)</strong>.</p>
          </Section>

          <p style={{ marginTop: '3rem', fontSize: '0.8rem', color: '#6B5C40' }}>
            Última actualización: Abril 2026
          </p>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '2.5rem' }}>
      <h2 style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.4rem',
        fontWeight: 400,
        color: '#E8D5A3',
        marginBottom: '1rem',
        borderLeft: '2px solid #C9A84C',
        paddingLeft: '1rem',
      }}>
        {title}
      </h2>
      {children}
    </section>
  );
}
