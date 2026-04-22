'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, ArrowLeft, MessageCircle } from 'lucide-react';
import { faqs } from '../lib/data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main style={{ background: '#000', paddingTop: '80px' }}>
        <section style={{ padding: '8.5rem 0 6rem' }}>
          <div className="container-luxury">

            {/* Back link */}
            <div style={{ marginBottom: '3rem' }}>
              <Link href="/" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                background: '#C9A84C', color: '#1A1200',
                padding: '0.6rem 1.25rem', textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
              }}>
                <ArrowLeft size={16} /> Volver al inicio
              </Link>
            </div>

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="section-label">— Preguntas frecuentes —</span>
              <h1 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                fontWeight: 300, color: '#E8D5A3',
                marginBottom: '1rem', letterSpacing: '0.02em',
              }}>
                Todo lo que necesita saber
              </h1>
              {/* Gold divider */}
              <div style={{
                height: '1px', width: '50px',
                background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
                margin: '0 auto 1.25rem',
              }} />
              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem',
                color: '#6B5C40', maxWidth: '400px', margin: '0 auto', lineHeight: 1.8,
              }}>
                Si no encuentra la respuesta que busca, estamos a su disposición en menos de 24 horas.
              </p>
            </div>

            {/* FAQ List */}
            <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3px', marginBottom: '4rem' }}>
              {faqs.map((faq, idx) => {
                const panelId = `faq-panel-${idx}`;
                const btnId = `faq-btn-${idx}`;
                const isOpen = open === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--surface-card)',
                      border: `1px solid ${isOpen ? 'rgba(201,168,76,0.3)' : 'rgba(77,70,55,0.25)'}`,
                      overflow: 'hidden',
                      transition: 'border-color 0.3s ease',
                    }}
                  >
                    <button
                      id={btnId}
                      onClick={() => setOpen(isOpen ? null : idx)}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        width: '100%', padding: '1.4rem 1.5rem', background: 'none',
                        border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1.25rem',
                      }}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                        fontWeight: 400,
                        color: isOpen ? '#C9A84C' : '#E8D5A3',
                        lineHeight: 1.4, flex: 1,
                        transition: 'color 0.25s ease',
                      }}>
                        {faq.q}
                      </span>
                      <div style={{ flexShrink: 0, color: '#C9A84C', opacity: isOpen ? 1 : 0.7, transition: 'opacity 0.2s' }}>
                        {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                      </div>
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      style={{
                        maxHeight: isOpen ? '400px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <div style={{ borderTop: '1px solid rgba(77,70,55,0.2)', padding: '1.25rem 1.5rem 1.5rem' }}>
                        <p style={{
                          fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem',
                          color: '#6B5C40', lineHeight: 1.85, margin: 0,
                        }}>
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Closing CTA Block */}
            <div style={{ maxWidth: '760px', margin: '0 auto' }}>
              <div style={{
                padding: '2.5rem',
                background: 'var(--surface-card)',
                border: '1px solid rgba(77,70,55,0.3)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Corner deco */}
                <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', width: '18px', height: '18px', borderTop: '1px solid rgba(201,168,76,0.2)', borderLeft: '1px solid rgba(201,168,76,0.2)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '0.75rem', right: '0.75rem', width: '18px', height: '18px', borderBottom: '1px solid rgba(201,168,76,0.2)', borderRight: '1px solid rgba(201,168,76,0.2)', pointerEvents: 'none' }} />

                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '44px', height: '44px',
                  background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)',
                  marginBottom: '1.25rem',
                }}>
                  <MessageCircle size={18} color="#C9A84C" />
                </div>

                <h2 style={{
                  fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                  fontWeight: 300, color: '#E8D5A3', marginBottom: '0.75rem',
                }}>
                  ¿No encuentra su respuesta?
                </h2>
                <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', margin: '0 auto 1.25rem' }} />
                <p style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem',
                  color: '#6B5C40', maxWidth: '340px', margin: '0 auto 1.75rem', lineHeight: 1.75,
                }}>
                  Consúltenos directamente. Respondemos en menos de 24 horas.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href="https://wa.me/34601329162?text=Hola%2C%20tengo%20una%20consulta%20sobre%20Forner%20Classics."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{ fontSize: '0.72rem', textDecoration: 'none' }}
                  >
                    Escribir por WhatsApp →
                  </a>
                  <Link
                    href="/reserva"
                    className="btn-primary"
                    style={{ fontSize: '0.72rem', textDecoration: 'none' }}
                  >
                    Solicitar reserva →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
