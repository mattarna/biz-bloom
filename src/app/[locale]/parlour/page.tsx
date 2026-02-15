import React from 'react';
import { ParlourHero } from '@/components/sections/ParlourHero';
import { ParlourServices } from '@/components/sections/ParlourServices';
import { ParlourStrategic } from '@/components/sections/ParlourStrategic';
import { ParlourAccess } from '@/components/sections/ParlourAccess';
import { ParlourIntegration } from '@/components/sections/ParlourIntegration';
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
      <ParlourStrategic />
      <ParlourAccess />
      <ParlourIntegration />
      <ParlourContact />
    </main>
  );
}
