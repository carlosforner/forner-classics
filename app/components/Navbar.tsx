'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'La Flota', href: '#flota' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nuestra Historia', href: '#historia' },
  { label: 'Contacto', href: '#reserva' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['inicio', 'flota', 'servicios', 'historia', 'faq', 'reserva'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="navbar-luxury"
      style={{
        background: scrolled ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.80)',
      }}
    >
      <div className="container-luxury">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.1rem 0' }}>
          {/* Logo */}
          <a
            href="/"
            aria-label="Forner Classics - Ir al inicio"
            style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <img
                src="/images/logo-navbar.png.jpg"
                alt="Forner Classics Logo Horizontal"
                style={{
                  height: '44px',
                  maxWidth: '140px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 10px rgba(201,168,76,0.1))',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'}
                onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'}
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="hidden-mobile">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isActive ? '#C9A84C' : '#A09070',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: isActive ? 600 : 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                  padding: '0.25rem 0',
                  borderBottom: isActive ? '1px solid #C9A84C' : '1px solid transparent',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#C9A84C' : '#A09070')}
              >
                {link.label}
              </button>
              );
            })}
            <button
              onClick={() => handleNavClick('#reserva')}
              className="btn-primary"
              style={{ padding: '0.6rem 1.5rem', fontSize: '0.7rem' }}
            >
              Reservar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="show-mobile"
            style={{
              background: 'none',
              border: 'none',
              color: '#C9A84C',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'none',
            }}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          background: 'rgba(0,0,0,0.98)',
          borderTop: '1px solid rgba(77,70,55,0.4)',
          padding: '2rem 1.25rem',
        }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                display: 'block',
                width: '100%',
                background: 'none',
                border: 'none',
                textAlign: 'left',
                color: '#E8D5A3',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.9rem',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                padding: '1rem 0',
                borderBottom: '1px solid rgba(77,70,55,0.2)',
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#reserva')}
            className="btn-primary"
            style={{ width: '100%', marginTop: '1.5rem' }}
          >
            Solicitar Reserva
          </button>
        </div>
      )}

    </nav>
  );
}
