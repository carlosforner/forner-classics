'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, ArrowLeft } from 'lucide-react';
import { faqs } from '../lib/data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--surface-low)', paddingTop: '80px' }}>
        <section style={{ padding: '4rem 0 5rem' }}>
          <div className="container-luxury">

            {/* Breadcrumb */}
            <div style={{ marginBottom: '2rem' }}>
              <Link href="/" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#6B5C40',
                textDecoration: 'none',
              }}>
                <ArrowLeft size={14} /> Volver al inicio
              </Link>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-label">— Preguntas frecuentes —</span>
              <h1 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 300, color: '#E8D5A3',
              }}>
                Todo lo que necesita saber
              </h1>
            </div>

            <div style={{
              maxWidth: '760px', margin: '0 auto',
              display: 'flex', flexDirection: 'column', gap: '2px',
            }}>
              {faqs.map((faq, idx) => {
                const panelId = `faq-panel-${idx}`;
                const btnId = `faq-btn-${idx}`;
                return (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--surface-card)',
                      border: '1px solid rgba(77,70,55,0.3)',
                      overflow: 'hidden',
                      transition: 'border-color 0.3s ease',
                      borderColor: open === idx ? 'rgba(201,168,76,0.25)' : 'rgba(77,70,55,0.3)',
                    }}
                  >
                    <button
                      id={btnId}
                      onClick={() => setOpen(open === idx ? null : idx)}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        width: '100%', padding: '1.5rem', background: 'none',
                        border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem',
                      }}
                      aria-expanded={open === idx}
                      aria-controls={panelId}
                    >
                      <span style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        fontWeight: 400,
                        color: open === idx ? '#C9A84C' : '#E8D5A3',
                        lineHeight: 1.4, flex: 1, transition: 'color 0.2s',
                      }}>{faq.q}</span>
                      <div style={{ flexShrink: 0, color: '#C9A84C' }}>
                        {open === idx ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>
                    <div
                      id={panelId} role="region" aria-labelledby={btnId}
                      style={{
                        maxHeight: open === idx ? '400px' : '0',
                        overflow: 'hidden', transition: 'max-height 0.4s ease',
                      }}
                    >
                      <p style={{
                        fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem',
                        color: '#A09070', lineHeight: 1.8,
                        padding: '0 1.5rem 1.5rem', margin: 0,
                        borderTop: '1px solid rgba(77,70,55,0.2)', paddingTop: '1rem',
                      }}>{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Still have questions */}
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <p style={{ color: '#6B5C40', fontSize: '0.85rem', marginBottom: '1rem' }}>
                ¿No encuentra la respuesta que busca?
              </p>
              <a
                href="https://wa.me/34601329162?text=Hola%2C%20tengo%20una%20consulta%20sobre%20Forner%20Classics."
                target="_blank" rel="noopener noreferrer"
                className="btn-ghost" style={{ fontSize: '0.75rem' }}
              >
                Consúltenos directamente →
              </a>
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
