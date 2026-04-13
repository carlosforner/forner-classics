import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, ArrowLeft, Info } from 'lucide-react';
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
      <main style={{ background: '#000', paddingTop: '80px' }}>

        {/* Hero Image */}
        <div style={{ position: 'relative', width: '100%', height: '50vh', overflow: 'hidden' }}>
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)',
          }} />
          <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', zIndex: 2 }}>
            <span className="badge-gold">{service.label}</span>
          </div>
        </div>

        {/* Content */}
        <div className="container-luxury" style={{ padding: '3rem 1.5rem 5rem' }}>

          {/* Breadcrumb */}
          <div style={{ marginBottom: '2rem' }}>
            <Link href="/#servicios" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#6B5C40',
              textDecoration: 'none',
            }}>
              <ArrowLeft size={14} /> Volver a Servicios
            </Link>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 300, color: '#E8D5A3',
            marginBottom: '0.5rem',
          }}>{service.title}</h1>

          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.15rem', fontWeight: 400, fontStyle: 'italic',
            color: '#C9A84C', marginBottom: '1.5rem',
          }}>{service.headline}</p>

          <div style={{ height: '1px', width: '60px', background: '#C9A84C', marginBottom: '2rem' }} />

          {/* Description */}
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '1rem',
            color: '#A09070', lineHeight: 1.85, marginBottom: '2.5rem',
            maxWidth: '700px',
          }}>{service.description}</p>

          {/* Features */}
          <h2 style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', fontWeight: 600,
            letterSpacing: '0.25em', color: '#C9A84C', textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>Qué incluye</h2>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '3rem' }}>
            {service.features.map((f) => (
              <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <Check size={14} color="#C9A84C" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: '#C5B484', lineHeight: 1.5 }}>{f}</span>
              </li>
            ))}
          </ul>

          {/* Pricing Table */}
          <div style={{
            border: '1px solid rgba(77,70,55,0.4)', overflow: 'hidden',
            marginBottom: '2rem', maxWidth: '600px',
          }}>
            <div style={{
              padding: '0.7rem 1.25rem',
              background: 'rgba(201,168,76,0.06)',
              borderBottom: '1px solid rgba(77,70,55,0.4)',
            }}>
              <span style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem', fontWeight: 600,
                letterSpacing: '0.25em', color: '#C9A84C', textTransform: 'uppercase',
              }}>Tarifas por vehículo</span>
            </div>
            {service.tarifas.map((t, i) => (
              <div key={t.vehiculo} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '0.75rem 1.25rem',
                borderBottom: i < service.tarifas.length - 1 ? '1px solid rgba(77,70,55,0.2)' : 'none',
                opacity: UNAVAILABLE_VEHICLES.includes(t.vehiculo) ? 0.5 : 1,
              }}>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#A09070',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                }}>
                  {t.vehiculo}
                  {UNAVAILABLE_VEHICLES.includes(t.vehiculo) && (
                    <span style={{ fontSize: '0.55rem', letterSpacing: '0.12em', color: '#555', border: '1px solid #333', padding: '0.1rem 0.35rem', textTransform: 'uppercase' }}>Próximamente</span>
                  )}
                </span>
                <span style={{
                  fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem',
                  fontWeight: 500, color: UNAVAILABLE_VEHICLES.includes(t.vehiculo) ? '#5a5040' : '#C9A84C',
                }}>{t.precio}</span>
              </div>
            ))}
            {/* Extra info */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.75rem 1.25rem', background: 'rgba(201,168,76,0.03)',
              borderTop: '1px solid rgba(77,70,55,0.4)',
            }}>
              <Info size={14} color="#C9A84C" style={{ flexShrink: 0 }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: '#A09070', lineHeight: 1.4 }}>
                Hora adicional de servicio: 100€ (Sujeto a margen operativo del chófer)
              </span>
            </div>
          </div>

          {/* Zone */}
          <div style={{
            padding: '1rem 1.25rem', background: 'var(--surface-card)',
            border: '1px solid rgba(77,70,55,0.3)', marginBottom: '2.5rem',
            maxWidth: '600px', textAlign: 'center',
          }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.25em', color: '#6B5C40', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
              Zona de operación
            </span>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 300, color: '#C9A84C' }}>
              {service.zone}
            </span>
          </div>

          {/* CTA */}
          <Link href="/reserva" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}>
            {service.ctaLabel}
          </Link>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
