'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Check, Info, Shield, MapPin, Phone, Mail, Globe, Printer } from 'lucide-react';

export default function DossierPage() {
  // Option to trigger printing
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <>
      {/* 
        This style block is specifically for the Dossier Print properties.
        We force background colors to print and set A4 size.
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @page {
          size: A4;
          margin: 0;
        }
        @media print {
          html, body {
            width: 210mm;
            height: 297mm;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background-color: #0A0A0A !important;
          }
          .no-print {
            display: none !important;
          }
          .print-page {
            width: 210mm;
            height: 297mm;
            page-break-after: always;
            position: relative;
            overflow: hidden;
            background-color: #0A0A0A;
            page-break-inside: avoid;
          }
          /* Hide global navbar & footer during print if they leak */
          nav, footer { display: none !important; }
        }
        
        /* Screen viewing defaults */
        @media screen {
          .print-page {
            min-height: 100vh;
            max-width: 1200px;
            margin: 0 auto 4rem auto;
            border: 1px solid rgba(201, 168, 76, 0.2);
            position: relative;
            background-color: #0A0A0A;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          }
          body {
            background-color: #000;
          }
        }
        
        .dossier-overlay {
          background: linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.95) 100%);
        }
      `}} />

      {/* Floating Action Button for Browser viewing */}
      <button 
        onClick={handlePrint}
        className="no-print fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-[#C9A84C] text-[#0A0A0A] px-6 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-[0_0_30px_rgba(201,168,76,0.3)]"
      >
        <Printer size={18} />
        Guardar como PDF
      </button>

      {/* =========================================
          PAGE 1: PORTADA
      ========================================= */}
      <div className="print-page flex flex-col relative w-full h-full">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/chevrolet.webp.png" 
            alt="Chevrolet 1930" 
            fill 
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="absolute inset-0 dossier-overlay" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8 sm:px-16 pb-20 mt-auto">
          <div className="w-16 h-[1px] bg-[#C9A84C] mb-8" />
          <h1 className="font-serif text-[#E8D5A3] text-5xl sm:text-7xl lg:text-[5.5rem] font-light leading-[1.1] mb-6 tracking-tight drop-shadow-2xl">
            Añade un Toque de <br/><span className="italic text-[#C9A84C]">Leyenda</span> a tu Día.
          </h1>
          <p className="font-sans text-[#C5B484] text-lg sm:text-xl uppercase tracking-[0.3em] backdrop-blur-sm bg-black/20 px-6 py-2 rounded-sm">
            Forner Classics
          </p>
          <p className="font-sans text-[#A09070] mt-6 max-w-2xl text-sm sm:text-base tracking-wide leading-relaxed">
            Alquiler de vehículos históricos para bodas y eventos exclusivos.<br/>La elegancia atemporal que tu evento merece.
          </p>
        </div>
      </div>

      {/* =========================================
          PAGE 2: EL VALOR AÑADIDO (EXPERIENCIA)
      ========================================= */}
      <div className="print-page flex flex-col relative w-full h-full bg-[#0A0A0A]">
        {/* Top Header */}
        <div className="pt-20 pb-10 px-12 sm:px-20 text-center">
          <span className="font-sans text-[#C9A84C] uppercase tracking-[0.3em] text-xs font-semibold block mb-4">Nuestra Propuesta</span>
          <h2 className="font-serif text-[#E8D5A3] text-4xl sm:text-5xl font-light">Más que un viaje:<br/>La Experiencia Forner VIP</h2>
          <div className="w-12 h-[1px] bg-[#4D4637] mx-auto mt-8" />
        </div>

        <div className="flex-1 px-12 sm:px-20 pb-20 flex flex-col md:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-full border border-[#C9A84C] flex items-center justify-center shrink-0 bg-[#C9A84C]/10 text-[#C9A84C]">
                <Shield size={18} />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#E8D5A3] mb-2">Chófer Profesional</h3>
                <p className="font-sans text-[#A09070] text-sm leading-relaxed">
                  Personal uniformado y discreto a vuestra entera disposición. Garantizamos puntualidad británica y un trato exquisito.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-full border border-[#C9A84C] flex items-center justify-center shrink-0 bg-[#C9A84C]/10 text-[#C9A84C]">
                <Check size={18} />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#E8D5A3] mb-2">Brindis Nupcial</h3>
                <p className="font-sans text-[#A09070] text-sm leading-relaxed">
                  Botella de cava premium y copas de cortesía en el interior para celebrar vuestro primer momento a solas como recién casados.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-full border border-[#C9A84C] flex items-center justify-center shrink-0 bg-[#C9A84C]/10 text-[#C9A84C]">
                <Check size={18} />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#E8D5A3] mb-2">Detalles Florales</h3>
                <p className="font-sans text-[#A09070] text-sm leading-relaxed">
                  Adornos florales elegantes en las manetas o bandeja trasera, a juego con la paleta de colores de vuestro evento.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-full border border-[#C9A84C] flex items-center justify-center shrink-0 bg-[#C9A84C]/10 text-[#C9A84C]">
                <Info size={18} />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#E8D5A3] mb-2">Sesión Fotográfica</h3>
                <p className="font-sans text-[#A09070] text-sm leading-relaxed">
                  El vehículo se posicionará estratégicamente durante la sesión de fotos para que cámara y vídeo capturen momentos de película.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative w-full h-[400px] md:h-full max-h-[600px] rounded-sm overflow-hidden border border-[#4D4637]">
            <Image 
              src="/images/carav.webp.png" 
              alt="Renault Caravelle" 
              fill 
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#C9A84C] drop-shadow-md">Renault Caravelle 1962</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          PAGE 3: FAQs
      ========================================= */}
      <div className="print-page flex flex-col relative w-full h-full bg-[#0A0A0A]">
        {/* Full Image Banner */}
        <div className="relative w-full h-[35vh] lg:h-[40vh] border-b border-[#C9A84C]/30">
          <Image 
            src="/images/seat850i.jpg.png" 
            alt="SEAT 850" 
            fill 
            style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <span className="font-sans text-[#C9A84C] uppercase tracking-[0.3em] text-xs font-semibold block mb-4">Preguntas Frecuentes</span>
            <h2 className="font-serif text-[#E8D5A3] text-4xl sm:text-5xl font-light">Todo bajo control.<br/>Preocúpate de disfrutar.</h2>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="flex-1 p-12 sm:p-20 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            <div className="border-l border-[#C9A84C]/30 pl-6">
              <h4 className="font-serif text-2xl text-[#E8D5A3] mb-4 drop-shadow-sm">¿Con cuánta antelación reservo?</h4>
              <p className="font-sans text-[#A09070] text-sm leading-relaxed">
                Recomendamos entre 3 y 6 meses. Nuestros vehículos son piezas mecánicas de colección únicas y las fechas clave en temporada alta (abril-octubre) se agotan rápidamente.
              </p>
            </div>

            <div className="border-l border-[#C9A84C]/30 pl-6">
              <h4 className="font-serif text-2xl text-[#E8D5A3] mb-4 drop-shadow-sm">¿Qué ocurre si llueve el gran día?</h4>
              <p className="font-sans text-[#A09070] text-sm leading-relaxed">
                Nuestros clásicos están preparados para cualquier contratiempo. Nuestro chófer os recibirá con amplios y elegantes paraguas, y el interior estará aclimatado. La lluvia en los cristales aportará un toque de película.
              </p>
            </div>

            <div className="border-l border-[#C9A84C]/30 pl-6">
              <h4 className="font-serif text-2xl text-[#E8D5A3] mb-4 drop-shadow-sm">¿Podemos conducir nosotros el coche?</h4>
              <p className="font-sans text-[#A09070] text-sm leading-relaxed">
                Para garantizar la máxima seguridad, mantener la meticulosa mecánica del vehículo y aportaros tranquilidad en un día de nervios, **el servicio se realiza exclusivamente con chófer.**
              </p>
            </div>

            <div className="border-l border-[#C9A84C]/30 pl-6">
              <h4 className="font-serif text-2xl text-[#E8D5A3] mb-4 drop-shadow-sm">¿Hasta dónde os desplazáis?</h4>
              <p className="font-sans text-[#A09070] text-sm leading-relaxed">
                Principalmente operamos en la Comunidad Valenciana (Valencia, Alicante, Castellón). Cuéntanos dónde es exactamente tu evento y estructuraremos una ruta completamente a medida y viable.
              </p>
            </div>

            <div className="border-l border-[#C9A84C]/30 pl-6">
              <h4 className="font-serif text-2xl text-[#E8D5A3] mb-4 drop-shadow-sm">¿Y si el evento se alarga?</h4>
              <p className="font-sans text-[#A09070] text-sm leading-relaxed">
                No hay problema. Si necesitáis el vehículo por más tiempo del estipulado inicialmente en vuestro paquete, la hora extra se abonará a razón de 100€/hora. Todo bajo control.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================
          PAGE 4: FLOTA HIGHLIGHTS & CIERRE
      ========================================= */}
      <div className="print-page flex flex-col relative w-full h-full bg-[#0A0A0A]">
        {/* Top Split */}
        <div className="flex-[0.6] relative flex">
          <div className="flex-1 relative">
            <Image src="/images/chevrolet.webp.png" alt="Elegante" fill style={{ objectFit: 'cover' }} />
            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
              <h3 className="font-serif text-[#E8D5A3] text-2xl drop-shadow-lg">La Elegancia Señorial</h3>
            </div>
          </div>
          <div className="flex-1 relative border-l border-black">
            <Image src="/images/renault4.webp.png" alt="Vintage" fill style={{ objectFit: 'cover' }} />
            <div className="absolute inset-0 bg-black/30 flex items-end p-6">
              <h3 className="font-serif text-[#E8D5A3] text-2xl drop-shadow-lg">El Toque Vintage</h3>
            </div>
          </div>
        </div>

        {/* Bottom Booking CTA */}
        <div className="flex-[0.4] flex flex-col items-center justify-center p-12 text-center bg-gradient-to-t from-[#111] to-[#0A0A0A] border-t border-[#C9A84C]/20">
          <h2 className="font-serif text-[#E8D5A3] text-4xl mb-4">Reserva tu fecha y haz que la llegada sea inolvidable.</h2>
          <p className="font-sans text-[#A09070] mb-10 max-w-lg mx-auto text-sm">
            Disponemos de tarifas especiales para reservas duales y adaptaciones exclusivas en rodajes corporativos. Consulte su proyecto sin compromiso.
          </p>

          <div className="flex justify-center gap-12 w-full max-w-2xl border-y border-[#4D4637] py-8">
            <div className="flex flex-col items-center gap-3">
              <Globe className="text-[#C9A84C]" size={24} />
              <span className="font-sans text-[#E8D5A3] text-sm">fornerclassics.com</span>
            </div>
            <div className="flex flex-col items-center gap-3 border-x border-[#4D4637] px-12">
              <Phone className="text-[#C9A84C]" size={24} />
              <span className="font-sans text-[#E8D5A3] text-sm">+34 601 329 162</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Mail className="text-[#C9A84C]" size={24} />
              <span className="font-sans text-[#E8D5A3] text-sm">info@fornerclassics.com</span>
            </div>
          </div>
          
          <div className="mt-10 font-sans text-xs tracking-[0.3em] uppercase text-[#6B5C40]">
            Gandía · Valencia · Alicante
          </div>
        </div>
      </div>

    </>
  );
}
