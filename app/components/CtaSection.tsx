'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../lib/data';

// Show only 3 most relevant FAQs on landing
const previewFaqs = faqs.slice(0, 3);

export default function CtaSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="reserva" style={{ background: '#000', padding: '4rem 0 3rem' }}>
      <div className="container-luxury">

        {/* CTA Block */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          padding: '3rem 1.5rem',
          background: 'var(--surface-card)',
          border: '1px solid rgba(77,70,55,0.4)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Background text */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            pointerEvents: 'none',
          }}>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(4rem, 12vw, 8rem)',
              fontWeight: 700, color: 'rgba(201,168,76,0.03)',
              whiteSpace: 'nowrap', userSelect: 'none',
            }}>FORNER CLASSICS</span>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <span className="section-label">— Reservas —</span>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 300, color: '#E8D5A3',
              marginBottom: '0.75rem',
            }}>
              ¿Listo para vivir la experiencia?
            </h2>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.9rem', color: '#A09070',
              maxWidth: '480px', margin: '0 auto 1.5rem', lineHeight: 1.7,
            }}>
              Rellene nuestro formulario de solicitud y le enviaremos una propuesta personalizada en menos de 24 horas.
            </p>
            <Link
              href="/reserva"
              className="btn-primary"
              style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center', fontSize: '0.85rem' }}
            >
              Solicitar reserva →
            </Link>
          </div>
        </div>

        {/* Mini FAQ */}
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span className="section-label">— Preguntas frecuentes —</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '1.5rem' }}>
            {previewFaqs.map((faq, idx) => (
              <div key={idx} style={{
                background: 'var(--surface-card)',
                border: '1px solid rgba(77,70,55,0.3)',
                overflow: 'hidden',
                borderColor: open === idx ? 'rgba(201,168,76,0.25)' : 'rgba(77,70,55,0.3)',
                transition: 'border-color 0.3s ease',
              }}>
                <button
                  onClick={() => setOpen(open === idx ? null : idx)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: '100%', padding: '1.25rem 1.5rem', background: 'none',
                    border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem',
                  }}
                >
                  <span style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                    fontWeight: 400, color: open === idx ? '#C9A84C' : '#E8D5A3',
                    lineHeight: 1.4, flex: 1,
                  }}>{faq.q}</span>
                  <div style={{ flexShrink: 0, color: '#C9A84C' }}>
                    {open === idx ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div style={{
                  maxHeight: open === idx ? '300px' : '0',
                  overflow: 'hidden', transition: 'max-height 0.4s ease',
                }}>
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem',
                    color: '#A09070', lineHeight: 1.8,
                    padding: '0 1.5rem 1.25rem', margin: 0,
                    borderTop: '1px solid rgba(77,70,55,0.2)', paddingTop: '0.75rem',
                  }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              href="/faq"
              className="btn-ghost"
              style={{ fontSize: '0.75rem', textDecoration: 'none' }}
            >
              Ver todas las preguntas →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
