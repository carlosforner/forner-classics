import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forner Classics | Alquiler de Coches Clásicos con Chófer en Gandía, Valencia",
  description: "Forner Classics ofrece experiencias únicas de alquiler de coches clásicos con chófer en Gandía y La Safor. Bodas, rodajes y turismo de lujo. Chevrolet 1930 · Renault Caravelle 1962. Solicite su presupuesto ahora.",
  keywords: "alquiler coche clásico Gandía, coche vintage boda Gandía, coches clásicos con chófer La Safor, alquiler coche antiguo Valencia, boda coche clásico Gandía, Forner Classics",
  metadataBase: new URL('https://www.fornerclassics.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Forner Classics | Coches Clásicos con Chófer · Gandía",
    description: "Donde el tiempo conduce. Experiencias de lujo en vehículos históricos para bodas, rodajes y eventos exclusivos en Gandía y La Safor.",
    type: "website",
    locale: "es_ES",
    url: 'https://www.fornerclassics.com',
    siteName: 'Forner Classics',
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
