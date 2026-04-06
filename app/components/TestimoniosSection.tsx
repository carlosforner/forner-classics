'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ana & Marcos',
    role: 'Boda en Gandía',
    date: 'Septiembre 2024',
    rating: 5,
    text: 'El Chevrolet fue absolutamente mágico. Cuando llegó a buscarme, toda la calle se paró a mirarlo. El chófer, impecable de principio a fin, anticipó cada detalle sin que tuviéramos que pedir nada. Fue exactamente el toque que necesitaba nuestra boda para ser perfecta.',
    vehicle: 'Chevrolet International 1930',
  },
  {
    id: 2,
    name: 'Carlos Peiró',
    role: 'Director de Fotografía',
    date: 'Enero 2025',
    rating: 5,
    text: 'Llevamos años buscando un clásico con esa pátina auténtica que las cámaras aman. El Caravelle de Forner Classics es exactamente eso: sin retoques, sin plastic chrome. Las superficies son perfectas para rodajes. Y la gestión del equipo, de diez.',
    vehicle: 'Renault Caravelle 1962',
  },
  {
    id: 3,
    name: 'Sofía & Javier',
    role: 'Escapada especial · Aniversario',
    date: 'Marzo 2025',
    rating: 5,
    text: 'Contratamos el servicio para nuestro décimo aniversario. La ruta por la comarca de La Safor a bordo del Chevrolet fue surrealista. Cada pueblo en el que paramos, la gente salía a preguntar por el coche. Una experiencia que no vamos a olvidar jamás.',
    vehicle: 'Chevrolet International 1930',
  },
];

export default function TestimoniosSection() {
  return (
    <section id="testimonios" style={{ background: '#000', padding: '6rem 0' }}>
      <div className="container-luxury">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">— Lo que dicen nuestros clientes —</span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 300,
            color: '#E8D5A3',
            marginBottom: '1rem',
          }}>
            Historias Reales
          </h2>
          <p style={{ color: '#A09070', maxWidth: '480px', margin: '0 auto' }}>
            Las palabras de quienes han confiado en Forner Classics para
            sus momentos más importantes.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2px',
        }}>
          {testimonials.map((t) => (
            <article
              key={t.id}
              style={{
                background: 'var(--surface-card)',
                border: '1px solid rgba(77,70,55,0.3)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.25)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77,70,55,0.3)';
              }}
            >
              {/* Quote icon */}
              <Quote size={24} color="#C9A84C" style={{ opacity: 0.5 }} />

              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px' }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} color="#C9A84C" fill="#C9A84C" />
                ))}
              </div>

              {/* Text */}
              <blockquote style={{
                borderLeft: '2px solid #C9A84C',
                paddingLeft: '1.25rem',
                flex: 1,
              }}>
                <p style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.1rem',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: '#C5B484',
                  lineHeight: 1.75,
                  margin: 0,
                }}>
                  &ldquo;{t.text}&rdquo;
                </p>
              </blockquote>

              {/* Vehicle tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '4px',
                  height: '4px',
                  background: '#C9A84C',
                  transform: 'rotate(45deg)',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.65rem',
                  color: '#6B5C40',
                  letterSpacing: '0.1em',
                }}>
                  {t.vehicle}
                </span>
              </div>

              {/* Author */}
              <div style={{
                borderTop: '1px solid rgba(77,70,55,0.3)',
                paddingTop: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
                <div>
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#E8D5A3',
                    marginBottom: '0.2rem',
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.7rem',
                    color: '#6B5C40',
                  }}>
                    {t.role}
                  </div>
                </div>
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.65rem',
                  color: '#4D4637',
                  letterSpacing: '0.1em',
                }}>
                  {t.date}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA after testimonials */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'var(--surface-card)',
          border: '1px solid rgba(77,70,55,0.4)',
        }}>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 300,
            color: '#E8D5A3',
            marginBottom: '0.75rem',
          }}>
            ¿Listo para crear su propia historia?
          </p>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.9rem',
            color: '#A09070',
            marginBottom: '2rem',
          }}>
            Plazas limitadas para garantizar la calidad que merecen sus momentos.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#reserva');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
            id="cta-testimonios-reserva"
          >
            Reservar mi experiencia
          </button>
        </div>

      </div>
    </section>
  );
}
