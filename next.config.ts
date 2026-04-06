import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Al quitar output: 'export', Next.js funcionará en modo dinámico,
     permitiéndonos usar las APIs de envío de correo en Netlify/Vercel. */
  images: { unoptimized: true },
};

export default nextConfig;
