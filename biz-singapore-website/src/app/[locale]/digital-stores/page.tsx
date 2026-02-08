import React from 'react';
import { DigitalStoreHero } from '@/components/sections/DigitalStoreHero';
import { DigitalStoreWhat } from '@/components/sections/DigitalStoreWhat';
import { DigitalStoreIncludes } from '@/components/sections/DigitalStoreIncludes';
import { DigitalStoreWhy } from '@/components/sections/DigitalStoreWhy';
import { DigitalStoreDemo } from '@/components/sections/DigitalStoreDemo';
import { DigitalStoreProcess } from '@/components/sections/DigitalStoreProcess';
import { DigitalStoreCTA } from '@/components/sections/DigitalStoreCTA';

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
