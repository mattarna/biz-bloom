'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-dark/60 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-md p-10 shadow-2xl rounded-3xl animate-in zoom-in-95 duration-300 flex flex-col items-center text-center gap-8">
        <div className="h-20 w-20 rounded-full bg-brand-alabaster flex items-center justify-center text-brand-primary">
          <Icon icon="solar:danger-bold" className="text-4xl" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-2xl font-serif text-brand-dark tracking-tight">{title}</h3>
          <p className="text-brand-dark/60 font-sans leading-relaxed text-sm">
            {message}
          </p>
        </div>
        
        <div className="flex flex-col w-full gap-3">
          <button
            onClick={onConfirm}
            className="w-full bg-brand-dark text-white py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-red-700 transition-all rounded-xl"
          >
            Esci e perdi i dati
          </button>
          <button
            onClick={onClose}
            className="w-full bg-brand-alabaster text-brand-dark py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-brand-dark hover:text-white transition-all rounded-xl"
          >
            Annulla e continua
          </button>
        </div>
      </div>
    </div>
  );
};
