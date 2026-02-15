'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';

export const B2BBookingSteps = () => {
  const t = useTranslations('B2BRoom');

  const steps = [
    { icon: 'solar:pen-new-square-linear', label: t('booking_step_2') },
    { icon: 'solar:globus-linear', label: t('booking_step_3') },
    { icon: 'solar:cloud-upload-linear', label: t('booking_step_4') },
    { icon: 'solar:check-read-linear', label: t('booking_step_5') },
  ];

  return (
    <section className="section-padding bg-brand-alabaster">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="fluid-heading-2 font-serif text-brand-dark uppercase tracking-tight mb-6">
            {t('booking_title')}
          </h2>
          <div className="h-[2px] w-20 bg-brand-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 relative">
          {/* Decorative Line (Hidden on mobile) */}
          <div className="hidden md:block absolute top-10 left-10 right-10 h-[1px] bg-brand-dark/5 -z-0" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="h-20 w-20 rounded-full bg-white border border-brand-dark/5 flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-dark group-hover:text-white transition-all duration-500">
                <Icon icon={step.icon} className="text-3xl" />
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.3em]">Step {index + 1}</span>
                <p className="text-[14px] lg:text-[16px] font-bold text-brand-dark uppercase tracking-wider leading-relaxed">
                  {step.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
