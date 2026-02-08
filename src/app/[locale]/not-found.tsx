'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { Button } from '@/components/ui/Button';
import { Icon } from '@iconify/react';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-alabaster relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-blueprint bg-blueprint-size opacity-30" />
      
      {/* Large background "404" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[30vw] font-display font-bold text-brand-primary/[0.03] leading-none">
          404
        </span>
      </div>

      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-olive/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="relative inline-block mb-12">
            <div className="absolute inset-0 bg-brand-primary/20 blur-2xl rounded-full" />
            <div className="relative flex items-center justify-center w-24 h-24 rounded-3xl bg-brand-dark border border-brand-primary/20 shadow-2xl">
              <Icon icon="solar:map-point-broken" className="text-5xl text-brand-beige" />
            </div>
          </div>
          
          <div className="space-y-4 mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-bold tracking-[0.3em] uppercase">
              Pagina non trovata
            </span>
            <h1 className="text-7xl md:text-9xl font-display text-brand-dark leading-none">
              {t('title')}
            </h1>
            <p className="text-2xl md:text-3xl font-display text-brand-dark/70 italic">
              {t('subtitle')}
            </p>
          </div>
          
          <p className="text-lg text-brand-dark/50 mb-12 max-w-lg mx-auto leading-relaxed font-medium">
            {t('description')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:min-w-[220px] h-14 rounded-xl text-base gap-3">
                <Icon icon="solar:home-2-bold" className="text-xl" />
                {t('cta')}
              </Button>
            </Link>
            
            <Link href="/membership" className="w-full sm:w-auto">
              <Button variant="ghost" size="lg" className="w-full sm:min-w-[220px] h-14 rounded-xl text-base gap-3 border border-brand-dark/10 hover:border-brand-primary/30 bg-white/40 backdrop-blur-sm">
                <Icon icon="solar:chat-round-dots-bold" className="text-xl" />
                {t('secondary_cta')}
              </Button>
            </Link>
          </div>
          
          <div className="mt-20 pt-8 border-t border-brand-dark/5">
            <Link 
              href="/" 
              className="inline-flex items-center text-[11px] font-bold tracking-[0.2em] text-brand-dark/40 hover:text-brand-primary transition-all group uppercase"
            >
              <Icon icon="solar:arrow-left-bold" className="mr-3 text-sm transition-transform group-hover:-translate-x-1" />
              Torna alla navigazione sicura
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
