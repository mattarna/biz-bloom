'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface RadioGroupProps {
  label: string;
  options: { label: string; value: string; description?: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={cn("flex flex-col gap-5 w-full", className)}>
      <label className="text-[12px] font-extrabold tracking-[0.15em] text-brand-dark/70 uppercase font-sans">
        {label}
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "p-6 border-2 transition-all font-sans rounded-xl text-left flex flex-col gap-2",
              value === option.value
                ? "bg-brand-dark border-brand-dark text-white shadow-xl shadow-brand-dark/20"
                : "bg-white border-brand-dark/10 text-brand-dark/60 hover:border-brand-primary/40 hover:text-brand-primary"
            )}
          >
            <span className="text-[13px] font-extrabold tracking-[0.1em] uppercase">
              {option.label}
            </span>
            {option.description && (
              <span className={cn(
                "text-[11px] font-medium leading-relaxed lowercase",
                value === option.value ? "text-brand-alabaster/70" : "text-brand-dark/40"
              )}>
                {option.description}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
