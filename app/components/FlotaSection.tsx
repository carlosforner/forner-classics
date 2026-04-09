'use client';

import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

const vehicles = [
  {
    id: 'chevrolet-1930',
    badge: 'INSIGNIA',
    badgeColor: '#C9A84C',
    name: 'Chevrolet International AC',
    year: '1930',
    era: 'Pre-War Americana',
    color: 'Negro & Caoba',
    pax: '4 pasajeros',
    description:
      'La exhibición suprema. Un porte majestuoso que detiene el tiempo y conquista las miradas. Cada curva de su carrocería es un manifiesto de artesanía que pocas épocas han sabido igualar. Inmortalice su gran día con un escenario que el tiempo no podrá borrar.',
    features: [
      'Chófer de etiqueta incluido',
      '4 pasajeros cómodamente',
      'Decoración floral personalizada',
      'Ideal para bodas de alto protocolo',
    ],
    idealFor: 'Bodas de gala · Recepciones oficiales · Eventos de protocolo',
    image: '/images/chevrolet.webp.png',
    imageAlt: 'Chevrolet International AC 1930 de Forner Classics para bodas y eventos en Gandía Valencia',
    tarifas: [
      { tipo: 'Bodas: Gran Reserva', precio: '600€' },
      { tipo: 'Rodajes: Sesión Set', precio: '320€' },
      { tipo: 'Turismo: Ruta Safor', precio: '200€' },
    ],
    available: true,
    tag: 'El más solicitado',
  },
  {
    id: 'renault-caravelle-1962',
    badge: 'ICÓNICO',
    badgeColor: '#C9A84C',
    name: 'Renault Caravelle',
    year: '1962',
    era: 'Elegance Française',
    color: 'Rojo Burdeos',
    pax: '2 pasajeros',
    description:
      'Elegancia francesa destilada en líneas que desafían el olvido. Su silueta deportiva y su rojo profundo hacen de cada aparición un acontecimiento. La presencia cinematográfica que convierte cualquier producción visual en una obra de referencia.',
    features: [
      'Chófer profesional incluido',
      '2 pasajeros, máxima intimidad',
      'Carrocería coupé de época',
      'Ideal para rodajes y fotografía',
    ],
    idealFor: 'Rodajes · Sesiones fotográficas · Parejas · Escapadas exclusivas',
    image: '/images/carav.webp.png',
    imageAlt: 'Renault Caravelle Rojo 1962 de Forner Classics para rodajes y eventos en Valencia',
    tarifas: [
      { tipo: 'Bodas: Gran Reserva', precio: '500€' },
      { tipo: 'Rodajes: Sesión Set', precio: '250€' },
      { tipo: 'Turismo: Ruta Safor', precio: '160€' },
    ],
    available: true,
    tag: 'El más fotogénico',
  },
  {
    id: 'seat-850-1968',
    badge: 'MEDITERRÁNEO',
    badgeColor: '#C9A84C',
    name: 'SEAT 850',
    year: '1968',
    era: 'Made in Spain',
    color: 'Verde Menta',
    pax: '4 pasajeros',
    description:
      'Un símbolo de la modernidad española de los 60. Su color verde menta y sus formas redondeadas evocan una inocencia perdida que todos reconocen y nadie puede resistir. El protagonista perfecto para una historia con sabor mediterráneo auténtico.',
    features: [
      'Chófer incluido en todo momento',
      '4 puertas, 4 pasajeros',
      'Matrícula valenciana original V-209-650',
      'Ideal para eventos con encanto local',
    ],
    idealFor: 'Bodas íntimas · Sesiones fotográficas · Eventos culturales · Turismo',
    image: '/images/seat850i.jpg.png',
    imageAlt: 'SEAT 850 verde menta 1968 de Forner Classics para bodas y eventos en Gandía Valencia',
    tarifas: [
      { tipo: 'Bodas: Gran Reserva', precio: '440€' },
      { tipo: 'Rodajes: Sesión Set', precio: '200€' },
      { tipo: 'Turismo: Ruta Safor', precio: '80€' },
    ],
    available: false,
    tag: 'El más encantador',
  },
  {
    id: 'renault-4-1982',
    badge: 'POPULAR',
    badgeColor: '#C9A84C',
    name: 'Renault 4',
    year: '1982',
    era: 'French Countryside',
    color: 'Amarillo Sol',
    pax: '4 pasajeros',
    description:
      'El que hace sonreír a todo el mundo. El Renault 4 amarillo es alegría pura con motor. Icono de una generación y emblema de libertad, su presencia en cualquier escenario genera una magia espontánea difícil de imitar. Para experiencias que buscan la emoción más genuina.',
    features: [
      'Chófer incluido en todo servicio',
      '4 pasajeros',
      'Color amarillo sol irresistible',
      'Perfecto para turismo experiencial',
    ],
    idealFor: 'Turismo de experiencias · Rutas comarcales · Sesiones fotográficas · Talleres',
    image: '/images/renault4.webp.png',
    imageAlt: 'Renault 4 amarillo 1982 de Forner Classics para turismo y experiencias en la Comunitat Valenciana',
    tarifas: [
      { tipo: 'Bodas: Gran Reserva', precio: '350€' },
      { tipo: 'Rodajes: Sesión Set', precio: '160€' },
      { tipo: 'Turismo: Ruta Safor', precio: '65€' },
    ],
    available: false,
    tag: 'El más alegre',
  },
];

export default function FlotaSection() {
  const scrollToReserva = () => {
    const el = document.querySelector('#reserva');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="flota" style={{ background: 'var(--obsidian-soft)', padding: '6rem 0 4rem' }}>
      <div className="container-luxury">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">— La Colección —</span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 300,
            color: '#E8D5A3',
            marginBottom: '1rem',
          }}>
            Nuestra Flota de Vehículos Históricos
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '1rem',
            color: '#A09070',
            maxWidth: '580px',
            margin: '0 auto 1.5rem',
            lineHeight: 1.75,
          }}>
            Cuatro joyas mecánicas seleccionadas con devoción, cada una con su propio carácter
            y su propia historia. Listas para protagonizar la suya.
          </p>
          <div className="deco-divider" style={{ maxWidth: '300px', margin: '0 auto' }}>
            <div className="deco-diamond" />
          </div>
        </div>

        {/* Vehicle Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {vehicles.map((vehicle) => (
            <article
              key={vehicle.id}
              id={vehicle.id}
              style={{
                background: vehicle.available ? 'var(--surface-card)' : 'rgba(30,30,30,0.4)',
                border: `1px solid ${vehicle.available ? 'rgba(77,70,55,0.3)' : 'rgba(77,70,55,0.2)'}`,
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                overflow: 'hidden',
                opacity: vehicle.available ? 1 : 0.85,
                filter: vehicle.available ? 'none' : 'grayscale(0.4)',
                scrollMarginTop: '100px'
              }}
              onMouseEnter={(e) => {
                if (vehicle.available) {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.35)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(201,168,76,0.06)';
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77,70,55,0.3)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Layout: image top, content bottom on mobile; side-by-side on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] lg:grid-cols-2">

                {/* ── Image ── */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '16/9',
                    overflow: 'hidden',
                    background: 'var(--surface-low)',
                  }}
                >
                  <Image
                    src={vehicle.image}
                    alt={vehicle.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transition: 'transform 0.7s ease',
                      display: 'block',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                    }}
                  />

                  {/* Gradient bottom overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)',
                    pointerEvents: 'none',
                  }} />

                  {/* Top-right badge */}
                  <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', zIndex: 2 }}>
                    <span className="badge-gold">{vehicle.badge}</span>
                  </div>

                  {/* Top-left tag */}
                  <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', zIndex: 2 }}>
                    <span style={{
                      display: 'inline-block',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.6rem',
                      fontWeight: 600,
                      letterSpacing: '0.2em',
                      color: vehicle.available ? '#1A1200' : '#888',
                      background: vehicle.available ? '#C9A84C' : '#333',
                      padding: '0.2rem 0.6rem',
                      textTransform: 'uppercase',
                      border: vehicle.available ? 'none' : '1px solid rgba(255,255,255,0.1)'
                    }}>
                      {vehicle.available ? vehicle.tag : 'Próximamente'}
                    </span>
                  </div>

                  {/* Bottom overlay: year + pax */}
                  <div style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    left: '1.25rem',
                    right: '1.25rem',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.25rem',
                  }} className="vehicle-info-bar">
                    <span style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '3.8rem',
                      fontWeight: 700,
                      color: 'rgba(232, 213, 163, 0.65)',
                      lineHeight: 1,
                      userSelect: 'none',
                      textShadow: '0 4px 12px rgba(0,0,0,0.4)',
                    }}>
                      {vehicle.year}
                    </span>
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.73rem',
                      color: '#FFFFFF',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                    }}>
                      {vehicle.era.toUpperCase()} · {vehicle.color} · {vehicle.pax}
                    </span>
                  </div>
                </div>

                {/* ── Content ── */}
                <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>

                  {/* Era */}
                  <span style={{
                    display: 'block',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.3em',
                    color: '#6B5C40',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                  }}>
                    {vehicle.era}
                  </span>

                  {/* Name */}
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
                    fontWeight: 300,
                    color: '#E8D5A3',
                    letterSpacing: '0.06em',
                    marginBottom: '0.875rem',
                    textTransform: 'uppercase',
                  }}>
                    {vehicle.name}
                  </h3>

                  {/* Gold line */}
                  <div style={{ height: '1px', width: '50px', background: '#C9A84C', marginBottom: '1.25rem' }} />

                  {/* Description */}
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.92rem',
                    color: '#A09070',
                    lineHeight: 1.85,
                    marginBottom: '1.5rem',
                    fontStyle: 'italic',
                  }}>
                    {vehicle.description}
                  </p>

                  {/* Features */}
                  <ul style={{
                    listStyle: 'none',
                    display: 'grid',
                    gap: '0.5rem 1rem',
                    marginBottom: '1.5rem',
                  }} className="features-grid-2" data-cols="2">
                    {vehicle.features.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <Check size={13} color="#C9A84C" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '0.8rem',
                          color: '#C5B484',
                          lineHeight: 1.4,
                        }}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Ideal for */}
                  <div style={{
                    padding: '0.875rem 1rem',
                    background: 'rgba(201,168,76,0.05)',
                    borderLeft: '2px solid #C9A84C',
                    marginBottom: '1.75rem',
                  }}>
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.68rem',
                      color: '#A09070',
                    }}>
                      <strong style={{
                        display: 'block',
                        color: '#C9A84C',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        fontSize: '0.58rem',
                        marginBottom: '0.2rem',
                      }}>
                        Ideal para
                      </strong>
                      {vehicle.idealFor}
                    </span>
                  </div>

                  {/* Pricing table + CTA */}
                  <div>
                    <div style={{
                      marginBottom: '1.5rem',
                      border: '1px solid rgba(77,70,55,0.4)',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        padding: '0.6rem 1rem',
                        background: 'rgba(201,168,76,0.06)',
                        borderBottom: '1px solid rgba(77,70,55,0.4)',
                      }}>
                        <span style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '0.58rem',
                          fontWeight: 600,
                          letterSpacing: '0.25em',
                          color: '#C9A84C',
                          textTransform: 'uppercase',
                        }}>Tarifas por tipo de servicio</span>
                      </div>
                      {vehicle.tarifas.map((t, i) => (
                        <div key={t.tipo} style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '0.75rem 1rem',
                          borderBottom: i < vehicle.tarifas.length - 1 ? '1px solid rgba(77,70,55,0.25)' : 'none',
                        }}>
                          <span className="price-row-label" style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '0.78rem',
                            color: '#A09070',
                          }}>{t.tipo}</span>
                          <span style={{
                            fontFamily: 'Cormorant Garamond, serif',
                            fontSize: '1.2rem',
                            fontWeight: 500,
                            color: '#C9A84C',
                          }}>{t.precio}</span>
                        </div>
                      ))}
                    </div>
                    {vehicle.available ? (
                      <button
                        onClick={scrollToReserva}
                        className="btn-primary"
                        id={`cta-${vehicle.id}`}
                      >
                        Reservar este vehículo
                      </button>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: '#6B5C40', lineHeight: 1.6 }}>
                          Este vehículo se incorporará a la flota en breve. Únase a la lista de espera y sea el primero en reservarlo.
                        </p>
                        <a
                          href={`https://wa.me/34601329162?text=${encodeURIComponent(`Hola, me interesa reservar el ${vehicle.name} (${vehicle.year}) cuando esté disponible. ¿Podéis notificarme?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost"
                          style={{ textAlign: 'center', fontSize: '0.72rem', padding: '0.75rem 1rem' }}
                          id={`cta-${vehicle.id}`}
                        >
                          Notificarme cuando esté disponible
                        </a>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{
          marginTop: '2.5rem',
          padding: '1.5rem 2rem',
          background: 'var(--surface-card)',
          border: '1px solid rgba(77,70,55,0.3)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}>
          <div>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.15rem',
              fontWeight: 300,
              color: '#E8D5A3',
              marginBottom: '0.25rem',
            }}>
              ¿No encuentra el vehículo perfecto para su ocasión?
            </p>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.8rem',
              color: '#6B5C40',
            }}>
              Cuéntenos su visión y encontraremos juntos la combinación ideal.
            </p>
          </div>
          <button onClick={scrollToReserva} className="btn-primary" id="cta-flota-consulta">
            Consultar disponibilidad
          </button>
        </div>

      </div>
    </section>
  );
}
