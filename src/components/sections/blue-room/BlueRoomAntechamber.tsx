'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { KeySvg } from './KeySvg';

interface BlueRoomAntechamberProps {
  onEnter: () => void;
}

export const BlueRoomAntechamber: React.FC<BlueRoomAntechamberProps> = ({ onEnter }) => {
  const t = useTranslations('BlueRoom');

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
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />

        {/* Badge */}
        <motion.span
          className="text-[10px] lg:text-[11px] font-bold tracking-[0.5em] text-blueroom-gold/50 uppercase font-sans mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Exclusive Access
        </motion.span>

        {/* Title */}
        <motion.h1
          className="text-blueroom-gold text-[clamp(2rem,7vw,4.5rem)] font-serif leading-[1.05] tracking-tight uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {t('antechamber_title')}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-blueroom-cream/90 text-sm lg:text-base font-sans tracking-[0.2em] uppercase mb-12 lg:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {t('antechamber_tagline')}
        </motion.p>

        {/* Gold divider */}
        <motion.div
          className="w-8 h-[1px] bg-blueroom-gold/60 mb-10 lg:mb-14"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />

        {/* Key */}
        <motion.div
          className="relative group cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.4, type: 'spring', stiffness: 100 }}
        >
          {/* Glow ring behind key on hover */}
          <div className="absolute inset-0 -m-8 rounded-full bg-blueroom-gold/0 group-hover:bg-blueroom-gold/15 transition-all duration-700" />
          
          <KeySvg
            onClick={onEnter}
            className="w-16 lg:w-20 h-auto text-blueroom-gold animate-float group-hover:animate-glow-pulse transition-all duration-300 group-hover:text-blueroom-cream brightness-[1.2]"
          />
        </motion.div>

        {/* CTA hint */}
        <motion.p
          className="mt-10 lg:mt-14 text-[11px] font-sans tracking-[0.3em] text-blueroom-cream/60 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          {t('antechamber_cta')}
        </motion.p>
      </div>

      {/* Bottom decorative elements */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        <div className="w-1 h-1 rounded-full bg-blueroom-gold/20" />
        <div className="w-6 h-[1px] bg-blueroom-gold/10" />
        <div className="w-1 h-1 rounded-full bg-blueroom-gold/20" />
      </motion.div>
    </motion.div>
  );
};
