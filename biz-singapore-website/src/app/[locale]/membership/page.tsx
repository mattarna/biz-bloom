'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function MembershipPage() {
  const t = useTranslations('MembershipPage');
  const tf = useTranslations('Footer');

  const plans = [
    {
      name: t('silver_name'),
      price: t('silver_price'),
      period: t('silver_period'),
      features: [
        { title: t('silver_feature_1_title'), desc: t('silver_feature_1_desc') },
        { title: t('silver_feature_2_title'), desc: t('silver_feature_2_desc') },
      ],
      featured: false,
    },
    {
      name: t('gold_name'),
      price: t('gold_price'),
      period: t('gold_period'),
      intro: t('gold_intro'),
      features: [
        { title: t('gold_feature_1_title'), desc: t('gold_feature_1_desc') },
        { title: t('gold_feature_2_title'), desc: t('gold_feature_2_desc') },
        { title: t('gold_feature_3_title'), desc: t('gold_feature_3_desc') },
        { title: t('gold_feature_4_title'), desc: t('gold_feature_4_desc') },
        { title: t('gold_feature_5_title'), desc: t('gold_feature_5_desc') },
        { title: t('gold_feature_6_title'), desc: t('gold_feature_6_desc') },
      ],
      featured: false,
    },
    {
      name: t('platinum_name'),
      price: t('platinum_price'),
      period: t('platinum_period'),
      intro: t('platinum_intro'),
      features: [
        { title: t('platinum_feature_1_title'), desc: t('platinum_feature_1_desc') },
        { title: t('platinum_feature_2_title'), desc: t('platinum_feature_2_desc') },
        { title: t('platinum_feature_3_title'), desc: t('platinum_feature_3_desc') },
        { title: t('platinum_feature_4_title'), desc: t('platinum_feature_4_desc') },
        { title: t('platinum_feature_5_title'), desc: t('platinum_feature_5_desc') },
        { title: t('platinum_feature_6_title'), desc: t('platinum_feature_6_desc') },
      ],
      featured: true,
    }
  ];

  return (
    <main className="bg-brand-alabaster pt-20">
      
      {/* INTERNAL HERO */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center bg-[#0D453D] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/media/noise.png')] opacity-20" />
          <div className="h-full w-full bg-gradient-to-br from-white/20 to-transparent" />
        </div>
        
        <div className="relative z-10 container-wide w-full text-center">
          <div className="flex justify-center items-center gap-4 mb-8 opacity-40">
             <div className="h-px w-8 bg-[#BEB1A3]" />
             <span className="text-[10px] font-bold tracking-[0.4em] text-[#BEB1A3] uppercase">Biz Bloom Project</span>
             <div className="h-px w-8 bg-[#BEB1A3]" />
          </div>
          <h1 className="text-white fluid-heading-1 font-serif leading-none tracking-tight uppercase mb-6">
            {t('hero_title')}
          </h1>
          <p className="text-[#BEB1A3] text-lg lg:text-xl font-sans font-medium uppercase tracking-[0.2em] opacity-80">
            {t('hero_subtitle')}
          </p>
        </div>
      </section>

      {/* EARLY BIRD INTRO */}
      <section className="section-padding border-b border-[#0D453D]/5">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left: Text Content */}
            <div className="lg:col-span-7">
              <h2 className="text-[#0D453D] fluid-heading-2 font-serif uppercase mb-6 tracking-tight">
                {t('intro_title')}
              </h2>
              <p className="text-[#0D453D]/60 text-lg lg:text-xl font-sans font-medium mb-12 max-w-2xl">
                {t('intro_subtitle')}
              </p>
              
              <div className="bg-[#BEB1A3]/10 border border-[#BEB1A3]/20 p-8 lg:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#BEB1A3]/5 -translate-y-16 translate-x-16 rotate-45" />
                <span className="inline-block px-4 py-1 bg-[#0D453D] text-[#E7E5E3] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                  {t('early_bird_title')}
                </span>
                <p className="text-[#0D453D] text-base lg:text-lg leading-relaxed font-sans font-bold mb-6">
                  {t('early_bird_desc')}
                </p>
                <p className="text-[#0A4D46] text-sm lg:text-base font-sans font-extrabold uppercase tracking-wider mb-8">
                  {t('early_bird_warning')}
                </p>
                <div className="pt-8 border-t border-[#BEB1A3]/20 flex flex-col sm:flex-row items-center justify-between gap-8">
                   <p className="text-[#0D453D]/60 text-sm font-sans font-medium max-w-xs">
                     {t('early_bird_cta')}
                   </p>
                   <button className="bg-[#0D453D] text-white px-10 py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#BEB1A3] transition-all shadow-xl whitespace-nowrap">
                     {t('early_bird_button')}
                   </button>
                </div>
              </div>
            </div>

            {/* Right: Immagine d'impatto */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl group">
                <Image 
                  src="/media/Community (1).webp"
                  alt="Biz Bloom Community Access"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D453D]/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20">
                   <p className="text-white text-[10px] font-bold tracking-[0.4em] uppercase mb-2">Global Network</p>
                   <p className="text-white font-serif text-lg lg:text-xl italic leading-relaxed">
                     "Connettiamo il tuo business ai mercati più promettenti del sud-est asiatico."
                   </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING GRID */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative flex flex-col p-10 lg:p-16 border transition-all duration-700 group
                  ${plan.featured 
                    ? 'bg-[#0D453D] border-[#0D453D] text-white shadow-[0_50px_100px_-20px_rgba(10,77,70,0.3)] lg:-mt-12 lg:pb-24 lg:pt-24' 
                    : 'bg-[#E7E5E3]/30 border-[#0D453D]/5 text-[#0D453D] hover:bg-white hover:border-[#0D453D]/10'}
                `}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#BEB1A3] text-[#0D453D] px-6 py-2 text-[10px] font-bold tracking-[0.3em] uppercase">
                    Most Prestigious
                  </div>
                )}

                <div className="mb-12">
                  <h3 className={`text-xl lg:text-2xl font-serif uppercase mb-6 tracking-tight ${plan.featured ? 'text-[#BEB1A3]' : 'text-[#0D453D]'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl lg:text-5xl font-serif leading-none">{plan.price}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${plan.featured ? 'text-white/40' : 'text-[#0D453D]/40'}`}>
                      / {plan.period}
                    </span>
                  </div>
                </div>

                {plan.intro && (
                  <p className={`text-sm font-sans font-bold uppercase tracking-widest mb-10 pb-6 border-b ${plan.featured ? 'text-white/60 border-white/10' : 'text-[#0D453D]/40 border-[#0D453D]/5'}`}>
                    {plan.intro}
                  </p>
                )}

                <div className="space-y-10 flex-1">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex gap-6 group/item">
                      <div className={`h-8 w-8 flex-shrink-0 flex items-center justify-center border transition-all
                        ${plan.featured ? 'border-white/10 bg-white/5' : 'border-[#0D453D]/10 bg-[#0D453D]/5'}
                      `}>
                        <Icon icon="solar:check-read-linear" className={`text-lg ${plan.featured ? 'text-[#BEB1A3]' : 'text-[#0A4D46]'}`} />
                      </div>
                      <div className="space-y-2">
                        <h4 className={`text-[13px] font-bold uppercase tracking-widest ${plan.featured ? 'text-white' : 'text-[#0D453D]'}`}>
                          {feature.title}
                        </h4>
                        <p className={`text-[14px] leading-relaxed font-sans font-medium ${plan.featured ? 'text-white/60' : 'text-[#0D453D]/60'}`}>
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16">
                  <button className={`w-full py-6 text-[12px] font-bold tracking-[0.4em] uppercase transition-all
                    ${plan.featured 
                      ? 'bg-white text-[#0D453D] hover:bg-[#BEB1A3] hover:text-white' 
                      : 'bg-[#0D453D] text-white hover:bg-[#BEB1A3]'}
                  `}>
                    {t('buy')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT FOOTER */}
      <section className="py-24 lg:pt-32 lg:pb-12 bg-[#E7E5E3]/50 border-t border-[#0D453D]/5">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="h-16 w-16 bg-[#0D453D] rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl">
            <Icon icon="solar:chat-round-dots-bold" className="text-2xl text-[#BEB1A3]" />
          </div>
          <h2 className="text-[#0D453D] text-3xl lg:text-4xl font-serif uppercase mb-8">
            {t('support_title')}
          </h2>
          <div className="space-y-4 mb-12">
            <p className="text-[#0D453D] text-xl lg:text-2xl font-serif">
              {t('support_phone')}
            </p>
            <p className="text-[#0D453D]/60 text-lg font-sans font-medium">
              {t('support_email')}
            </p>
          </div>
          <button className="bg-transparent border-2 border-[#0D453D] text-[#0D453D] px-12 py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#0D453D] hover:text-white transition-all">
            Parliamo ora
          </button>
        </div>
      </section>

      {/* FINAL MISSION QUOTE */}
      <section className="pt-8 lg:pt-12 pb-20 lg:pb-32 bg-[#E7E5E3]">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <div className="flex justify-center items-center gap-6 mb-8 lg:mb-12 opacity-20">
             <div className="h-[1px] w-8 lg:w-12 bg-[#0D453D]" />
             <Icon icon="solar:globus-bold" className="text-xl lg:text-2xl text-[#0D453D]" />
             <div className="h-[1px] w-8 lg:w-12 bg-[#0D453D]" />
          </div>
          <blockquote className="text-[#0D453D] text-[clamp(1.25rem,4vw,2.2rem)] font-serif font-bold leading-[1.4] uppercase tracking-tight italic">
            "{tf('mission')}"
          </blockquote>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 lg:py-8 border-t border-[#0D453D]/5 bg-[#E7E5E3]">
         <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-[10px] font-bold tracking-[0.2em] text-[#0D453D]/30 uppercase px-8">
            <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
               <span className="cursor-pointer hover:text-[#0D453D] transition-colors">Privacy Policy</span>
               <span className="cursor-pointer hover:text-[#0D453D] transition-colors">Cookie Policy</span>
               <span className="cursor-pointer hover:text-[#0D453D] transition-colors">Terms of Service</span>
            </div>
            <div className="flex flex-col md:items-end gap-2 text-center md:text-right">
              <span>© 2026 BIZ BLOOM. ALL RIGHTS RESERVED.</span>
              <span>POWERED BY THE DI FRANCIA HUB</span>
            </div>
         </div>
      </footer>

    </main>
  );
}
