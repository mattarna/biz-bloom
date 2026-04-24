'use client';

import React from 'react';

export const VideoShowcase = () => {
  return (
    <section className="relative bg-brand-alabaster pt-8 lg:pt-12 pb-20 lg:pb-32 overflow-hidden">

      {/* Subtle Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0A4D46 1px, transparent 1px),
            linear-gradient(to bottom, #0A4D46 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">

        {/* Tagline sopra video */}
        <div className="flex items-center justify-center gap-4 mb-10 lg:mb-14">
          <div className="h-[1px] w-8 lg:w-12 bg-brand-primary/40" />
          <span className="text-[10px] lg:text-[11px] font-bold tracking-[0.4em] text-brand-primary uppercase font-sans">
            The Project
          </span>
          <div className="h-[1px] w-8 lg:w-12 bg-brand-primary/40" />
        </div>

        {/* Video showcase: cornice matte premium */}
        <div className="relative mx-auto max-w-[1040px] bg-white p-3 lg:p-4 border border-brand-primary/10 shadow-[0_40px_80px_-20px_rgba(10,77,70,0.25)]">
          <div className="relative aspect-video overflow-hidden bg-brand-dark">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/media/BIZ BLOOM SINGAPORE V3.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

      </div>
    </section>
  );
};
