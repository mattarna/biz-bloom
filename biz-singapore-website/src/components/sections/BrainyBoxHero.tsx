'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export const BrainyBoxHero = () => {
  const t = useTranslations('BrainyBox');

  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
          alt="Brainy Box Background"
          fill
          priority
          className="object-cover grayscale brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/20 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col items-center gap-4 mb-2">
          <div className="h-[1px] w-12 bg-brand-primary" />
          <span className="text-[11px] font-bold tracking-[0.4em] text-brand-primary uppercase font-sans">
            Secure Innovation
          </span>
        </div>

        <h1 className="text-white text-[clamp(2.5rem,7vw,5rem)] font-serif leading-[0.95] tracking-tight uppercase">
          {t('hero_title')}
        </h1>

        <p className="text-[18px] lg:text-[22px] font-medium text-brand-alabaster/80 leading-relaxed max-w-2xl mx-auto font-sans">
          {t('hero_description')}
        </p>

        <div className="pt-10 flex flex-col items-center gap-8">
          <button 
            onClick={() => document.getElementById('brainy-box-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-brand-primary text-white px-12 py-6 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-brand-dark transition-all flex items-center gap-4 rounded-xl shadow-2xl shadow-brand-primary/20"
          >
            Inizia il Caricamento
            <Icon icon="solar:arrow-down-linear" className="text-lg group-hover:translate-y-1 transition-transform" />
          </button>

          <div className="pt-6 border-t border-brand-alabaster/10 inline-block">
            <p className="text-[11px] font-bold text-brand-primary uppercase tracking-[0.2em] max-w-md mx-auto leading-relaxed">
              {t('hero_trust_microcopy')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
