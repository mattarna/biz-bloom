import React from 'react';
import { useTranslations } from 'next-intl';

export const ParlourHowItWorks = () => {
  const t = useTranslations('ParlourPage');

  const steps = [
    { key: 'step_1', number: '1' },
    { key: 'step_2', number: '2' },
    { key: 'step_3', number: '3' },
  ];

  return (
    <section className="section-padding bg-brand-alabaster overflow-hidden border-y border-brand-dark/5">
      <div className="container-wide">
        
        <h2 className="text-brand-dark fluid-heading-2 font-serif leading-none tracking-tight uppercase mb-16 lg:mb-24">
          {t('how_it_works_title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <span className="absolute -top-6 -left-2 text-[7rem] font-serif text-brand-dark/5 leading-none select-none">
                {step.number}
              </span>
              <div className="relative z-10 pt-4">
                <div className="h-px w-12 bg-brand-primary/30 mb-8 group-hover:w-24 transition-all duration-500" />
                <h3 className="text-2xl font-serif text-brand-dark mb-4 uppercase tracking-tight">
                  {t(`${step.key}_title`)}
                </h3>
                <p className="text-brand-dark/70 text-base lg:text-lg leading-relaxed font-sans font-medium">
                  {t(`${step.key}_desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
