'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { label: string; value: string }[];
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  className,
  id,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label 
        htmlFor={id} 
        className="text-[10px] font-bold tracking-[0.2em] text-brand-dark/50 uppercase font-sans"
      >
        {label}
      </label>
      <div className="relative group">
        <select
          id={id}
          className={cn(
            "w-full appearance-none bg-transparent border-b border-brand-dark/10 py-3 pr-10 text-brand-dark focus:border-brand-primary focus:outline-none transition-all font-sans cursor-pointer",
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-brand-dark/30 group-hover:text-brand-primary transition-colors">
          <Icon icon="solar:alt-arrow-down-linear" className="text-xl" />
        </div>
      </div>
    </div>
  );
};
