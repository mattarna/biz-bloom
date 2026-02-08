'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';

const countries = [
  { code: '+39', name: 'Italia', flag: 'circle-flags:it' },
  { code: '+971', name: 'UAE', flag: 'circle-flags:ae' },
  { code: '+966', name: 'Saudi Arabia', flag: 'circle-flags:sa' },
  { code: '+965', name: 'Kuwait', flag: 'circle-flags:kw' },
  { code: '+65', name: 'Singapore', flag: 'circle-flags:sg' },
  { code: '+36', name: 'Ungheria', flag: 'circle-flags:hu' },
];

interface PhoneInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  label,
  value,
  onChange,
  error,
  required
}) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    setPhoneNumber(val);
    onChange(`${selectedCountry.code} ${val}`);
  };

  const handleCountrySelect = (country: typeof countries[0]) => {
    setSelectedCountry(country);
    onChange(`${country.code} ${phoneNumber}`);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-3 w-full relative">
      <label className="text-[12px] font-extrabold tracking-[0.15em] text-brand-dark/70 uppercase font-sans">
        {label} {required && '(Obbligatorio)'}
      </label>
      
      <div className="flex gap-4 items-end border-b-2 border-brand-dark/10 py-2 focus-within:border-brand-primary transition-all">
        {/* Country Selector */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 pb-2 px-2 hover:bg-brand-alabaster transition-colors"
          >
            <Icon icon={selectedCountry.flag} className="text-2xl" />
            <span className="text-sm font-bold text-brand-dark">{selectedCountry.code}</span>
            <Icon icon="solar:alt-arrow-down-linear" className={cn("text-xs transition-transform", isOpen && "rotate-180")} />
          </button>

          {isOpen && (
            <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-brand-dark/10 shadow-2xl z-50 py-2 rounded-xl animate-in fade-in slide-in-from-top-2">
              {countries.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => handleCountrySelect(c)}
                  className="flex items-center gap-3 w-full px-4 py-3 hover:bg-brand-primary/5 transition-colors text-left"
                >
                  <Icon icon={c.flag} className="text-xl" />
                  <span className="text-sm font-bold text-brand-dark flex-1">{c.name}</span>
                  <span className="text-xs text-brand-dark/40">{c.code}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input Field */}
        <input
          type="tel"
          placeholder="333 1234567"
          value={phoneNumber}
          onChange={handlePhoneChange}
          className="flex-1 bg-transparent py-2 text-lg text-brand-dark font-medium focus:outline-none placeholder:text-brand-dark/20 font-sans"
        />
      </div>

      {error && <span className="text-[11px] text-red-600 font-bold uppercase tracking-wider">{error}</span>}
    </div>
  );
};
