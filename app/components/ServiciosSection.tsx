'use client';

import Image from 'next/image';
import { Heart, Camera, Compass, Check, Info } from 'lucide-react';

const UNAVAILABLE_VEHICLES = ['SEAT 850 1968', 'Renault 4 1982'];

const ctaLabels: Record<string, string> = {
  bodas: 'Reservar para mi boda →',
  rodajes: 'Consultar para rodaje →',
  turismo: 'Ver rutas disponibles →',
};

const services = [
  {
    id: 'bodas',
    icon: Heart,
    label: 'Bodas & Celebraciones',
    title: 'Paquete Único: Gran Reserva',
    headline: 'Su enlace merece un escenario a la altura de su historia.',
    description: 'Es nuestra propuesta definitiva para bodas. Un servicio sin prisas, diseñado para que los novios disfruten de la máxima elegancia y tranquilidad en su día más especial.',
    features: [
      'Vehículo a elegir (Chevrolet 1930 o Renault Caravelle 1962).',
      'Chófer uniformado (siempre uno de los fundadores).',
      'Hasta 5 horas de servicio (recogida, ceremonia, fotos y llegada).',
      'Decoración nupcial completa del vehículo.',
      'Agua fría de cortesía para los traslados.',
      'Atención personalizada constante durante todo el servicio.',
    ],
    tarifas: [
      { vehiculo: 'Chevrolet International AC 1930', precio: '600€' },
      { vehiculo: 'Renault Caravelle 1962', precio: '500€' },
      { vehiculo: 'SEAT 850 1968', precio: '440€' },
      { vehiculo: 'Renault 4 1982', precio: '350€' },
    ],
    vehicles: 'Chevrolet 1930 · Renault Caravelle 1962',
    zone: 'Gandía · La Safor (Consultar otros desplazamientos)',
    image: '/images/service-bodas.png.jpg',
    imageAlt: 'Ambiente de boda de lujo con ramo de flores y luz cinematográfica para eventos Forner Classics',
  },
  {
    id: 'turismo',
    icon: Compass,
    label: 'Turismo & Experiencias',
    title: 'Paquete Ruta Safor',
    headline: 'Redescubra el Mediterráneo con la cadencia de otra época.',
    description: 'Disfruta del placer de viajar en el tiempo con un paseo exclusivo por los rincones más emblemáticos de Gandía y los paisajes de La Safor. La esencia del mediterráneo a través de las ventanillas de un clásico.',
    features: [
      'Vehículo a elegir (Chevrolet 1930 o Renault Caravelle 1962).',
      'Chófer particular.',
      '1 hora de ruta personalizada.',
      'Parada para fotografías con el vehículo en un punto panorámico.',
    ],
    tarifas: [
      { vehiculo: 'Chevrolet International AC 1930', precio: '200€' },
      { vehiculo: 'Renault Caravelle 1962', precio: '160€' },
      { vehiculo: 'SEAT 850 1968', precio: '80€' },
      { vehiculo: 'Renault 4 1982', precio: '65€' },
    ],
    vehicles: 'Chevrolet 1930 · Renault Caravelle 1962',
    zone: 'Gandía · La Safor (Consultar otros desplazamientos)',
    image: '/images/service-turismo.png.jpg',
    imageAlt: 'Experiencia de picnic de lujo en naranjales mediterráneos con vistas panorámicas de La Safor',
  },
  {
    id: 'rodajes',
    icon: Camera,
    label: 'Rodajes & Fotografía',
    title: 'Paquete Sesión Set',
    headline: 'Para producciones que exigen autenticidad sin concesiones.',
    description: 'El escenario perfecto para producciones visuales. Ponemos a tu disposición nuestras joyas históricas para sesiones fotográficas, spots publicitarios, videoclips o contenido para redes sociales en una localización fija.',
    features: [
      'Vehículo a elegir (Chevrolet 1930 o Renault Caravelle 1962).',
      'Traslado del vehículo a la localización acordada (dentro de La Safor).',
      'Chófer asistente para el posicionamiento y cuidado del coche durante el set.',
      '3 horas de disponibilidad del vehículo en el sitio.',
    ],
    tarifas: [
      { vehiculo: 'Chevrolet International AC 1930', precio: '320€' },
      { vehiculo: 'Renault Caravelle 1962', precio: '250€' },
      { vehiculo: 'SEAT 850 1968', precio: '200€' },
      { vehiculo: 'Renault 4 1982', precio: '160€' },
      { vehiculo: 'Para requisitos corporativos, publicitarios o de cine personalizados, consulte presupuesto sin compromiso.', precio: '—' },
    ],
    vehicles: 'Chevrolet 1930 · Renault Caravelle 1962',
    zone: 'Gandía · La Safor (Consultar otros desplazamientos)',
    image: '/images/service-rodajes.png.jpg',
    imageAlt: 'Cámara de cine profesional en set de rodaje de lujo para producciones visuales Forner Classics',
  },
];

export default function ServiciosSection() {
  const scrollToReserva = () => {
    const el = document.querySelector('#reserva');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicios" style={{ background: '#000', padding: '6rem 0' }}>
      <div className="container-luxury">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">— Ocasiones Memorables —</span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 300,
            color: '#E8D5A3',
            marginBottom: '1rem',
          }}>
            Servicios de Alquiler Exclusivos
          </h2>
          <p style={{ color: '#A09070', maxWidth: '520px', margin: '0 auto', marginBottom: '2.5rem' }}>
            Cada ocasión merece un marco extraordinario. Ofrecemos experiencias
            a medida para los momentos que no admiten lo ordinario.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }} className="services-nav">
            {services.map(s => (
              <button 
                key={`btn-${s.id}`} 
                onClick={() => {
                  const el = document.getElementById(`servicio-${s.id}`);
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }} 
                className="btn-ghost" 
                style={{ padding: '0.75rem 1.25rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <s.icon size={16} />
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isReversed = idx % 2 !== 0;
            return (
              <article
                key={service.id}
                id={`servicio-${service.id}`}
                style={{
                  background: 'var(--surface-card)',
                  border: '1px solid rgba(77,70,55,0.3)',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77,70,55,0.3)';
                }}
              >
                <div className={`servicio-grid${isReversed ? ' servicio-grid--reverse' : ''}`}>

                  {/* Image */}
                  <div style={{
                    position: 'relative',
                    aspectRatio: '16/7',
                    overflow: 'hidden',
                  }}>
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                    }} />
                    <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
                      <span className="badge-gold" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Icon size={10} />
                        {service.label}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
                    <h3 style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 'clamp(1.7rem, 3.5vw, 2.2rem)',
                      fontWeight: 300,
                      color: '#E8D5A3',
                      marginBottom: '0.5rem',
                    }}>
                      {service.title}
                    </h3>
                    <p style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.1rem',
                      fontWeight: 400,
                      fontStyle: 'italic',
                      color: '#C9A84C',
                      marginBottom: '1rem',
                    }}>
                      {service.headline}
                    </p>

                    <div style={{ height: '1px', width: '50px', background: '#C9A84C', marginBottom: '1.25rem' }} />

                    <p style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.9rem',
                      color: '#A09070',
                      lineHeight: 1.8,
                      marginBottom: '1.5rem',
                    }}>
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {service.features.map((f) => (
                        <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                          <Check size={14} color="#C9A84C" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#C5B484' }}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Pricing mini-table */}
                    <div style={{
                      border: '1px solid rgba(77,70,55,0.4)',
                      overflow: 'hidden',
                      marginBottom: '1.5rem',
                    }}>
                      <div style={{
                        padding: '0.5rem 1rem',
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
                        }}>Tarifas por vehículo</span>
                      </div>
                      {service.tarifas.map((t, i) => (
                        <div key={t.vehiculo} style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '0.65rem 1rem',
                          borderBottom: i < service.tarifas.length - 1 ? '1px solid rgba(77,70,55,0.2)' : 'none',
                          opacity: UNAVAILABLE_VEHICLES.includes(t.vehiculo) ? 0.5 : 1,
                        }}>
                          <span className="price-row-label" style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '0.78rem',
                            color: '#A09070',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                          }}>
                            {t.vehiculo}
                            {UNAVAILABLE_VEHICLES.includes(t.vehiculo) && (
                              <span style={{ fontSize: '0.55rem', letterSpacing: '0.15em', color: '#555', border: '1px solid #333', padding: '0.1rem 0.4rem', textTransform: 'uppercase' }}>Próximamente</span>
                            )}
                          </span>
                          <span style={{
                            fontFamily: 'Cormorant Garamond, serif',
                            fontSize: '1.15rem',
                            fontWeight: 500,
                            color: UNAVAILABLE_VEHICLES.includes(t.vehiculo) ? '#5a5040' : '#C9A84C',
                          }}>{t.precio}</span>
                        </div>
                      ))}
                      
                      {/* Extra info row */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        padding: '0.75rem 1rem',
                        background: 'rgba(201,168,76,0.03)',
                        borderTop: '1px solid rgba(77,70,55,0.4)',
                      }}>
                        <Info size={14} color="#C9A84C" style={{ flexShrink: 0 }} />
                        <span style={{ 
                          fontFamily: 'DM Sans, sans-serif', 
                          fontSize: '0.7rem', 
                          color: '#A09070', 
                          letterSpacing: '0.01em',
                          lineHeight: 1.4
                        }}>
                          Hora adicional de servicio: 100€ (Sujeto a margen operativo del chófer)
                        </span>
                      </div>
                    </div>

                    <button onClick={scrollToReserva} className="btn-primary" id={`cta-servicio-${service.id}`}>
                      {ctaLabels[service.id] ?? 'Iniciar consulta →'}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Zone coverage box */}
        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          background: 'var(--surface-card)',
          border: '1px solid rgba(77,70,55,0.4)',
          textAlign: 'center',
        }}>
          <span style={{
            display: 'block',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.6rem',
            fontWeight: 600,
            letterSpacing: '0.3em',
            color: '#6B5C40',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            Zona de operación
          </span>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.4rem',
            fontWeight: 300,
            color: '#C9A84C',
            letterSpacing: '0.05em',
          }}>
            Gandía · La Safor
          </p>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.8rem',
            color: '#6B5C40',
            marginTop: '0.5rem',
          }}>
            Para eventos fuera de Gandía y La Safor, consulte disponibilidad y suplemento de desplazamiento.
          </p>
        </div>
      </div>
    </section>
  );
}
