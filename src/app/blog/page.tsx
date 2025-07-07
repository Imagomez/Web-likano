import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Likano - Artículos sobre IA y Automatización",
  description: "Artículos y recursos sobre inteligencia artificial, automatización empresarial y transformación digital. Guías prácticas y casos de estudio.",
  keywords: [
    "blog IA",
    "artículos automatización",
    "recursos transformación digital",
    "guías IA",
    "casos de estudio",
    "inteligencia artificial",
    "automatización empresarial",
    "chatbots",
    "CRM inteligente",
    "machine learning"
  ],
  openGraph: {
    title: "Blog | Likano - Artículos sobre IA y Automatización",
    description: "Artículos y recursos sobre inteligencia artificial, automatización empresarial y transformación digital.",
    url: "https://likano.com/blog",
    siteName: "Likano",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Likano - Artículos sobre IA y Automatización",
    description: "Artículos y recursos sobre inteligencia artificial, automatización empresarial y transformación digital.",
  },
  alternates: {
    canonical: "https://likano.com/blog",
  },
};

export default function Blog() {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-50 min-h-screen pt-32 pb-16">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
          Recursos y <span style={{ color: '#0A2239' }}>Conocimiento</span>
        </h1>
        <p className="text-xl leading-8 text-gray-700 max-w-3xl font-semibold">
          Artículos, guías y casos de estudio sobre IA, automatización y transformación digital.
        </p>
      </section>

      {/* Categorías */}
      <section className="w-full max-w-6xl px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* IA y Machine Learning */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0A2239' }}>IA & Machine Learning</h2>
            <p className="text-gray-600 mb-6">Artículos sobre las últimas tendencias en inteligencia artificial y su aplicación en negocios.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Chatbots Inteligentes
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Procesamiento de Lenguaje Natural
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Automatización con IA
              </div>
            </div>
          </div>

          {/* Automatización */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0A2239' }}>Automatización</h2>
            <p className="text-gray-600 mb-6">Guías prácticas sobre cómo automatizar procesos y flujos de trabajo.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                RPA (Robotic Process Automation)
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Workflows Inteligentes
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Integración de APIs
              </div>
            </div>
          </div>

          {/* CRM y Ventas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0A2239' }}>CRM & Ventas</h2>
            <p className="text-gray-600 mb-6">Estrategias para optimizar la gestión de clientes y aumentar ventas con tecnología.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Lead Scoring con IA
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Automatización de Ventas
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Analytics Predictivo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artículos Destacados */}
      <section className="w-full max-w-6xl px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#0A2239' }}>
          Artículos Destacados
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Artículo 1 */}
          <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">IA</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">IA</span>
                <span className="text-gray-500 text-sm">5 min lectura</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Cómo los Chatbots IA Transforman la Atención al Cliente
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Descubre cómo implementar chatbots inteligentes que aumentan la satisfacción del cliente en un 300%.
              </p>
              <Link href="#" className="text-blue-600 font-medium text-sm hover:underline">
                Leer más →
              </Link>
            </div>
          </article>

          {/* Artículo 2 */}
          <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">AUTO</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Automatización</span>
                <span className="text-gray-500 text-sm">8 min lectura</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Automatización de Procesos: Guía Completa 2024
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Todo lo que necesitas saber para implementar RPA y automatizar tus procesos de negocio.
              </p>
              <Link href="#" className="text-blue-600 font-medium text-sm hover:underline">
                Leer más →
              </Link>
            </div>
          </article>

          {/* Artículo 3 */}
          <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">CRM</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">CRM</span>
                <span className="text-gray-500 text-sm">6 min lectura</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                CRM Inteligente: El Futuro de la Gestión de Clientes
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Cómo la IA está revolucionando los sistemas CRM y mejorando la experiencia del cliente.
              </p>
              <Link href="#" className="text-blue-600 font-medium text-sm hover:underline">
                Leer más →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-4xl px-4 text-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#0A2239' }}>
            ¿Necesitas Ayuda con tu Proyecto?
          </h2>
          <p className="text-gray-600 mb-6">
            Nuestros expertos están listos para ayudarte a implementar soluciones de IA y automatización.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agendar"
              className="rounded-full px-6 py-3 text-base font-semibold text-white shadow-sm transition-transform hover:scale-105"
              style={{ backgroundColor: '#0A2239' }}
            >
              Agendar Consultoría
            </Link>
            <a
              href="https://wa.me/5492267662286"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-6 py-3 text-base font-semibold text-white shadow-sm flex items-center gap-2 justify-center transition-transform hover:scale-105"
              style={{ backgroundColor: '#19C3AC' }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path fill="#25D366" d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.09-1.33A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Z"/>
                <path fill="#fff" d="M17.47 15.37c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.41.12-.54.13-.13.29-.34.43-.51.14-.18.18-.31.27-.52.09-.2.05-.39-.02-.54-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.97.95-.97 2.3 0 1.35.99 2.66 1.13 2.85.14.18 1.95 2.98 4.74 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z"/>
              </svg>
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 