'use client';

import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { B2BMultiStepForm } from './B2BMultiStepForm';
import { ConfirmModal } from '@/components/ui/ConfirmModal';

interface B2BFormDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const B2BFormDrawer: React.FC<B2BFormDrawerProps> = ({ isOpen, onClose }) => {
  const t = useTranslations('B2BRoom');
  const [isDirty, setIsDirty] = useState(false);
  const [step, setStep] = useState(1);
  const [isClosing, setIsClosing] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  // Prevent scroll on body when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleCloseAttempt = () => {
    if (isDirty && step < 6) {
      setShowExitConfirm(true);
    } else {
      initiateClose();
    }
  };

  const initiateClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setStep(1);
      setIsDirty(false);
    }, 500); // Match duration-500
  };

  if (!isOpen && !isClosing) return null;

  return (
    <>
      <div className="fixed inset-0 z-[200] flex justify-end overflow-hidden">
        {/* Backdrop */}
        <div 
          className={cn(
            "absolute inset-0 bg-brand-dark/40 backdrop-blur-sm transition-opacity duration-500",
            isClosing ? "opacity-0" : "opacity-100 animate-in fade-in"
          )}
          onClick={handleCloseAttempt}
        />

        {/* Drawer Panel (1/2 Screen) */}
        <div className={cn(
          "relative w-full md:w-[60%] lg:w-[50%] bg-white h-full shadow-2xl flex flex-col transition-transform duration-500 ease-in-out",
          isClosing ? "translate-x-full" : "translate-x-0 animate-in slide-in-from-right"
        )}>
          
          {/* Header */}
          <div className="p-8 lg:p-12 border-b border-brand-dark/5 flex items-center justify-between bg-brand-alabaster/30">
            <div>
              <h3 className="text-3xl font-serif text-brand-dark uppercase tracking-tight">B2B Room</h3>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-[11px] font-bold text-brand-primary tracking-[0.2em] uppercase">
                  {step === 6 ? t('form_completed') : `${t('step_label')} ${step} di 5`}
                </span>
                {step < 6 && (
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div 
                        key={s} 
                        className={cn(
                          "h-1 w-6 transition-all rounded-full",
                          s <= step ? "bg-brand-primary" : "bg-brand-primary/10"
                        )} 
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
            <button 
              onClick={handleCloseAttempt}
              className="h-12 w-12 rounded-full flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all group"
            >
              <Icon icon="solar:close-circle-linear" className="text-2xl group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Form Area */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <B2BMultiStepForm 
              onStepChange={(s) => setStep(s)} 
              onDirty={() => setIsDirty(true)}
              onSuccess={() => setIsDirty(false)}
              onClose={initiateClose}
            />
          </div>

          {/* Footer info (optional) */}
          {step < 6 && (
            <div className="p-6 text-center border-t border-brand-dark/5 bg-brand-alabaster/10">
              <p className="text-[10px] text-brand-dark/40 font-bold uppercase tracking-widest">
                Tutti i dati sono trattati secondo la normativa Privacy
              </p>
            </div>
          )}
        </div>
      </div>

      <ConfirmModal 
        isOpen={showExitConfirm}
        onClose={() => setShowExitConfirm(false)}
        onConfirm={() => {
          setShowExitConfirm(false);
          initiateClose();
        }}
        title="Attenzione"
        message={t('drawer_close_confirm')}
      />
    </>
  );
};
