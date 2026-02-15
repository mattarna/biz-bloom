'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export const HowItWorks = () => {
  const t = useTranslations('HowItWorks');

  return (
    <section className="section-padding bg-[#E7E5E3] overflow-hidden border-y border-[#0D453D]/5">
      <div className="container-wide">
        
        <h2 className="text-[#0D453D] fluid-heading-2 font-serif leading-none tracking-tight uppercase mb-16 lg:mb-24">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 mb-20">
          
          {/* Step 1 */}
          <div className="relative group">
            <span className="absolute -top-6 -left-2 text-[7rem] font-serif text-[#0D453D]/5 leading-none select-none">1</span>
            <div className="relative z-10 pt-4">
              <div className="h-px w-12 bg-[#0A4D46]/30 mb-8 group-hover:w-24 transition-all duration-500" />
              <p className="text-[#0D453D]/70 text-base lg:text-lg leading-relaxed font-sans font-medium">
                {t('step_1')}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <span className="absolute -top-6 -left-2 text-[7rem] font-serif text-[#0D453D]/5 leading-none select-none">2</span>
            <div className="relative z-10 pt-4">
              <div className="h-px w-12 bg-[#0A4D46]/30 mb-8 group-hover:w-24 transition-all duration-500" />
              <p className="text-[#0D453D]/70 text-base lg:text-lg leading-relaxed font-sans font-medium">
                {t('step_2')}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <span className="absolute -top-6 -left-2 text-[7rem] font-serif text-[#0D453D]/5 leading-none select-none">3</span>
            <div className="relative z-10 pt-4">
              <div className="h-px w-12 bg-[#0A4D46]/30 mb-8 group-hover:w-24 transition-all duration-500" />
              <p className="text-[#0D453D]/70 text-base lg:text-lg leading-relaxed font-sans font-medium italic">
                {t('step_3')}
              </p>
            </div>
          </div>

        </div>

        <button className="bg-[#0D453D] text-white px-10 py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#BEB1A3] transition-all shadow-lg">
          {t('cta')}
        </button>

      </div>
    </section>
  );
};
