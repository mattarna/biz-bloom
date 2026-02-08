'use client';

import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BlueRoomAntechamber,
  BlueRoomDoorTransition,
  BlueRoomHero,
  BlueRoomActions,
  BlueRoomPressReview,
  BlueRoomBolognaClub,
  BlueRoomFutureVision,
} from '@/components/sections/blue-room';

type Phase = 'antechamber' | 'transitioning' | 'room';

export default function BlueRoomPage() {
  const [phase, setPhase] = useState<Phase>('antechamber');

  const handleEnter = useCallback(() => {
    setPhase('transitioning');
  }, []);

  const handleTransitionComplete = useCallback(() => {
    setPhase('room');
  }, []);

  return (
    <main className="min-h-screen bg-blueroom-navy">
      <AnimatePresence mode="wait">
        {/* Phase 1: Antechamber */}
        {phase === 'antechamber' && (
          <BlueRoomAntechamber key="antechamber" onEnter={handleEnter} />
        )}

        {/* Phase 2: Door opening transition */}
        {phase === 'transitioning' && (
          <BlueRoomDoorTransition
            key="transition"
            onComplete={handleTransitionComplete}
          />
        )}

        {/* Phase 3: Inside the room */}
        {phase === 'room' && (
          <motion.div
            key="room"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="pt-20"
          >
            <BlueRoomHero />
            <BlueRoomActions />
            <BlueRoomPressReview />
            <BlueRoomBolognaClub />
            <BlueRoomFutureVision />

            {/* Footer matching Blue Room aesthetic */}
            <footer className="py-10 border-t border-blueroom-cream/5 bg-blueroom-navy">
              <div className="mx-auto max-w-[1800px] px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold tracking-[0.2em] text-blueroom-cream/15 uppercase font-sans">
                <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
                  <span className="cursor-pointer hover:text-blueroom-cream/40 transition-colors">Privacy Policy</span>
                  <span className="cursor-pointer hover:text-blueroom-cream/40 transition-colors">Cookie Policy</span>
                  <span className="cursor-pointer hover:text-blueroom-cream/40 transition-colors">Terms of Service</span>
                </div>
                <div className="flex flex-col md:items-end gap-1 text-center md:text-right">
                  <span>© 2026 BIZ BLOOM. ALL RIGHTS RESERVED.</span>
                  <span>POWERED BY THE DI FRANCIA HUB</span>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
