'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const BrainyBoxIntro = () => {
  const t = useTranslations('BrainyBox');

  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-white relative overflow-hidden">
      {/* Subtle background text */}
      <div className="absolute top-10 right-10 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <span className="text-[200px] font-serif uppercase tracking-tighter">Strategy</span>
      </div>
      
      <div className="container-wide relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* HEADER AREA */}
          <div className="mb-20 lg:mb-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-brand-primary" />
              <span className="text-[10px] lg:text-[11px] font-bold tracking-[0.4em] text-brand-primary uppercase font-sans">
                Professional Strategy
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="fluid-heading-2 font-serif text-brand-dark uppercase tracking-tight leading-[1.05] max-w-4xl"
            >
              {t('intro_title')}
            </motion.h2>
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            {/* Left: Content & Icon Blocks */}
            <div className="lg:col-span-6 space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <p className="text-[20px] lg:text-[24px] leading-relaxed text-brand-dark/90 font-sans font-medium">
                  {t('intro_p1')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                  <div className="space-y-4">
                    <div className="h-10 w-10 rounded-full bg-brand-alabaster flex items-center justify-center border border-brand-dark/5 shadow-sm">
                      <Icon icon="solar:shield-keyhole-bold" className="text-brand-primary text-xl" />
                    </div>
                    <h4 className="text-[11px] font-bold text-brand-dark uppercase tracking-wider">Ambiente Riservato</h4>
                    <p className="text-sm text-brand-dark/50 font-sans leading-relaxed">Privacy garantita e accesso limitato al team amministrativo.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="h-10 w-10 rounded-full bg-brand-alabaster flex items-center justify-center border border-brand-dark/5 shadow-sm">
                      <Icon icon="solar:users-group-two-rounded-bold" className="text-brand-primary text-xl" />
                    </div>
                    <h4 className="text-[11px] font-bold text-brand-dark uppercase tracking-wider">Accesso Investitori</h4>
                    <p className="text-sm text-brand-dark/50 font-sans leading-relaxed">Presentazione selezionata a partner e business angel affiliati.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Large Image with Overlays */}
            <div className="lg:col-span-6 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-[4/5] relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(13,69,61,0.15)] rounded-2xl group"
              >
                <Image 
                  src="/media/image-pages/image-brainybox.webp" 
                  alt="The Brainy Box" 
                  fill 
                  className="object-cover transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-1000" />
                
                {/* Floating element */}
                <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-8 shadow-2xl rounded-xl translate-y-10 group-hover:translate-y-0 transition-transform duration-700 border border-brand-dark/5">
                   <div className="flex items-center gap-4 mb-3">
                     <Icon icon="solar:medal-star-bold" className="text-brand-primary text-2xl" />
                     <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Elite Standard</span>
                   </div>
                   <p className="text-sm text-brand-dark font-sans leading-relaxed">
                     Ogni progetto viene analizzato strategicamente per i mercati internazionali.
                   </p>
                </div>
              </motion.div>
            </div>

          </div>

          {/* LOWER CONTENT ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mt-24 items-start">
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="h-px w-20 bg-brand-primary/30" />
                <p className="text-[17px] lg:text-[19px] leading-relaxed text-brand-dark/70 font-sans">
                  {t('intro_p2')}
                </p>
                <p className="text-[17px] lg:text-[19px] leading-relaxed text-brand-dark/70 font-sans">
                  {t('intro_p3')}
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-dark p-10 lg:p-14 text-white rounded-[40px] shadow-2xl relative overflow-hidden group h-full flex flex-col justify-center"
              >
                <div className="absolute -top-10 -right-10 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon icon="solar:crown-minimalistic-bold" className="text-[200px]" />
                </div>
                <div className="relative z-10 space-y-6">
                  <div className="h-1 w-12 bg-brand-primary" />
                  <p className="text-brand-beige text-[11px] font-bold uppercase tracking-[0.4em]">
                    Il Valore della Struttura
                  </p>
                  <p className="text-2xl lg:text-3xl font-serif italic leading-snug">
                    "La Brainy Box non promette finanziamenti automatici: offre metodo, struttura e protezione."
                  </p>
                  <div className="pt-6">
                     <Icon icon="solar:double-alt-arrow-down-linear" className="text-brand-primary text-4xl animate-bounce" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
