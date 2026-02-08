'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { useTranslations } from 'next-intl';

export const DigitalStoreIncludes = () => {
  const t = useTranslations('DigitalStorePage');

  const items = [
    { key: 'include_1', icon: 'solar:home-2-bold' },
    { key: 'include_2', icon: 'solar:users-group-rounded-bold' },
    { key: 'include_3', icon: 'solar:box-bold' },
    { key: 'include_4', icon: 'solar:file-download-bold' },
    { key: 'include_5', icon: 'solar:verified-check-bold' },
    { key: 'include_6', icon: 'solar:cursor-square-bold' },
    { key: 'include_7', icon: 'solar:phone-bold' },
  ];

  return (
    <section className="section-padding bg-brand-alabaster border-y border-brand-dark/5">
      <div className="container-wide">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-brand-primary" />
              <span className="text-[11px] font-bold tracking-[0.4em] text-brand-primary uppercase font-sans">
                La Struttura
              </span>
            </div>
            <h2 className="text-brand-dark text-[clamp(2rem,5vw,3.5rem)] font-serif leading-none tracking-tight uppercase">
              {t('includes_title')}
            </h2>
          </div>
          <p className="text-brand-dark/50 text-sm font-bold tracking-widest uppercase lg:mb-2">
            7 Sezioni Strategiche
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group p-10 border border-brand-dark/5 bg-white hover:bg-brand-dark hover:border-brand-dark transition-all duration-500 flex flex-col items-start gap-8 shadow-sm hover:shadow-2xl hover:shadow-brand-dark/20 rounded-[30px]"
            >
              <div className="h-16 w-16 flex items-center justify-center bg-brand-dark/5 group-hover:bg-brand-alabaster/10 transition-colors rounded-2xl">
                <Icon icon={item.icon} className="text-3xl text-brand-primary group-hover:text-brand-beige" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-serif text-brand-dark group-hover:text-brand-alabaster leading-tight transition-colors">
                  {t(`${item.key}_title`)}
                </h3>
                <p className="text-brand-dark/60 group-hover:text-brand-alabaster/60 text-sm leading-relaxed transition-colors font-sans font-medium">
                  {t(`${item.key}_desc`)}
                </p>
              </div>
            </div>
          ))}
          
          {/* Decorative CTA card for 8th slot */}
          <div className="group p-10 bg-brand-primary flex flex-col items-center justify-center text-center gap-6 rounded-[30px] shadow-xl shadow-brand-primary/10">
            <Icon icon="solar:globus-bold" className="text-5xl text-white/20 animate-spin-slow" />
            <p className="text-white text-lg font-serif italic">
              "Pensato per l'internazionalizzazione"
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
