'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { InternalHero } from './InternalHero';

interface B2BRoomHeroProps {
  onOpenDrawer: () => void;
}

export const B2BRoomHero: React.FC<B2BRoomHeroProps> = ({ onOpenDrawer }) => {
  const t = useTranslations('B2BRoom');

  return (
    <InternalHero 
      variant="premium"
      badge="Sessioni B2B Online Assistite"
      title={t('hero_title')}
      description={t('hero_description')}
      imageSrc="/media/image-pages/b2b-room (3).webp"
      cta={[
        { label: t('hero_cta'), onClick: onOpenDrawer }
      ]}
    />
  );
};
