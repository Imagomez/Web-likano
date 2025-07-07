import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimizaciones para Vercel
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  generateEtags: false,
  
  // Configuración de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers de seguridad
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
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // Configuración de entorno
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Optimizaciones experimentales
  experimental: {
    optimizePackageImports: ['@next/font'],
    optimizeCss: true,
    scrollRestoration: true,
  },
};

export default nextConfig;
