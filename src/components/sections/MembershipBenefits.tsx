'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';

export const MembershipBenefits = () => {
  const t = useTranslations('MembershipBenefits');

  return (
    <section className="relative overflow-hidden bg-white">
      
      {/* PART 1: Hero Section with Video Background & Glassmorphism Card */}
      <div className="relative min-h-screen flex items-center section-padding">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay muted loop playsInline
            className="w-full h-full object-cover grayscale brightness-[0.2]"
          >
            <source src="/media/BIZ BLOOM SINGAPORE V3.mp4" type="video/mp4" />
          </video>
          {/* Subtle patterns/overlays */}
          <div className="absolute inset-0 bg-[#0D453D]/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D453D]/40 to-white" />
        </div>

        <div className="relative z-10 container-wide w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left: Titles */}
            <div className="lg:col-span-6">
              <span className="inline-block px-4 py-1.5 bg-[#BEB1A3]/20 border border-[#BEB1A3]/30 backdrop-blur-md text-[#BEB1A3] text-[10px] font-bold tracking-[0.4em] uppercase mb-8">
                Exclusive Membership
              </span>
              <h2 className="text-white mb-4">
                <span className="block fluid-heading-2 font-serif leading-[1.1] tracking-tight uppercase opacity-80">
                  {t('title_1')}
                </span>
                <span className="block fluid-heading-1 font-serif leading-[1] tracking-tight uppercase font-semibold">
                  {t('title_2')}
                </span>
              </h2>
              <p className="text-[#BEB1A3] text-lg lg:text-xl font-sans font-bold uppercase tracking-[0.2em] mb-12 opacity-90">
                {t('subtitle')}
              </p>
              
              <div className="flex flex-wrap gap-6">
                 <button className="bg-white text-[#0D453D] px-12 py-5 text-[12px] font-bold tracking-[0.3em] uppercase hover:bg-[#BEB1A3] hover:text-white transition-all shadow-2xl">
                    {t('cta_1')}
                 </button>
                 <div className="flex items-center gap-4 text-white/40">
                    <div className="h-px w-12 bg-white/20" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Scroll for Details</span>
                 </div>
              </div>
            </div>

            {/* Right: Solid Premium Card for Benefits */}
            <div className="lg:col-span-6">
              <div className="bg-[#0D453D] border border-white/10 p-8 lg:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#BEB1A3]/30" />
                
                <div className="space-y-10">
                  {[
                    { text: t('benefit_1'), icon: 'solar:globus-bold' },
                    { text: t('benefit_2'), icon: 'solar:videocamera-record-bold' },
                    { text: t('benefit_3'), icon: 'solar:crown-bold' },
                    { text: t('benefit_4'), icon: 'solar:shop-2-bold' }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="h-10 w-10 flex-shrink-0 border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-[#BEB1A3]/20 transition-all duration-500">
                         <Icon icon={benefit.icon} className="text-xl text-[#BEB1A3]" />
                      </div>
                      <p className="text-white/90 text-sm lg:text-base leading-relaxed font-sans font-medium">
                        {benefit.text}
                      </p>
                    </div>
                  ))}
                  
                  <div className="pt-8 border-t border-white/10">
                    <p className="text-white/90 text-[15px] lg:text-[17px] leading-relaxed font-sans font-medium italic">
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
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0D453D]/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-[#E7E5E3]/30 -skew-x-12 translate-x-24 pointer-events-none" />

        <div className="relative z-10 container-wide">
          <div className="bg-[#0D453D] overflow-hidden shadow-[0_50px_100px_-20px_rgba(10,77,70,0.3)]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Value Side (Left) */}
              <div className="lg:col-span-7 p-10 lg:p-20 text-white flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-10 opacity-40">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#BEB1A3]" />
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Professional Support</span>
                </div>
                
                <h3 className="fluid-heading-2 font-serif uppercase leading-tight mb-12 tracking-tight">
                  {t('pricing_title')}
                </h3>
                
                <div className="flex items-start gap-8 mb-16 border-l border-white/10 pl-8">
                  <Icon icon="solar:shield-check-bold" className="text-4xl text-[#BEB1A3] flex-shrink-0" />
                  <p className="text-white/60 text-base lg:text-lg leading-relaxed font-sans font-medium italic">
                    {t('support')}
                  </p>
                </div>

                <div className="flex flex-wrap gap-12 pt-12 border-t border-white/10">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-[#BEB1A3] uppercase">Status</span>
                    <span className="text-xl font-serif uppercase tracking-widest">All Inclusive</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-[#BEB1A3] uppercase">Network</span>
                    <span className="text-xl font-serif uppercase tracking-widest">Global Hub</span>
                  </div>
                </div>
              </div>

              {/* Pricing/Action Side (Right) */}
              <div className="lg:col-span-5 bg-white p-10 lg:p-20 flex flex-col justify-center border-l border-[#0D453D]/5">
                <div className="space-y-10 mb-16">
                   <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="h-2 w-2 rounded-full bg-[#0A4D46]" />
                         <span className="text-[11px] font-bold text-[#0D453D] uppercase tracking-widest">Premium Tiers</span>
                      </div>
                      <p className="text-[#0D453D]/70 text-base lg:text-lg leading-relaxed font-sans font-medium">
                        {t('pricing_1')}
                      </p>
                   </div>
                   
                   <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="h-2 w-2 rounded-full border border-[#0A4D46] bg-transparent" />
                         <span className="text-[11px] font-bold text-[#0D453D]/50 uppercase tracking-widest">Entry Tiers</span>
                      </div>
                      <p className="text-[#0D453D]/60 text-base lg:text-lg leading-relaxed font-sans font-medium">
                        {t('pricing_2')}
                      </p>
                   </div>
                </div>

                <button className="w-full bg-[#0D453D] text-white py-6 text-[12px] font-bold tracking-[0.4em] uppercase hover:bg-[#BEB1A3] transition-all shadow-xl">
                  {t('cta_2')}
                </button>
                
                <p className="mt-8 text-center text-[10px] font-bold text-[#0D453D]/30 uppercase tracking-[0.2em]">
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
