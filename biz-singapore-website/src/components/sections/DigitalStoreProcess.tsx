'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export const DigitalStoreProcess = () => {
  const t = useTranslations('DigitalStorePage');

  const steps = [
    { key: 'step_1', number: '1' },
    { key: 'step_2', number: '2' },
    { key: 'step_3', number: '3' },
  ];

  return (
    <section className="section-padding bg-white overflow-hidden border-y border-brand-dark/5">
      <div className="container-wide">
        
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-brand-primary" />
          <span className="text-[11px] font-bold tracking-[0.4em] text-brand-primary uppercase font-sans">
            La Roadmap
          </span>
        </div>
        <h2 className="text-brand-dark text-[clamp(2rem,5vw,3.5rem)] font-serif leading-none tracking-tight uppercase mb-16 lg:mb-24">
          {t('process_title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <span className="absolute -top-6 -left-2 text-[7rem] font-serif text-brand-dark/5 leading-none select-none">
                {step.number}
              </span>
              <div className="relative z-10 pt-4">
                <div className="h-px w-12 bg-brand-primary/30 mb-8 group-hover:w-24 transition-all duration-500" />
                <h3 className="text-2xl font-serif text-brand-dark mb-4 uppercase tracking-tight">
                  {t(`${step.key}_title`)}
                </h3>
                <p className="text-brand-dark/70 text-base lg:text-lg leading-relaxed font-sans font-medium">
                  {t(`${step.key}_desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
