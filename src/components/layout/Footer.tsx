export default function Footer() {
  return (
    <footer className="bg-white border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo y nombre */}
        <div className="flex items-center gap-2">
          
        </div>
        {/* Redes sociales */}
        <div className="flex gap-4">
          <a
            href="https://wa.me/5492267662286"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-blue-700 transition"
          >
            {/* WhatsApp SVG */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="#25D366" d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.09-1.33A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Z"/>
              <path fill="#fff" d="M17.47 15.37c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.41.12-.54.13-.13.29-.34.43-.51.14-.18.18-.31.27-.52.09-.2.05-.39-.02-.54-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.97.95-.97 2.3 0 1.35.99 2.66 1.13 2.85.14.18 1.95 2.98 4.74 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/likano.ia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-blue-700 transition"
          >
            {/* Instagram SVG */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="6" fill="#fff" stroke="#2563eb" strokeWidth="2"/>
              <circle cx="12" cy="12" r="5" stroke="#2563eb" strokeWidth="2"/>
              <circle cx="17" cy="7" r="1.5" fill="#2563eb"/>
            </svg>
          </a>
          {/* Gmail */}
          <a
            href="mailto:contacto@likanoia.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
            className="hover:text-blue-700 transition"
          >
            {/* Gmail SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="4" fill="#fff" stroke="#EA4335" strokeWidth="2"/>
              <path d="M2 6l10 7 10-7" stroke="#EA4335" strokeWidth="2" fill="none"/>
            </svg>
          </a>
        </div>
        {/* Contacto directo */}
        <div className="flex flex-col items-center md:items-end gap-1 text-sm text-gray-600 mt-4 md:mt-0">
          <a href="mailto:contacto@likanoia.com" className="hover:text-blue-700 transition">contacto@likanoia.com</a>
          <a href="tel:+5492267662286" className="hover:text-blue-700 transition">+54 9 2267 66-2286</a>
        </div>
        {/* Enlaces legales */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm text-gray-500">
          <a href="#" className="hover:text-blue-700 transition">Términos y condiciones</a>
          <a href="#" className="hover:text-blue-700 transition">Política de privacidad</a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 py-4 border-t border-blue-100">
      © {new Date().getFullYear()} Likano. Todos los derechos reservados.
      </div>
    </footer>
  );
} 