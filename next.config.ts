import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración básica para Vercel
  poweredByHeader: false,
  compress: true,
  
  // Configuración de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers de seguridad básicos
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },

  // Optimizaciones experimentales
  experimental: {
    optimizePackageImports: ['@next/font'],
  },
};

export default nextConfig;
