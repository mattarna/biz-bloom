'use client';

import React from 'react';
import { Icon } from '@/components/ui/Icon';
import { useTranslations } from 'next-intl';

export const ParlourContact = () => {
  const t = useTranslations('ParlourPage');

  return (
    <section id="contact" className="section-padding bg-brand-alabaster text-brand-dark border-t border-brand-dark/5">
      <div className="container-wide text-center">
        
        <div className="inline-flex items-center gap-3 mb-10 opacity-40">
          <div className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase font-sans">Professional Hub</span>
        </div>

        <h2 className="fluid-heading-2 font-serif leading-none tracking-tight uppercase mb-8 max-w-4xl mx-auto">
          {t('contact_final_title')}
        </h2>
        
        <p className="text-xl lg:text-2xl font-sans text-brand-dark/60 mb-16 lg:mb-24 max-w-2xl mx-auto">
          {t('contact_final_desc')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-20 lg:mb-32 max-w-5xl mx-auto">
          {/* Phone */}
          <div className="flex flex-col items-center gap-8 group">
            <div className="h-24 w-24 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:bg-brand-dark group-hover:text-brand-alabaster transition-all duration-500">
              <Icon icon="solar:phone-bold" className="text-4xl" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] text-brand-primary uppercase mb-4 font-sans">Telefono</p>
              <a href="tel:3347272966" className="text-3xl lg:text-5xl font-serif hover:text-brand-primary transition-colors">
                +39 334 7272966
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center gap-8 group">
            <div className="h-24 w-24 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:bg-brand-dark group-hover:text-brand-alabaster transition-all duration-500">
              <Icon icon="solar:letter-bold" className="text-4xl" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] text-brand-primary uppercase mb-4 font-sans">Email</p>
              <a href="mailto:d.difrancia@difranciafirm.com" className="text-2xl lg:text-4xl font-serif hover:text-brand-primary transition-colors break-all">
                d.difrancia@difranciafirm.com
              </a>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <a 
            href="tel:3347272966"
            className="w-full sm:w-auto bg-brand-dark text-brand-alabaster px-12 py-6 text-[12px] font-bold tracking-[0.4em] uppercase hover:bg-brand-primary transition-all shadow-2xl font-sans"
          >
            {t('contact_cta_book')}
          </a>
          <a 
            href="mailto:d.difrancia@difranciafirm.com"
            className="w-full sm:w-auto border border-brand-dark/20 px-12 py-6 text-[12px] font-bold tracking-[0.4em] uppercase hover:bg-brand-dark hover:text-brand-alabaster transition-all font-sans"
          >
            {t('contact_cta_team')}
          </a>
        </div>

      </div>
    </section>
  );
};

