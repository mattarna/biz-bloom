'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';

export const BlueRoomFutureVision = () => {
  const t = useTranslations('BlueRoom');

  return (
    <section className="relative py-16 lg:py-24 bg-blueroom-navy overflow-hidden border-t border-blueroom-cream/5">
      {/* Background texture */}
      <div className="absolute inset-0 blueroom-noise pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Badge */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-6 bg-blueroom-gold/20" />
          <Icon icon="solar:eye-bold" className="text-blueroom-gold/25 text-sm" />
          <span className="text-[9px] font-bold tracking-[0.5em] text-blueroom-gold/30 uppercase font-sans">
            {t('future_badge')}
          </span>
          <Icon icon="solar:eye-bold" className="text-blueroom-gold/25 text-sm" />
          <div className="h-[1px] w-6 bg-blueroom-gold/20" />
        </div>

        {/* Text */}
        <p className="text-blueroom-cream/60 text-sm lg:text-base font-serif italic leading-relaxed">
          {t('future_text')}
        </p>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="w-1 h-1 rounded-full bg-blueroom-gold/10" />
          <div className="w-4 h-[1px] bg-blueroom-gold/10" />
          <div className="w-1 h-1 rounded-full bg-blueroom-gold/10" />
        </div>
      </motion.div>
    </section>
  );
};
