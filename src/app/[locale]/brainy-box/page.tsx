'use client';

import React from 'react';
import { BrainyBoxHero } from '@/components/sections/BrainyBoxHero';
import { BrainyBoxForm } from '@/components/sections/BrainyBoxForm';
import { BrainyBoxProcess } from '@/components/sections/BrainyBoxProcess';
import { BrainyBoxIntro } from '@/components/sections/BrainyBoxIntro';

export default function BrainyBoxPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <BrainyBoxHero />
      <BrainyBoxIntro />
      <BrainyBoxForm />
      <BrainyBoxProcess />
    </main>
  );
}
