import React from 'react';
import { ParlourHero } from '@/components/sections/ParlourHero';
import { ParlourServices } from '@/components/sections/ParlourServices';
import { ParlourHowItWorks } from '@/components/sections/ParlourHowItWorks';
import { ParlourContact } from '@/components/sections/ParlourContact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The Parlour | Consulenza Strategica Biz Bloom",
  description: "Il punto d'incontro tra esperti legali e commerciali. Consulenza specializzata per internazionalizzazione, contrattualistica e export.",
};

export default function ParlourPage() {
  return (
    <main className="min-h-screen">
      <ParlourHero />
      <ParlourServices />
      <ParlourHowItWorks />
      <ParlourContact />
    </main>
  );
}
