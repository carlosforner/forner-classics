import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, ChevronLeft, Info, MapPin } from 'lucide-react';
import { services, UNAVAILABLE_VEHICLES } from '../../lib/data';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppFloat from '../../components/WhatsAppFloat';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.label} — Forner Classics`,
    description: `${service.headline} ${service.description.slice(0, 120)}...`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main style={{ background: '#000' }}>

        {/* ── HERO BANNER ── */}
        <div style={{ position: 'relative', width: '100%', height: '65vh', overflow: 'hidden' }}>
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.5) contrast(1.1)',
            }}
          />
          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 40%, rgba(0,0,0,0.95) 100%)',
          }} />

          {/* Back button */}
          <Link
            href="/#servicios"
            className="btn-back-gold"
            style={{ position: 'absolute', top: '8.5rem', left: '2rem', zIndex: 10 }}
          >
            <ChevronLeft size={16} /> Volver a servicios
          </Link>

          {/* Hero text */}
          <div style={{
            position: 'absolute', bottom: '3rem', left: 0, right: 0,
            padding: '0 2rem',
          }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.25rem' }}>
              <span style={{
                display: 'inline-block',
                fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem', fontWeight: 700,
                letterSpacing: '0.3em', textTransform: 'uppercase',
                background: '#C9A84C', color: '#1A1200',
                padding: '0.25rem 0.75rem', marginBottom: '1rem',
              }}>
                {service.label}
              </span>
              <h1 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
                fontWeight: 300, color: '#E8D5A3',
                lineHeight: 1.1, margin: 0,
                textShadow: '0 4px 30px rgba(0,0,0,0.8)',
              }}>
                {service.title}
              </h1>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
                fontSize: 'clamp(0.95rem, 2vw, 1.25rem)',
                color: 'rgba(201,168,76,0.85)', marginTop: '0.6rem',
              }}>
                {service.headline}
              </p>
            </div>
          </div>
        </div>

        {/* ── CONTENT AREA ── */}
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '5rem 1.25rem 6rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
              gap: '5rem',
              alignItems: 'start',
            }}
            className="service-detail-grid"
          >

            {/* ── LEFT: Main content ── */}
            <div>

              {/* Description */}
              <div style={{ marginBottom: '3rem' }}>
                <span style={{
                  display: 'block', fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.35em',
                  textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', marginBottom: '0.85rem',
                }}>— Descripción del servicio —</span>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem',
                  color: '#6B5C40', lineHeight: 1.9,
                }}>
                  {service.description}
                </p>
              </div>

              {/* Gold divider */}
              <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)', marginBottom: '3rem' }} />

              {/* Features */}
              <div style={{ marginBottom: '3rem' }}>
                <span style={{
                  display: 'block', fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.35em',
                  textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', marginBottom: '1.25rem',
                }}>— Qué incluye —</span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {service.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                      <Check size={14} color="#C9A84C" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', color: '#6B5C40', lineHeight: 1.65 }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gold divider */}
              <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)', marginBottom: '3rem' }} />

              {/* Pricing table */}
              <div style={{ marginBottom: '3rem' }}>
                <span style={{
                  display: 'block', fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.35em',
                  textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', marginBottom: '1.25rem',
                }}>— Tarifas por vehículo —</span>

                <div style={{ border: '1px solid rgba(77,70,55,0.3)', overflow: 'hidden' }}>
                  {service.tarifas.map((t, i) => (
                    <div key={t.vehiculo} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '1rem 1.25rem',
                      borderBottom: i < service.tarifas.length - 1 ? '1px solid rgba(77,70,55,0.2)' : 'none',
                      opacity: UNAVAILABLE_VEHICLES.includes(t.vehiculo) ? 0.45 : 1,
                      background: i % 2 === 0 ? 'transparent' : 'rgba(201,168,76,0.018)',
                    }}>
                      <span style={{
                        fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: '#6B5C40',
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                      }}>
                        {t.vehiculo}
                        {UNAVAILABLE_VEHICLES.includes(t.vehiculo) && (
                          <span style={{
                            fontSize: '0.5rem', letterSpacing: '0.15em', color: '#4D4637',
                            border: '1px solid rgba(77,70,55,0.4)', padding: '0.1rem 0.4rem',
                            textTransform: 'uppercase',
                          }}>Próximamente</span>
                        )}
                      </span>
                      <span style={{
                        fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem',
                        fontWeight: 500,
                        color: UNAVAILABLE_VEHICLES.includes(t.vehiculo) ? '#4D4637' : '#C9A84C',
                      }}>
                        {t.precio}
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
                      Hora adicional de servicio: 100€. Chófer uniformado siempre incluido.
                    </span>
                  </div>
                </div>
              </div>

              {/* Zone */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '1rem 1.25rem',
                background: 'rgba(201,168,76,0.04)',
                borderLeft: '2px solid rgba(201,168,76,0.4)',
                marginBottom: '3rem',
              }}>
                <MapPin size={14} color="rgba(201,168,76,0.7)" style={{ flexShrink: 0 }} />
                <div>
                  <span style={{
                    display: 'block', fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: '#4D4637', marginBottom: '0.2rem',
                  }}>Zona de operación</span>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: '#C9A84C' }}>
                    {service.zone}
                  </span>
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
                <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', width: '18px', height: '18px', borderTop: '1px solid rgba(201,168,76,0.2)', borderLeft: '1px solid rgba(201,168,76,0.2)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '0.75rem', right: '0.75rem', width: '18px', height: '18px', borderBottom: '1px solid rgba(201,168,76,0.2)', borderRight: '1px solid rgba(201,168,76,0.2)', pointerEvents: 'none' }} />
                <p style={{
                  fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
                  fontSize: '1rem', color: 'rgba(201,168,76,0.7)', marginBottom: '1.5rem',
                }}>
                  Respuesta personalizada en menos de 24 horas.
                </p>
                <Link
                  href="/reserva"
                  className="btn-primary"
                  style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center', fontSize: '0.78rem' }}
                >
                  {service.ctaLabel}
                </Link>
              </div>
            </div>

            {/* ── RIGHT: Sticky image ── */}
            <div style={{ position: 'sticky', top: '120px' }}>
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '3/4',
                overflow: 'hidden',
                border: '1px solid rgba(201,168,76,0.1)',
              }}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 38vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)',
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
                    fontSize: '0.85rem', color: 'rgba(232,213,163,0.8)', lineHeight: 1.5, margin: 0,
                  }}>
                    &ldquo;{service.headline}&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>

      <style>{`
        @media (max-width: 900px) {
          .service-detail-grid {
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
