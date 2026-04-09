'use client';

import Link from 'next/link';

export default function AvisoLegalPage() {
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
            Aviso Legal
          </h1>
        </div>

        <div style={{ fontFamily: 'DM Sans, sans-serif', color: '#A09070', lineHeight: 1.8 }}>

          <Section title="1. Identificación del Titular">
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li><strong style={{ color: '#E8D5A3' }}>Denominación:</strong> Forner Classics</li>
              <li><strong style={{ color: '#E8D5A3' }}>Actividad:</strong> Alquiler de vehículos clásicos con conductor</li>
              <li><strong style={{ color: '#E8D5A3' }}>Domicilio:</strong> Gandía, Valencia, España</li>
              <li><strong style={{ color: '#E8D5A3' }}>Correo electrónico:</strong> hola@fornerclassics.com</li>
              <li><strong style={{ color: '#E8D5A3' }}>Teléfono:</strong> +34 601 329 162</li>
            </ul>
          </Section>

          <Section title="2. Condiciones de Uso">
            <p>El acceso y uso del sitio web <strong style={{ color: '#E8D5A3' }}>www.fornerclassics.com</strong> implica la aceptación de las presentes condiciones. Forner Classics se reserva el derecho a modificar estas condiciones en cualquier momento sin previo aviso.</p>
          </Section>

          <Section title="3. Propiedad Intelectual">
            <p>Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño gráfico, código fuente y demás elementos) son propiedad de Forner Classics o de sus licenciantes, y están protegidos por la legislación española e internacional de propiedad intelectual e industrial.</p>
            <p style={{ marginTop: '1rem' }}>Queda expresamente prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa y por escrito de Forner Classics.</p>
          </Section>

          <Section title="4. Responsabilidad">
            <p>Forner Classics no garantiza la disponibilidad continua del sitio ni se responsabiliza de los daños o perjuicios que puedan derivarse del uso o imposibilidad de uso del sitio web.</p>
          </Section>

          <Section title="5. Ley Aplicable y Jurisdicción">
            <p>Las presentes condiciones se rigen por la legislación española. Para cualquier controversia derivada del uso de este sitio web, las partes se someten a los Juzgados y Tribunales de Gandía (Valencia), con renuncia expresa a cualquier otro fuero que pudiera corresponderles.</p>
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
