'use client';

export default function HistoriaSection() {
  return (
    <section id="historia" style={{ background: 'var(--surface-low)', padding: '6rem 0' }}>
      <div className="container-luxury">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">— Nuestra Historia —</span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 300,
            color: '#E8D5A3',
            marginBottom: '1rem',
          }}>
            La Filosofía Forner
          </h2>
          <div className="deco-divider" style={{ maxWidth: '280px', margin: '0 auto' }}>
            <div className="deco-diamond" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
        }} className="historia-grid">
          {/* Image */}
          <div style={{ position: 'relative' }}>
            <div className="deco-corner-frame" style={{ aspectRatio: '4/3', overflow: 'hidden', background: 'var(--surface-card)' }}>
              <img
                src="/images/image-historia-vintage.jpg.jpg"
                alt="Fotografía histórica de la pasión por el automóvil clásico — Colección Forner Classics"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6) 100%)',
              }} />
            </div>

          </div>

          {/* Text */}
          <div style={{ paddingTop: '1rem' }}>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#C9A84C',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
            }}>
              "Un coche clásico no es un medio de transporte. Es una declaración de intenciones."
            </p>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.95rem',
              color: '#A09070',
              lineHeight: 1.85,
              marginBottom: '1.25rem',
            }}>
              Forner Classics nació en Gandía con una convicción sencilla y absoluta: que las experiencias verdaderamente memorables merecen vehículos a la altura de su significado. No somos una empresa de transporte. Somos curadores de momentos extraordinarios.
            </p>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.95rem',
              color: '#A09070',
              lineHeight: 1.85,
              marginBottom: '1.25rem',
            }}>
              Cada vehículo de nuestra colección ha pasado por un proceso de selección riguroso y un mantenimiento que respeta tanto la mecánica original como el espíritu de quien lo construyó. No restauramos coches para exhibirlos: los mantenemos vivos para que usted pueda vivirlos.
            </p>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.95rem',
              color: '#A09070',
              lineHeight: 1.85,
              marginBottom: '2rem',
            }}>
              Operamos principalmente en Gandía y La Safor con la precisión y la discrección que exige el servicio de alto ticket. Bodas, rodajes, experiencias turísticas de lujo: cada encargo recibe la misma atención irrenunciable al detalle.
            </p>

            {/* Values */}
            <div id="mobile-menu" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              {[
                { title: 'Autenticidad sin compromisos', text: 'Solo vehículos históricos originales, nunca réplicas ni imitaciones.' },
                { title: 'Chófer siempre incluido', text: 'La experiencia completa requiere un conductor a la altura del vehículo.' },
                { title: 'Atención personalizada', text: 'Cada reserva es única. La gestionamos como si fuera la nuestra propia.' },
              ].map((v) => (
                <div key={v.title} style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    background: '#C9A84C',
                    transform: 'rotate(45deg)',
                    flexShrink: 0,
                    marginTop: '6px',
                  }} />
                  <div>
                    <div style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#E8D5A3',
                      marginBottom: '0.2rem',
                    }}>
                      {v.title}
                    </div>
                    <div style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.82rem',
                      color: '#6B5C40',
                    }}>
                      {v.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Art Déco Manifesto Strip */}
        <div style={{
          marginTop: '5rem',
          padding: '3rem 2rem',
          background: 'var(--surface-card)',
          border: '1px solid rgba(77,70,55,0.4)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative background text */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            pointerEvents: 'none',
          }}>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(5rem, 15vw, 10rem)',
              fontWeight: 700,
              color: 'rgba(201,168,76,0.03)',
              whiteSpace: 'nowrap',
              userSelect: 'none',
            }}>
              FORNER CLASSICS
            </span>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ height: '1px', width: '40px', background: 'var(--gold)', alignSelf: 'center' }} />
              <div style={{ width: '6px', height: '6px', background: '#C9A84C', transform: 'rotate(45deg)' }} />
              <div style={{ height: '1px', width: '40px', background: 'var(--gold)', alignSelf: 'center' }} />
            </div>
            <blockquote style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#E8D5A3',
              lineHeight: 1.5,
              maxWidth: '700px',
              margin: '0 auto 1rem',
            }}>
              No vendemos distancia en kilómetros.<br />
              Vendemos instantes que valdrán para siempre.
            </blockquote>
            <cite style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              color: '#C9A84C',
              textTransform: 'uppercase',
              fontStyle: 'normal',
            }}>
              — Forner Classics · Gandía, Valencia
            </cite>
          </div>
        </div>

      </div>
    </section>
  );
}
