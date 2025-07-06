import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Likano - Agencia de IA para empresas.",
  description:
    "Sistemas de automatización, Agentes de IA, asistentes de llamada, CRM automatizado ",
=======
  title: "Likano AI - Agencia de IA para Inmobiliarias",
  description:
    "Sistemas de automatización, chatbots, asistentes de llamada, CRM automatizado y más para el sector inmobiliario.",
>>>>>>> a08300a9519f275431c75c130fda650ad25bc393
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
