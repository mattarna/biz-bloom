'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const ParlourStrategic = () => {
  const t = useTranslations('ParlourPage');

  return (
    <section className="section-padding bg-brand-alabaster relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-brand-dark fluid-heading-2 font-serif leading-none tracking-tight uppercase mb-8">
              {t('strategic_title')}
            </h2>
            <p className="text-2xl lg:text-3xl font-serif text-brand-primary mb-16 italic leading-tight">
              {t('strategic_subtitle')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6 border-l-2 border-brand-primary/20 pl-8">
                <p className="text-lg lg:text-xl text-brand-dark/80 leading-relaxed font-sans font-medium italic">
                  {t('strategic_p1')}
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-lg lg:text-xl text-brand-dark/80 leading-relaxed font-sans font-medium">
                  {t('strategic_p2')}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/5] relative overflow-hidden shadow-2xl group">
              <Image 
                src="/media/image-pages/image-theparlour (4).webp" 
                alt={t('strategic_title')}
                fill 
                className="object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-dark/5" />
              <div className="absolute -inset-4 border border-brand-primary/10 -z-10 translate-x-8 translate-y-8" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-brand-dark/[0.02] hidden lg:block" />
    </section>
  );
};
