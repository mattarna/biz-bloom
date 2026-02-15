'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';

export const ParlourAccess = () => {
  const t = useTranslations('ParlourPage');

  const options = [
    {
      title: t('access_preliminary_title'),
      price: t('access_preliminary_price'),
      duration: t('access_preliminary_duration'),
      desc: t('access_preliminary_desc'),
      icon: 'solar:chat-line-bold-duotone',
      isPremium: false
    },
    {
      title: t('access_professional_title'),
      price: t('access_professional_price'),
      duration: t('access_professional_duration'),
      desc: t('access_professional_desc'),
      icon: 'solar:medal-star-bold-duotone',
      isPremium: true
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        
        <h2 className="text-brand-dark fluid-heading-2 font-serif leading-none tracking-tight uppercase mb-16 lg:mb-24">
          {t('access_title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl">
          {options.map((option, index) => (
            <div 
              key={index}
              className={`p-10 lg:p-16 border ${option.isPremium ? 'border-brand-primary bg-brand-dark text-brand-alabaster' : 'border-brand-dark/5 bg-brand-alabaster/30 text-brand-dark'} transition-all duration-500 flex flex-col items-start gap-8 shadow-sm`}
            >
              <div className={`h-16 w-16 flex items-center justify-center ${option.isPremium ? 'bg-brand-alabaster/10' : 'bg-brand-dark/5'}`}>
                <Icon icon={option.icon} className={`text-3xl ${option.isPremium ? 'text-brand-beige' : 'text-brand-primary'}`} />
              </div>

              <div>
                <h3 className="text-2xl lg:text-3xl font-serif mb-2 uppercase tracking-tight">
                  {option.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className={`text-4xl lg:text-5xl font-serif ${option.isPremium ? 'text-brand-beige' : 'text-brand-primary'}`}>
                    {option.price}
                  </span>
                  <span className="opacity-60 text-sm font-sans uppercase tracking-widest font-bold">
                    / {option.duration}
                  </span>
                </div>
                <p className={`text-lg leading-relaxed opacity-80 font-sans font-medium`}>
                  {option.desc}
                </p>
              </div>

              <a 
                href="#contact"
                className={`mt-auto inline-flex items-center gap-4 px-8 py-4 text-[12px] font-bold tracking-[0.3em] uppercase transition-all ${
                  option.isPremium 
                  ? 'bg-brand-beige text-brand-dark hover:bg-white' 
                  : 'bg-brand-dark text-brand-alabaster hover:bg-brand-primary'
                }`}
              >
                {t('contact_cta_book')}
                <Icon icon="solar:arrow-right-linear" className="text-lg" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
