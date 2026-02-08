'use client';

import React from 'react';
import { Icon } from '@iconify/react';

export const HeroV3 = () => {
  return (
    <section className="relative min-h-screen w-full bg-brand-alabaster overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-alabaster via-brand-alabaster to-brand-beige/30" />

      {/* Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0D453D 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12 min-h-screen flex flex-col pt-24">
        
        {/* Hero Content */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 py-12 lg:py-0 items-center">
          
          {/* Left Column - Text */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-10 font-sans">
              <div className="h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-brand-primary uppercase">
                Now Open
              </span>
            </div>

            {/* Headline - Unified Sans-Serif for a Modern Tech look */}
            <h1 className="text-brand-dark leading-[0.95] tracking-[-0.04em] mb-8 font-sans font-bold text-[clamp(2.5rem,6vw,5rem)]">
              <span className="block font-light opacity-60">Entra nella</span>
              <span className="block text-brand-primary">Business</span>
              <span className="block text-brand-primary">Community</span>
              <span className="block font-light opacity-60">Internazionale</span>
            </h1>

            {/* Subhead */}
            <p className="text-lg text-brand-dark/60 leading-relaxed max-w-md mb-12 font-sans font-medium">
              Imprenditori, investitori e consulenti di alto profilo. 
              Un ecosistema progettato per far crescere le PMI italiane 
              nei mercati globali.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-6 font-sans">
              <button className="group bg-brand-dark text-white px-8 py-4 text-sm font-semibold tracking-wide transition-all hover:bg-brand-primary flex items-center gap-3 shadow-xl shadow-brand-dark/10">
                Diventa Membro
                <Icon icon="solar:arrow-right-linear" className="transition-transform group-hover:translate-x-1" />
              </button>
              <button className="text-brand-dark/60 text-sm font-semibold tracking-wide hover:text-brand-primary transition-colors">
                Scopri i Benefici
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-8 border-t border-brand-dark/10 font-sans">
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-4xl font-serif text-brand-dark">1,500<span className="text-brand-primary">+</span></p>
                  <p className="text-[9px] font-bold tracking-[0.15em] text-brand-dark/40 uppercase mt-1">Membri</p>
                </div>
                <div className="h-10 w-[1px] bg-brand-dark/10" />
                <div>
                  <p className="text-4xl font-serif text-brand-dark">12</p>
                  <p className="text-[9px] font-bold tracking-[0.15em] text-brand-dark/40 uppercase mt-1">Mercati</p>
                </div>
                <div className="h-10 w-[1px] bg-brand-dark/10" />
                <div>
                  <p className="text-4xl font-serif text-brand-dark">∞</p>
                  <p className="text-[9px] font-bold tracking-[0.15em] text-brand-dark/40 uppercase mt-1">Opportunità</p>
                </div>
              </div>
            </div>

          </div>

          {/* Center - The Window (Video) */}
          <div className="lg:col-span-7 flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[600px] lg:max-w-none">
              
              {/* Video Frame */}
              <div className="relative aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden bg-brand-dark shadow-2xl shadow-brand-dark/20">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src="/media/Biz Singapore Background.mp4" type="video/mp4" />
                </video>
                
                {/* Inner Frame Lines */}
                <div className="absolute inset-4 border border-white/20 pointer-events-none" />
                
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-black/70 to-transparent font-sans">
                  <p className="text-white/90 text-sm font-light leading-relaxed max-w-xs">
                    Singapore — Il ponte tra l'eccellenza italiana e l'Asia.
                  </p>
                </div>

                {/* Corner Label */}
                <div className="absolute top-6 left-6 bg-white px-4 py-2 font-sans">
                  <p className="text-[9px] font-bold tracking-[0.2em] text-brand-dark uppercase">
                    Live Feed
                  </p>
                </div>
              </div>

              {/* Floating Info Card */}
              <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-white p-6 shadow-xl shadow-brand-dark/10 border border-brand-dark/5 max-w-[240px] font-sans">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 bg-brand-primary/10 flex items-center justify-center">
                    <Icon icon="solar:global-linear" className="text-xl text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-dark mb-1">Global Access</p>
                    <p className="text-[11px] text-brand-dark/50 leading-relaxed">
                      Accesso diretto ai mercati del Sud-Est Asiatico.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border border-brand-primary/10" />
              <div className="absolute -bottom-4 right-12 w-20 h-20 bg-brand-beige/50" />

            </div>
          </div>

        </div>

        {/* Bottom Scroll */}
        <div className="py-8 flex justify-center border-t border-brand-dark/5 font-sans">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[9px] font-semibold tracking-[0.3em] text-brand-dark/30 uppercase">Esplora</span>
            <Icon icon="solar:arrow-down-linear" className="text-brand-dark/30 animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
};
