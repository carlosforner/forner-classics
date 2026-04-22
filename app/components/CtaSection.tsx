'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../lib/data';

const previewFaqs = faqs.slice(0, 3);

export default function CtaSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="reserva" style={{ background: 'var(--obsidian-soft)', padding: '7rem 0 5rem' }}>
      <div className="container-luxury">

        {/* CTA Block */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
          padding: '4rem 2rem',
          background: 'var(--surface-card)',
          border: '1px solid rgba(77,70,55,0.3)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Corner deco lines */}
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '24px', height: '24px', borderTop: '1px solid rgba(201,168,76,0.25)', borderLeft: '1px solid rgba(201,168,76,0.25)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '24px', height: '24px', borderBottom: '1px solid rgba(201,168,76,0.25)', borderRight: '1px solid rgba(201,168,76,0.25)', pointerEvents: 'none' }} />

          {/* Ghost text watermark */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            pointerEvents: 'none',
          }}>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 10vw, 7rem)',
              fontWeight: 700,
              color: 'rgba(201,168,76,0.025)',
              whiteSpace: 'nowrap',
              userSelect: 'none',
              letterSpacing: '0.1em',
            }}>FC</span>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <span className="section-label">— Reservas —</span>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 300,
              color: '#E8D5A3',
              marginBottom: '1rem',
              letterSpacing: '0.02em',
            }}>
              ¿Listo para vivir la experiencia?
            </h2>
            <div style={{ height: '1px', width: '50px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', margin: '0 auto 1.25rem' }} />
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.9rem',
              color: '#6B5C40',
              maxWidth: '440px',
              margin: '0 auto 2rem',
              lineHeight: 1.8,
            }}>
              Rellene nuestro formulario de solicitud y le enviaremos una propuesta personalizada en menos de 24 horas.
            </p>
            <Link
              href="/reserva"
              className="btn-primary"
              style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center', fontSize: '0.8rem' }}
            >
              Solicitar reserva →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-label">— Preguntas frecuentes —</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginBottom: '2rem' }}>
            {previewFaqs.map((faq, idx) => (
              <div key={idx} style={{
                background: 'var(--surface-card)',
                border: `1px solid ${open === idx ? 'rgba(201,168,76,0.3)' : 'rgba(77,70,55,0.2)'}`,
                overflow: 'hidden',
                transition: 'border-color 0.3s ease',
              }}>
                <button
                  onClick={() => setOpen(open === idx ? null : idx)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: '100%', padding: '1.25rem 1.5rem', background: 'none',
                    border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1.25rem',
                  }}
                  aria-expanded={open === idx}
                >
                  <span style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                    fontWeight: 400,
                    color: open === idx ? '#C9A84C' : '#E8D5A3',
                    lineHeight: 1.45, flex: 1,
                    transition: 'color 0.3s ease',
                  }}>{faq.q}</span>
                  <div style={{ flexShrink: 0, color: '#C9A84C', opacity: 0.8 }}>
                    {open === idx ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                <div style={{
                  maxHeight: open === idx ? '300px' : '0',
                  overflow: 'hidden', transition: 'max-height 0.4s ease',
                }}>
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem',
                    color: '#6B5C40', lineHeight: 1.8,
                    padding: '0 1.5rem 1.5rem', margin: 0,
                    borderTop: '1px solid rgba(77,70,55,0.2)', paddingTop: '1rem',
                  }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              href="/faq"
              className="btn-ghost"
              style={{ fontSize: '0.72rem', textDecoration: 'none' }}
            >
              Ver todas las preguntas →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
