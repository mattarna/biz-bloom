'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';

export const EarlyBirdSection = () => {
  const t = useTranslations('EarlyBird');

  return (
    <div className="bg-[#E7E5E3]">
      {/* 1. EARLY BIRD BAND */}
      <section className="relative section-padding bg-[#0D453D] overflow-hidden mx-4 sm:mx-8 lg:mx-16">
        
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[20px] lg:border-[40px] border-white rotate-12" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/20 bg-white/5 mb-8">
                <div className="h-1.5 lg:h-2 w-1.5 lg:w-2 rounded-full bg-[#BEB1A3] animate-pulse" />
                <span className="text-[9px] lg:text-[10px] font-bold tracking-[0.3em] text-white uppercase">{t('badge')}</span>
              </div>
              
              <h2 className="text-white text-[clamp(1.75rem,4vw,3rem)] font-serif font-bold uppercase leading-[1.1] mb-6">
                {t('title')}
              </h2>
              <p className="text-[#E7E5E3]/60 text-base lg:text-lg font-sans font-medium mb-8">
                {t('subtitle')}
              </p>
              <p className="text-[13px] lg:text-[15px] text-[#BEB1A3] font-bold tracking-wide uppercase">
                {t('promo')}
              </p>
            </div>

            <div className="w-full lg:w-auto flex-shrink-0">
              <button className="w-full sm:w-auto bg-white text-[#0D453D] px-10 lg:px-12 py-5 lg:py-6 text-[13px] lg:text-[14px] font-bold tracking-[0.2em] uppercase hover:bg-[#BEB1A3] hover:text-white transition-all shadow-2xl flex items-center justify-center gap-4 group">
                {t('button')}
                <Icon icon="solar:fire-bold" className="text-xl transition-transform group-hover:scale-125" />
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
