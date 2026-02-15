'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export const DigitalStoreWhat = () => {
  const t = useTranslations('DigitalStorePage');

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-brand-primary" />
              <span className="text-[11px] font-bold tracking-[0.4em] text-brand-primary uppercase font-sans">
                Definizione
              </span>
            </div>
            <h2 className="text-brand-dark text-[clamp(2.5rem,5vw,4rem)] font-serif leading-none tracking-tight uppercase mb-8">
              {t('what_title')}
            </h2>
            <p className="text-[18px] lg:text-[22px] text-brand-dark/70 leading-relaxed font-sans font-medium">
              {t('what_desc')}
            </p>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-square bg-brand-alabaster rounded-[40px] border border-brand-dark/5 p-12 flex items-center justify-center">
              <div className="relative w-full h-full border-2 border-dashed border-brand-primary/20 rounded-[30px] flex flex-col items-center justify-center text-center p-8">
                <div className="absolute top-8 left-8 h-4 w-24 bg-brand-primary/10 rounded-full" />
                <div className="absolute top-16 left-8 h-4 w-32 bg-brand-primary/5 rounded-full" />
                <div className="w-24 h-24 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white font-serif text-2xl italic">
                    BS
                  </div>
                </div>
                <div className="h-4 w-48 bg-brand-dark/10 rounded-full mb-4" />
                <div className="h-4 w-32 bg-brand-dark/5 rounded-full mb-12" />
                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="aspect-square bg-brand-primary/5 rounded-xl" />
                  <div className="aspect-square bg-brand-primary/5 rounded-xl" />
                  <div className="aspect-square bg-brand-primary/5 rounded-xl" />
                </div>
                <div className="absolute bottom-8 right-8 h-10 w-32 bg-brand-dark rounded-full" />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-brand-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

