'use client';

import { Link2, Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#000', borderTop: '1px solid rgba(77,70,55,0.4)' }}>

      {/* Main Footer */}
      <div className="container-luxury" style={{ padding: '4rem 1.25rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
        }}>

          <div>
            {/* Logo */}
            <div style={{ marginBottom: '2rem' }}>
              <img
                src="/images/logo-footer.png.jpg"
                alt="Forner Classics Sello Oficial"
                style={{
                  height: '120px',
                  width: 'auto',
                  objectFit: 'contain',
                  marginBottom: '1rem'
                }}
              />
              <div style={{
                height: '1px',
                width: '60px',
                background: '#C9A84C',
                marginBottom: '1.25rem'
              }} />
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.85rem',
                color: '#6B5C40',
                lineHeight: 1.75,
              }}>
                Alquiler exclusivo de coches clásicos con chófer en Gandía y La Safor.
                Bodas · Rodajes · Experiencias de lujo personalizadas.
              </p>
            </div>

            {/* Social */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href="https://instagram.com/fornerclassics"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  border: '1px solid rgba(77,70,55,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6B5C40',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#C9A84C';
                  (e.currentTarget as HTMLElement).style.color = '#C9A84C';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77,70,55,0.5)';
                  (e.currentTarget as HTMLElement).style.color = '#6B5C40';
                }}
                aria-label="Instagram de Forner Classics"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/34601329162"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  border: '1px solid rgba(77,70,55,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6B5C40',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#C9A84C';
                  (e.currentTarget as HTMLElement).style.color = '#C9A84C';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77,70,55,0.5)';
                  (e.currentTarget as HTMLElement).style.color = '#6B5C40';
                }}
                aria-label="WhatsApp Forner Classics"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              color: '#C9A84C',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>
              Navegación
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'La Flota', href: '#flota' },
                { label: 'Servicios', href: '#servicios' },
                { label: 'Nuestra Historia', href: '#historia' },

                { label: 'Solicitar Reserva', href: '#reserva' },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.85rem',
                    color: '#6B5C40',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#C9A84C'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#6B5C40'; }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              color: '#C9A84C',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>
              Servicios
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Bodas & Celebraciones',
                'Turismo & Experiencias',
                'Rodajes & Fotografía',
              ].map((s) => (
                <span key={s} style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.85rem',
                  color: '#6B5C40',
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              color: '#C9A84C',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>
              Contacto
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { Icon: MessageCircle, text: 'WhatsApp', href: 'https://wa.me/34601329162' },
                { Icon: Instagram, text: '@fornerclassics', href: 'https://instagram.com/fornerclassics' },
                { Icon: Mail, text: 'hola@fornerclassics.com', href: 'mailto:hola@fornerclassics.com' },
                { Icon: MapPin, text: 'Gandía, La Safor, Valencia', href: null },
              ].map(({ Icon, text, href }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Icon size={14} color="#4D4637" style={{ marginTop: '2px', flexShrink: 0 }} />
                  {href ? (
                    <a
                      href={href}
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.85rem',
                        color: '#6B5C40',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#C9A84C'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#6B5C40'; }}
                    >
                      {text}
                    </a>
                  ) : (
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#6B5C40' }}>
                      {text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid rgba(77,70,55,0.3)',
        padding: '1.5rem 1.25rem',
      }}>
        <div className="container-luxury" style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
        }}>
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.7rem',
            color: '#4D4637',
          }}>
            © {year} Forner Classics · Gandía, Valencia, España · Todos los derechos reservados
          </span>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {['Política de Privacidad', 'Aviso Legal', 'Política de Cookies'].map((l) => (
              <span key={l} style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.7rem',
                color: '#4D4637',
                cursor: 'pointer',
              }}>
                {l}
              </span>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Volver al inicio de la página"
              style={{
                background: 'none',
                border: '1px solid rgba(77,70,55,0.4)',
                color: '#6B5C40',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                padding: '0.35rem 0.85rem',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#C9A84C';
                (e.currentTarget as HTMLElement).style.color = '#C9A84C';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77,70,55,0.4)';
                (e.currentTarget as HTMLElement).style.color = '#6B5C40';
              }}
            >
              ↑ Inicio
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
