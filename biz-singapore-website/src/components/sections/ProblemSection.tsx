'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export const ProblemSection = () => {
  const t = useTranslations('Problem');

  return (
    <section className="relative section-padding overflow-hidden bg-[#FFFFFF]">
      
      {/* Subtle Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0A4D46 1px, transparent 1px),
            linear-gradient(to bottom, #0A4D46 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
        
        {/* Number/Badge */}
        <div className="flex justify-center mb-10 lg:mb-16">
          <span className="text-[10px] font-bold tracking-[0.5em] text-[#0A4D46]/40 uppercase font-sans">
            {t('badge')}
          </span>
        </div>

        {/* Main Statement */}
        <h2 className="text-[#0D453D] fluid-heading-2 font-serif leading-[1.2] lg:leading-[1.15] tracking-tight mb-10 lg:mb-12 uppercase max-w-4xl mx-auto">
          {t('title')}
        </h2>

        {/* Triple Point Statement */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-12">
          <p className="text-[clamp(1.1rem,2.5vw,1.6rem)] font-serif italic text-[#0D453D]/40 tracking-tight">
            {t('subtitle_1')}
          </p>
          <div className="hidden md:block h-1.5 w-1.5 rounded-full bg-[#0A4D46]/20" />
          <p className="text-[clamp(1.1rem,2.5vw,1.6rem)] font-serif italic text-[#0D453D]/40 tracking-tight">
            {t('subtitle_2')}
          </p>
          <div className="hidden md:block h-1.5 w-1.5 rounded-full bg-[#0A4D46]/20" />
          <p className="text-[clamp(1.1rem,2.5vw,1.6rem)] font-serif italic text-[#0D453D]/40 tracking-tight">
            {t('subtitle_3')}
          </p>
        </div>

      </div>
    </section>
  );
};
