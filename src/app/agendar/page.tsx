import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agendar Consulta | Likano - Consultoría Gratuita de IA",
  description: "Agenda una consulta gratuita con nuestros expertos en IA y automatización empresarial. Descubre cómo transformar tu empresa con inteligencia artificial.",
  keywords: [
    "consulta gratuita",
    "agendar",
    "asesoría IA",
    "consultoría automatización",
    "expertos IA",
    "transformación digital",
    "agenda reunión",
    "consulta personalizada"
  ],
  openGraph: {
    title: "Agendar Consulta | Likano - Consultoría Gratuita de IA",
    description: "Agenda una consulta gratuita con nuestros expertos en IA y automatización empresarial.",
    url: "https://likano.com/agendar",
    siteName: "Likano",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Agendar Consulta | Likano - Consultoría Gratuita de IA",
    description: "Agenda una consulta gratuita con nuestros expertos en IA y automatización empresarial.",
  },
  alternates: {
    canonical: "https://likano.com/agendar",
  },
};

export default function Agendar() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white py-12">
      <h1 className="text-3xl font-bold mb-4 text-blue-700 text-center">Agendar una cita</h1>
      <p className="text-gray-600 mb-6 text-center max-w-xl">
        Reserva una reunión personalizada con nuestro equipo para descubrir cómo la IA puede transformar tu empresa.
      </p>
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center">
        <iframe
          src="https://calendly.com/gomezlucianoimanol/likano45min"
          title="Calendly Widget"
          className="w-full min-h-[600px] rounded-xl border-0"
          style={{ background: 'white' }}
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
} 