'use client';

export default function HistoriaSection() {
  return (
    <section id="historia" style={{ background: 'var(--surface-low)', padding: '4rem 0 3rem' }}>
      <div className="container-luxury">

        {/* Compact layout: quote + values */}
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>

          {/* Header */}
          <span className="section-label">— Nosotros —</span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 300,
            color: '#E8D5A3',
            marginBottom: '1.5rem',
          }}>
            La Filosofía Forner
          </h2>

          {/* Quote */}
          <blockquote style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#C9A84C',
            lineHeight: 1.55,
            marginBottom: '1.5rem',
            maxWidth: '600px',
            margin: '0 auto 1.5rem',
          }}>
            &ldquo;No vendemos distancia en kilómetros. Vendemos instantes que valdrán para siempre.&rdquo;
          </blockquote>

          <div style={{ height: '1px', width: '60px', background: '#C9A84C', margin: '0 auto 1.5rem' }} />

          {/* One paragraph */}
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.9rem',
            color: '#A09070',
            lineHeight: 1.8,
            marginBottom: '2rem',
            maxWidth: '580px',
            margin: '0 auto 2rem',
          }}>
            Forner Classics nació en Gandía con una convicción sencilla: que las experiencias verdaderamente memorables merecen vehículos a la altura de su significado. Cada coche de nuestra colección ha sido seleccionado con devoción y mantenido para que usted pueda vivirlo.
          </p>

          {/* Values in a row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            textAlign: 'left',
          }}>
            {[
              { title: 'Autenticidad sin compromisos', text: 'Solo vehículos históricos originales, nunca réplicas.' },
              { title: 'Chófer siempre incluido', text: 'La experiencia completa requiere un conductor a la altura.' },
              { title: 'Atención personalizada', text: 'Cada reserva es única. La gestionamos como si fuera nuestra.' },
            ].map((v) => (
              <div key={v.title} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '6px', height: '6px', background: '#C9A84C',
                  transform: 'rotate(45deg)', flexShrink: 0, marginTop: '6px',
                }} />
                <div>
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem',
                    fontWeight: 600, color: '#E8D5A3', marginBottom: '0.15rem',
                  }}>{v.title}</div>
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#6B5C40',
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
