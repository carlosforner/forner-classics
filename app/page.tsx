import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FlotaSection from './components/FlotaSection';
import ServiciosSection from './components/ServiciosSection';
import HistoriaSection from './components/HistoriaSection';

import FaqSection from './components/FaqSection';
import ReservaSection from './components/ReservaSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function Home() {
  return (
    <>
      {/* Schema.org LocalBusiness structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Forner Classics',
            description:
              'Alquiler de coches clásicos con chófer en Gandía y La Safor, Valencia. Bodas, rodajes y experiencias de lujo. Chevrolet International 1930 y Renault Caravelle 1962.',
            url: 'https://www.fornerclassics.com',
            telephone: '+34601329162',
            email: 'hola@fornerclassics.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Gandía',
              addressRegion: 'Valencia',
              addressCountry: 'ES',
              postalCode: '46700',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 38.9696,
              longitude: -0.1826,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '20:00',
              },
            ],
            priceRange: '€€€',
            hasMap: 'https://maps.google.com/?q=Gandía,Valencia,España',
            sameAs: [
              'https://instagram.com/fornerclassics',
            ],
          }),
        }}
      />

      <Navbar />

      <main>
        <HeroSection />
        <FlotaSection />
        <ServiciosSection />
        <HistoriaSection />

        <FaqSection />
        <ReservaSection />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
