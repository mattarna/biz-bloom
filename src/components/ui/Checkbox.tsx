'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  description,
  className,
  checked,
  ...props
}) => {
  return (
    <label className={cn(
      "flex items-start gap-5 p-6 border-2 transition-all cursor-pointer group rounded-xl",
      checked ? "bg-brand-primary/5 border-brand-primary" : "bg-white border-brand-dark/10 hover:border-brand-primary/30",
      className
    )}>
      <div className="relative flex items-center justify-center mt-0.5">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          {...props}
        />
        <div className={cn(
          "h-6 w-6 border-2 flex items-center justify-center transition-all rounded",
          checked ? "bg-brand-primary border-brand-primary" : "bg-transparent border-brand-dark/20 group-hover:border-brand-primary"
        )}>
          {checked && <Icon icon="solar:check-read-bold" className="text-white text-sm" />}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className={cn(
          "text-[15px] font-extrabold tracking-tight uppercase font-sans",
          checked ? "text-brand-primary" : "text-brand-dark"
        )}>
          {label}
        </span>
        {description && (
          <span className="text-[13px] text-brand-dark/60 font-sans leading-relaxed">
            {description}
          </span>
        )}
      </div>
    </label>
  );
};
