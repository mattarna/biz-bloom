import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from "@/navigation";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: '--font-serif',
  weight: ['400'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "Biz Bloom",
  description: "Internazionalizzazione digitale integrata per le PMI",
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${dmSerif.variable} font-sans bg-brand-alabaster text-brand-dark antialiased selection:bg-brand-primary/30`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
