'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import Image from 'next/image';

interface B2BRoomHeroProps {
  onOpenDrawer: () => void;
}

export const B2BRoomHero: React.FC<B2BRoomHeroProps> = ({ onOpenDrawer }) => {
  const t = useTranslations('B2BRoom');

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Cinematic Background Image with Overlay for Readability */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="B2B Room Background"
          fill
          priority
          className="object-cover grayscale brightness-[0.3] contrast-[1.1]"
        />
        {/* Gradients for maximum readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-background" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-10">
        <div className="flex flex-col items-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-brand-primary" />
          <span className="text-[11px] font-bold tracking-[0.4em] text-brand-primary uppercase font-sans">
            Business Expansion
          </span>
        </div>

        <h1 className="text-white fluid-heading-1 font-serif leading-[0.95] tracking-tight text-balance">
          {t('hero_title')}
        </h1>

        <p className="text-[18px] lg:text-[22px] font-medium text-brand-alabaster/80 leading-relaxed max-w-2xl mx-auto font-sans">
          {t('hero_description')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <button
            onClick={onOpenDrawer}
            className="group bg-brand-primary text-brand-alabaster px-12 py-6 text-[12px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-brand-dark transition-all flex items-center gap-4 shadow-2xl shadow-brand-primary/20 font-sans"
          >
            {t('hero_cta')}
          </button>
        </div>
      </div>
      
      {/* Scroll indicator decor */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <div className="w-[1px] h-12 bg-brand-dark animate-move-down" />
      </div>
    </section>
  );
};
