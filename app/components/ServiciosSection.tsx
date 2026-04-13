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
    <section id="servicios" style={{ background: '#000', padding: '4rem 0 3rem' }}>
      <div className="container-luxury">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-label">— Ocasiones Memorables —</span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 300,
            color: '#E8D5A3',
            marginBottom: '0.75rem',
          }}>
            Nuestros Servicios
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.9rem',
            color: '#A09070',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Cada ocasión merece un marco extraordinario. Pulse sobre cualquier servicio para conocer todos los detalles y tarifas.
          </p>
        </div>

        {/* Service Cards — 3 columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
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
                    border: '1px solid rgba(77,70,55,0.3)',
                    overflow: 'hidden',
                    transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.3)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(201,168,76,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77,70,55,0.3)';
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
                      style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                    }} />
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 2 }}>
                      <span className="badge-gold" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.6rem' }}>
                        <Icon size={10} /> {service.label}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{
                    padding: '1.25rem 1rem', display: 'flex', flexDirection: 'column',
                    flexGrow: 1, justifyContent: 'space-between', gap: '0.75rem',
                  }}>
                    <div>
                      <h3 style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '1.4rem', fontWeight: 300, color: '#E8D5A3',
                        marginBottom: '0.4rem',
                      }}>{service.title}</h3>
                      <p style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '0.9rem', fontStyle: 'italic', color: '#C9A84C',
                        lineHeight: 1.5,
                      }}>{service.headline}</p>
                    </div>

                    <div style={{ textAlign: 'center', paddingTop: '0.25rem' }}>
                      <span style={{
                        fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem',
                        color: '#C9A84C', letterSpacing: '0.1em', textTransform: 'uppercase',
                      }}>
                        Ver detalles y tarifas →
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
