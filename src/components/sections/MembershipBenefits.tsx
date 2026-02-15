'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';

export const MembershipBenefits = () => {
  const t = useTranslations('MembershipBenefits');

  return (
    <section className="relative overflow-hidden bg-white">
      
      {/* PART 1: Hero Section with Video Background & Glassmorphism Card */}
      <div className="relative min-h-[auto] lg:min-h-screen flex items-center section-padding">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay muted loop playsInline
            className="w-full h-full object-cover grayscale brightness-[0.2]"
          >
            <source src="/media/video-home-bizbloom.mp4" type="video/mp4" />
          </video>
          {/* Subtle patterns/overlays */}
          <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/40 to-white" />
        </div>

        <div className="relative z-10 container-wide w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-center">
            
            {/* Left: Titles */}
            <div className="lg:col-span-6">
              <span className="inline-block px-3 lg:px-4 py-1.5 bg-brand-beige/20 border border-brand-beige/30 backdrop-blur-md text-brand-beige text-[10px] font-bold tracking-[0.3em] lg:tracking-[0.4em] uppercase mb-6 lg:mb-8">
                Exclusive Membership
              </span>
              <h2 className="text-white mb-4">
                <span className="block text-[clamp(1.5rem,5vw,3.5rem)] font-serif leading-[1.1] tracking-tight uppercase opacity-80">
                  {t('title_1')}
                </span>
                <span className="block text-[clamp(2rem,7vw,5.5rem)] font-serif leading-[1] tracking-tight uppercase font-semibold">
                  {t('title_2')}
                </span>
              </h2>
              <p className="text-brand-beige text-sm lg:text-xl font-sans font-bold uppercase tracking-[0.15em] lg:tracking-[0.2em] mb-8 lg:mb-12 opacity-90">
                {t('subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 lg:gap-6">
                 <button className="bg-white text-brand-dark px-8 lg:px-12 py-4 lg:py-5 text-[11px] lg:text-[12px] font-bold tracking-[0.3em] uppercase hover:bg-brand-beige hover:text-white transition-all shadow-2xl">
                    {t('cta_1')}
                 </button>
                 <div className="hidden sm:flex items-center gap-4 text-white/40">
                    <div className="h-px w-12 bg-white/20" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Scroll for Details</span>
                 </div>
              </div>
            </div>

            {/* Right: Solid Premium Card for Benefits */}
            <div className="lg:col-span-6">
              <div className="bg-brand-dark border border-white/10 p-6 md:p-8 lg:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-12 h-12 lg:w-16 lg:h-16 border-t border-r border-brand-beige/30" />
                
                <div className="space-y-6 lg:space-y-10">
                  {[
                    { text: t('benefit_1'), icon: 'solar:globus-bold' },
                    { text: t('benefit_2'), icon: 'solar:videocamera-record-bold' },
                    { text: t('benefit_3'), icon: 'solar:crown-bold' },
                    { text: t('benefit_4'), icon: 'solar:shop-2-bold' }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-4 lg:gap-6 group">
                      <div className="h-9 w-9 lg:h-10 lg:w-10 flex-shrink-0 border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-brand-beige/20 transition-all duration-500">
                         <Icon icon={benefit.icon} className="text-lg lg:text-xl text-brand-beige" />
                      </div>
                      <p className="text-white/90 text-sm lg:text-base leading-relaxed font-sans font-medium">
                        {benefit.text}
                      </p>
                    </div>
                  ))}
                  
                  <div className="pt-6 lg:pt-8 border-t border-white/10">
                    <p className="text-white/90 text-sm lg:text-[17px] leading-relaxed font-sans font-medium italic">
                      {t('benefit_5')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* PART 2: Value Proposition & Pricing (Reimagined as a Premium Value Card) */}
      <div className="section-padding relative">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-dark/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-brand-alabaster/30 -skew-x-12 translate-x-24 pointer-events-none" />

        <div className="relative z-10 container-wide">
          <div className="bg-brand-dark overflow-hidden shadow-[0_50px_100px_-20px_rgba(10,77,70,0.3)]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Value Side (Left) */}
              <div className="lg:col-span-7 px-6 py-10 md:p-10 lg:p-20 text-white flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6 lg:mb-10 opacity-40">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-beige" />
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Professional Support</span>
                </div>
                
                <h3 className="text-[clamp(1.5rem,5vw,3.5rem)] font-serif uppercase leading-tight mb-8 lg:mb-12 tracking-tight">
                  {t('pricing_title')}
                </h3>
                
                <div className="flex items-start gap-4 lg:gap-8 mb-10 lg:mb-16 border-l-2 border-brand-beige pl-4 lg:pl-8 bg-white/5 py-6 pr-6">
                  <Icon icon="solar:shield-user-bold" className="text-3xl lg:text-5xl text-brand-beige flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm lg:text-xl leading-relaxed font-sans font-semibold mb-2">
                      Sessione Operativa Dedicata
                    </p>
                    <p className="text-white/70 text-sm lg:text-lg leading-relaxed font-sans font-medium italic">
                      {t('support')}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 lg:gap-12 pt-8 lg:pt-12 border-t border-white/10">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-brand-beige uppercase">Status</span>
                    <span className="text-base lg:text-xl font-serif uppercase tracking-widest">All Inclusive</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-brand-beige uppercase">Network</span>
                    <span className="text-base lg:text-xl font-serif uppercase tracking-widest">Global Hub</span>
                  </div>
                </div>
              </div>

              {/* Pricing/Action Side (Right) */}
              <div className="lg:col-span-5 bg-white px-6 py-10 md:p-10 lg:p-20 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-brand-dark/5">
                <div className="space-y-8 lg:space-y-10 mb-10 lg:mb-16">
                   <div className="relative">
                      <div className="flex items-center gap-3 mb-3 lg:mb-4">
                         <div className="h-2 w-2 rounded-full bg-brand-primary" />
                         <span className="text-[11px] font-bold text-brand-dark uppercase tracking-widest">Premium Tiers</span>
                      </div>
                      <p className="text-brand-dark/70 text-sm lg:text-lg leading-relaxed font-sans font-medium">
                        {t('pricing_1')}
                      </p>
                   </div>
                   
                   <div className="relative">
                      <div className="flex items-center gap-3 mb-3 lg:mb-4">
                         <div className="h-2 w-2 rounded-full border border-brand-primary bg-transparent" />
                         <span className="text-[11px] font-bold text-brand-dark/50 uppercase tracking-widest">Entry Tiers</span>
                      </div>
                      <p className="text-brand-dark/60 text-sm lg:text-lg leading-relaxed font-sans font-medium">
                        {t('pricing_2')}
                      </p>
                   </div>
                </div>

                <button className="w-full bg-brand-dark text-white py-5 lg:py-6 text-[11px] lg:text-[12px] font-bold tracking-[0.3em] lg:tracking-[0.4em] uppercase hover:bg-brand-beige transition-all shadow-xl">
                  {t('cta_2')}
                </button>
                
                <p className="mt-6 lg:mt-8 text-center text-[10px] font-bold text-brand-dark/30 uppercase tracking-[0.2em]">
                  Limited availability for early bird members
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
