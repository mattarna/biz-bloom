'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { useTranslations } from 'next-intl';

export const HeroSection = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-screen lg:h-[115vh] w-full overflow-hidden bg-[#E7E5E3] flex flex-col">
      
      {/* 1. LAYER VIDEO - Trattato per massima pulizia */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/media/BIZ BLOOM SINGAPORE V3.mp4" type="video/mp4" />
        </video>
        
        {/* Cinematic Mist: Sfumatura profonda per isolare il testo a sinistra */}
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#E7E5E3] via-[#E7E5E3]/95 lg:to-[#E7E5E3]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#E7E5E3]/30 via-transparent to-[#E7E5E3]/40" />
      </div>

      {/* 2. GRIGLIA PRINCIPALE (Massima larghezza per eliminare l'aria ai lati) */}
      <div className="relative z-10 container-wide flex-1 flex flex-col justify-center pt-24 lg:pt-32 pb-40 lg:pb-80">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* SINISTRA: Contenuto Razor-Sharp con Copy da Site Map */}
          <div className="w-full lg:col-span-7 flex flex-col justify-center">
            
            {/* Minimal Tagline */}
            <div className="flex items-center gap-4 mb-8 lg:mb-12">
              <div className="h-[1px] w-8 lg:w-10 bg-[#0A4D46]" />
              <span className="text-[10px] lg:text-[11px] font-bold tracking-[0.4em] text-[#0A4D46] uppercase font-sans">
                {t('badge')}
              </span>
            </div>

            {/* Headline: Fedele alla Site Map */}
            <h1 className="text-[#0D453D] mb-6 lg:mb-8 leading-[1.1] lg:leading-[1.05] tracking-tight font-serif">
              <span className="block fluid-heading-1 font-medium">
                {t('title_1')}
              </span>
              <span className="block fluid-heading-1 font-medium">
                {t('title_2')}
              </span>
            </h1>

            {/* Paragrafo: Aria e Leggibilità - Integrato con copy Site Map */}
            <p className="text-[18px] lg:text-[22px] font-medium text-[#0D453D]/60 leading-relaxed max-w-2xl mb-10 lg:mb-16 font-sans">
              {t('description')}
            </p>

            {/* CTA Group: Allineati e leggibili */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 lg:gap-12 mb-12 lg:mb-16">
              <button className="group bg-[#0D453D] text-[#E7E5E3] px-10 lg:px-16 py-5 lg:py-6 text-[13px] lg:text-[14px] font-bold tracking-[0.2em] uppercase hover:bg-[#0A4D46] transition-all flex items-center justify-center gap-5 shadow-xl shadow-[#0D453D]/10 font-sans">
                {t('cta_primary')}
                <Icon icon="solar:arrow-right-linear" className="text-2xl transition-transform group-hover:translate-x-2" />
              </button>
              
              <button className="flex items-center justify-center gap-4 group text-[#0D453D]/60 hover:text-[#0D453D] transition-colors py-2">
                <div className="h-12 lg:h-16 w-12 lg:h-16 rounded-full border border-[#0A4D46]/20 flex items-center justify-center group-hover:bg-[#0A4D46]/5 transition-all">
                  <Icon icon="solar:user-bold" className="text-sm text-[#0A4D46]" />
                </div>
                <span className="text-[12px] lg:text-[13px] font-bold tracking-[0.2em] text-[#0D453D] uppercase font-sans">
                  {t('cta_secondary')}
                </span>
              </button>
            </div>

            {/* Micro Metriche sotto CTA */}
            <div className="flex flex-wrap items-center gap-8 lg:gap-16 font-sans border-t border-[#0A4D46]/10 pt-8 lg:border-none lg:pt-0">
              <div className="flex items-baseline gap-2">
                <span className="text-xl lg:text-3xl font-serif text-[#0D453D]">{t('metric_1_value')}+</span>
                <span className="text-[9px] lg:text-[11px] font-bold tracking-[0.2em] text-[#0D453D]/40 uppercase">{t('metric_1_label')}</span>
              </div>
              <div className="hidden sm:block h-6 w-[1px] bg-[#0A4D46]/20" />
              <div className="flex items-baseline gap-2">
                <span className="text-xl lg:text-3xl font-serif text-[#0D453D]">4+</span>
                <span className="text-[9px] lg:text-[11px] font-bold tracking-[0.2em] text-[#0D453D]/40 uppercase">Mercati Globali</span>
              </div>
            </div>

          </div>

          {/* DESTRA: The Glass Pillar (Raffinato e Leggibile) */}
          <div className="w-full lg:col-span-5 flex flex-col justify-center items-center lg:items-end pb-12 lg:pb-0">
            
            <div className="w-full max-w-[480px] lg:translate-x-20 bg-white/10 backdrop-blur-[40px] border border-white/20 p-8 lg:p-16 flex flex-col gap-8 lg:gap-10 shadow-[0_40px_80px_-15px_rgba(10,77,70,0.15)] relative overflow-hidden">
              
              {/* Block 1: Location */}
              <div className="border-b border-white/10 pb-6 lg:pb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] lg:text-[11px] font-bold tracking-[0.3em] text-[#0D453D]/40 uppercase font-sans">{t('sidebar_hub')}</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#0A4D46] animate-pulse" />
                </div>
                <p className="text-4xl lg:text-5xl font-serif text-[#0D453D] uppercase tracking-tight">{t('sidebar_location')}</p>
                <p className="text-[9px] lg:text-[10px] font-mono tracking-widest text-[#0D453D]/50 mt-4 uppercase">1.3521° N, 103.8198° E</p>
              </div>

              {/* Block 2: Founder Quote (Copy Missione da Site Map) */}
              <div className="relative">
                <Icon icon="solar:quote-left-bold" className="absolute -top-4 lg:-top-6 -left-4 lg:-left-6 text-3xl lg:text-4xl text-[#0A4D46]/10" />
                <p className="text-[16px] lg:text-[18px] text-[#0D453D] leading-relaxed font-serif italic">
                  "{t('sidebar_quote')}"
                </p>
                <div className="mt-8 lg:mt-10 flex items-center gap-4 lg:gap-5">
                  <div className="h-10 lg:h-11 w-10 lg:w-11 bg-[#0D453D] flex items-center justify-center text-[#E7E5E3] font-serif font-bold text-lg shadow-lg">D</div>
                  <div>
                    <p className="text-[11px] lg:text-[12px] font-bold text-[#0D453D] uppercase tracking-widest font-sans">{t('sidebar_author')}</p>
                    <p className="text-[9px] lg:text-[10px] text-[#0A4D46] font-bold uppercase tracking-[0.2em] mt-0.5 lg:mt-1 font-sans">{t('sidebar_role')}</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 3. FOOTER HERO - Pulizia Finale */}
        <div className="h-20 lg:h-24 border-t border-[#0A4D46]/10 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 font-sans py-4 sm:py-0 mt-auto">
          
          <div className="flex items-center gap-4 lg:gap-6">
             <div className="h-2 w-2 rounded-full bg-[#0A4D46] animate-pulse" />
             <span className="text-[9px] lg:text-[10px] font-bold tracking-[0.3em] text-[#0D453D]/40 uppercase">Global Strategic Expansion</span>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
             <div className="flex flex-col items-center sm:items-end opacity-40">
                <span className="text-[9px] lg:text-[10px] font-bold tracking-[0.3em] text-[#0D453D] uppercase mb-0.5 lg:mb-1 text-center sm:text-right">In Partnership with</span>
                <span className="text-[10px] lg:text-[11px] font-bold tracking-[0.1em] text-[#0A4D46] uppercase">Di Francia Law Firm</span>
             </div>
             <div className="hidden sm:block h-10 lg:h-12 w-[1px] bg-[#0A4D46]/10" />
             <Icon icon="solar:arrow-down-linear" className="text-lg lg:text-xl text-[#0A4D46] animate-bounce" />
          </div>

        </div>

      </div>
    </section>
  );
};
