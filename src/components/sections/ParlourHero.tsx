'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { InternalHero } from './InternalHero';

import Image from 'next/image';

export const ParlourHero = () => {
  const t = useTranslations('ParlourPage');

  return (
    <InternalHero 
      variant="service"
      badge={t('hero_badge')}
      title={t('hero_title')}
      description={t('hero_description')}
      sideElement={
        <div className="aspect-[4/5] relative overflow-hidden shadow-2xl group">
          <Image 
            src="/media/image-pages/image-theparlour (3).webp" 
            alt={t('hero_title')}
            fill 
            className="object-cover transition-all duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-brand-dark/10" />
          <div className="absolute inset-4 border border-white/20" />
        </div>
      }
      cta={[
        { label: t('hero_cta'), href: "#contact", icon: 'solar:calendar-bold' }
      ]}
    />
  );
};

