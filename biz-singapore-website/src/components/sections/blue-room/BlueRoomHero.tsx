'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export const BlueRoomHero = () => {
  const t = useTranslations('BlueRoom');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover brightness-[0.4] contrast-[1.05] saturate-[0.6]"
        >
          <source src="/media/LOUNGE CLUB BLUE ROOM.mp4" type="video/mp4" />
        </video>
        {/* Dark overlays for atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-blueroom-navy/70 via-blueroom-navy/30 to-blueroom-navy/80" />
        <div className="absolute inset-0 bg-blueroom-navy/20" />
        <div className="absolute inset-0 blueroom-noise" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Decorative top element */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="h-[1px] w-10 bg-blueroom-gold/30" />
          <Icon icon="solar:crown-minimalistic-bold" className="text-blueroom-gold/40 text-lg" />
          <div className="h-[1px] w-10 bg-blueroom-gold/30" />
        </motion.div>

        {/* Welcome badge */}
        <motion.span
          className="inline-block text-[10px] lg:text-[11px] font-bold tracking-[0.5em] text-blueroom-gold/60 uppercase font-sans mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {t('hero_welcome')}
        </motion.span>

        {/* Main quote */}
        <motion.blockquote
          className="text-blueroom-cream text-[clamp(1.4rem,4vw,2.8rem)] font-serif leading-[1.4] tracking-tight italic mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          &ldquo;{t('hero_quote')}&rdquo;
        </motion.blockquote>

        {/* Decorative divider */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="w-1 h-1 rounded-full bg-blueroom-gold/30" />
          <div className="w-8 h-[1px] bg-blueroom-gold/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-blueroom-gold/40" />
          <div className="w-8 h-[1px] bg-blueroom-gold/20" />
          <div className="w-1 h-1 rounded-full bg-blueroom-gold/30" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <span className="text-[10px] font-bold tracking-[0.4em] text-blueroom-cream/60 uppercase font-sans">
            {t('hero_scroll')}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icon icon="solar:alt-arrow-down-linear" className="text-blueroom-gold/60 text-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
