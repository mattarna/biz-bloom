'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';

export const EcosystemSection = () => {
  const t = useTranslations('Ecosystem');

  const items = [
    { title: t('item_1_title'), desc: t('item_1_desc'), icon: 'solar:square-academic-cap-linear' },
    { title: t('item_2_title'), desc: t('item_2_desc'), icon: 'solar:chat-round-dots-linear' },
    { title: t('item_3_title'), desc: t('item_3_desc'), icon: 'solar:shop-linear' },
    { title: t('item_4_title'), desc: t('item_4_desc'), icon: 'solar:users-group-two-rounded-linear' },
    { title: t('item_5_title'), desc: t('item_5_desc'), icon: 'solar:crown-linear' },
    { title: t('item_6_title'), desc: t('item_6_desc'), icon: 'solar:star-linear' },
    { title: t('item_7_title'), desc: t('item_7_desc'), icon: 'solar:lightbulb-bolt-linear' },
  ];

  return (
    <section className="relative section-padding bg-brand-alabaster overflow-hidden">
      
      <div className="relative z-10 container-wide">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-primary uppercase font-sans mb-8 lg:mb-10 block">
              {t('badge')}
            </span>
            <h2 className="text-brand-dark fluid-heading-2 font-serif leading-[1.2] lg:leading-[1.05] tracking-tight uppercase">
              {t('title')}
            </h2>
          </div>
          <div className="flex items-center gap-4 text-brand-dark/30 mb-4">
            <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-widest">Digital Ecosystem</span>
            <div className="h-[1px] w-8 lg:w-12 bg-brand-dark/20" />
          </div>
        </div>

        {/* Grid Layout - Technical & Modular */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-dark/10 border border-brand-dark/10">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`p-8 lg:p-12 bg-brand-alabaster hover:bg-white transition-all duration-500 group relative overflow-hidden ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              {/* Technical index number */}
              <span className="absolute top-6 lg:top-8 right-6 lg:right-8 text-[10px] font-mono text-brand-dark/20 group-hover:text-brand-primary transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="h-12 lg:h-14 w-12 lg:w-14 bg-brand-dark/5 flex items-center justify-center mb-8 lg:mb-12 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-500">
                <Icon icon={item.icon} className="text-2xl lg:text-3xl text-brand-primary group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl lg:text-2xl font-serif text-brand-dark uppercase mb-4 lg:mb-5 tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-[16px] lg:text-[18px] text-brand-dark/50 leading-relaxed font-sans font-medium max-w-[320px]">
                {item.desc}
              </p>

              {/* Hover bottom line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-primary group-hover:w-full transition-all duration-700" />
            </div>
          ))}
          
          {/* Join Module (Fill the grid) */}
          <div className="p-8 lg:p-12 bg-brand-dark flex flex-col justify-center items-center text-center group">
             <Icon icon="solar:globus-outline" className="text-4xl lg:text-5xl text-brand-alabaster/20 mb-6 lg:mb-8 animate-spin-slow" />
             <p className="text-white font-serif uppercase text-lg lg:text-xl mb-6">Pronto ad entrare?</p>
             <button className="text-[11px] font-bold tracking-[0.2em] text-brand-alabaster border-b border-brand-alabaster/30 pb-1 hover:border-brand-alabaster transition-all">
               SCOPRI I PIANI
             </button>
          </div>
        </div>

      </div>
    </section>
  );
};
