import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import ReservaSection from '../components/ReservaSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reservar — Forner Classics',
  description: 'Solicite su reserva de vehículo clásico con chófer en Gandía, Valencia. Bodas, rodajes y experiencias turísticas de lujo.',
};

import { Suspense } from 'react';

export default function ReservaPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#000', paddingTop: '80px' }}>
        <Suspense fallback={<div style={{ height: '100vh', background: '#000' }} />}>
          <ReservaSection />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
