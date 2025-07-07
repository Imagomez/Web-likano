# Likano - Agencia de IA

Sitio web profesional para Likano, una agencia especializada en soluciones de Inteligencia Artificial, automatización y CRM personalizado.

## 🚀 Características

- **Diseño Moderno**: Interfaz profesional con efectos 3D y animaciones suaves
- **Optimizado para SEO**: Meta tags, sitemap y robots.txt incluidos
- **Responsive**: Diseño adaptativo para todos los dispositivos
- **Performance**: Optimizado para Vercel con lazy loading y compresión
- **Seguridad**: Headers de seguridad y políticas de contenido

## 🛠️ Tecnologías

- **Framework**: Next.js 15.3.4
- **Lenguaje**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel
- **Chat**: Chatwoot integrado

## 📦 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/web-likano.git
cd web-likano
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
# Editar .env.local con tus valores
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

## 🌐 Deployment en Vercel

### Opción 1: Deploy Automático
1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. Configura las variables de entorno en el dashboard de Vercel
4. ¡Listo! Tu sitio se desplegará automáticamente

### Opción 2: Deploy Manual
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# Deploy
vercel --prod
```

## 🔧 Variables de Entorno

Crea un archivo `.env.local` con las siguientes variables:

```env
# Entorno
NODE_ENV=production

# URLs
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app

# Chatwoot
NEXT_PUBLIC_CHATWOOT_TOKEN=tu_token_aqui
NEXT_PUBLIC_CHATWOOT_URL=https://tu_chatwoot_url.com

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=5492267662286
```

## 📁 Estructura del Proyecto

```
src/
├── app/                 # App Router de Next.js
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Página principal
│   ├── agendar/        # Página de agendar
│   └── blog/           # Página del blog
├── components/         # Componentes reutilizables
│   └── layout/         # Componentes de layout
└── globals.css         # Estilos globales
```

## 🎨 Personalización

### Colores Principales
- **Azul Oscuro**: `#0A2239`
- **Teal**: `#19C3AC`

### Animaciones
- Efectos 3D en hover
- Animaciones de entrada escalonadas
- Transiciones suaves

## 📈 Performance

El sitio está optimizado para:
- **Lighthouse Score**: 90+ en todas las métricas
- **Core Web Vitals**: Optimizado
- **SEO**: Meta tags y estructura semántica
- **Caching**: Headers de cache optimizados

## 🔒 Seguridad

- Headers de seguridad configurados
- CSP (Content Security Policy)
- XSS Protection
- Frame Options

## 📞 Soporte

Para soporte técnico o consultas:
- **WhatsApp**: +54 9 2267 662286
- **Email**: info@likano.com

## 📄 Licencia

Este proyecto es privado y propiedad de Likano.

---

Desarrollado con ❤️ por el equipo de Likano
