import React from 'react';
import { Icon } from '@/components/ui/Icon';
import { useTranslations } from 'next-intl';

export const ParlourServices = () => {
  const t = useTranslations('ParlourPage');

  const services = [
    { key: 'service_1', icon: 'solar:document-text-bold' },
    { key: 'service_2', icon: 'solar:globus-bold' },
    { key: 'service_3', icon: 'solar:box-bold' },
    { key: 'service_4', icon: 'solar:delivery-bold' },
    { key: 'service_5', icon: 'solar:hand-money-bold' },
    { key: 'service_6', icon: 'solar:buildings-bold' },
    { key: 'service_7', icon: 'solar:map-point-bold' },
    { key: 'service_8', icon: 'solar:chart-2-bold' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        
        <h2 className="text-brand-dark fluid-heading-2 font-serif leading-none tracking-tight uppercase mb-16 lg:mb-24">
          {t('services_title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-10 border border-brand-dark/5 bg-brand-alabaster/30 hover:bg-brand-dark hover:border-brand-dark transition-all duration-500 flex flex-col items-start gap-8 shadow-sm hover:shadow-2xl hover:shadow-brand-dark/20"
            >
              <div className="h-16 w-16 flex items-center justify-center bg-brand-dark/5 group-hover:bg-brand-alabaster/10 transition-colors">
                <Icon icon={service.icon} className="text-3xl text-brand-primary group-hover:text-brand-beige" />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif text-brand-dark group-hover:text-brand-alabaster leading-tight transition-colors">
                {t(service.key)}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
