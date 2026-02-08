import React from 'react';
import { ContactSection } from '@/components/sections/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contatti | Biz Bloom",
  description: "Hub di contatto per l'ecosistema Biz Bloom. Scegli il canale giusto per le tue richieste su membership, missioni B2B e consulenze.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactSection />
    </main>
  );
}
