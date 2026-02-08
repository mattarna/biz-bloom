'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { Link } from '@/navigation';
import { Icon } from '@iconify/react';

export default function BrainyBoxThankYouPage() {
  const t = useTranslations('BrainyBox');
  const searchParams = useSearchParams();
  const ndaRequested = searchParams.get('nda') === 'true';

  return (
    <main className="min-h-screen bg-brand-alabaster pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        {/* Success Icon */}
        <div className="relative inline-block">
          <div className="h-32 w-32 rounded-full bg-brand-primary flex items-center justify-center shadow-2xl shadow-brand-primary/20 animate-bounce">
            <Icon icon="solar:check-read-bold" className="text-white text-5xl" />
          </div>
          <div className="absolute -inset-4 border-2 border-brand-primary/20 rounded-full animate-ping opacity-30" />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl lg:text-6xl font-serif text-brand-dark uppercase tracking-tight">
            {t('thank_you_title')}
          </h1>
          
          <div className="space-y-4 max-w-xl mx-auto">
            <p className="text-lg text-brand-dark/70 font-sans leading-relaxed">
              {t('thank_you_message')}
            </p>
            
            {ndaRequested && (
              <div className="p-6 bg-brand-primary/5 border border-brand-primary/10 rounded-2xl flex gap-4 items-center text-left max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
                <Icon icon="solar:shield-keyhole-bold" className="text-brand-primary text-3xl shrink-0" />
                <p className="text-sm font-bold text-brand-dark italic leading-relaxed">
                  {t('thank_you_nda_message')}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
          <Link 
            href="/"
            className="w-full sm:w-auto px-12 py-5 bg-brand-dark text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-brand-primary transition-all rounded-xl shadow-xl shadow-brand-dark/10"
          >
            {t('thank_you_cta_home')}
          </Link>
          <a 
            href="mailto:d.difrancia@difranciafirm.com"
            className="w-full sm:w-auto px-12 py-5 border-2 border-brand-dark text-brand-dark text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-brand-dark hover:text-white transition-all rounded-xl"
          >
            {t('thank_you_cta_contact')}
          </a>
        </div>

        {/* Quick Contact Info */}
        <div className="pt-20 border-t border-brand-dark/5">
          <p className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-[0.3em] mb-4">
            Contatto Urgente
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-brand-dark font-serif text-xl">
            <a href="tel:3347272966" className="flex items-center gap-3 hover:text-brand-primary transition-colors">
              <Icon icon="solar:phone-bold" className="text-brand-primary" />
              +39 334 7272966
            </a>
            <a href="mailto:d.difrancia@difranciafirm.com" className="flex items-center gap-3 hover:text-brand-primary transition-colors">
              <Icon icon="solar:letter-bold" className="text-brand-primary" />
              d.difrancia@difranciafirm.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
