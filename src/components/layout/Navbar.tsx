import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-[95vw] max-w-5xl rounded-full bg-white/80 shadow-lg backdrop-blur border border-blue-100 transition-all">
      <nav
        className="flex items-center justify-between px-6 py-3"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">Likano</span>
            <span className="font-extrabold text-xl" style={{ color: 'var(--color-primary)' }}>LIKANO</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          <a href="#servicios" className="text-base font-semibold leading-6 text-gray-900 hover:text-blue-700 transition" style={{ color: 'var(--color-primary)' }}>Servicios</a>
          <a href="#testimonios" className="text-base font-semibold leading-6 text-gray-900 hover:text-blue-700 transition" style={{ color: 'var(--color-primary)' }}>Testimonios</a>
          <a href="#estadisticas" className="text-base font-semibold leading-6 text-gray-900 hover:text-blue-700 transition" style={{ color: 'var(--color-primary)' }}>Estadísticas</a>
          <a href="#contacto" className="text-base font-semibold leading-6 text-gray-900 hover:text-blue-700 transition" style={{ color: 'var(--color-primary)' }}>Contacto</a>
        </div>
        <div className="flex flex-1 justify-end">
          <Link
            href="/agendar"
            className="rounded-full px-5 py-2 text-base font-semibold text-white shadow-sm transition"
            style={{ backgroundColor: 'var(--color-secondary)' }}
          >
            Agendar
          </Link>
        </div>
      </nav>
    </header>
  );
} 