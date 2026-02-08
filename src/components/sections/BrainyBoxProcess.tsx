'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';

export const BrainyBoxProcess = () => {
  const t = useTranslations('BrainyBox');

  const steps = [
    {
      id: 1,
      icon: 'solar:incoming-call-bold',
      title: t('process_step_1_title'),
      description: t('process_step_1_desc')
    },
    {
      id: 2,
      icon: 'solar:magnifer-zoom-in-bold',
      title: t('process_step_2_title'),
      description: t('process_step_2_desc')
    },
    {
      id: 3,
      icon: 'solar:chat-round-check-bold',
      title: t('process_step_3_title'),
      description: t('process_step_3_desc')
    }
  ];

  return (
    <section className="section-padding bg-brand-alabaster/30">
      <div className="container-wide">
        <div className="text-center mb-16 space-y-4">
          <h2 className="fluid-heading-2 font-serif text-brand-dark uppercase tracking-tight">
            {t('process_title')}
          </h2>
          <div className="h-1 w-20 bg-brand-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {steps.map((step) => (
            <div key={step.id} className="relative group text-center space-y-6">
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-brand-primary text-[10px] font-bold px-4 py-1 rounded-full border border-brand-primary/10 shadow-sm z-10 uppercase tracking-widest">
                Step 0{step.id}
              </div>

              {/* Icon Container */}
              <div className="h-20 w-20 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-xl shadow-brand-dark/5 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
                <Icon icon={step.icon} className="text-3xl text-brand-primary group-hover:text-white transition-colors" />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-serif text-brand-dark uppercase">
                  {step.title}
                </h3>
                <p className="text-brand-dark/60 font-sans text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>

              {/* Connector line (desktop) */}
              {step.id < 3 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+4rem)] right-[calc(-50%+4rem)] h-px bg-brand-dark/5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
