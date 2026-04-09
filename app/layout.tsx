import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forner Classics | Coches Clásicos con Chófer · Gandía",
  description: "Forner Classics ofrece experiencias únicas de alquiler de coches clásicos con chófer en Gandía y La Safor. Bodas, rodajes y turismo de lujo. Chevrolet 1930 · Renault Caravelle 1962. Solicite su presupuesto ahora.",
  keywords: "alquiler coche clásico Gandía, coche vintage boda Gandía, coches clásicos con chófer La Safor, alquiler coche antiguo Valencia, boda coche clásico Gandía, Forner Classics",
  metadataBase: new URL('https://www.fornerclassics.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/images/logo-principal.png.jpg',
    shortcut: '/images/logo-principal.png.jpg',
    apple: '/images/logo-principal.png.jpg',
  },
  openGraph: {
    title: "Forner Classics | Coches Clásicos con Chófer · Gandía",
    description: "Donde el tiempo conduce. Experiencias de lujo en vehículos históricos para bodas, rodajes y eventos exclusivos en Gandía y La Safor.",
    type: "website",
    locale: "es_ES",
    url: 'https://www.fornerclassics.com',
    siteName: 'Forner Classics',
    images: [
      {
        url: '/images/hero-principal.jpg.png',
        width: 900,
        height: 1100,
        alt: 'Forner Classics - Coches Clásicos de Lujo en Gandía',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Forner Classics | Coches Clásicos con Chófer · Gandía",
    description: "Alquiler de coches clásicos con chófer en Gandía. Bodas, rodajes y turismo de lujo.",
    images: ['/images/hero-principal.jpg.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "geo.region": "ES-VC",
    "geo.placename": "Gandía, Valencia, España",
    "geo.position": "38.9696;-0.1826",
    "ICBM": "38.9696, -0.1826",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.fornerclassics.com/#business",
      "name": "Forner Classics",
      "description": "Alquiler exclusivo de coches clásicos con chófer profesional en Gandía y La Safor. Especialistas en bodas, rodajes y experiencias de turismo de lujo.",
      "url": "https://www.fornerclassics.com",
      "telephone": "+34601329162",
      "email": "hola@fornerclassics.com",
      "image": "https://www.fornerclassics.com/images/hero-principal.jpg.png",
      "priceRange": "€€€",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gandía",
        "addressRegion": "Valencia",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 38.9696,
        "longitude": -0.1826
      },
      "sameAs": [
        "https://instagram.com/fornerclassics"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios Forner Classics",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Paquete Gran Reserva - Bodas",
            "description": "Servicio exclusivo para bodas con conductor uniformado, hasta 5 horas de servicio y decoración nupcial completa.",
            "price": "500",
            "priceCurrency": "EUR"
          },
          {
            "@type": "Offer",
            "name": "Paquete Ruta Safor - Turismo",
            "description": "Ruta exclusiva por Gandía y La Safor en coche clásico con chófer particular. 1 hora de experiencia.",
            "price": "160",
            "priceCurrency": "EUR"
          },
          {
            "@type": "Offer",
            "name": "Paquete Sesión Set - Rodajes",
            "description": "Servicio de vehículo histórico para rodajes, sesiones fotográficas y producciones audiovisuales. 3 horas de disponibilidad.",
            "price": "250",
            "priceCurrency": "EUR"
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.fornerclassics.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cuánto cuesta alquilar un coche clásico en Gandía?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Los precios varían según el vehículo y el servicio. El Chevrolet International 1930 está disponible desde 200€ para turismo o 600€ para bodas. El Renault Caravelle 1962 desde 160€ para turismo o 500€ para bodas."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué ocurre si necesitamos más horas de las incluidas en el paquete?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La hora adicional se factura a 100€/hora, siempre comunicándolo con antelación para garantizar la disponibilidad."
          }
        },
        {
          "@type": "Question",
          "name": "¿En qué zonas ofrecéis el servicio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Operamos principalmente en Gandía y La Safor (Valencia). Para desplazamientos a otras zonas de la Comunitat Valenciana, consúltenos sin compromiso."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

