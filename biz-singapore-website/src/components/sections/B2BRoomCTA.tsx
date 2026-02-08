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
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase font-sans">Pronto ad Espanderti?</span>
        </div>

        <h2 className="fluid-heading-1 font-serif leading-tight">
          La tua missione B2B <br className="hidden lg:block" /> inizia qui.
        </h2>

        <p className="text-lg lg:text-xl text-brand-beige/60 font-sans max-w-2xl mx-auto leading-relaxed">
          Configura ora la tua richiesta. Analizzeremo il tuo profilo aziendale e ti ricontatteremo per definire i prossimi passi operativi.
        </p>

        <div className="pt-8">
          <button
            onClick={onOpenDrawer}
            className="group bg-brand-alabaster text-brand-dark px-16 py-8 text-[12px] font-bold tracking-[0.4em] uppercase hover:bg-brand-beige transition-all shadow-2xl font-sans"
          >
            {t('hero_cta')}
          </button>
        </div>
      </div>
    </section>
  );
};
