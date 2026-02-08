'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const B2BRoomValueSections = () => {
  const t = useTranslations('B2BRoom');

  const sections = [
    {
      id: 'missions',
      badge: 'La Tua Missione',
      title: 'Digitali o in presenza',
      description: 'Che tu scelga la flessibilità del digitale o l\'impatto della presenza fisica, ti garantiamo un percorso lineare e strutturato per il tuo successo internazionale.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
      reversed: false
    },
    {
      id: 'premium',
      badge: 'Posizionamento Premium',
      title: 'L\'opzione contatti garantiti',
      description: 'Per chi non ammette incertezze: la nostra opzione premium ti assicura incontri qualificati con decision maker pre-validati nei mercati target.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070&auto=format&fit=crop',
      reversed: true
    }
  ];

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-wide space-y-32 lg:space-y-64">
        {sections.map((section) => (
          <div 
            key={section.id} 
            className={cn(
              "flex flex-col lg:flex-row items-center gap-16 lg:gap-32",
              section.reversed && "lg:flex-row-reverse"
            )}
          >
            {/* Text Content */}
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-brand-primary" />
                <span className="text-[10px] font-bold tracking-[0.3em] text-brand-primary uppercase font-sans">
                  {section.badge}
                </span>
              </div>
              <h2 className="fluid-heading-2 font-serif text-brand-dark leading-tight tracking-tight">
                {section.title}
              </h2>
              <p className="text-lg lg:text-xl text-brand-dark/70 leading-relaxed font-sans max-w-xl">
                {section.description}
              </p>
            </div>

            {/* Image Content */}
            <div className="flex-1 w-full relative">
              <div className="relative aspect-[4/5] lg:aspect-[16/10] overflow-hidden shadow-2xl group">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-brand-dark/10 mix-blend-multiply" />
              </div>
              
              {/* Accents */}
              <div className={cn(
                "absolute -z-10 w-full h-full border border-brand-primary/10 transition-transform duration-1000 group-hover:translate-x-4 group-hover:translate-y-4",
                section.reversed ? "-top-8 -left-8" : "-bottom-8 -right-8"
              )} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
