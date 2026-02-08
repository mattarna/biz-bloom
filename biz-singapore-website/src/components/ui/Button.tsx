'use client';

import React from 'react';
import { cn } from '@/lib/utils'; // I'll need to create this utility

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-primary/90 hover:shadow-[0_0_20px_rgba(10,77,70,0.4)]',
    secondary: 'bg-brand-alabaster text-black hover:bg-white',
    outline: 'border border-white/10 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10',
    ghost: 'text-brand-beige/70 hover:text-brand-primary transition-colors',
  };

  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-5 py-2 text-sm',
    lg: 'px-8 py-3 font-semibold',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg transition-all active:scale-95 disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

