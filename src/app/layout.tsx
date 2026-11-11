import type { Metadata, Viewport } from "next";
import { Comfortaa, Nunito } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const nunito = Nunito({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-nunito",
  display: "swap",
});

const comfortaa = Comfortaa({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-comfortaa",
  display: "swap",
});

const title = "«Амир-шах» бөбекжай-балабақшасы — Ұзынағаш";
const description =
  "ЖШС «Амир-шах» бөбекжай-балабақшасы: 2–5 жас аралығындағы балаларға арналған 4 топ, қазақ тілінде тәрбие, күніне 4 мезгіл тамақ. Жұмыс уақыты 07:30–18:00. Ұзынағаш ауылы, Азербаева көшесі, 93.";

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title,
  description,
  keywords: ["Амир-шах", "балабақша", "бөбекжай", "Ұзынағаш", "детский сад", "Узынагаш", "Жамбыл ауданы"],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "kk_KZ",
    alternateLocale: ["ru_RU"],
    siteName: "«Амир-шах» бөбекжай-балабақшасы",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fff8ec",
  colorScheme: "only light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kk" className={`${nunito.variable} ${comfortaa.variable}`}>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
