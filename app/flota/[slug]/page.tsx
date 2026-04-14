'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { vehicles } from '../../lib/data';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppFloat from '../../components/WhatsAppFloat';
import { ChevronLeft, Calendar, ShieldCheck, User, Gauge, Info, CreditCard } from 'lucide-react';

export default function VehiclePage() {
  const { slug } = useParams();
  const router = useRouter();
  const vehicle = vehicles.find((v) => v.id === slug);

  if (!vehicle) {
    return (
      <div style={{ background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E8D5A3' }}>
        <p>Vehículo no encontrado.</p>
        <Link href="/#flota">Volver</Link>
      </div>
    );
  }

  const handleBack = () => {
    router.push('/#flota');
  };

  return (
    <>
      <Navbar />
      <main style={{ background: '#000', minHeight: '100vh', paddingTop: '80px' }}>
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 1.25rem' }}>
          
          {/* Back Button */}
          <button 
            onClick={handleBack}
            style={{
              background: 'none', border: 'none', color: '#C9A84C', 
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
              fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', textTransform: 'uppercase',
              letterSpacing: '0.15em', marginBottom: '2rem'
            }}
          >
            <ChevronLeft size={16} /> Volver a la selección
          </button>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '4rem',
            alignItems: 'start'
          }}>
            
            {/* LEFT SIDE: Information */}
            <div style={{ order: 1 }}>
              <div style={{ marginBottom: '2.5rem' }}>
                <span className="badge-gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>{vehicle.year}</span>
                <h1 style={{ 
                  fontFamily: 'Cormorant Garamond, serif', 
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                  fontWeight: 300, 
                  color: '#E8D5A3',
                  lineHeight: 1.1,
                  marginBottom: '1.5rem'
                }}>
                  {vehicle.name}
                </h1>
                <p style={{ 
                  fontFamily: 'DM Sans, sans-serif', 
                  fontSize: '1rem', 
                  color: '#A09070', 
                  lineHeight: 1.8,
                  marginBottom: '2rem'
                }}>
                  {vehicle.description}
                </p>

                {/* Dynamic Features List */}
                {vehicle.features && vehicle.features.length > 0 && (
                  <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: '#E8D5A3', fontWeight: 400, marginBottom: '1rem' }}>Incluye</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {vehicle.features.map((feature: string, idx: number) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                          <div style={{ width: '6px', height: '6px', background: '#C9A84C', transform: 'rotate(45deg)', marginTop: '8px', flexShrink: 0 }} />
                          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: '#A09070', lineHeight: 1.6 }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

              {/* PRICING SECTION */}
              <div style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <CreditCard size={20} color="#C9A84C" />
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: '#E8D5A3', fontWeight: 400, margin: 0 }}>Tarifas de Alquiler</h3>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {vehicle.tarifas?.map((tarifa: any, idx: number) => (
                    <PriceBox 
                      key={idx}
                      title={tarifa.tipo} 
                      price={tarifa.precio} 
                    />
                  ))}
                </div>
                
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', color: '#6B5C40', fontSize: '0.8rem' }}>
                  <Info size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p>Todos los servicios incluyen chófer uniformado y seguro de responsabilidad civil.</p>
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
                <Link 
                  href={`/reserva?v=${vehicle.id}`}
                  className="btn-primary"
                  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, minWidth: '200px' }}
                >
                  Confirmar Reserva
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE: Image (More contained) */}
            <div style={{ order: 2, position: 'sticky', top: '120px' }}>
              <div style={{ 
                position: 'relative', 
                width: '100%', 
                height: '450px', 
                background: '#0a0a0a',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                border: '1px solid rgba(201,168,76,0.1)'
              }}>
                <Image
                  src={vehicle.image}
                  alt={vehicle.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              {/* Decorative text below image */}
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <p style={{ 
                  fontFamily: 'Cormorant Garamond, serif', 
                  fontStyle: 'italic', 
                  color: '#C9A84C', 
                  fontSize: '1.1rem' 
                }}>
                  &ldquo;La elegancia de lo atemporal en cada detalle.&rdquo;
                </p>
              </div>
            </div>

          </div>
        </div>

      </main>
      <Footer />
      <WhatsAppFloat />

      <style jsx global>{`
        .btn-primary {
          background: #C9A84C;
          color: #000;
          padding: 1.1rem 2rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          border: none;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          cursor: pointer;
        }
        .btn-primary:hover {
          background: #E8D5A3;
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(201,168,76,0.25);
        }
        .btn-ghost {
          background: transparent;
          color: #C9A84C;
          padding: 1.1rem 2rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          border: 1px solid rgba(201,168,76,0.4);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .btn-ghost:hover {
          border-color: #E8D5A3;
          color: #E8D5A3;
          background: rgba(201,168,76,0.02);
        }
        .badge-gold {
          background: rgba(201,168,76,0.1);
          color: #C9A84C;
          padding: 0.4rem 0.8rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}

function SpecItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
      <div style={{ color: '#C9A84C' }}>{icon}</div>
      <div>
        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem', color: '#6B5C40', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1px' }}>{label}</div>
        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#E8D5A3', fontWeight: 500 }}>{value}</div>
      </div>
    </div>
  );
}

function PriceBox({ title, price }: { title: string, price: string }) {
  return (
    <div style={{ 
      padding: '1.25rem', 
      border: '1px solid rgba(201,168,76,0.15)', 
      borderRadius: '8px',
      background: 'linear-gradient(to right, rgba(201,168,76,0.02), transparent)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: '#E8D5A3', margin: 0, fontWeight: 500 }}>{title}</h4>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: '#C9A84C', fontWeight: 600 }}>Desde {price}</span>
      </div>
    </div>
  );
}
