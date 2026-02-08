'use client';

import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

export const DemoModal = ({ isOpen, onClose, url, title }: DemoModalProps) => {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  // URL con parametro per nascondere UI interna
  const demoUrl = url ? `${url}?isDemo=true` : '';

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
        >
          {/* Backdrop con sfocatura più profonda */}
          <div 
            className="absolute inset-0 bg-brand-dark/95 backdrop-blur-3xl" 
            onClick={onClose} 
          />

          {/* Modal Container - Quasi Full Screen */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full h-full flex flex-col z-10 p-4 lg:p-8"
          >
            {/* Header sottile sopra il dispositivo */}
            <div className="flex items-center justify-between mb-4 px-4">
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold tracking-[0.3em] text-brand-beige uppercase">Live Preview</span>
                  <h3 className="text-white text-base font-serif italic">{title}</h3>
                </div>
                
                <div className="hidden sm:flex bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
                  <button 
                    onClick={() => setDevice('desktop')}
                    className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[9px] font-bold tracking-widest uppercase transition-all ${
                      device === 'desktop' ? 'bg-brand-primary text-white shadow-lg' : 'text-white/40 hover:text-white'
                    }`}
                  >
                    <Icon icon="solar:laptop-bold" className="text-sm" />
                    Full Desktop
                  </button>
                  <button 
                    onClick={() => setDevice('mobile')}
                    className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[9px] font-bold tracking-widest uppercase transition-all ${
                      device === 'mobile' ? 'bg-brand-primary text-white shadow-lg' : 'text-white/40 hover:text-white'
                    }`}
                  >
                    <Icon icon="solar:smartphone-bold" className="text-sm" />
                    Mobile View
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => {
                    onClose();
                    setTimeout(() => {
                      const element = document.getElementById('richiedi');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hidden md:flex bg-white text-brand-dark px-6 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-brand-primary hover:text-white transition-all shadow-xl items-center gap-2"
                >
                  Configura ora
                  <Icon icon="solar:magic-stick-3-bold" className="text-lg" />
                </button>
                <button 
                  onClick={onClose}
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-all"
                >
                  <Icon icon="solar:close-circle-bold" className="text-2xl" />
                </button>
              </div>
            </div>

            {/* Device Mockup - Massimizzato */}
            <div 
              className={`flex-1 bg-black rounded-[1.5rem] border-[4px] border-[#1A1A1A] shadow-2xl relative overflow-hidden transition-all duration-500 mx-auto ease-in-out`}
              style={{ 
                width: device === 'desktop' ? '100%' : '420px',
                maxWidth: '100%',
                maxHeight: 'calc(100vh - 120px)'
              }}
            >
              {/* Iframe caricato con ?isDemo=true */}
              <iframe 
                src={demoUrl} 
                className="w-full h-full border-none bg-white"
                title={title}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
