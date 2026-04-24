'use client';

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { KeySvg } from './KeySvg';

interface BlueRoomAntechamberProps {
  onEnter: () => void;
}

// Gesto totale: 150ms anticipo + 500ms scatto + 200ms pausa = 850ms
const UNLOCK_DURATION_MS = 850;
const UNLOCK_EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];

export const BlueRoomAntechamber: React.FC<BlueRoomAntechamberProps> = ({ onEnter }) => {
  const t = useTranslations('BlueRoom');
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleKeyClick = useCallback(() => {
    if (isUnlocking) return;
    setIsUnlocking(true);
    window.setTimeout(onEnter, UNLOCK_DURATION_MS);
  }, [isUnlocking, onEnter]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050B18] overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 blueroom-noise pointer-events-none opacity-[0.4]" />

      {/* Sophisticated radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,32,68,0.6)_0%,rgba(5,11,24,1)_100%)]" />

      {/* Subtle light beam from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,169,110,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
        {/* Top decorative line */}
        <motion.div
          className="w-16 h-[1px] bg-blueroom-gold/40 mb-8"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: isUnlocking ? 0.3 : 1 }}
          transition={{ duration: isUnlocking ? 0.3 : 1.2, delay: isUnlocking ? 0 : 0.3 }}
        />

        {/* Badge */}
        <motion.span
          className="text-[10px] lg:text-[11px] font-bold tracking-[0.5em] text-blueroom-gold/50 uppercase font-sans mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isUnlocking ? 0.3 : 1, y: 0 }}
          transition={{ duration: isUnlocking ? 0.3 : 0.8, delay: isUnlocking ? 0 : 0.5 }}
        >
          Exclusive Access
        </motion.span>

        {/* Title */}
        <motion.h1
          className="text-blueroom-gold text-[clamp(2rem,7vw,4.5rem)] font-serif leading-[1.05] tracking-tight uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isUnlocking ? 0.3 : 1, y: 0 }}
          transition={{ duration: isUnlocking ? 0.3 : 1, delay: isUnlocking ? 0 : 0.7 }}
        >
          {t('antechamber_title')}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-blueroom-cream/90 text-sm lg:text-base font-sans tracking-[0.2em] uppercase mb-12 lg:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: isUnlocking ? 0.3 : 1 }}
          transition={{ duration: isUnlocking ? 0.3 : 0.8, delay: isUnlocking ? 0 : 1 }}
        >
          {t('antechamber_tagline')}
        </motion.p>

        {/* Gold divider */}
        <motion.div
          className="w-8 h-[1px] bg-blueroom-gold/60 mb-10 lg:mb-14"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: isUnlocking ? 0.3 : 1 }}
          transition={{ duration: isUnlocking ? 0.3 : 0.8, delay: isUnlocking ? 0 : 1.2 }}
        />

        {/* Key — entry animation (spring) + gesto di unlock (inner wrapper) */}
        <motion.div
          className="relative group cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.4, type: 'spring', stiffness: 100 }}
        >
          {/* Glow ring behind key on hover — nascosto durante l'unlock */}
          <div
            className={`absolute inset-0 -m-8 rounded-full transition-all duration-700 ${
              isUnlocking ? 'bg-blueroom-gold/0' : 'bg-blueroom-gold/0 group-hover:bg-blueroom-gold/15'
            }`}
          />

          {/* Wrapper del gesto: scende e ruota solo durante isUnlocking */}
          <motion.div
            animate={
              isUnlocking
                ? {
                    scale: [1, 1.05, 1.05, 1.05],
                    y: [0, 0, 48, 48],
                    rotate: [0, 0, 90, 90],
                  }
                : { scale: 1, y: 0, rotate: 0 }
            }
            transition={
              isUnlocking
                ? {
                    duration: UNLOCK_DURATION_MS / 1000,
                    times: [0, 0.176, 0.765, 1],
                    ease: UNLOCK_EASE,
                  }
                : { duration: 0 }
            }
          >
            <KeySvg
              onClick={handleKeyClick}
              className={`w-16 lg:w-20 h-auto text-blueroom-gold transition-colors duration-300 brightness-[1.2] ${
                isUnlocking
                  ? ''
                  : 'animate-float group-hover:animate-glow-pulse group-hover:text-blueroom-cream'
              }`}
            />
          </motion.div>
        </motion.div>

        {/* CTA hint */}
        <motion.p
          className="mt-10 lg:mt-14 text-[11px] font-sans tracking-[0.3em] text-blueroom-cream/60 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: isUnlocking ? 0.3 : 1 }}
          transition={{ duration: isUnlocking ? 0.3 : 0.8, delay: isUnlocking ? 0 : 2 }}
        >
          {t('antechamber_cta')}
        </motion.p>
      </div>

      {/* Bottom decorative elements */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isUnlocking ? 0.3 : 1 }}
        transition={{ duration: isUnlocking ? 0.3 : 0.8, delay: isUnlocking ? 0 : 2.2 }}
      >
        <div className="w-1 h-1 rounded-full bg-blueroom-gold/20" />
        <div className="w-6 h-[1px] bg-blueroom-gold/10" />
        <div className="w-1 h-1 rounded-full bg-blueroom-gold/20" />
      </motion.div>
    </motion.div>
  );
};
