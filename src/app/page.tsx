import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-white">
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
            className="rounded-full px-6 py-3 text-base font-semibold text-white shadow-sm transition-transform hover:scale-105"
            style={{ backgroundColor: '#0A2239' }}
          >
            Agendar una demo
          </Link>
          <a href="https://wa.me/5492267662286" target="_blank" rel="noopener noreferrer" className="rounded-full px-6 py-3 text-base font-semibold text-white shadow-sm flex items-center gap-2 transition-transform hover:scale-105" style={{ backgroundColor: '#19C3AC' }}>
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#25D366" d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.09-1.33A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Z"/><path fill="#fff" d="M17.47 15.37c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.41.12-.54.13-.13.29-.34.43-.51.14-.18.18-.31.27-.52.09-.2.05-.39-.02-.54-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.97.95-.97 2.3 0 1.35.99 2.66 1.13 2.85.14.18 1.95 2.98 4.74 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z"/></svg>
            Habla por WhatsApp
          </a>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="w-full flex flex-col items-center justify-center py-20 px-4 bg-slate-50 border-y border-gray-200/80 relative overflow-hidden">
        {/* Fondo decorativo SVG */}
        <svg className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 opacity-30" width="900" height="300" viewBox="0 0 900 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 250 Q300 100 800 80" stroke="#0A2239" strokeWidth="18" strokeLinecap="round" opacity="0.10"/>
          <circle cx="200" cy="180" r="14" fill="#19C3AC" opacity="0.18"/>
          <circle cx="700" cy="120" r="10" fill="#0A2239" opacity="0.13"/>
        </svg>
        <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #0A2239, #19C3AC)' }}>Soluciones a tu medida</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl">Desde la automatización de tareas hasta la gestión de clientes, tenemos la herramienta perfecta para ti.</p>
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Automatización */}
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border-2 border-[#19C3AC] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#0A2239]">
            <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ background: 'radial-gradient(circle, #19C3AC 60%, transparent 100%)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0A2239" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" style={{ color: '#0A2239' }}>
                <path d="M12 2.5l1.5 4 4 1.5-4 1.5-1.5 4-1.5z"/><path d="M5 11l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatización</h3>
            <p className="text-gray-600 text-sm">Optimiza procesos y ahorra tiempo con flujos automáticos.</p>
          </div>
          {/* Card 2: Chatbots IA */}
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border-2 border-[#19C3AC] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#0A2239]">
            <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ background: 'radial-gradient(circle, #19C3AC 60%, transparent 100%)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0A2239" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" style={{ color: '#0A2239' }}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h10"/><path d="m15.5 5.5 2.5 2.5-2.5 2.5"/><path d="m19.5 5.5-2.5 2.5 2.5 2.5"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Chatbots IA</h3>
            <p className="text-gray-600 text-sm">Atiende consultas 24/7 con chatbots inteligentes.</p>
          </div>
          {/* Card 3: Asistentes de llamada */}
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border-2 border-[#19C3AC] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#0A2239]">
            <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ background: 'radial-gradient(circle, #19C3AC 60%, transparent 100%)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0A2239" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" style={{ color: '#0A2239' }}>
                <polyline points="18 2 22 6 18 10"/><line x1="14" y1="6" x2="22" y2="6"/><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Asistentes de llamada</h3>
            <p className="text-gray-600 text-sm">Gestiona llamadas entrantes y salientes con asistentes virtuales.</p>
          </div>
          {/* Card 4: CRM Automatizado */}
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border-2 border-[#19C3AC] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#0A2239]">
            <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ background: 'radial-gradient(circle, #19C3AC 60%, transparent 100%)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0A2239" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" style={{ color: '#0A2239' }}>
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">CRM Automatizado</h3>
            <p className="text-gray-600 text-sm">Centraliza y automatiza la gestión de tus clientes.</p>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section id="consultoria" className="w-full flex flex-col items-center justify-center py-20 px-4 bg-white">
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
      </section>

      {/* Estadísticas Section */}
      <section id="estadisticas" className="w-full flex flex-col items-center justify-center py-20 px-4 bg-slate-50 border-y border-gray-200/80 relative overflow-hidden">
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
            <span className="text-gray-700 font-medium">Aumento de conversación</span>
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

      {/* Contacto Section / CTA */}
      <section id="contacto" className="w-full py-20 bg-white relative overflow-hidden">
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
