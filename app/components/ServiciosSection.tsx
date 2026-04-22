'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Camera, Compass } from 'lucide-react';
import { services } from '../lib/data';

const icons: Record<string, typeof Heart> = {
  bodas: Heart,
  turismo: Compass,
  rodajes: Camera,
};

export default function ServiciosSection() {
  return (
    <section id="servicios" style={{ background: '#000', padding: '7rem 0 5rem' }}>
      <div className="container-luxury">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">— Ocasiones Memorables —</span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 300,
            color: '#E8D5A3',
            marginBottom: '1rem',
            letterSpacing: '0.02em',
          }}>
            Nuestros Servicios
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
            Cada ocasión merece un marco extraordinario. Pulse sobre cualquier servicio para conocer los detalles y tarifas.
          </p>
        </div>

        {/* Service Cards — 3 columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {services.map((service) => {
            const Icon = icons[service.id] || Heart;
            return (
              <Link
                key={service.id}
                href={`/servicios/${service.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <article
                  style={{
                    background: 'var(--surface-card)',
                    border: '1px solid rgba(77,70,55,0.25)',
                    overflow: 'hidden',
                    transition: 'border-color 0.4s ease, transform 0.4s cubic-bezier(0.25,0.1,0.25,1), box-shadow 0.4s ease',
                    cursor: 'pointer',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.35)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 50px rgba(0,0,0,0.5), 0 0 30px rgba(201,168,76,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77,70,55,0.25)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.25,0.1,0.25,1)' }}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)',
                    }} />
                    <div style={{ position: 'absolute', top: '0.85rem', left: '0.85rem', zIndex: 2 }}>
                      <span className="badge-gold" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.58rem' }}>
                        <Icon size={9} /> {service.label}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{
                    padding: '1.5rem 1.25rem 1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                    gap: '0.85rem',
                  }}>
                    <div>
                      <h3 style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: 'clamp(1.3rem, 3vw, 1.5rem)',
                        fontWeight: 300,
                        color: '#E8D5A3',
                        marginBottom: '0.5rem',
                        letterSpacing: '0.03em',
                      }}>{service.title}</h3>
                      <p style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '0.9rem',
                        fontStyle: 'italic',
                        color: 'rgba(201,168,76,0.75)',
                        lineHeight: 1.6,
                        margin: 0,
                      }}>{service.headline}</p>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid rgba(77,70,55,0.2)',
                    }}>
                      <span style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.65rem',
                        color: '#C9A84C',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}>
                        Ver tarifas →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
