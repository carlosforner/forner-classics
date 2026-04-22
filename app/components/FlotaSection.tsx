'use client';

import Image from 'next/image';
import Link from 'next/link';
import { vehicles } from '../lib/data';

export default function FlotaSection() {
  return (
    <section id="flota" style={{ background: 'var(--obsidian-soft)', padding: '7rem 0 5rem' }}>
      <div className="container-luxury">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">— La Colección —</span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 300,
            color: '#E8D5A3',
            marginBottom: '1rem',
            letterSpacing: '0.02em',
          }}>
            Nuestra Flota
          </h2>
          <div style={{ height: '1px', width: '50px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', margin: '0 auto 1.25rem' }} />
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.9rem',
            color: '#6B5C40',
            maxWidth: '440px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            Joyas mecánicas seleccionadas con devoción. Pulse sobre cualquier vehículo para ver todos sus detalles y tarifas.
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
                  background: vehicle.available ? 'var(--surface-card)' : 'rgba(18,18,18,0.6)',
                  border: `1px solid rgba(77,70,55,0.25)`,
                  transition: 'border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.25,0.1,0.25,1)',
                  overflow: 'hidden',
                  opacity: vehicle.available ? 1 : 0.7,
                  filter: vehicle.available ? 'none' : 'grayscale(0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (vehicle.available) {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.4)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 50px rgba(0,0,0,0.5), 0 0 30px rgba(201,168,76,0.07)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77,70,55,0.25)';
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
                      transition: 'transform 0.8s cubic-bezier(0.25,0.1,0.25,1)',
                    }}
                  />
                  {/* Gradient overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
                    pointerEvents: 'none',
                  }} />

                  {/* Type Tag */}
                  <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', zIndex: 2 }}>
                    <span style={{
                      display: 'inline-block',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      color: vehicle.available ? '#1A1200' : '#777',
                      background: vehicle.available ? '#C9A84C' : '#2A2A2A',
                      padding: '0.2rem 0.55rem',
                      textTransform: 'uppercase',
                    }}>
                      {vehicle.available ? vehicle.tag : 'Próximamente'}
                    </span>
                  </div>

                  {/* Year */}
                  <div style={{
                    position: 'absolute', bottom: '0.75rem', left: '0.85rem', right: '0.75rem', zIndex: 2,
                  }}>
                    <span style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 'clamp(1.8rem, 5vw, 2.4rem)',
                      fontWeight: 700,
                      color: 'rgba(232,213,163,0.9)',
                      lineHeight: 1,
                      textShadow: '0 2px 12px rgba(0,0,0,0.7)',
                      display: 'block',
                    }}>{vehicle.year}</span>
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.6rem',
                      color: 'rgba(255,255,255,0.7)',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textShadow: '0 1px 4px rgba(0,0,0,0.9)',
                    }}>{vehicle.pax}</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{
                  padding: '1.2rem 1rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  gap: '0.75rem',
                }}>
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(1.15rem, 3vw, 1.5rem)',
                    fontWeight: 300,
                    color: '#E8D5A3',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    lineHeight: 1.2,
                  }}>{vehicle.name}</h3>

                  <div style={{
                    padding: '0.6rem 0.8rem',
                    background: 'rgba(201,168,76,0.04)',
                    borderLeft: '2px solid rgba(201,168,76,0.5)',
                    marginTop: 'auto',
                  }}>
                    <strong style={{
                      display: 'block',
                      color: 'rgba(201,168,76,0.8)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontSize: '0.58rem',
                      marginBottom: '0.2rem',
                      fontFamily: 'DM Sans, sans-serif',
                    }}>Ideal para</strong>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#6B5C40' }}>
                      {vehicle.idealFor}
                    </span>
                  </div>

                  <div style={{ textAlign: 'center', paddingTop: '0.25rem' }}>
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.68rem',
                      color: '#C9A84C',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
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
