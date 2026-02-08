'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';

export const AdditionalFeatures = () => {
  const t = useTranslations('AdditionalFeatures');

  return (
    <section className="pt-24 lg:pt-48 pb-12 lg:pb-24 bg-[#E7E5E3] overflow-hidden">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-16">
        
        {/* New Header Structure */}
        <div className="mb-20 lg:mb-32 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-[#0A4D46]" />
            <span className="text-[10px] lg:text-[11px] font-bold tracking-[0.4em] text-[#0A4D46] uppercase font-sans">
              {t('badge')}
            </span>
          </div>
          <h2 className="text-[#0D453D] text-[clamp(2.5rem,6vw,5rem)] font-serif leading-[1.05] tracking-tight uppercase mb-8">
            {t('title')}
          </h2>
          <p className="text-[#0D453D]/60 text-lg lg:text-xl font-sans font-medium leading-relaxed max-w-2xl">
            {t('subtitle')}
          </p>
        </div>

        {/* Feature 1: Digital Store */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px mb-px">
          <div className="bg-white p-10 lg:p-16 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-[#0A4D46] transition-all duration-700" />
            <div>
              <div className="h-16 w-16 flex items-center justify-center mb-10 rounded-full border border-[#0D453D]/10 group-hover:bg-[#0D453D]/5 transition-colors">
                <Icon icon="solar:shop-bold" className="text-3xl text-[#0A4D46]" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif text-[#0D453D] uppercase mb-6 tracking-tight">
                {t('store_title')}
              </h3>
              <p className="text-[#0D453D]/70 text-base lg:text-[17px] leading-relaxed font-sans font-medium mb-6">
                {t('store_desc')}
              </p>
              <p className="text-[#0D453D]/50 text-sm lg:text-[15px] leading-relaxed font-sans font-medium">
                {t('store_detail')}
              </p>
            </div>
            <div className="pt-10">
              <button className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#0D453D] border-b-2 border-[#0D453D]/20 pb-1 hover:border-[#0D453D] transition-all">
                {t('store_cta')}
              </button>
            </div>
          </div>

          {/* Feature 2: Blue Room */}
          <div className="bg-[#0D453D] p-10 lg:p-16 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-[#BEB1A3] transition-all duration-700" />
            <div>
              <div className="h-16 w-16 flex items-center justify-center mb-10 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors">
                <Icon icon="solar:crown-minimalistic-bold" className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif text-white uppercase mb-6 tracking-tight">
                The Singapore Blue Room
              </h3>
              <p className="text-white/70 text-base lg:text-[17px] leading-relaxed font-sans font-medium">
                {t('club_desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3: The Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px mb-px">
          <div className="bg-[#0D453D] p-10 lg:p-16 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-[#BEB1A3] transition-all duration-700" />
            <div>
              <div className="h-16 w-16 flex items-center justify-center mb-10 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors">
                <Icon icon="solar:lightbulb-bolt-bold" className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif text-white uppercase mb-6 tracking-tight">
                {t('box_title')}
              </h3>
              <p className="text-white/70 text-base lg:text-[17px] leading-relaxed font-sans font-medium mb-6">
                {t('box_desc')}
              </p>
              <p className="text-white/50 text-sm lg:text-[15px] leading-relaxed font-sans font-medium">
                {t('box_detail')}
              </p>
            </div>
            <div className="pt-10">
              <button className="text-[11px] font-bold tracking-[0.3em] uppercase text-white border-b-2 border-white/20 pb-1 hover:border-white transition-all">
                {t('box_cta')}
              </button>
            </div>
          </div>

          {/* Feature 4: The Parlour */}
          <div className="bg-white p-10 lg:p-16 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-[#0A4D46] transition-all duration-700" />
            <div>
              <div className="h-16 w-16 flex items-center justify-center mb-10 rounded-full border border-[#0D453D]/10 group-hover:bg-[#0D453D]/5 transition-colors">
                <Icon icon="solar:case-round-bold" className="text-3xl text-[#0A4D46]" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif text-[#0D453D] uppercase mb-6 tracking-tight">
                {t('parlour_title')}
              </h3>
              <p className="text-[#0D453D]/70 text-base lg:text-[17px] leading-relaxed font-sans font-medium mb-6">
                {t('parlour_desc')}
              </p>
              <p className="text-[#0D453D]/50 text-sm lg:text-[15px] leading-relaxed font-sans font-medium italic">
                {t('parlour_detail')}
              </p>
            </div>
            <div className="pt-10">
              <button className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#0D453D] border-b-2 border-[#0D453D]/20 pb-1 hover:border-[#0D453D] transition-all">
                {t('parlour_cta')}
              </button>
            </div>
          </div>
        </div>

        {/* Feature 5: Webinar e Corsi (Full Width) */}
        <div className="bg-white p-10 lg:p-16 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-[#0A4D46] transition-all duration-700" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-1">
              <div className="h-16 w-16 flex items-center justify-center rounded-full border border-[#0D453D]/10 group-hover:bg-[#0D453D]/5 transition-colors">
                <Icon icon="solar:play-circle-bold" className="text-3xl text-[#0A4D46]" />
              </div>
            </div>
            <div className="lg:col-span-8">
              <h3 className="text-2xl lg:text-3xl font-serif text-[#0D453D] uppercase mb-6 tracking-tight">
                {t('webinar_title')}
              </h3>
              <p className="text-[#0D453D]/70 text-base lg:text-[17px] leading-relaxed font-sans font-medium mb-4">
                {t('webinar_desc')}
              </p>
              <p className="text-[#0D453D]/50 text-sm lg:text-[15px] leading-relaxed font-sans font-medium">
                {t('webinar_detail')}
              </p>
            </div>
            <div className="lg:col-span-3 flex lg:justify-end">
              <button className="bg-[#0D453D] text-white px-10 py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#BEB1A3] transition-all shadow-lg">
                {t('webinar_cta')}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
