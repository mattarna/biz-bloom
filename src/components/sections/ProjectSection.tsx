import React from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';

export const ProjectSection = () => {
  const t = useTranslations('Project');

  const services = [
    { id: '01', title: t('service_1_title'), desc: t('service_1_desc'), icon: 'solar:planet-2-linear' },
    { id: '02', title: t('service_2_title'), desc: t('service_2_desc'), icon: 'solar:diploma-linear' },
    { id: '03', title: t('service_3_title'), desc: t('service_3_desc'), icon: 'solar:users-group-two-rounded-linear' },
    { id: '04', title: t('service_4_title'), desc: t('service_4_desc'), icon: 'solar:shield-check-linear' },
  ];

  return (
    <section className="relative section-padding bg-brand-alabaster overflow-hidden">
      
      {/* Decorative Lines - Ledger Style */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1800px] border-x border-brand-dark/10 pointer-events-none opacity-30" />

      <div className="relative z-10 container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* LEFT: Statement Column */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-dark/60 uppercase font-sans mb-8 lg:mb-12">
              {t('badge')}
            </span>
            
            <h2 className="text-brand-dark fluid-heading-2 font-serif leading-[1.1] lg:leading-[1.05] tracking-tight uppercase mb-8 lg:mb-12">
              <span className="block opacity-40">{t('title_1')}</span>
              <span className="block">{t('title_2')}</span>
            </h2>

            <p className="text-[17px] lg:text-[20px] text-brand-dark/80 leading-relaxed font-sans font-medium mb-12 max-w-lg">
              {t('description')}
            </p>

            <div className="hidden lg:block mt-auto pt-12 border-t border-brand-dark/20">
              <p className="text-sm text-brand-dark/80 font-sans tracking-wide uppercase font-bold">
                {t('list_intro')}
              </p>
            </div>
          </div>

          {/* RIGHT: Services Grid (The Ledger) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-brand-dark/20">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="p-8 lg:p-12 border-r border-b border-brand-dark/20 group hover:bg-brand-dark/5 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-8 lg:mb-12">
                    <span className="text-[11px] font-mono font-bold text-brand-dark/40">{service.id}</span>
                    <div className="h-12 w-12 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:bg-brand-dark group-hover:border-transparent transition-all duration-500">
                      <Icon 
                        icon={service.icon} 
                        className="text-2xl text-brand-dark group-hover:text-white transition-colors" 
                      />
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-serif text-brand-dark uppercase mb-4 lg:mb-5 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-brand-dark/60 leading-relaxed font-sans font-medium">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Accent */}
            <div className="mt-8 lg:mt-12 flex items-center gap-6">
              <div className="h-px flex-1 bg-brand-dark/20" />
              <button className="flex items-center gap-4 text-[12px] font-extrabold tracking-[0.2em] text-brand-dark uppercase hover:text-brand-primary transition-all group shrink-0">
                Esplora i servizi
                <div className="h-8 w-8 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover:bg-brand-dark group-hover:border-transparent transition-all">
                  <Icon icon="solar:alt-arrow-down-linear" className="text-lg group-hover:text-white" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
