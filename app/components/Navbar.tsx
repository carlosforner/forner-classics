'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'La Flota', href: '/#flota' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Nuestra Historia', href: '/#historia' },
  { label: 'FAQs', href: '/faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    // If we're on the homepage and the href is an anchor
    if (href.startsWith('/#')) {
      const hash = href.replace('/', '');
      if (pathname === '/') {
        // Already on homepage — smooth scroll
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      // Not on homepage — navigate there (Next.js will handle hash)
      window.location.href = href;
      return;
    }

    // Regular page link — let Next.js Link handle it
    // This function is only called from buttons, not from <Link>
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
          <Link
            href="/"
            aria-label="Forner Classics - Ir al inicio"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
          >
            <Image
              src="/images/logo-navbar.png.jpg"
              alt="Forner Classics Logo"
              width={220}
              height={65}
              priority
              style={{
                height: '65px',
                maxWidth: '220px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 10px rgba(201,168,76,0.1))',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'}
              onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'}
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="hidden-mobile">
            {navLinks.map((link) => {
              // Determine active state
              const isHashLink = link.href.startsWith('/#');
              const isActive = isHashLink ? false : pathname === link.href;

              if (isHashLink) {
                // Anchor link → use button so we can smooth-scroll on homepage
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#A09070',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'color 0.3s ease',
                      padding: '1.5rem 0',
                      borderBottom: '1px solid transparent',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#A09070')}
                  >
                    {link.label}
                  </button>
                );
              }

              // Regular page link → use Next.js Link
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: isActive ? '#C9A84C' : '#A09070',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: isActive ? 600 : 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    padding: '1.5rem 0',
                    borderBottom: isActive ? '1px solid #C9A84C' : '1px solid transparent',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#C9A84C' : '#A09070')}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* CTA button — single "Reservar" */}
            <Link
              href="/reserva"
              className="btn-primary"
              style={{ padding: '0.6rem 1.5rem', fontSize: '0.7rem', textDecoration: 'none', textAlign: 'center' }}
            >
              Reservar
            </Link>
          </div>

          {/* ── Mobile Menu Button ── */}
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

      {/* ── Mobile Menu ── */}
      {isOpen && (
        <div
          id="mobile-menu"
          style={{
            background: 'rgba(0,0,0,0.98)',
            borderTop: '1px solid rgba(77,70,55,0.4)',
            padding: '2rem 1.25rem',
          }}
        >
          {navLinks.map((link) => {
            const isHashLink = link.href.startsWith('/#');

            if (isHashLink) {
              return (
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
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  color: pathname === link.href ? '#C9A84C' : '#E8D5A3',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.9rem',
                  fontWeight: 400,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(77,70,55,0.2)',
                }}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/reserva"
            onClick={() => setIsOpen(false)}
            className="btn-primary"
            style={{ display: 'block', width: '100%', marginTop: '1.5rem', textDecoration: 'none', textAlign: 'center' }}
          >
            Solicitar Reserva
          </Link>
        </div>
      )}
    </nav>
  );
}
