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
            <span className="font-extrabold text-xl text-[#0A2239]">LIKANO</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-4">
          <a href="#servicios" className="text-sm font-semibold leading-6 text-[#0A2239] hover:text-blue-700 transition">Servicios</a>
          <a href="#casos-exito" className="text-sm font-semibold leading-6 text-[#0A2239] hover:text-blue-700 transition">Casos</a>
          <a href="#beneficios" className="text-sm font-semibold leading-6 text-[#0A2239] hover:text-blue-700 transition">Resultados</a>
                    <a href="#integraciones" className="text-sm font-semibold leading-6 text-[#0A2239] hover:text-blue-700 transition">Integraciones</a>
          <a href="#tecnologias" className="text-sm font-semibold leading-6 text-[#0A2239] hover:text-blue-700 transition">Tecnologías</a>
          <a href="#contacto" className="text-sm font-semibold leading-6 text-[#0A2239] hover:text-blue-700 transition">Contacto</a>
        </div>
        <div className="flex flex-1 justify-end">
          <Link
            href="/agendar"
            className="rounded-full px-5 py-2 text-base font-semibold text-white shadow-sm transition bg-[#19C3AC]"
          >
            Agendar
          </Link>
        </div>
      </nav>
    </header>
  );
} 