import React from 'react';
import { ParlourHero } from '@/components/sections/ParlourHero';
import { ParlourServices } from '@/components/sections/ParlourServices';
import { ParlourHowItWorks } from '@/components/sections/ParlourHowItWorks';
import { ParlourContact } from '@/components/sections/ParlourContact';

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
