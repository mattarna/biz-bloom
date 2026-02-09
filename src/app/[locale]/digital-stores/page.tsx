import React from 'react';
import { DigitalStoreHero } from '@/components/sections/DigitalStoreHero';
import { DigitalStoreWhat } from '@/components/sections/DigitalStoreWhat';
import { DigitalStoreIncludes } from '@/components/sections/DigitalStoreIncludes';
import { DigitalStoreWhy } from '@/components/sections/DigitalStoreWhy';
import { DigitalStoreDemo } from '@/components/sections/DigitalStoreDemo';
import { DigitalStoreProcess } from '@/components/sections/DigitalStoreProcess';
import { DigitalStoreCTA } from '@/components/sections/DigitalStoreCTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Digital Stores | Biz Bloom",
  description: "La tua vetrina premium per i mercati esteri. Landing page professionali per presentare la tua azienda a partner e investitori internazionali.",
};

export default function DigitalStoresPage() {
  return (
    <main className="min-h-screen">
      <DigitalStoreHero />
      <DigitalStoreWhat />
      <DigitalStoreIncludes />
      <DigitalStoreWhy />
      <DigitalStoreDemo />
      <DigitalStoreProcess />
      <DigitalStoreCTA />
    </main>
  );
}
