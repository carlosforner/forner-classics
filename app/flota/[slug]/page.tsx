'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { vehicles } from '../../lib/data';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppFloat from '../../components/WhatsAppFloat';
import { ChevronLeft, Info, CreditCard, CheckCircle } from 'lucide-react';

export default function VehiclePage() {
  const { slug } = useParams();
  const router = useRouter();
  const vehicle = vehicles.find((v) => v.id === slug || v.slug === slug);

  if (!vehicle) {
    return (
      <div style={{ background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: '#E8D5A3', marginBottom: '1rem' }}>
            Vehículo no encontrado.
          </p>
          <Link href="/#flota" style={{ color: '#C9A84C', fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
            ← Volver a la colección
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main style={{ background: '#000', minHeight: '100vh' }}>

        {/* ── HERO BANNER ── */}
        <div style={{ position: 'relative', width: '100%', height: '70vh', overflow: 'hidden' }}>
          <Image
            src={vehicle.image}
            alt={vehicle.imageAlt}
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 60%',
              filter: 'brightness(0.55) contrast(1.1)',
            }}
          />
          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 40%, rgba(0,0,0,0.95) 100%)',
          }} />

          {/* Back button */}
          <Link
            href="/#flota"
            style={{
              position: 'absolute', top: '8.5rem', left: '2rem', zIndex: 10,
              background: '#C9A84C', border: '1px solid #C9A84C',
              color: '#1A1200', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem',
              fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.15em',
              padding: '0.6rem 1.25rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = '#E8D5A3';
              (e.currentTarget as HTMLElement).style.borderColor = '#E8D5A3';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = '#C9A84C';
              (e.currentTarget as HTMLElement).style.borderColor = '#C9A84C';
            }}
          >
            <ChevronLeft size={16} /> Volver a la colección
          </Link>

          {/* Hero text overlay */}
          <div style={{
            position: 'absolute', bottom: '3rem', left: '0', right: '0',
            padding: '0 2rem',
            maxWidth: '1400px',
            margin: '0 auto',
          }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.25rem' }}>
              <span style={{
                display: 'inline-block',
                fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem', fontWeight: 700,
                letterSpacing: '0.3em', textTransform: 'uppercase',
                background: '#C9A84C', color: '#1A1200',
                padding: '0.25rem 0.75rem', marginBottom: '1rem',
              }}>
                {vehicle.badge} · {vehicle.era}
              </span>
              <h1 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 300, color: '#E8D5A3',
                lineHeight: 1.05, margin: 0,
                textShadow: '0 4px 30px rgba(0,0,0,0.8)',
              }}>
                {vehicle.name}
              </h1>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                fontStyle: 'italic', color: 'rgba(201,168,76,0.85)',
                marginTop: '0.5rem',
              }}>
                {vehicle.year} · {vehicle.color} · {vehicle.pax}
              </p>
            </div>
          </div>
        </div>

        {/* ── CONTENT AREA ── */}
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '5rem 1.25rem 6rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
            gap: '5rem',
            alignItems: 'start',
          }}
            className="vehicle-detail-grid"
          >

            {/* ── LEFT: Information ── */}
            <div>

              {/* Description */}
              <div style={{ marginBottom: '3rem' }}>
                <span style={{
                  display: 'block',
                  fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem', fontWeight: 600,
                  letterSpacing: '0.35em', textTransform: 'uppercase',
                  color: 'rgba(201,168,76,0.7)', marginBottom: '0.85rem',
                }}>— Sobre este vehículo —</span>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.95rem', color: '#6B5C40',
                  lineHeight: 1.9,
                }}>
                  {vehicle.description}
                </p>
              </div>

              {/* Gold divider */}
              <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)', marginBottom: '3rem' }} />

              {/* Features */}
              {vehicle.features && vehicle.features.length > 0 && (
                <div style={{ marginBottom: '3rem' }}>
                  <span style={{
                    display: 'block',
                    fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem', fontWeight: 600,
                    letterSpacing: '0.35em', textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.7)', marginBottom: '1.25rem',
                  }}>— Qué incluye —</span>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {vehicle.features.map((feature: string, idx: number) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                        <CheckCircle size={14} color="#C9A84C" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', color: '#6B5C40', lineHeight: 1.65 }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Ideal for tag */}
              <div style={{
                padding: '1rem 1.25rem',
                background: 'rgba(201,168,76,0.04)',
                borderLeft: '2px solid rgba(201,168,76,0.5)',
                marginBottom: '3rem',
              }}>
                <span style={{
                  display: 'block',
                  fontFamily: 'DM Sans, sans-serif', fontSize: '0.58rem', fontWeight: 600,
                  letterSpacing: '0.25em', textTransform: 'uppercase',
                  color: 'rgba(201,168,76,0.7)', marginBottom: '0.4rem',
                }}>Ideal para</span>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#6B5C40' }}>
                  {vehicle.idealFor}
                </span>
              </div>

              {/* Gold divider */}
              <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)', marginBottom: '3rem' }} />

              {/* Pricing */}
              <div style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <CreditCard size={16} color="rgba(201,168,76,0.7)" />
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem', fontWeight: 600,
                    letterSpacing: '0.35em', textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.7)',
                  }}>— Tarifas de alquiler —</span>
                </div>

                <div style={{ border: '1px solid rgba(77,70,55,0.3)', overflow: 'hidden' }}>
                  {vehicle.tarifas?.map((tarifa: { tipo: string; precio: string }, idx: number) => (
                    <div key={idx} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '1rem 1.25rem',
                      borderBottom: idx < (vehicle.tarifas?.length ?? 0) - 1 ? '1px solid rgba(77,70,55,0.2)' : 'none',
                      background: idx % 2 === 0 ? 'transparent' : 'rgba(201,168,76,0.02)',
                    }}>
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: '#6B5C40' }}>
                        {tarifa.tipo}
                      </span>
                      <span style={{
                        fontFamily: 'Cormorant Garamond, serif', fontSize: '1.35rem',
                        fontWeight: 500, color: '#C9A84C',
                      }}>
                        Desde {tarifa.precio}
                      </span>
                    </div>
                  ))}
                  <div style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
                    padding: '0.875rem 1.25rem',
                    background: 'rgba(201,168,76,0.03)',
                    borderTop: '1px solid rgba(77,70,55,0.3)',
                  }}>
                    <Info size={13} color="rgba(201,168,76,0.6)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: '#4D4637', lineHeight: 1.55 }}>
                      Todos los servicios incluyen chófer uniformado y seguro de responsabilidad civil. Hora adicional: 100€.
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Block */}
              <div style={{
                padding: '2.5rem',
                background: 'var(--surface-card)',
                border: '1px solid rgba(77,70,55,0.3)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Corner decorations */}
                <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', width: '18px', height: '18px', borderTop: '1px solid rgba(201,168,76,0.2)', borderLeft: '1px solid rgba(201,168,76,0.2)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '0.75rem', right: '0.75rem', width: '18px', height: '18px', borderBottom: '1px solid rgba(201,168,76,0.2)', borderRight: '1px solid rgba(201,168,76,0.2)', pointerEvents: 'none' }} />

                <p style={{
                  fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
                  fontSize: '1rem', color: 'rgba(201,168,76,0.7)',
                  marginBottom: '1.5rem',
                }}>
                  Respuesta personalizada en menos de 24 horas.
                </p>
                <Link
                  href={`/reserva?v=${vehicle.id}`}
                  className="btn-primary"
                  style={{ textDecoration: 'none', display: 'inline-block', fontSize: '0.78rem' }}
                >
                  Solicitar reserva →
                </Link>
              </div>
            </div>

            {/* ── RIGHT: Sticky image panel ── */}
            <div style={{ position: 'sticky', top: '120px' }}>

              {/* Secondary image card */}
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '3/4',
                background: '#0a0a0a',
                overflow: 'hidden',
                border: '1px solid rgba(201,168,76,0.1)',
              }}>
                <Image
                  src={vehicle.image}
                  alt={vehicle.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                }} />
                <div style={{
                  position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem',
                }}>
                  <div style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, rgba(201,168,76,0.6), transparent)',
                    marginBottom: '0.75rem',
                  }} />
                  <p style={{
                    fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
                    fontSize: '0.9rem', color: 'rgba(232,213,163,0.8)',
                    lineHeight: 1.5, margin: 0,
                  }}>
                    &ldquo;La elegancia de lo atemporal en cada detalle.&rdquo;
                  </p>
                </div>
              </div>

              {/* Specs row */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                border: '1px solid rgba(77,70,55,0.25)',
                borderTop: 'none',
              }}>
                {[
                  { label: 'Año', value: vehicle.year },
                  { label: 'Pasajeros', value: vehicle.pax },
                  { label: 'Color', value: vehicle.color },
                  { label: 'Era', value: vehicle.era },
                ].map((spec, idx) => (
                  <div key={spec.label} style={{
                    padding: '1rem 1.25rem',
                    borderRight: idx % 2 === 0 ? '1px solid rgba(77,70,55,0.25)' : 'none',
                    borderBottom: idx < 2 ? '1px solid rgba(77,70,55,0.25)' : 'none',
                  }}>
                    <div style={{
                      fontFamily: 'DM Sans, sans-serif', fontSize: '0.55rem', fontWeight: 600,
                      letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4D4637',
                      marginBottom: '0.25rem',
                    }}>{spec.label}</div>
                    <div style={{
                      fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem',
                      color: '#E8D5A3', fontWeight: 400,
                    }}>{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </main>

      {/* Responsive grid fix */}
      <style>{`
        @media (max-width: 900px) {
          .vehicle-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
