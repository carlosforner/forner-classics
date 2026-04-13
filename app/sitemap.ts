import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.fornerclassics.com';
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Vehicle subpages
    { url: `${baseUrl}/flota/chevrolet-1930`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/flota/renault-caravelle-1962`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/flota/seat-850-1968`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/flota/renault-4-1982`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Service subpages
    { url: `${baseUrl}/servicios/bodas`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/servicios/turismo`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/servicios/rodajes`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Other pages
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/reserva`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/privacidad`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/aviso-legal`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/dossier`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
