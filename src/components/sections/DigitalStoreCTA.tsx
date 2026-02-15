'use client';

import React, { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/Input';
import { PhoneInput } from '@/components/ui/PhoneInput';
import { cn } from '@/lib/utils';

export const DigitalStoreCTA = () => {
  const t = useTranslations('DigitalStorePage');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-digital-store', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Errore durante l\'invio');
      }
    } catch (error) {
      console.error(error);
      alert('Si è verificato un errore. Riprova più tardi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="richiedi" className="section-padding bg-brand-dark text-brand-alabaster relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-brand-primary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-brand-primary/5 rounded-full blur-[100px] -ml-32 -mb-32" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-3 mb-10 opacity-40">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-beige" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase font-sans">Convert Now</span>
              </div>

              <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-serif leading-none tracking-tight uppercase mb-8">
                {t('cta_final_title')}
              </h2>
              <p className="text-xl lg:text-2xl font-sans text-brand-alabaster/70 leading-relaxed max-w-xl">
                {t('cta_final_desc')}
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4">
                <Icon icon="solar:phone-bold" className="text-2xl text-brand-beige" />
                <span className="text-lg font-serif italic">+39 334 7182966</span>
              </div>
              <div className="flex items-center gap-4">
                <Icon icon="solar:letter-bold" className="text-2xl text-brand-beige" />
                <span className="text-lg font-serif italic">d.difrancia@difranciafirm.com</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-8 lg:p-12 shadow-2xl shadow-black/20 text-brand-dark">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="h-20 w-20 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6">
                  <Icon icon="solar:check-circle-bold" className="text-5xl text-brand-primary" />
                </div>
                <h3 className="text-2xl font-serif mb-4">Richiesta Ricevuta</h3>
                <p className="text-brand-dark/60 font-sans mb-8">
                  Ti contatteremo entro 24 ore per discutere il tuo progetto.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-brand-primary font-bold text-xs uppercase tracking-widest border-b-2 border-brand-primary pb-1 hover:opacity-70 transition-opacity"
                >
                  Invia un'altra richiesta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input 
                    label={t('form_name')} 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <Input 
                    label={t('form_company')} 
                    required 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                  <Input 
                    label={t('form_email')} 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <PhoneInput 
                    label={t('form_phone')} 
                    required 
                    value={formData.phone}
                    onChange={(val) => setFormData({...formData, phone: val})}
                  />
                </div>
                
                <div className="flex flex-col gap-3">
                  <label className="text-[12px] font-extrabold tracking-[0.15em] text-brand-dark/70 uppercase font-sans">
                    {t('form_message')}
                  </label>
                  <textarea 
                    className="bg-transparent border-b-2 border-brand-dark/10 py-4 text-lg text-brand-dark font-medium focus:border-brand-primary focus:outline-none transition-all placeholder:text-brand-dark/20 font-sans min-h-[120px]"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-6 rounded-2xl text-[12px] font-bold tracking-[0.4em] uppercase transition-all flex items-center justify-center gap-4 shadow-xl",
                    isSubmitting 
                      ? "bg-brand-dark/20 text-brand-dark/40 cursor-not-allowed" 
                      : "bg-brand-dark text-white hover:bg-brand-primary shadow-brand-dark/20"
                  )}
                >
                  {isSubmitting ? (
                    <Icon icon="solar:refresh-linear" className="animate-spin text-xl" />
                  ) : (
                    <>
                      {t('form_submit')}
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </>
                  )}
                </button>
                
                <p className="text-[10px] text-brand-dark/30 text-center font-sans font-bold uppercase tracking-widest">
                  Processato in 24 ore lavorative
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
