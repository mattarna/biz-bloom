'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const B2BRoomMarkets = () => {
  const t = useTranslations('B2BRoom');

  const markets = [
    { name: 'Dubai / UAE', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Saudi Arabia', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e84?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Kuwait', image: 'https://images.unsplash.com/photo-1518391846015-55a9cb000b21?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Singapore', image: 'https://images.unsplash.com/photo-1525625232747-0ef45f85a271?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Hungary', image: 'https://images.unsplash.com/photo-1512288094938-363287817259?q=80&w=2070&auto=format&fit=crop' },
  ];

  return (
    <section className="section-padding bg-brand-alabaster/30">
      <div className="container-wide">
        <div className="flex flex-col items-center text-center gap-6 mb-16 lg:mb-24">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-brand-primary" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-brand-primary uppercase font-sans">
              Network Globale
            </span>
            <div className="h-[1px] w-8 bg-brand-primary" />
          </div>
          <h2 className="fluid-heading-1 font-serif text-brand-dark">Mercati Target</h2>
          <p className="text-lg text-brand-dark/60 font-sans max-w-2xl">
            Scegli il tuo prossimo orizzonte commerciale. Operiamo esclusivamente in aree ad alto potenziale con relazioni consolidate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {markets.map((market, idx) => (
            <div key={market.name} className="relative aspect-[3/4] group overflow-hidden shadow-xl">
              <Image
                src={market.image}
                alt={market.name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-bold tracking-[0.3em] text-brand-beige uppercase block mb-1">
                  Area {idx + 1}
                </span>
                <h3 className="text-xl font-serif text-white tracking-tight">{market.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
