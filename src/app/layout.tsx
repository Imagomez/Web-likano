import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import Particles from "@/components/Particles";
import Analytics from "./analytics";
import GoogleTagManager from "@/components/GoogleTagManager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Likano - Agencia de IA para Empresas | Automatización & CRM",
    template: "%s | Likano"
  },
  description: "Transforma tu empresa con IA. Automatización inteligente, chatbots avanzados, CRM personalizado y agentes de IA. Soluciones a medida para optimizar procesos y aumentar ventas.",
  keywords: [
    "agencia de IA",
    "automatización empresarial",
    "chatbots inteligentes",
    "CRM personalizado",
    "agentes de IA",
    "inteligencia artificial",
    "automatización de procesos",
    "asistentes virtuales",
    "transformación digital",
    "optimización empresarial"
  ],
  authors: [{ name: "Likano" }],
  creator: "Likano",
  publisher: "Likano",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://likano.com'),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://likano.com',
    title: 'Likano - Agencia de IA para Empresas | Automatización & CRM',
    description: 'Transforma tu empresa con IA. Automatización inteligente, chatbots avanzados, CRM personalizado y agentes de IA. Soluciones a medida para optimizar procesos y aumentar ventas.',
    siteName: 'Likano',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Likano - Agencia de IA para Empresas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Likano - Agencia de IA para Empresas | Automatización & CRM',
    description: 'Transforma tu empresa con IA. Automatización inteligente, chatbots avanzados, CRM personalizado y agentes de IA.',
    images: ['/og-image.jpg'],
    creator: '@likano',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <Particles />
        <Navbar />
        <main>{children}</main>
        <Footer />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Likano",
              "url": "https://likano.com",
              "logo": "https://likano.com/logo.jpg",
              "description": "Agencia especializada en soluciones de Inteligencia Artificial, automatización y CRM personalizado para empresas",
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AR",
                "addressRegion": "Buenos Aires"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+54-9-2267-662286",
                "contactType": "customer service",
                "availableLanguage": "Spanish"
              },
              "sameAs": [
                "https://www.linkedin.com/company/likano",
                "https://twitter.com/likano"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": -34.6037,
                  "longitude": -58.3816
                },
                "geoRadius": "1000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios de IA",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Automatización Empresarial",
                      "description": "Sistemas de automatización inteligente para optimizar procesos empresariales"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Chatbots Inteligentes",
                      "description": "Chatbots avanzados con IA para atención al cliente 24/7"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "CRM Personalizado",
                      "description": "Sistemas de CRM a medida con integración de IA"
                    }
                  }
                ]
              }
            })
          }}
        />
        <Script
          id="chatwoot-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d,t) {
                var BASE_URL="${process.env.NEXT_PUBLIC_CHATWOOT_URL || 'https://devchatwoot.likanoia.com'}";
                var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                g.src=BASE_URL+"/packs/js/sdk.js";
                g.defer = true;
                g.async = true;
                s.parentNode.insertBefore(g,s);
                g.onload=function(){
                  if (typeof window !== 'undefined' && window.chatwootSDK) {
                    window.chatwootSDK.run({
                      websiteToken: '${process.env.NEXT_PUBLIC_CHATWOOT_TOKEN || 'iV7vJ98MUFfQKRNrrbDxCNhr'}',
                      baseUrl: BASE_URL
                    });
                  }
                }
              })(document,"script");
            `,
          }}
        />
        <Analytics />
        <GoogleTagManager />
      </body>
    </html>
  );
}
