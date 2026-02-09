import React from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';

export const SingaporeProjectSection = () => {
  const t = useTranslations('SingaporeProject');

  return (
    <section className="relative section-padding bg-white overflow-hidden">
      
      {/* Decorative Blueprint Background - Very Faint */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0A4D46 1px, transparent 1px),
            linear-gradient(to bottom, #0A4D46 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 container-wide">
        
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <span className="text-[10px] font-bold tracking-[0.5em] text-brand-primary/40 uppercase font-sans mb-8 lg:mb-12">
            {t('badge')}
          </span>
          <h2 className="text-brand-dark fluid-heading-2 font-serif leading-[1.2] lg:leading-[1.05] tracking-tight uppercase mb-8 lg:mb-10 max-w-4xl">
            <span className="block opacity-40">{t('title_1')}</span>
            <span className="block text-brand-primary">{t('title_2')}</span>
          </h2>
          <p className="text-base lg:text-xl text-brand-dark/60 leading-relaxed font-sans font-medium max-w-2xl">
            {t.rich('description', {
              bold: (chunks) => <span className="font-bold text-brand-dark">{chunks}</span>
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-20 lg:mb-24">
          
          {/* Smart Feature 1: Digital Missions */}
          <div className="group bg-brand-alabaster/30 p-8 lg:p-16 border border-brand-dark/5 hover:bg-brand-dark transition-all duration-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 -translate-y-16 translate-x-16 rotate-45 group-hover:scale-150 transition-transform duration-1000" />
            
            <div className="relative z-10">
              <div className="h-14 lg:h-16 w-14 lg:w-16 bg-brand-dark/5 flex items-center justify-center mb-10 lg:mb-12 group-hover:bg-white/10 transition-colors">
                <Icon icon="solar:monitor-smartphone-linear" className="text-3xl lg:text-4xl text-brand-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl lg:text-3xl font-serif text-brand-dark group-hover:text-white uppercase mb-4 lg:mb-5 tracking-tight">
                {t('feature_1_title')}
              </h3>
              <p className="text-[14px] lg:text-[15px] text-brand-dark/60 group-hover:text-white/70 leading-relaxed font-sans font-medium max-w-md transition-colors">
                {t('feature_1_desc')}
              </p>
            </div>
          </div>

          {/* Smart Feature 2: Blue Room */}
          <div className="group bg-[#0A1E2F] p-8 lg:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 -translate-y-24 translate-x-24 rotate-45 group-hover:scale-150 transition-transform duration-1000" />
            
            <div className="relative z-10">
              <div className="h-14 lg:h-16 w-14 lg:w-16 bg-white/5 flex items-center justify-center mb-10 lg:mb-12">
                <Icon icon="solar:crown-minimalistic-linear" className="text-3xl lg:text-4xl text-[#FFD700]" />
              </div>
              <h3 className="text-xl lg:text-3xl font-serif text-white uppercase mb-4 lg:mb-5 tracking-tight">
                {t('feature_2_title')}
              </h3>
              <p className="text-white/70 text-[14px] lg:text-[15px] leading-relaxed font-sans font-medium">
                {t('feature_2_desc')}
              </p>
              
              <div className="mt-10 lg:mt-12 flex items-center gap-4">
                <div className="h-px w-10 lg:w-12 bg-brand-beige/30" />
                <span className="text-[9px] lg:text-[10px] font-bold tracking-[0.3em] text-brand-beige uppercase">Exclusivity Guaranteed</span>
              </div>
            </div>
          </div>

        </div>

        {/* New CTA Section */}
        <div className="flex flex-col items-center text-center">
          <div className="h-px w-24 lg:w-32 bg-brand-primary/20 mb-10 lg:mb-12" />
          <h3 className="text-xl lg:text-3xl font-serif text-brand-dark uppercase mb-4 lg:mb-5">
            {t('cta_main')}
          </h3>
          <p className="text-sm lg:text-base text-brand-dark/50 mb-10 lg:mb-12 font-sans font-medium max-w-3xl">
            {t.rich('cta_sub', {
              bold: (chunks) => <span className="font-bold text-brand-dark">{chunks}</span>
            })}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
            <button className="w-full sm:w-auto bg-brand-dark text-white px-10 lg:px-12 py-5 lg:py-6 text-[13px] lg:text-[14px] font-bold tracking-[0.2em] uppercase hover:bg-brand-primary transition-all shadow-xl shadow-brand-dark/10 font-sans">
              Iscriviti Ora
            </button>
            <button className="text-[12px] lg:text-[13px] font-bold tracking-[0.2em] text-brand-dark/60 uppercase hover:text-brand-primary transition-all border-b border-brand-dark/20 hover:border-brand-primary pb-1">
              Scopri Biz Bloom
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
