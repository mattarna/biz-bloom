'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { InternalHero } from './InternalHero';
import Image from 'next/image';

export const DigitalStoreHero = () => {
  const t = useTranslations('DigitalStorePage');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <InternalHero 
      variant="service"
      badge="Landing Page Premium"
      title={t('hero_title')}
      description={t('hero_subtitle')}
      videoSrc="/media/Biz Singapore Background.mp4"
      sideElement={
        <div className="aspect-[4/5] relative overflow-hidden shadow-2xl group">
          <Image 
            src="/media/image-pages/image-digitalstores (4).webp" 
            alt="Digital Store Preview" 
            fill 
            className="object-cover transition-all duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-brand-dark/10" />
          <div className="absolute inset-4 border border-white/20" />
        </div>
      }
      cta={[
        { label: t('hero_cta_demo'), onClick: () => scrollToSection('demo'), icon: 'solar:play-bold' },
        { label: t('hero_cta_request'), onClick: () => scrollToSection('richiedi'), icon: 'solar:pen-new-square-bold' }
      ]}
    />
  );
};