'use client';

export default function HistoriaSection() {
  return (
    <section id="historia" style={{ background: 'var(--surface-low)', padding: '7rem 0 5rem' }}>
      <div className="container-luxury">

        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>

          {/* Header */}
          <span className="section-label">— Nosotros —</span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 300,
            color: '#E8D5A3',
            marginBottom: '1.25rem',
            letterSpacing: '0.02em',
          }}>
            La Filosofía Forner
          </h2>

          {/* Gold divider */}
          <div style={{
            height: '1px',
            width: '50px',
            background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            margin: '0 auto 2rem',
          }} />

          {/* Quote */}
          <blockquote style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.15rem, 2.5vw, 1.6rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#C9A84C',
            lineHeight: 1.6,
            margin: '0 auto 2rem',
            maxWidth: '580px',
          }}>
            &ldquo;No vendemos distancia en kilómetros. Vendemos instantes que valdrán para siempre.&rdquo;
          </blockquote>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.9rem',
            color: '#6B5C40',
            lineHeight: 1.85,
            margin: '0 auto 3rem',
            maxWidth: '560px',
          }}>
            Forner Classics nació en Gandía con una convicción sencilla: que las experiencias verdaderamente memorables merecen vehículos a la altura de su significado. Cada coche de nuestra colección ha sido seleccionado con devoción y mantenido para que usted pueda vivirlo.
          </p>

          {/* Values */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            textAlign: 'left',
            borderTop: '1px solid rgba(77,70,55,0.3)',
            paddingTop: '2.5rem',
          }}>
            {[
              { title: 'Autenticidad', text: 'Solo vehículos históricos originales, nunca réplicas ni imitaciones.' },
              { title: 'Chófer siempre incluido', text: 'La experiencia completa requiere un conductor a la altura del momento.' },
              { title: 'Atención personalizada', text: 'Cada reserva es única. La gestionamos como si fuera nuestra propia celebración.' },
            ].map((v) => (
              <div key={v.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '5px',
                  height: '5px',
                  background: '#C9A84C',
                  transform: 'rotate(45deg)',
                  flexShrink: 0,
                  marginTop: '7px',
                }} />
                <div>
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#E8D5A3',
                    marginBottom: '0.3rem',
                    letterSpacing: '0.03em',
                  }}>{v.title}</div>
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.78rem',
                    color: '#6B5C40',
                    lineHeight: 1.65,
                  }}>{v.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
