import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Likano - Agencia de IA para empresas",
  description:
    "Sistemas de automatización, Agentes de IA, chatbots, asistentes de llamada, CRM automatizado",
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
        <Script
          id="chatwoot-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d,t) {
                var BASE_URL="https://devchatwoot.likanoia.com";
                var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                g.src=BASE_URL+"/packs/js/sdk.js";
                g.defer = true;
                g.async = true;
                s.parentNode.insertBefore(g,s);
                g.onload=function(){
                  if (typeof window !== 'undefined' && window.chatwootSDK) {
                    window.chatwootSDK.run({
                      websiteToken: 'iV7vJ98MUFfQKRNrrbDxCNhr',
                      baseUrl: BASE_URL
                    });
                  }
                }
              })(document,"script");
            `,
          }}
        />
      </body>
    </html>
  );
}
