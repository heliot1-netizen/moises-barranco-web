import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moises Barranco | Colorista · Estudio privado · Barcelona",
  description:
    "Moises Barranco, colorista con 21 años de experiencia formado en Colombia, Barcelona y Brasil. Estudio privado de color en Barcelona, especialista en mechas y coloración a medida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${jost.variable} antialiased`}
    >
      <body className="bg-ivory text-ink">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
