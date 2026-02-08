'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export const AboutHomeSection = () => {
  const t = useTranslations('AboutHome');

  return (
    <section className="relative section-padding bg-[#E7E5E3] overflow-hidden border-t border-[#0D453D]/10">
      
      <div className="relative z-10 container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Column: Image - Top on mobile, Left on desktop */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1">
            <div className="relative w-full max-w-[320px] lg:max-w-[420px]">
              {/* Image Frame with Technical Details */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#D6CDC2] shadow-2xl">
                <Image
                  src="/media/Daniela Di Francia Profile Photo.webp"
                  alt="Daniela Di Francia — Founder & CEO"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                
                {/* Inner Border */}
                <div className="absolute inset-4 border border-white/20 pointer-events-none" />
              </div>

              {/* Signature/Name Tag - Compact */}
              <div className="absolute -bottom-4 right-4 bg-white p-3 lg:p-4 shadow-xl border border-[#0D453D]/5">
                <p className="text-[10px] lg:text-[11px] font-bold text-[#0D453D] uppercase tracking-widest">D. Di Francia</p>
                <p className="text-[8px] lg:text-[9px] text-[#0A4D46] font-bold uppercase tracking-[0.2em] mt-0.5">Founder</p>
              </div>
            </div>
          </div>

          {/* Column: Content - Bottom on mobile, Right on desktop */}
          <div className="lg:col-span-7 text-center lg:text-left order-2">
            <div className="max-w-4xl mx-auto lg:mx-0">
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#0A4D46] uppercase font-sans mb-8 lg:mb-10 block">
                {t('badge')}
              </span>
              
              <h2 className="text-[#0D453D] fluid-heading-2 font-serif leading-[1.2] lg:leading-[1.05] tracking-tight uppercase mb-8 lg:mb-10">
                <span className="block opacity-40">{t('title_1')}</span>
                <span className="block">{t('title_2')}</span>
              </h2>

              <div className="space-y-8 lg:space-y-10 font-sans">
                <div className="space-y-6 lg:space-y-8">
                  <p className="text-lg lg:text-xl text-[#0D453D] font-semibold leading-snug tracking-tight">
                    {t('text_1')}
                  </p>
                  <p className="text-[15px] lg:text-[17px] text-[#0D453D]/70 leading-relaxed font-medium">
                    {t('text_2')}
                  </p>
                </div>

                <div className="bg-[#FFFFFF]/60 p-8 lg:p-12 border-l-4 border-[#0A4D46] shadow-md text-left">
                  <p className="text-[15px] lg:text-[16px] text-[#0D453D] leading-relaxed font-serif font-medium italic mb-8">
                    {t('text_3')}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-auto pt-6 border-t border-[#0D453D]/10">
                    <a 
                      href="https://www.thedifrancialawfirm.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[11px] lg:text-[12px] font-extrabold tracking-[0.2em] text-[#0A4D46] uppercase hover:tracking-[0.3em] transition-all"
                    >
                      Law Firm Website
                    </a>
                    <button className="text-[12px] lg:text-[13px] font-extrabold tracking-[0.2em] text-[#0D453D] uppercase hover:text-[#0A4D46] transition-colors flex items-center gap-3 group">
                      {t('cta')}
                      <Icon icon="solar:arrow-right-linear" className="text-lg group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
