'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';
import Image from 'next/image';

export const ParlourIntegration = () => {
  const t = useTranslations('ParlourPage');

  const items = [
    { key: 'integration_item_1', icon: 'solar:users-group-two-rounded-bold' },
    { key: 'integration_item_2', icon: 'solar:lightbulb-bold' },
    { key: 'integration_item_3', icon: 'solar:globus-bold' },
  ];

  return (
    <section className="section-padding bg-brand-dark text-brand-alabaster relative overflow-hidden">
      <div className="container-wide relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="max-w-4xl mb-12 lg:mb-16">
              <h2 className="fluid-heading-2 font-serif leading-none tracking-tight uppercase mb-8">
                {t('integration_title')}
              </h2>
              <p className="text-xl lg:text-2xl font-sans text-brand-alabaster/70 leading-relaxed">
                {t('integration_desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {items.map((item, index) => (
                <div key={index} className="flex flex-col gap-6">
                  <div className="h-12 w-12 border border-brand-beige/30 flex items-center justify-center">
                    <Icon icon={item.icon} className="text-2xl text-brand-beige" />
                  </div>
                  <p className="text-lg lg:text-xl font-serif uppercase tracking-tight leading-snug">
                    {t(item.key)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video lg:aspect-[16/10] relative overflow-hidden shadow-2xl group">
              <Image 
                src="/media/image-pages/image-theparlour (5).webp" 
                alt={t('integration_title')}
                fill 
                className="object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-dark/20" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-brand-primary/30" />
          </div>
        </div>

      </div>
    </section>
  );
};
