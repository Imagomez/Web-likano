import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Likano - Agencia de IA para Empresas | Automatización & CRM",
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
  openGraph: {
    title: "Likano - Agencia de IA para Empresas | Automatización & CRM",
    description: "Transforma tu empresa con IA. Automatización inteligente, chatbots avanzados, CRM personalizado y agentes de IA.",
    url: "https://likano.com",
    siteName: "Likano",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Likano - Agencia de IA para Empresas",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Likano - Agencia de IA para Empresas | Automatización & CRM",
    description: "Transforma tu empresa con IA. Automatización inteligente, chatbots avanzados, CRM personalizado y agentes de IA.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://likano.com",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-50">
      {/* Hero Section */}
      <section id="hero" className="relative w-full flex flex-col items-center justify-center min-h-[80vh] px-4 text-center pt-32 pb-16 overflow-hidden">
        {/* Fondo decorativo único */}
        <svg className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 opacity-40" width="900" height="600" viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Gran K abstracta */}
          <path d="M120 500 L400 100 Q420 70 450 100 L700 400 Q720 420 700 440 L650 500 Q630 520 610 500 L350 250" stroke="#0A2239" strokeWidth="32" strokeLinecap="round" opacity="0.13"/>
          {/* Línea diagonal secundaria */}
          <path d="M200 600 L800 0" stroke="#19C3AC" strokeWidth="18" strokeLinecap="round" opacity="0.18"/>
          {/* Nodos de red */}
          <circle cx="320" cy="180" r="12" fill="#19C3AC" opacity="0.22"/>
          <circle cx="600" cy="350" r="10" fill="#0A2239" opacity="0.18"/>
          <circle cx="750" cy="120" r="8" fill="#19C3AC" opacity="0.18"/>
          {/* Casa abstracta */}
          <rect x="720" y="480" width="60" height="40" rx="8" fill="#0A2239" opacity="0.10"/>
          <polygon points="750,470 720,480 780,480" fill="#19C3AC" opacity="0.13"/>
        </svg>
        {/* Brillo suave */}
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -z-10 w-[60vw] h-[30vh] rounded-full opacity-30 blur-2xl"
          style={{ background: 'radial-gradient(circle, #19C3AC 0%, transparent 80%)' }} />
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Impulsa tu empresa con <span className="relative inline-block">
            <span style={{ color: '#0A2239', position: 'relative', zIndex: 1 }}>tecnología inteligente</span>
            <span className="absolute left-0 bottom-1 w-full h-2 bg-[#19C3AC]/40 rounded-full -z-10"></span>
          </span><br />y marca la diferencia
        </h1>
        <p className="mt-6 text-xl leading-8 text-gray-700 max-w-2xl font-semibold">
          Automatiza tu atención, responde en segundos y convierte más clientes. La IA que impulsa a las empresas líderes.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
          <Link
            href="/agendar"
            className="rounded-full px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105"
            style={{ backgroundColor: '#0A2239' }}
          >
            Agendar Consultoría
          </Link>
          <a href="https://wa.me/5492267662286" target="_blank" rel="noopener noreferrer" className="rounded-full px-8 py-4 text-lg font-semibold text-white shadow-lg flex items-center gap-2 transition-transform hover:scale-105" style={{ backgroundColor: '#19C3AC' }}>
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#25D366" d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.09-1.33A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Z"/><path fill="#fff" d="M17.47 15.37c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.41.12-.54.13-.13.29-.34.43-.51.14-.18.18-.31.27-.52.09-.2.05-.39-.02-.54-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.97.95-.97 2.3 0 1.35.99 2.66 1.13 2.85.14.18 1.95 2.98 4.74 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z"/></svg>
            Hablar por WhatsApp
          </a>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="w-full flex flex-col items-center justify-center py-20 px-4 bg-white border-y border-gray-200/80 relative overflow-hidden">
        {/* Fondo decorativo SVG */}
        <svg className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 opacity-30" width="900" height="300" viewBox="0 0 900 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 250 Q300 100 800 80" stroke="#0A2239" strokeWidth="18" strokeLinecap="round" opacity="0.10"/>
          <circle cx="200" cy="180" r="14" fill="#19C3AC" opacity="0.18"/>
          <circle cx="700" cy="120" r="10" fill="#0A2239" opacity="0.13"/>
        </svg>
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #0A2239, #19C3AC)' }}>Soluciones a tu medida</h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl">Desde la automatización de tareas hasta la gestión de clientes, tenemos la herramienta perfecta para ti.</p>
        </ScrollReveal>
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Card 1: Automatización de Procesos */}
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-lg border-2 border-[#19C3AC] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#0A2239] transform hover:-translate-y-2 hover:rotate-1">
            <div className="flex items-center justify-center w-14 h-14 rounded-full mb-4 transform transition-transform duration-300 hover:scale-110 hover:rotate-12" style={{ background: 'radial-gradient(circle, #19C3AC 60%, transparent 100%)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A2239" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" style={{ color: '#0A2239' }}>
                <path d="M12 2.5l1.5 4 4 1.5-4 1.5-1.5 4-1.5z"/><path d="M5 11l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5z"/>
              </svg>
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-2 transform transition-all duration-300 hover:text-blue-600">Automatización de Procesos</h3>
            <p className="text-gray-600 text-xs">RPA, workflows y flujos automáticos que optimizan tus operaciones.</p>
          </div>
          
          {/* Card 2: CRM Inteligente */}
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-lg border-2 border-[#19C3AC] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#0A2239] transform hover:-translate-y-2 hover:-rotate-1">
            <div className="flex items-center justify-center w-14 h-14 rounded-full mb-4 transform transition-transform duration-300 hover:scale-110 hover:-rotate-12" style={{ background: 'radial-gradient(circle, #19C3AC 60%, transparent 100%)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A2239" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" style={{ color: '#0A2239' }}>
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-2 transform transition-all duration-300 hover:text-green-600">CRM Inteligente</h3>
            <p className="text-gray-600 text-xs">CRM con IA predictiva para gestionar leads y clientes.</p>
          </div>
          
          {/* Card 3: Integración de APIs */}
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-lg border-2 border-[#19C3AC] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#0A2239] transform hover:-translate-y-2 hover:rotate-1">
            <div className="flex items-center justify-center w-14 h-14 rounded-full mb-4 transform transition-transform duration-300 hover:scale-110 hover:rotate-12" style={{ background: 'radial-gradient(circle, #19C3AC 60%, transparent 100%)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A2239" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" style={{ color: '#0A2239' }}>
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-2 transform transition-all duration-300 hover:text-purple-600">Integración de APIs</h3>
            <p className="text-gray-600 text-xs">Conectores personalizados para sincronizar todos tus sistemas.</p>
          </div>
          
          {/* Card 4: Análisis de Datos */}
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-lg border-2 border-[#19C3AC] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#0A2239] transform hover:-translate-y-2 hover:-rotate-1">
            <div className="flex items-center justify-center w-14 h-14 rounded-full mb-4 transform transition-transform duration-300 hover:scale-110 hover:-rotate-12" style={{ background: 'radial-gradient(circle, #19C3AC 60%, transparent 100%)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A2239" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" style={{ color: '#0A2239' }}>
                <path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
              </svg>
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-2 transform transition-all duration-300 hover:text-orange-600">Análisis de Datos</h3>
            <p className="text-gray-600 text-xs">Business Intelligence con IA para insights accionables.</p>
          </div>
          
          {/* Card 5: Chatbots Avanzados */}
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-lg border-2 border-[#19C3AC] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#0A2239] transform hover:-translate-y-2 hover:rotate-1">
            <div className="flex items-center justify-center w-14 h-14 rounded-full mb-4 transform transition-transform duration-300 hover:scale-110 hover:rotate-12" style={{ background: 'radial-gradient(circle, #19C3AC 60%, transparent 100%)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A2239" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" style={{ color: '#0A2239' }}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h10"/><path d="m15.5 5.5 2.5 2.5-2.5 2.5"/><path d="m19.5 5.5-2.5 2.5 2.5 2.5"/>
              </svg>
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-2 transform transition-all duration-300 hover:text-indigo-600">Chatbots Avanzados</h3>
            <p className="text-gray-600 text-xs">IA conversacional con procesamiento de lenguaje natural.</p>
          </div>
        </div>
      </section>

      {/* Consultoría Section */}
      <section id="consultoria" className="w-full flex flex-col items-center justify-center py-20 px-4 bg-white relative">
        {/* Fondo sólido para mejorar legibilidad */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>
        <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#0A2239' }}>Consultoría 1 a 1 Gratuita</h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
          Descubre cómo la inteligencia artificial puede transformar tu negocio. Agenda una consultoría personalizada y sin costo para explorar las mejores soluciones para tu empresa.
        </p>
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#0A2239' }}>¿Qué incluye la consultoría?</h3>
          <ul className="text-gray-700 space-y-3 text-base">
            <li className="flex items-start gap-2"><span className="text-[#19C3AC] text-lg mt-1">•</span> Análisis de necesidades específicas de tu negocio</li>
            <li className="flex items-start gap-2"><span className="text-[#19C3AC] text-lg mt-1">•</span> Identificación de oportunidades de automatización</li>
            <li className="flex items-start gap-2"><span className="text-[#19C3AC] text-lg mt-1">•</span> Propuesta de soluciones personalizadas</li>
            <li className="flex items-start gap-2"><span className="text-[#19C3AC] text-lg mt-1">•</span> Estimación de ROI y beneficios esperados</li>
          </ul>
        </div>
        <a href="/agendar" className="rounded-full px-8 py-4 text-lg font-semibold text-white shadow-md transition-transform hover:scale-105" style={{ backgroundColor: '#19C3AC' }}>
          Agendar Consultoría Gratuita
        </a>
        </div>
      </section>

      {/* Casos de Éxito Section */}
      <section id="casos-exito" className="w-full flex flex-col items-center justify-center py-20 px-4 bg-gray-50 relative overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-teal-50/50"></div>
        
        <div className="relative z-10 w-full max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #0A2239, #19C3AC)' }}>
            Casos de Éxito Reales
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl">
            Empresas que transformaron sus operaciones con nuestras soluciones de IA
          </p>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {/* Caso 1 - Grande */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 break-inside-avoid mb-8 transform hover:scale-105 hover:-rotate-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">E-commerce Plus</h3>
                  <p className="text-sm text-gray-600">Retail Online</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 text-base leading-relaxed">
                &quot;Implementamos chatbots IA que manejan 80% de las consultas automáticamente, reduciendo costos de atención al cliente en 60% y aumentando las conversiones de manera significativa.&quot;
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">+340% conversión</span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">-60% costos</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">24/7 operación</span>
              </div>
            </div>

            {/* Caso 2 - Mediano */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 break-inside-avoid mb-8 transform hover:scale-105 hover:rotate-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:-rotate-12">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">FinTech Solutions</h3>
                  <p className="text-sm text-gray-600">Servicios Financieros</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                &quot;Nuestro CRM automatizado procesa 10,000+ leads mensuales, aumentando la tasa de conversión en 85%.&quot;
              </p>
              <div className="flex items-center gap-3 text-sm">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">+85% conversión</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">24/7 atención</span>
              </div>
            </div>

            {/* Caso 3 - Pequeño */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 break-inside-avoid mb-8 transform hover:scale-105 hover:-rotate-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                  <span className="text-white font-bold">I</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">InmoPro</h3>
                  <p className="text-xs text-gray-600">Inmobiliaria</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3 text-sm">
                &quot;Chatbots IA califican leads automáticamente, aumentando conversiones en 120%.&quot;
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">+120% conversión</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">-99% tiempo</span>
              </div>
            </div>

            {/* Caso 4 - Nuevo */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 break-inside-avoid mb-8 transform hover:scale-105 hover:rotate-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:-rotate-12">
                  <span className="text-white font-bold">L</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">LogiTech</h3>
                  <p className="text-xs text-gray-600">Logística</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3 text-sm">
                &quot;Automatización de rutas optimizó entregas en 45% y redujo costos operativos.&quot;
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full">+45% eficiencia</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full">-30% costos</span>
              </div>
            </div>

            {/* Caso 5 - Nuevo */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 break-inside-avoid mb-8 transform hover:scale-105 hover:-rotate-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">HealthTech</h3>
                  <p className="text-sm text-gray-600">Salud Digital</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 text-base leading-relaxed">
                &quot;IA predictiva para diagnóstico temprano mejoró la precisión en 92% y redujo tiempos de espera en 70%.&quot;
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">+92% precisión</span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">-70% espera</span>
                <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-medium">24h atención</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas Section */}
      <section id="estadisticas" className="w-full flex flex-col items-center justify-center py-20 px-4 bg-white border-y border-gray-200/80 relative overflow-hidden">
        {/* Decoración de fondo con gradiente */}
        <div className="absolute -z-10 left-1/2 top-0 w-[80vw] h-[30vh] -translate-x-1/2 rounded-full opacity-30 blur-2xl"
          style={{ background: 'linear-gradient(90deg, #0A2239 0%, #19C3AC 100%)' }} />
        <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #0A2239, #19C3AC)' }}>Resultados que hablan por sí solos</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl">Nuestros clientes no solo ahorran tiempo, también ven un crecimiento real en sus negocios.</p>
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Stat 1 */}
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border-2 border-[#19C3AC] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#0A2239]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A2239" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mb-4" style={{ color: '#19C3AC' }}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m22 18-3-3-3 3"/><path d="M19 12v9"/></svg>
            <span className="text-4xl font-extrabold mb-2" style={{ color: '#0A2239' }}>340%</span>
            <span className="text-gray-700 font-medium">Aumento de conversión</span>
          </div>

          {/* Stat 2 */}
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border-2 border-[#19C3AC] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#0A2239]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A2239" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mb-4" style={{ color: '#19C3AC' }}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.04L2 22l5.04-1.338A9.96 9.96 0 0 0 12 22z"/><path d="m9 12 2 2 4-4"/></svg>
            <span className="text-4xl font-extrabold mb-2" style={{ color: '#0A2239' }}>85%</span>
            <span className="text-gray-700 font-medium">Reducción de tiempo de respuesta</span>
          </div>

          {/* Stat 3 */}
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border-2 border-[#19C3AC] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#0A2239]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A2239" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mb-4" style={{ color: '#19C3AC' }}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12a10 10 0 0 0 10 10zM12 6v6l4 2"/></svg>
            <span className="text-4xl font-extrabold mb-2" style={{ color: '#0A2239' }}>24/7</span>
            <span className="text-gray-700 font-medium">Atención al cliente</span>
          </div>

          {/* Stat 4 */}
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border-2 border-[#19C3AC] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#0A2239]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A2239" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mb-4" style={{ color: '#19C3AC' }}><path d="M17.5 19H9a7 7 0 1 1 6.71-9h.79a4.5 4.5 0 1 1 0 9Z"/><path d="m18 14-4 4 4 4"/></svg>
            <span className="text-4xl font-extrabold mb-2" style={{ color: '#0A2239' }}>40%</span>
            <span className="text-gray-700 font-medium">Captacion de leads</span>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo Section */}
      <section id="proceso" className="w-full flex flex-col items-center justify-center py-20 px-4 bg-white relative overflow-hidden">
        <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#0A2239' }}>
          Nuestro Proceso
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl">
          Metodología probada que garantiza resultados excepcionales
        </p>
        
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Paso 1 */}
            <div className="relative">
              <div className="rounded-2xl p-6 text-center text-white relative z-10" style={{ backgroundColor: '#0A2239' }}>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Discovery & Análisis</h3>
                <p className="text-xs opacity-90">
                  Entrevistas técnicas y análisis de procesos actuales
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5" style={{ backgroundColor: '#19C3AC' }}></div>
            </div>

            {/* Paso 2 */}
            <div className="relative">
              <div className="rounded-2xl p-6 text-center text-white relative z-10" style={{ backgroundColor: '#19C3AC' }}>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Arquitectura de Datos</h3>
                <p className="text-xs opacity-90">
                  Diseño de base de datos y flujos de información
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5" style={{ backgroundColor: '#0A2239' }}></div>
            </div>

            {/* Paso 3 */}
            <div className="relative">
              <div className="rounded-2xl p-6 text-center text-white relative z-10" style={{ backgroundColor: '#0A2239' }}>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Desarrollo & Testing</h3>
                <p className="text-xs opacity-90">
                  Implementación con testing automatizado
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5" style={{ backgroundColor: '#19C3AC' }}></div>
            </div>

            {/* Paso 4 */}
            <div className="relative">
              <div className="rounded-2xl p-6 text-center text-white relative z-10" style={{ backgroundColor: '#19C3AC' }}>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Deployment & Training</h3>
                <p className="text-xs opacity-90">
                  Despliegue y capacitación del equipo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integraciones Section */}
      <section id="integraciones" className="w-full flex flex-col items-center justify-center py-20 px-4 bg-gray-50 relative overflow-hidden">
        <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#0A2239' }}>
          Integraciones Sin Límites
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl">
          Conectamos con todas las plataformas que usas. APIs personalizadas para sincronizar tu ecosistema digital.
        </p>
        
        <div className="w-full max-w-6xl">
          {/* Categorías de integraciones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* CRM & Marketing */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: '#0A2239' }}>CRM & Marketing</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  GoHighLevel
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  HubSpot
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  Salesforce
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  Mailchimp
                </div>
              </div>
            </div>

            {/* Productividad */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: '#0A2239' }}>Productividad</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  Notion
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  Airtable
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  Slack
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  Trello
                </div>
              </div>
            </div>

            {/* E-commerce */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: '#0A2239' }}>E-commerce</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  Shopify
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  WooCommerce
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  Mercado Libre
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  Stripe
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologías Section */}
      <section id="tecnologias" className="w-full flex flex-col items-center justify-center py-20 px-4 bg-white relative overflow-hidden">
        <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#0A2239' }}>
          Tecnologías de Vanguardia
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl">
          Utilizamos las herramientas más avanzadas del mercado para garantizar resultados excepcionales
        </p>
        
        <div className="w-full max-w-7xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {/* OpenAI */}
          <div className="flex flex-col items-center text-center group animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:shadow-green-500/25">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-300">OpenAI</span>
            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded-lg px-2 py-1 mt-2 transform -translate-y-2">
              GPT-4, DALL-E, Whisper
            </div>
          </div>

          {/* Claude */}
          <div className="flex flex-col items-center text-center group animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:shadow-orange-500/25">
              <span className="text-white font-bold text-sm">CL</span>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors duration-300">Claude</span>
            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded-lg px-2 py-1 mt-2 transform -translate-y-2">
              Claude 3, Sonnet, Haiku
            </div>
          </div>

          {/* Airtable */}
          <div className="flex flex-col items-center text-center group animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/25">
              <span className="text-white font-bold text-sm">AT</span>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Airtable</span>
            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded-lg px-2 py-1 mt-2 transform -translate-y-2">
              Bases de datos, APIs
            </div>
          </div>

          {/* Notion */}
          <div className="flex flex-col items-center text-center group animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-black rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:shadow-gray-500/25">
              <span className="text-white font-bold text-sm">NT</span>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Notion</span>
            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded-lg px-2 py-1 mt-2 transform -translate-y-2">
              Workspace, APIs, Templates
            </div>
          </div>

          {/* GoHighLevel */}
          <div className="flex flex-col items-center text-center group animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/25">
              <span className="text-white font-bold text-sm">GHL</span>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-300">GoHighLevel</span>
            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded-lg px-2 py-1 mt-2 transform -translate-y-2">
              CRM, Marketing, Automatización
            </div>
          </div>

          {/* n8n */}
          <div className="flex flex-col items-center text-center group animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/25">
              <span className="text-white font-bold text-sm">n8n</span>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">n8n</span>
            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded-lg px-2 py-1 mt-2 transform -translate-y-2">
              Workflows, Automatización
            </div>
          </div>

          {/* Contabo */}
          <div className="flex flex-col items-center text-center group animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:shadow-indigo-500/25">
              <span className="text-white font-bold text-sm">CB</span>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">Contabo</span>
            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded-lg px-2 py-1 mt-2 transform -translate-y-2">
              Hosting, VPS, Cloud
            </div>
          </div>
        </div>

        {/* Certificaciones */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4" style={{ color: '#0A2239' }}>Certificaciones</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">AWS Certified</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Google Cloud Partner</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Microsoft Partner</span>
          </div>
        </div>
      </section>

      {/* Beneficios Cuantificables Section */}
      <section id="beneficios" className="w-full flex flex-col items-center justify-center py-20 px-4 bg-white relative overflow-hidden">
        <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#0A2239' }}>
          Resultados Medibles
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl">
          Beneficios concretos que obtienen nuestros clientes con soluciones de IA
        </p>
        
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Beneficio 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 text-center border border-blue-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#0A2239' }}>70%</h3>
            <p className="text-lg font-semibold text-gray-700 mb-2">Reducción en tiempo de procesamiento</p>
            <p className="text-sm text-gray-600">Automatización de tareas repetitivas y flujos de trabajo optimizados</p>
          </div>

          {/* Beneficio 2 */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 text-center border border-green-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#0A2239' }}>200%</h3>
            <p className="text-lg font-semibold text-gray-700 mb-2">Aumento en conversión de leads</p>
            <p className="text-sm text-gray-600">CRM inteligente con scoring predictivo y seguimiento automatizado</p>
          </div>

          {/* Beneficio 3 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center border border-purple-100">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18"/>
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#0A2239' }}>400%</h3>
            <p className="text-lg font-semibold text-gray-700 mb-2">ROI en el primer año</p>
            <p className="text-sm text-gray-600">Retorno de inversión promedio basado en ahorros y mejoras de eficiencia</p>
          </div>
        </div>

        {/* Métricas adicionales */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Disponibilidad</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">95%</div>
            <div className="text-sm text-gray-600">Precisión IA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">-60%</div>
            <div className="text-sm text-gray-600">Costos operativos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">+150%</div>
            <div className="text-sm text-gray-600">Productividad</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full flex flex-col items-center justify-center py-20 px-4 bg-gray-50 relative overflow-hidden">
        <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#0A2239' }}>
          Preguntas Frecuentes
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl">
          Resolvemos las dudas más comunes sobre implementación de IA
        </p>
        
        <div className="w-full max-w-4xl space-y-6">
          {/* FAQ 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Cuánto tiempo toma implementar una solución de IA?</h3>
            <p className="text-gray-700">
              El tiempo varía según la complejidad. Proyectos básicos (chatbots) pueden estar listos en 2-4 semanas, mientras que soluciones complejas (Machine Learning personalizado) pueden tomar 8-12 semanas.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Es compatible con mi sistema actual?</h3>
            <p className="text-gray-700">
              Sí, nuestras soluciones se integran con la mayoría de sistemas existentes. Realizamos una evaluación previa para asegurar compatibilidad total con tu infraestructura actual.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Qué ROI puedo esperar?</h3>
            <p className="text-gray-700">
              Nuestros clientes ven un ROI promedio del 300-500% en el primer año. La automatización reduce costos operativos en 40-60% y aumenta la eficiencia significativamente.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Ofrecen soporte post-implementación?</h3>
            <p className="text-gray-700">
              Absolutamente. Incluimos 3 meses de soporte gratuito, capacitación para tu equipo, y mantenimiento continuo. También ofrecemos planes de soporte extendido.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Los datos de mi empresa están seguros?</h3>
            <p className="text-gray-700">
              Sí, la seguridad es prioridad. Utilizamos encriptación de nivel bancario, cumplimos con GDPR y otras regulaciones, y tus datos nunca salen de tu infraestructura controlada.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto Section / CTA */}
      <section id="contacto" className="w-full py-20 bg-gray-50 relative overflow-hidden">
        {/* Fondo decorativo único para CTA */}
        <svg className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 opacity-40" width="900" height="300" viewBox="0 0 900 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Línea curva tipo IA */}
          <path d="M100 250 Q300 100 800 80" stroke="#19C3AC" strokeWidth="18" strokeLinecap="round" opacity="0.18"/>
          {/* Nodos */}
          <circle cx="200" cy="180" r="10" fill="#19C3AC" opacity="0.22"/>
          <circle cx="700" cy="120" r="8" fill="#0A2239" opacity="0.18"/>
          {/* Detalle de check IA */}
          <g opacity="0.13">
            <circle cx="450" cy="80" r="32" fill="#0A2239" />
            <polyline points="440,80 450,95 465,65" fill="none" stroke="#19C3AC" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
        <div className="mx-auto max-w-4xl px-4">
          <div className="relative isolate overflow-hidden px-6 py-20 text-center shadow-2xl rounded-3xl sm:px-16"
            style={{ background: 'linear-gradient(90deg, #0A2239 60%, #19C3AC 100%)' }}>
            {/* Brillo decorativo */}
            <div className="absolute -top-24 left-1/2 -z-10 h-[50rem] w-[150%] -translate-x-1/2 skew-y-[-18deg] bg-white/20 opacity-20" />
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #fff, #19C3AC)' }}>
              ¿Listo para transformar tu agencia?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Agenda una demo gratuita y sin compromiso. Descubre en 30 minutos cómo la IA puede duplicar tu eficiencia.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/agendar"
                className="rounded-md px-5 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105"
                style={{ backgroundColor: '#0A2239' }}
              >
                Agendar una demo
              </a>
              <a href="https://wa.me/5492267662286" target="_blank" rel="noopener noreferrer" className="rounded-md px-5 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: '#19C3AC' }}>
                Contactar por WhatsApp <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
