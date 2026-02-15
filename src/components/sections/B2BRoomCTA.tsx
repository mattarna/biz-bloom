'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

interface B2BRoomCTAProps {
  onOpenDrawer: () => void;
}

export const B2BRoomCTA: React.FC<B2BRoomCTAProps> = ({ onOpenDrawer }) => {
  const t = useTranslations('B2BRoom');

  return (
    <section className="section-padding bg-brand-dark text-brand-alabaster overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 text-center space-y-12">
        <div className="inline-flex items-center gap-3 mb-4 opacity-40">
          <div className="h-1.5 w-1.5 rounded-full bg-brand-beige" />
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase font-sans">Business Ready</span>
        </div>

        <h2 className="fluid-heading-1 font-serif leading-tight">
          {t('cta_title')}
        </h2>

        <div className="flex flex-col items-center justify-center gap-8 pt-8">
            <button
              onClick={onOpenDrawer}
              className="group bg-brand-primary text-white px-16 py-8 text-[12px] font-bold tracking-[0.4em] uppercase hover:bg-brand-beige hover:text-brand-dark transition-all shadow-2xl font-sans"
            >
              {t('hero_cta')}
            </button>
        </div>
      </div>
    </section>
  );
};
