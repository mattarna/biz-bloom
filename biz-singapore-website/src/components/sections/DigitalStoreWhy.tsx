'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { useTranslations } from 'next-intl';

export const DigitalStoreWhy = () => {
  const t = useTranslations('DigitalStorePage');

  return (
    <section className="bg-white">
      {/* 1. Perché funziona - Text + Image */}
      <div className="container-wide section-padding !pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-brand-primary" />
                <span className="text-[11px] font-bold tracking-[0.4em] text-brand-primary uppercase font-sans">
                  Valore Operativo
                </span>
              </div>
              <h2 className="text-brand-dark fluid-heading-2 font-serif leading-none tracking-tight uppercase mb-12">
                {t('why_title')}
              </h2>
            </div>
            
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="mt-1 h-8 w-8 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <Icon icon="solar:check-read-bold" className="text-xl" />
                  </div>
                  <p className="text-xl lg:text-2xl font-serif text-brand-dark leading-tight italic">
                    {t(`why_desc_${i}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
            <div 
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-brand-dark/10" />
          </div>
        </div>
      </div>

      {/* 2. Per chi è - Image + Text Box */}
      <div className="container-wide section-padding !pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl order-2 lg:order-1">
            <div 
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-brand-dark/10" />
          </div>

          <div className="bg-brand-dark rounded-[40px] p-10 lg:p-16 text-brand-alabaster flex flex-col justify-center shadow-2xl shadow-brand-dark/20 relative overflow-hidden order-1 lg:order-2 h-full">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 h-64 w-64 bg-brand-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
            
            <div className="relative z-10 space-y-12">
              <div>
                <span className="text-[10px] font-bold tracking-[0.4em] text-brand-beige uppercase font-sans mb-4 block">
                  Target Ideale
                </span>
                <h2 className="fluid-heading-2 font-serif leading-none tracking-tight uppercase">
                  {t('for_who_title')}
                </h2>
              </div>

              <div className="space-y-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="h-2 w-2 rounded-full bg-brand-beige shrink-0" />
                    <p className="text-lg lg:text-xl font-sans font-medium text-brand-alabaster/80">
                      {t(`for_who_${i}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
