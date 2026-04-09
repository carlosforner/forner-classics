'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: '¿El chófer está siempre incluido en el servicio?',
    a: 'Sí, absolutamente. Forner Classics no ofrece alquiler sin conductor bajo ninguna circunstancia. El chófer profesional forma parte esencial de la experiencia y es inseparable del servicio. Viajará con el vehículo en todo momento.',
  },
  {
    q: '¿En qué zonas operáis habitualmente?',
    a: 'Nuestra base de operaciones está en Gandía, La Safor (Valencia). Operamos habitualmente en la zona de Gandía y toda la comarca de La Safor. Para eventos fuera de esta zona geográfica, realizamos un estudio previo de viabilidad; por favor, consúltenos disponibilidad y el suplemento de desplazamiento correspondiente.',
  },
  {
    q: '¿Con cuánta antelación debo reservar?',
    a: 'Para bodas recomendamos reservar entre 6 y 12 meses antes, especialmente en temporada alta (mayo a septiembre). Para rodajes y eventos corporativos, 2 a 4 semanas suele ser suficiente. Para fechas muy especiales o en temporada alta, cuanto antes mejor: la disponibilidad es limitada para garantizar la calidad del servicio.',
  },
  {
    q: '¿Cómo funciona el proceso de reserva?',
    a: 'Es sencillo y se realiza exclusivamente a través de nuestra web: rellene el formulario oficial de solicitud seleccionando primero su vehículo y después la fecha deseada. No gestionamos reservas directas por WhatsApp para garantizar la correcta adjudicación de fechas en nuestro sistema. Una vez recibido el formulario, en menos de 24 horas recibirá una propuesta personalizada. Si acepta, se formaliza la reserva mediante un depósito.',
  },
  {
    q: '¿Podéis decorar el vehículo para la boda?',
    a: 'Sí. Ofrecemos decoración floral discreta y elegante que respeta la estética del vehículo. Trabajamos con floristas locales de confianza. También puede aportar su propia decoración, siempre que no dañe la integridad del vehículo. Lo acordaremos juntos durante la consulta previa.',
  },
  {
    q: '¿Qué ocurre si el tiempo es adverso el día del evento?',
    a: 'Tenemos protocolo para días de lluvia. El chófer llevará siempre un paraguas elegante para protegerle. El Renault Caravelle tiene capota que puede cerrarse. Para el Chevrolet 1930 se advierte de la exposición a elementos: lo analizamos caso por caso y buscamos siempre la mejor solución para su evento.',
  },
  {
    q: '¿Qué ocurre si necesito el vehículo por más tiempo del contratado?',
    a: 'No hay inconveniente. Si el evento se alarga más allá de las horas estipuladas en el paquete seleccionado, el tiempo adicional se facturará como horas extra a razón de 100€ por cada hora adicional. Siempre recomendamos prever bien los tiempos en la hoja de ruta inicial para evitar imprevistos.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: 'var(--surface-low)', padding: '5rem 0' }}>
      <div className="container-luxury">

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-label">— Preguntas frecuentes —</span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 300,
            color: '#E8D5A3',
          }}>
            Todo lo que necesita saber
          </h2>
        </div>

        <div style={{
          maxWidth: '760px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
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
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '1.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '1rem',
                }}
                aria-expanded={open === idx}
                aria-controls={panelId}
              >
                <span style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  fontWeight: 400,
                  color: open === idx ? '#C9A84C' : '#E8D5A3',
                  lineHeight: 1.4,
                  flex: 1,
                  transition: 'color 0.2s',
                }}>
                  {faq.q}
                </span>
                <div style={{ flexShrink: 0, color: '#C9A84C' }}>
                  {open === idx
                    ? <Minus size={18} />
                    : <Plus size={18} />
                  }
                </div>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                style={{
                  maxHeight: open === idx ? '400px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease',
                }}
              >
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.9rem',
                  color: '#A09070',
                  lineHeight: 1.8,
                  padding: '0 1.5rem 1.5rem',
                  margin: 0,
                  borderTop: '1px solid rgba(77,70,55,0.2)',
                  paddingTop: '1rem',
                }}>
                  {faq.a}
                </p>
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
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ fontSize: '0.75rem' }}
          >
            Consúltenos directamente →
          </a>
        </div>

      </div>
    </section>
  );
}
