'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { useTranslations } from 'next-intl';

export const DigitalStoreHero = () => {
  const t = useTranslations('DigitalStorePage');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen w-full overflow-hidden bg-brand-alabaster flex flex-col">
      
      {/* 1. LAYER VIDEO/BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover grayscale brightness-[0.8]"
        >
          <source src="/media/Biz Singapore Background.mp4" type="video/mp4" />
        </video>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-brand-alabaster via-brand-alabaster/90 lg:to-brand-alabaster/30" />
      </div>

      {/* 2. CONTENT */}
      <div className="relative z-10 container-wide flex-1 flex flex-col justify-center pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-brand-primary" />
            <span className="text-[11px] font-bold tracking-[0.4em] text-brand-primary uppercase font-sans">
              Landing Page Premium
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-brand-dark mb-8 leading-[1.1] tracking-tight font-serif">
            <span className="block fluid-heading-1 font-medium">
              {t('hero_title')}
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-[18px] lg:text-[22px] font-medium text-brand-dark/70 leading-relaxed max-w-2xl mb-12 font-sans">
            {t('hero_subtitle')}
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
            <button 
              onClick={() => scrollToSection('demo')}
              className="group bg-brand-dark text-brand-alabaster px-10 py-5 text-[14px] font-bold tracking-[0.2em] uppercase hover:bg-brand-primary transition-all flex items-center justify-center gap-4 shadow-xl shadow-brand-dark/10 font-sans"
            >
              <Icon icon="solar:play-bold" className="text-xl" />
              {t('hero_cta_demo')}
            </button>
            
            <button 
              onClick={() => scrollToSection('richiedi')}
              className="group border border-brand-dark/20 bg-white/50 backdrop-blur-md text-brand-dark px-10 py-5 text-[14px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-all flex items-center justify-center gap-4 font-sans"
            >
              <Icon icon="solar:pen-new-square-bold" className="text-xl" />
              {t('hero_cta_request')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
