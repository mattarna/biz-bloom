'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const BestChoice = () => {
  const t = useTranslations('BestChoice');

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* Left: Content */}
          <div>
            <h2 className="text-[#0D453D] fluid-heading-2 font-serif leading-[1.1] tracking-tight uppercase mb-12">
              {t('title')}
            </h2>

            <div className="space-y-8 mb-16">
              <p className="text-[#0D453D]/50 text-sm lg:text-base leading-relaxed font-sans font-bold uppercase tracking-wider">
                {t('intro')}
              </p>
              <p className="text-[#0D453D]/70 text-base lg:text-lg leading-relaxed font-sans font-medium">
                {t('para_1')}
              </p>
              <p className="text-[#0D453D]/70 text-base lg:text-lg leading-relaxed font-sans font-medium">
                {t('para_2')}
              </p>
              <p className="text-[#0D453D]/70 text-base lg:text-lg leading-relaxed font-sans font-medium">
                {t('para_3')}
              </p>
            </div>

            <button className="bg-[#0D453D] text-white px-10 py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#BEB1A3] transition-all shadow-lg">
              {t('cta')}
            </button>
          </div>

          {/* Right: Image */}
          <div className="relative group">
            <div className="aspect-[4/5] relative overflow-hidden shadow-2xl">
              <Image
                src="/media/image-pages/biz-bloom-image (1).webp"
                alt="Biz Bloom - La scelta migliore"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D453D]/20 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
