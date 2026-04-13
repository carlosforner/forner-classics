'use client';

import Image from 'next/image';
import Link from 'next/link';
import { vehicles } from '../lib/data';

export default function FlotaSection() {
  return (
    <section id="flota" style={{ background: 'var(--obsidian-soft)', padding: '4rem 0 3rem' }}>
      <div className="container-luxury">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-label">— La Colección —</span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 300,
            color: '#E8D5A3',
            marginBottom: '0.75rem',
          }}>
            Nuestra Flota
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.9rem',
            color: '#A09070',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Cuatro joyas mecánicas seleccionadas con devoción. Pulse sobre cualquier vehículo para descubrir todos sus detalles.
          </p>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="fleet-horizontal-layout">
          {vehicles.map((vehicle) => (
            <Link
              key={vehicle.id}
              href={`/flota/${vehicle.slug}`}
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
            >
              <article
                style={{
                  background: vehicle.available ? 'var(--surface-card)' : 'rgba(30,30,30,0.4)',
                  border: `1px solid ${vehicle.available ? 'rgba(77,70,55,0.3)' : 'rgba(77,70,55,0.2)'}`,
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                  overflow: 'hidden',
                  opacity: vehicle.available ? 1 : 0.85,
                  filter: vehicle.available ? 'none' : 'grayscale(0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (vehicle.available) {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.35)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(201,168,76,0.06)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77,70,55,0.3)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Image */}
                <div style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  background: 'var(--surface-low)',
                }}>
                  <Image
                    src={vehicle.image}
                    alt={vehicle.imageAlt}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 25vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transition: 'transform 0.7s ease',
                    }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)',
                    pointerEvents: 'none',
                  }} />

                  {/* Badge */}
                  <div style={{ position: 'absolute', top: '0.8rem', right: '0.8rem', zIndex: 2 }}>
                    <span className="badge-gold" style={{ fontSize: '0.65rem', padding: '0.25rem 0.7rem' }}>{vehicle.badge}</span>
                  </div>

                  {/* Tag */}
                  <div style={{ position: 'absolute', top: '0.8rem', left: '0.8rem', zIndex: 2 }}>
                    <span style={{
                      display: 'inline-block',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 'clamp(0.55rem, 2vw, 0.65rem)', fontWeight: 600, letterSpacing: '0.15em',
                      color: vehicle.available ? '#1A1200' : '#888',
                      background: vehicle.available ? '#C9A84C' : '#333',
                      padding: '0.25rem 0.6rem', textTransform: 'uppercase',
                      border: vehicle.available ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    }}>
                      {vehicle.available ? vehicle.tag : 'Próximamente'}
                    </span>
                  </div>

                  {/* Year + pax */}
                  <div style={{
                    position: 'absolute', bottom: '0.8rem', left: '0.8rem', right: '0.8rem', zIndex: 2,
                    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.1rem',
                  }}>
                    <span style={{
                      fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 6vw, 2.2rem)', fontWeight: 700,
                      color: 'rgba(232,213,163,0.85)', lineHeight: 1,
                      textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                    }}>{vehicle.year}</span>
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(0.55rem, 2vw, 0.65rem)',
                      color: '#fff', fontWeight: 500, letterSpacing: '0.1em',
                      textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                    }}>{vehicle.pax}</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{
                  padding: '1rem', display: 'flex', flexDirection: 'column',
                  flexGrow: 1, justifyContent: 'space-between', gap: '0.5rem',
                }}>
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(1.2rem, 3.5vw, 1.6rem)', fontWeight: 300,
                    color: '#E8D5A3', letterSpacing: '0.04em',
                    textTransform: 'uppercase', textAlign: 'center',
                  }}>{vehicle.name}</h3>

                  <div style={{
                    padding: '0.5rem 0.7rem', background: 'rgba(201,168,76,0.05)',
                    borderLeft: '2px solid #C9A84C', marginTop: 'auto',
                  }}>
                    <strong style={{
                      display: 'block', color: '#C9A84C', letterSpacing: '0.1em',
                      textTransform: 'uppercase', fontSize: 'clamp(0.55rem, 2vw, 0.6rem)', marginBottom: '0.15rem',
                      fontFamily: 'DM Sans, sans-serif',
                    }}>Ideal para</strong>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(0.65rem, 2.5vw, 0.75rem)', color: '#A09070' }}>
                      {vehicle.idealFor}
                    </span>
                  </div>

                  {/* "Ver detalles" hint */}
                  <div style={{
                    textAlign: 'center', paddingTop: '0.5rem',
                  }}>
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(0.65rem, 2vw, 0.75rem)',
                      color: '#C9A84C', letterSpacing: '0.1em', textTransform: 'uppercase',
                    }}>
                      Ver detalles →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
