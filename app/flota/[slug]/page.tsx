import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, ArrowLeft, ChevronRight } from 'lucide-react';
import { vehicles } from '../../lib/data';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppFloat from '../../components/WhatsAppFloat';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.slug === slug);
  if (!vehicle) return {};
  return {
    title: `${vehicle.name} ${vehicle.year} — Forner Classics`,
    description: `Alquiler del ${vehicle.name} (${vehicle.year}) con chófer en Gandía, Valencia. ${vehicle.description.slice(0, 140)}...`,
  };
}

export default async function VehicleDetailPage({ params }: Props) {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.slug === slug);
  if (!vehicle) notFound();

  return (
    <>
      <Navbar />
      <main style={{ background: '#000', paddingTop: '80px' }}>

        {/* Hero Image */}
        <div style={{ position: 'relative', width: '100%', height: '60vh', overflow: 'hidden' }}>
          <Image
            src={vehicle.image}
            alt={vehicle.imageAlt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)',
          }} />

          {/* Badge */}
          <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', zIndex: 2 }}>
            <span className="badge-gold" style={{ fontSize: '0.7rem', padding: '0.3rem 0.8rem' }}>{vehicle.badge}</span>
          </div>

          {/* Bottom info */}
          <div style={{
            position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', zIndex: 2,
          }}>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 700,
              color: 'rgba(232,213,163,0.8)',
              lineHeight: 1,
              display: 'block',
              textShadow: '0 4px 20px rgba(0,0,0,0.6)',
            }}>{vehicle.year}</span>
            <span style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.75rem',
              color: '#fff',
              letterSpacing: '0.15em',
              textShadow: '0 2px 6px rgba(0,0,0,0.8)',
            }}>{vehicle.era.toUpperCase()} · {vehicle.color} · {vehicle.pax}</span>
          </div>
        </div>

        {/* Content */}
        <div className="container-luxury" style={{ padding: '3rem 1.5rem 5rem' }}>

          {/* Breadcrumb */}
          <div style={{ marginBottom: '2rem' }}>
            <Link href="/#flota" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#6B5C40',
              textDecoration: 'none', transition: 'color 0.2s',
            }}>
              <ArrowLeft size={14} /> Volver a la Flota
            </Link>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 300,
            color: '#E8D5A3',
            letterSpacing: '0.04em',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
          }}>{vehicle.name}</h1>

          <div style={{ height: '1px', width: '60px', background: '#C9A84C', marginBottom: '2rem' }} />

          {/* Description */}
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '1rem',
            color: '#A09070',
            lineHeight: 1.85,
            marginBottom: '2.5rem',
            maxWidth: '700px',
            fontStyle: 'italic',
          }}>{vehicle.description}</p>

          {/* Two column: Features + Ideal For */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginBottom: '3rem' }} className="historia-grid">

            {/* Features */}
            <div>
              <h2 style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.25em',
                color: '#C9A84C',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}>Características</h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {vehicle.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <Check size={14} color="#C9A84C" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: '#C5B484', lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal For */}
            <div style={{
              padding: '1rem 1.25rem',
              background: 'rgba(201,168,76,0.05)',
              borderLeft: '2px solid #C9A84C',
            }}>
              <strong style={{
                display: 'block', color: '#C9A84C',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                fontSize: '0.6rem', marginBottom: '0.4rem',
                fontFamily: 'DM Sans, sans-serif',
              }}>Ideal para</strong>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#A09070' }}>
                {vehicle.idealFor}
              </span>
            </div>
          </div>

          {/* Pricing Table */}
          <div style={{
            border: '1px solid rgba(77,70,55,0.4)',
            overflow: 'hidden',
            marginBottom: '2.5rem',
            maxWidth: '550px',
          }}>
            <div style={{
              padding: '0.7rem 1.25rem',
              background: 'rgba(201,168,76,0.06)',
              borderBottom: '1px solid rgba(77,70,55,0.4)',
            }}>
              <span style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.6rem', fontWeight: 600,
                letterSpacing: '0.25em', color: '#C9A84C',
                textTransform: 'uppercase',
              }}>Tarifas por tipo de servicio</span>
            </div>
            {vehicle.tarifas.map((t, i) => (
              <Link
                key={t.tipo}
                href={`/servicios/${t.tipo.includes('Bodas') ? 'bodas' : t.tipo.includes('Rodajes') ? 'rodajes' : 'turismo'}`}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '0.85rem 1.25rem', textDecoration: 'none',
                  borderBottom: i < vehicle.tarifas.length - 1 ? '1px solid rgba(77,70,55,0.25)' : 'none',
                  transition: 'background-color 0.2s',
                }}
              >
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#A09070', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  {t.tipo} <ChevronRight size={12} color="#6B5C40" />
                </span>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 500, color: '#C9A84C' }}>{t.precio}</span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          {vehicle.available ? (
            <Link href="/reserva" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}>
              Reservar este vehículo
            </Link>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '400px' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: '#6B5C40', lineHeight: 1.6 }}>
                Este vehículo se incorporará a la flota en breve. Únase a la lista de espera.
              </p>
              <a
                href={`https://wa.me/34601329162?text=${encodeURIComponent(`Hola, me interesa reservar el ${vehicle.name} (${vehicle.year}) cuando esté disponible.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ textAlign: 'center', fontSize: '0.8rem' }}
              >
                Notificarme cuando esté disponible
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
