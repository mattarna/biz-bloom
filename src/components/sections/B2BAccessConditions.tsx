'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';

export const B2BAccessConditions = () => {
  const t = useTranslations('B2BRoom');

  const conditions = [
    {
      title: 'Platinum',
      text: t('access_platinum'),
      icon: 'solar:crown-minimalistic-bold',
      highlight: true
    },
    {
      title: 'Gold / Silver',
      text: t('access_gold_silver'),
      icon: 'solar:star-bold',
      highlight: false
    },
    {
      title: 'Non Affiliati',
      text: t('access_non_affiliate'),
      icon: 'solar:user-plus-bold',
      highlight: false
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="text-[10px] font-bold tracking-[0.4em] text-brand-primary uppercase mb-6">Accesso Riservato</span>
          <h2 className="fluid-heading-2 font-serif text-brand-dark uppercase tracking-tight mb-8">
            {t('access_title')}
          </h2>
          <div className="h-px w-24 bg-brand-dark/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {conditions.map((item, index) => (
            <div 
              key={index} 
              className={`p-10 lg:p-12 border transition-all duration-500 group ${
                item.highlight 
                  ? 'bg-brand-dark border-brand-dark text-white shadow-2xl scale-105 z-10' 
                  : 'bg-brand-alabaster/30 border-brand-dark/5 text-brand-dark hover:bg-white hover:border-brand-primary/20'
              }`}
            >
              <div className={`h-16 w-16 mb-8 flex items-center justify-center rounded-full transition-colors duration-500 ${
                item.highlight ? 'bg-brand-primary text-white' : 'bg-brand-dark/5 text-brand-primary group-hover:bg-brand-primary group-hover:text-white'
              }`}>
                <Icon icon={item.icon} className="text-3xl" />
              </div>
              <h3 className={`text-xl font-serif uppercase mb-6 tracking-tight ${item.highlight ? 'text-brand-beige' : 'text-brand-dark'}`}>
                {item.title}
              </h3>
              <p className={`text-[15px] lg:text-[17px] leading-relaxed font-sans font-medium ${item.highlight ? 'text-white/70' : 'text-brand-dark/60'}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
