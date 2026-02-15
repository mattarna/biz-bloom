'use client';

import React from 'react';
import { Icon } from '@/components/ui/Icon';
import Image from 'next/image';

interface InternalHeroProps {
  variant: 'premium' | 'service';
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  videoSrc?: string;
  imageSrc?: string;
  cta?: {
    label: string;
    onClick?: () => void;
    href?: string;
    icon?: string;
  }[];
  sideElement?: React.ReactNode;
}

export const InternalHero: React.FC<InternalHeroProps> = ({
  variant,
  badge,
  title,
  subtitle,
  description,
  videoSrc,
  imageSrc,
  cta,
  sideElement,
}) => {
  const isPremium = variant === 'premium';

  return (
    <section className={`relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden ${isPremium ? 'bg-brand-dark text-white' : 'bg-brand-alabaster text-brand-dark pt-32 lg:pt-40 pb-20'}`}>
      
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        {videoSrc && (
          <video autoPlay loop muted playsInline className={`h-full w-full object-cover ${isPremium ? 'brightness-[0.4]' : 'brightness-[0.8]'}`}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        {imageSrc && !videoSrc && (
          <Image src={imageSrc} alt={title} fill priority className={`object-cover ${isPremium ? 'brightness-[0.4]' : 'brightness-[0.9]'}`} />
        )}
        
        {/* GRADIENTS & OVERLAYS */}
        {isPremium ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-brand-dark" />
            <div className="absolute inset-0 bg-black/20" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-brand-alabaster via-brand-alabaster/95 lg:to-brand-alabaster/30" />
        )}
      </div>

      {/* CONTENT GRID */}
      <div className="relative z-10 container-wide w-full">
        <div className={`grid grid-cols-1 ${isPremium ? 'text-center max-w-4xl mx-auto' : 'lg:grid-cols-12 gap-12 lg:gap-20 items-center'}`}>
          
          {/* TEXT SIDE */}
          <div className={`${isPremium ? '' : 'lg:col-span-7'}`}>
            {/* Badge */}
            {badge && (
              <div className={`flex items-center gap-4 mb-8 ${isPremium ? 'justify-center opacity-40' : ''}`}>
                <div className="h-[1px] w-10 bg-brand-primary" />
                <span className="text-[10px] lg:text-[11px] font-bold tracking-[0.4em] text-brand-primary uppercase font-sans">
                  {badge}
                </span>
                {isPremium && <div className="h-[1px] w-10 bg-brand-primary" />}
              </div>
            )}

            {/* Title */}
            <h1 className={`fluid-heading-1 font-serif leading-[1.1] tracking-tight uppercase mb-8 ${isPremium ? 'text-white' : 'text-brand-dark'}`}>
              {title}
            </h1>

            {/* Subtitle / Description */}
            {subtitle && (
              <p className={`text-lg lg:text-xl font-sans font-medium uppercase tracking-[0.2em] mb-8 ${isPremium ? 'text-brand-beige opacity-80' : 'text-brand-primary'}`}>
                {subtitle}
              </p>
            )}
            {description && (
              <p className={`text-[18px] lg:text-[22px] font-medium leading-relaxed max-w-2xl mb-12 font-sans ${isPremium ? 'text-brand-alabaster/80 mx-auto' : 'text-brand-dark/70'}`}>
                {description}
              </p>
            )}

            {/* CTA Group */}
            {cta && cta.length > 0 && (
              <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-6 ${isPremium ? 'justify-center' : ''}`}>
                {cta.map((button, i) => {
                  const isPrimary = i === 0;
                  const commonClasses = "group px-10 py-5 text-[13px] lg:text-[14px] font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-4 font-sans shadow-xl";
                  
                  if (button.href) {
                    return (
                      <a
                        key={i}
                        href={button.href}
                        className={`${commonClasses} ${isPrimary 
                          ? (isPremium ? 'bg-brand-primary text-white hover:bg-white hover:text-brand-dark' : 'bg-brand-dark text-white hover:bg-brand-primary')
                          : (isPremium ? 'border border-white/20 bg-white/5 text-white hover:bg-white hover:text-brand-dark' : 'border border-brand-dark/20 bg-white/50 backdrop-blur-md text-brand-dark hover:bg-white')}`}
                      >
                        {button.icon && <Icon icon={button.icon} className="text-xl" />}
                        {button.label}
                      </a>
                    );
                  }
                  
                  return (
                    <button
                      key={i}
                      onClick={button.onClick}
                      className={`${commonClasses} ${isPrimary 
                        ? (isPremium ? 'bg-brand-primary text-white hover:bg-white hover:text-brand-dark' : 'bg-brand-dark text-white hover:bg-brand-primary')
                        : (isPremium ? 'border border-white/20 bg-white/5 text-white hover:bg-white hover:text-brand-dark' : 'border border-brand-dark/20 bg-white/50 backdrop-blur-md text-brand-dark hover:bg-white')}`}
                    >
                      {button.icon && <Icon icon={button.icon} className="text-xl" />}
                      {button.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* SIDE ELEMENT (Only for Service variant) */}
          {!isPremium && (
            <div className="lg:col-span-5 relative">
              {sideElement || (
                <div className="aspect-[4/5] relative overflow-hidden shadow-2xl group">
                  <Image 
                    src="/media/image-pages/biz-bloom-image (5).webp" 
                    alt="Internal View" 
                    fill 
                    className="object-cover transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-brand-dark/10" />
                  <div className="absolute inset-4 border border-white/20" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Decorative scroll indicator for Premium */}
      {isPremium && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <div className="w-[1px] h-12 bg-brand-beige animate-move-down" />
        </div>
      )}
    </section>
  );
};
