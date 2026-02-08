'use client';

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useTranslations } from 'next-intl';
import { DemoModal } from '@/components/ui/DemoModal';

export const DigitalStoreDemo = () => {
  const t = useTranslations('DigitalStorePage');
  const [selectedDemo, setSelectedDemo] = useState<{url: string, title: string} | null>(null);

  const demos = [
    { 
      id: '1', 
      key: 'demo_1', 
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=1000' 
    },
    { 
      id: '2', 
      key: 'demo_2', 
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1000' 
    },
  ];

  return (
    <section id="demo" className="section-padding bg-brand-alabaster relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-blueprint" />
      
      <div className="container-wide relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-brand-primary" />
            <span className="text-[11px] font-bold tracking-[0.4em] text-brand-primary uppercase font-sans">
              Prova Concreta
            </span>
            <div className="h-[1px] w-12 bg-brand-primary" />
          </div>
          <h2 className="text-brand-dark fluid-heading-2 font-serif leading-none tracking-tight uppercase">
            {t('demo_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {demos.map((demo) => (
            <div 
              key={demo.id} 
              className="group bg-white rounded-[40px] border border-brand-dark/5 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col cursor-pointer"
              onClick={() => setSelectedDemo({ 
                url: `/it/digital-stores/demo-${demo.id}`, 
                title: t(`${demo.key}_name`) 
              })}
            >
              <div className="aspect-[16/9] bg-brand-dark/5 relative overflow-hidden">
                {/* Image Placeholder */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0" 
                  style={{ backgroundImage: `url(${demo.image})` }}
                />
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/10 transition-colors duration-700" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="bg-white text-brand-dark px-8 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-2xl">
                    Apri Preview Interattiva
                  </div>
                </div>
              </div>
              
              <div className="p-10 lg:p-12 space-y-8 flex-1 flex flex-col">
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-serif text-brand-dark">
                    {t(`${demo.key}_name`)}
                  </h3>
                  <p className="text-brand-dark/60 font-sans font-medium text-lg leading-relaxed">
                    {t(`${demo.key}_desc`)}
                  </p>
                </div>
                
                <div className="pt-8 mt-auto border-t border-brand-dark/5">
                  <button 
                    className="inline-flex items-center gap-4 text-[12px] font-bold tracking-[0.3em] text-brand-primary uppercase group/link"
                  >
                    {t('demo_cta')}
                    <div className="h-10 w-10 rounded-full border border-brand-primary/20 flex items-center justify-center group-hover/link:bg-brand-primary group-hover/link:text-white transition-all">
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Experience Modal */}
      <DemoModal 
        isOpen={!!selectedDemo}
        onClose={() => setSelectedDemo(null)}
        url={selectedDemo?.url || ''}
        title={selectedDemo?.title || ''}
      />
    </section>
  );
};
