'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToFlota = () => {
    const el = document.querySelector('#flota');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToReserva = () => {
    const el = document.querySelector('#reserva');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#000',
        overflow: 'hidden',
      }}
    >
      {/* Background image — Next.js optimized for LCP */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="/images/hero-principal.jpg.png"
          alt="Forner Classics - Coches clásicos históricos en villa mediterránea"
          fill
          priority
          quality={85}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 70%' }}
        />
      </div>

      {/* Dark gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.85) 100%)',
        zIndex: 1,
      }} />

      {/* Left side scrim for text legibility */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0) 70%)',
        zIndex: 2,
      }} />

      {/* Art Déco geometric border overlay */}
      <div style={{
        position: 'absolute',
        inset: '2rem',
        border: '1px solid rgba(201,168,76,0.15)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Corner accents */}
      {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (
        <div key={pos} aria-hidden="true" style={{
          position: 'absolute',
          top: pos.includes('top') ? '2.5rem' : 'auto',
          bottom: pos.includes('bottom') ? '2.5rem' : 'auto',
          left: pos.includes('left') ? '2.5rem' : 'auto',
          right: pos.includes('right') ? '2.5rem' : 'auto',
          width: '32px',
          height: '32px',
          borderTop: pos.includes('top') ? '1.5px solid #C9A84C' : 'none',
          borderBottom: pos.includes('bottom') ? '1.5px solid #C9A84C' : 'none',
          borderLeft: pos.includes('left') ? '1.5px solid #C9A84C' : 'none',
          borderRight: pos.includes('right') ? '1.5px solid #C9A84C' : 'none',
          zIndex: 2,
          pointerEvents: 'none',
        }} />
      ))}

      {/* Content */}
      <div className="container-luxury hero-content">

        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ height: '1px', width: '40px', background: 'var(--gold)' }} />
          <span className="hero-location">
            Gandía · La Safor · Valencia
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="hero-text-overlay"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.8rem, 9vw, 6rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            color: '#E8D5A3',
            letterSpacing: '-0.02em',
            maxWidth: '800px',
            marginBottom: '1.5rem',
          }}
        >
          <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}>Alquiler de Coches Clásicos en Gandía y Valencia. </span>
          Donde el tiempo{' '}
          <span style={{
            fontStyle: 'italic',
            color: '#C9A84C',
          }}>conduce.</span>
        </h1>

        {/* Art Déco divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', maxWidth: '400px' }}>
          <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
          <div style={{ width: '6px', height: '6px', background: '#C9A84C', transform: 'rotate(45deg)', flexShrink: 0 }} />
          <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
        </div>

        {/* Subheadline */}
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          fontWeight: 300,
          color: '#C5B484',
          maxWidth: '560px',
          lineHeight: 1.75,
          marginBottom: '3rem',
        }}>
          Experiencias irrepetibles en vehículos históricos. Chófer profesional incluido.
          Para bodas, rodajes y momentos que merecen un marco a la altura.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '4rem' }}>
          <button onClick={scrollToReserva} className="btn-primary" id="hero-cta-reservar">
            Solicitar Reserva
          </button>
          <button onClick={scrollToFlota} className="btn-ghost" id="hero-cta-flota">
            Descubrir la Flota
          </button>
        </div>

        {/* Trust Bar */}
        <div className="hero-trust-bar">
          {[
            { title: 'Flota Exclusiva', subtitle: 'Solo clásicos originales' },
            { title: 'Servicio VIP', subtitle: 'Chófer uniformado de etiqueta' },
            { title: 'Presencia Real', subtitle: 'Impacto visual garantizado' },
            { title: 'Puntualidad Excelente', subtitle: 'Compromiso total con tu horario' },
          ].map((item) => (
            <div key={item.title}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                fontWeight: 600,
                color: '#C9A84C',
                lineHeight: 1.2,
                marginBottom: '0.25rem',
              }}>
                {item.title}
              </div>
              <div className="hero-trust-subtitle">
                {item.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        onClick={scrollToFlota}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && scrollToFlota()}
        aria-label="Desplazarse a la sección de flota"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
          zIndex: 3,
          animation: 'float 2.5s ease-in-out infinite',
        }}
      >
        <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.6rem',
          letterSpacing: '0.3em',
          color: '#6B5C40',
          textTransform: 'uppercase',
        }}>
          Explorar
        </span>
        <ChevronDown size={16} color="#C9A84C" />
      </div>

    </section>
  );
}
