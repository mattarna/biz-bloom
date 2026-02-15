'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { InternalHero } from './InternalHero';

export const BrainyBoxHero = () => {
  const t = useTranslations('BrainyBox');

  return (
    <InternalHero 
      variant="premium"
      badge="Secure Innovation"
      title={t('hero_title')}
      description={t('hero_description')}
      imageSrc="/media/image-pages/image-brainybox.webp"
      cta={[
        { 
          label: 'Inizia il Caricamento', 
          onClick: () => document.getElementById('brainy-box-form')?.scrollIntoView({ behavior: 'smooth' }),
          icon: 'solar:arrow-down-linear'
        }
      ]}
    />
  );
};
