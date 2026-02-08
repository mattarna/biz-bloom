'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  id,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label 
        htmlFor={id} 
        className="text-[12px] font-extrabold tracking-[0.15em] text-brand-dark/70 uppercase font-sans"
      >
        {label}
      </label>
      <input
        id={id}
        className={cn(
          "bg-transparent border-b-2 border-brand-dark/10 py-4 text-lg text-brand-dark font-medium focus:border-brand-primary focus:outline-none transition-all placeholder:text-brand-dark/20 font-sans",
          error && "border-red-500",
          className
        )}
        {...props}
      />
      {error && <span className="text-[11px] text-red-600 font-bold uppercase tracking-wider">{error}</span>}
    </div>
  );
};
