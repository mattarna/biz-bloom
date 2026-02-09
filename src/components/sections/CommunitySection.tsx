import React from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';
import Image from 'next/image';

export const CommunitySection = () => {
  const t = useTranslations('Community');

  return (
    <section className="relative section-padding bg-white overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E7E5E3]/30 -skew-x-12 translate-x-24 pointer-events-none hidden lg:block" />

      <div className="relative z-10 container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Visual Representation (Updated with Image) */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="w-full max-w-[600px] aspect-square sm:aspect-[4/5] relative mx-auto">
              
              {/* Image representing community */}
              <div className="absolute inset-0 overflow-hidden rounded-sm shadow-2xl">
                <Image 
                  src="/media/Community (1).webp" 
                  alt="Biz Bloom Community" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
              
              {/* Floating Label - Community Insight (Preserved) */}
              <div className="absolute top-1/2 -right-4 sm:-right-8 lg:-right-16 -translate-y-1/2 bg-white p-6 lg:p-10 shadow-[0_40px_80px_-15px_rgba(10,77,70,0.2)] border border-[#0D453D]/5 max-w-[200px] lg:max-w-[280px] z-20">
                 <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-6">
                    <div className="h-1.5 lg:h-2 w-1.5 lg:w-2 rounded-full bg-[#0A4D46] animate-pulse" />
                    <span className="text-[9px] lg:text-[11px] font-bold tracking-[0.3em] text-[#0A4D46] uppercase">Community Insight</span>
                 </div>
                 <p className="text-[14px] lg:text-[16px] text-[#0D453D] leading-relaxed font-sans font-semibold italic">
                   "Far parte di Biz Bloom significa avere un ufficio a Singapore e partner in ogni mercato."
                 </p>
                 <div className="mt-4 lg:mt-6 flex items-center gap-3 opacity-30">
                    <div className="h-[1px] w-6 lg:w-8 bg-[#0D453D]" />
                    <span className="text-[9px] lg:text-[10px] font-bold uppercase">Membri Attivi</span>
                 </div>
              </div>

            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 lg:pl-12 order-1 lg:order-2">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#0A4D46] uppercase font-sans mb-8 lg:mb-12 block">
              {t('badge')}
            </span>
            
            <h2 className="text-[#0D453D] fluid-heading-2 font-serif leading-[1.2] lg:leading-[1.05] tracking-tight uppercase mb-8 lg:mb-10">
              {t('title')}
            </h2>

            <p className="text-base lg:text-lg text-[#0D453D]/60 leading-relaxed font-sans font-medium mb-12 lg:mb-16 max-w-lg">
              {t('description')}
            </p>

            {/* CTA Box */}
            <div className="bg-[#0D453D] p-8 lg:p-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -translate-y-16 translate-x-16 rotate-45 group-hover:scale-150 transition-transform duration-1000" />
              <h3 className="text-xl lg:text-2xl font-serif text-white uppercase mb-4 relative z-10">
                {t('cta_title')}
              </h3>
              <p className="text-[#E7E5E3]/60 text-sm lg:text-[15px] mb-8 lg:mb-10 relative z-10 font-sans font-medium leading-relaxed">
                {t('cta_desc')}
              </p>
              <button className="w-full sm:w-auto bg-white text-[#0D453D] px-8 lg:px-10 py-4 lg:py-5 text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-[#BEB1A3] hover:text-white transition-all relative z-10 flex items-center justify-center gap-4">
                {t('cta_button')}
                <Icon icon="solar:arrow-right-linear" className="text-lg" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
