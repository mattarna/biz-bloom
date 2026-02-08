'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BlueRoomDoorTransitionProps {
  onComplete: () => void;
}

export const BlueRoomDoorTransition: React.FC<BlueRoomDoorTransitionProps> = ({ onComplete }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Background - the room "behind" the doors */}
      <div className="absolute inset-0 bg-blueroom-navy" />

      {/* Gold light flash at center (key turning moment) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, times: [0, 0.3, 1] }}
      >
        <div className="w-1 h-[60vh] bg-gradient-to-b from-transparent via-blueroom-gold/60 to-transparent" />
      </motion.div>

      {/* Left door panel */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full bg-blueroom-navy origin-left"
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{
          duration: 1.4,
          delay: 0.4,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {/* Door texture - left */}
        <div className="absolute inset-0 blueroom-noise" />
        <div className="absolute inset-0 bg-gradient-to-l from-blueroom-deep/50 to-transparent" />
        
        {/* Door panel decorative border */}
        <div className="absolute top-[10%] right-8 bottom-[10%] w-[1px] bg-blueroom-gold/10" />
        <div className="absolute top-[15%] right-16 bottom-[15%] w-[1px] bg-blueroom-gold/5" />
      </motion.div>

      {/* Right door panel */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-blueroom-navy origin-right"
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={{
          duration: 1.4,
          delay: 0.4,
          ease: [0.76, 0, 0.24, 1],
        }}
        onAnimationComplete={onComplete}
      >
        {/* Door texture - right */}
        <div className="absolute inset-0 blueroom-noise" />
        <div className="absolute inset-0 bg-gradient-to-r from-blueroom-deep/50 to-transparent" />
        
        {/* Door panel decorative border */}
        <div className="absolute top-[10%] left-8 bottom-[10%] w-[1px] bg-blueroom-gold/10" />
        <div className="absolute top-[15%] left-16 bottom-[15%] w-[1px] bg-blueroom-gold/5" />
      </motion.div>

      {/* Center seam glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="w-full h-full bg-gradient-to-b from-transparent via-blueroom-gold/30 to-transparent" />
      </motion.div>
    </div>
  );
};
