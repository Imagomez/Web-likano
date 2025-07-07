import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog | Likano - Artículos sobre IA y Automatización",
    template: "%s | Blog Likano"
  },
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

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Schema.org para Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog de Likano",
            "description": "Artículos y recursos sobre inteligencia artificial, automatización empresarial y transformación digital",
            "url": "https://likano.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Likano",
              "url": "https://likano.com"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://likano.com/blog"
            }
          })
        }}
      />
      {children}
    </>
  );
} 