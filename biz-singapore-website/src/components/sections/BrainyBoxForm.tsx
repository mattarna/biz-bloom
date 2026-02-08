'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/navigation';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import { RadioGroup } from '@/components/ui/RadioGroup';
import { FileUpload } from '@/components/ui/FileUpload';
import { PhoneInput } from '@/components/ui/PhoneInput';

export const BrainyBoxForm = () => {
  const t = useTranslations('BrainyBox');
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    submission_mode: '', // 'upload', 'nda', 'skip'
    full_name: '',
    company_name: '',
    role_title: '',
    email: '',
    phone: '',
    website: '',
    project_description: '',
    target_markets: [] as string[],
    additional_notes: '',
    attachments: [] as File[],
    nda_requested: false,
    privacy_ack: false,
  });

  const MIN_CHARACTERS = 50;

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const markets = [
    { id: 'dubai', label: 'Dubai / UAE' },
    { id: 'ksa', label: 'Arabia Saudita (KSA)' },
    { id: 'kuwait', label: 'Kuwait' },
    { id: 'singapore', label: 'Singapore' },
    { id: 'hungary', label: 'Ungheria' },
  ];

  const handleNext = () => {
    if (step === 1 && (!formData.full_name || !formData.company_name || !formData.email || !formData.phone)) return;
    if (step === 2 && formData.project_description.length < MIN_CHARACTERS) return;
    if (step === 3 && !formData.submission_mode) return;

    let nextStep = step + 1;
    
    // Skip Step 4 (Upload) if mode is not 'upload'
    if (nextStep === 4 && formData.submission_mode !== 'upload') {
      nextStep = 5;
    }

    setStep(nextStep);
    // Scroll to top of form area
    document.getElementById('brainy-box-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleBack = () => {
    let prevStep = step - 1;
    
    // Skip Step 4 when going back if mode is not 'upload'
    if (prevStep === 4 && formData.submission_mode !== 'upload') {
      prevStep = 3;
    }
    
    setStep(prevStep);
    document.getElementById('brainy-box-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        attachments: formData.attachments.map(f => f.name),
      };

      const response = await fetch('/api/send-brainy-box', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Errore durante l\'invio');
      }
      
      const ndaParam = formData.submission_mode === 'nda' || formData.nda_requested ? 'true' : 'false';
      router.push(`/brainy-box/thank-you?nda=${ndaParam}`);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Si è verificato un errore durante l\'invio. Riprova più tardi.');
      setIsSubmitting(false);
    }
  };

  const totalSteps = 5;

  return (
    <section id="brainy-box-form" className="relative section-padding bg-background">
      {/* Decorative Grid Background for high-tech feel */}
      <div className="absolute inset-0 bg-blueprint opacity-[0.03] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Form Title & Progress */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.3em]">
                Secure Submission Portal
              </span>
              <h2 className="text-4xl font-serif text-brand-dark uppercase tracking-tight">
                {step === 1 && t('form_step_1_title')}
                {step === 2 && t('form_step_2_title')}
                {step === 3 && t('form_step_3_title')}
                {step === 4 && t('form_step_4_title')}
                {step === 5 && t('form_step_5_title')}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-[0.2em]">
                Step {step} di {totalSteps}
              </span>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div 
                    key={s} 
                    className={cn(
                      "h-1 w-8 transition-all duration-500 rounded-full",
                      s <= step ? "bg-brand-primary" : "bg-brand-primary/10"
                    )} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Form Container */}
        <form onSubmit={handleSubmit} className="bg-white rounded-[40px] shadow-[0_50px_100px_-20px_rgba(13,69,61,0.08)] border border-brand-dark/5 overflow-hidden transition-all duration-700">
          <div className="p-8 lg:p-16">
            
            {/* STEP 1: Contact (Anagrafica) */}
            {step === 1 && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Input 
                    label="Nome Completo" 
                    required 
                    value={formData.full_name} 
                    onChange={(e) => updateFormData({ full_name: e.target.value })} 
                  />
                  <Input 
                    label="Nome Azienda" 
                    required 
                    value={formData.company_name} 
                    onChange={(e) => updateFormData({ company_name: e.target.value })} 
                  />
                  <Input 
                    label="Ruolo Aziendale (Opzionale)" 
                    value={formData.role_title} 
                    onChange={(e) => updateFormData({ role_title: e.target.value })} 
                  />
                  <Input 
                    label="Email Professionale" 
                    type="email" 
                    required 
                    value={formData.email} 
                    onChange={(e) => updateFormData({ email: e.target.value })} 
                  />
                  <PhoneInput 
                    label="Telefono" 
                    required 
                    value={formData.phone} 
                    onChange={(v) => updateFormData({ phone: v })} 
                  />
                  <Input 
                    label="Sito Web Aziendale (Opzionale)" 
                    type="url" 
                    value={formData.website} 
                    onChange={(e) => updateFormData({ website: e.target.value })} 
                  />
                </div>
              </div>
            )}

            {/* STEP 2: Project Details (Descrizione Progetto) */}
            {step === 2 && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <label className="text-[10px] font-bold text-brand-dark/50 uppercase tracking-[0.2em]">
                      Descrizione Progetto (Obbligatorio)
                    </label>
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-wider transition-colors",
                      formData.project_description.length >= MIN_CHARACTERS ? "text-brand-primary" : "text-brand-dark/30"
                    )}>
                      {formData.project_description.length}/{MIN_CHARACTERS} caratteri
                    </span>
                  </div>
                  <textarea 
                    required
                    placeholder="Descrivi progetto/idea, obiettivo e contesto..."
                    className={cn(
                      "w-full bg-brand-alabaster/20 border-2 p-8 rounded-[30px] focus:border-brand-primary focus:outline-none transition-all font-sans text-sm min-h-[220px] leading-relaxed",
                      formData.project_description.length > 0 && formData.project_description.length < MIN_CHARACTERS ? "border-brand-primary/20" : "border-brand-dark/5"
                    )}
                    value={formData.project_description}
                    onChange={(e) => updateFormData({ project_description: e.target.value })}
                  />
                  {formData.project_description.length > 0 && formData.project_description.length < MIN_CHARACTERS && (
                    <p className="text-[10px] text-brand-primary font-bold uppercase tracking-wider animate-pulse">
                      {t('form_project_description_error')}
                    </p>
                  )}
                  <p className="text-xs text-brand-dark/40 font-sans italic">
                    {t('form_project_description_helper')}
                  </p>
                </div>

                <div className="space-y-6">
                  <label className="text-[12px] font-extrabold text-brand-primary uppercase tracking-[0.15em]">Mercati Target d'interesse</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {markets.map((m) => (
                      <Checkbox
                        key={m.id}
                        label={m.label}
                        checked={formData.target_markets.includes(m.id)}
                        onChange={(e) => {
                          const newMarkets = e.target.checked 
                            ? [...formData.target_markets, m.id]
                            : formData.target_markets.filter(id => id !== m.id);
                          updateFormData({ target_markets: newMarkets });
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Submission Mode (Spostato qui) */}
            {step === 3 && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="p-8 bg-brand-primary/5 border border-brand-primary/10 rounded-3xl flex gap-6 items-start">
                  <div className="h-12 w-12 rounded-2xl bg-brand-primary flex items-center justify-center shrink-0 shadow-lg shadow-brand-primary/20">
                    <Icon icon="solar:shield-check-bold" className="text-white text-2xl" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-[11px] font-bold text-brand-primary uppercase tracking-widest">Protocollo di Riservatezza</h5>
                    <p className="text-sm text-brand-dark/70 font-sans leading-relaxed">
                      {t('form_step_1_trust')}
                    </p>
                  </div>
                </div>

                <RadioGroup
                  label="Seleziona come desideri procedere con l'invio"
                  options={[
                    { 
                      label: t('form_step_3_option_1'), 
                      value: 'upload', 
                      description: 'Carica subito i file per una valutazione immediata del team.' 
                    },
                    { 
                      label: t('form_step_3_option_2'), 
                      value: 'nda', 
                      description: 'Richiedi la firma del nostro NDA standard prima di caricare file.' 
                    },
                    { 
                      label: t('form_step_3_option_3'), 
                      value: 'skip', 
                      description: 'Invia solo la descrizione per un primo ricontatto senza file.' 
                    }
                  ]}
                  value={formData.submission_mode}
                  onChange={(v) => updateFormData({ submission_mode: v })}
                />
              </div>
            )}

            {/* STEP 4: Upload (Conditional) */}
            {step === 4 && formData.submission_mode === 'upload' && (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <FileUpload 
                  label="Documenti e Materiali (Max 150MB totali)"
                  onFilesSelected={(files) => updateFormData({ attachments: files })}
                  maxFiles={10}
                  maxSizeMB={150}
                />

                <div className="pt-8 border-t border-brand-dark/5">
                  <Checkbox
                    label="Voglio firmare un NDA"
                    description="Anche se ho già caricato i materiali, desidero formalizzare un NDA per le fasi successive di analisi."
                    checked={formData.nda_requested}
                    onChange={(e) => updateFormData({ nda_requested: e.target.checked })}
                  />
                </div>
              </div>
            )}

            {/* STEP 5: Final Review & Privacy */}
            {step === 5 && (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-brand-alabaster/30 p-8 rounded-[30px] border border-brand-dark/5 space-y-6">
                    <h5 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">Riepilogo Invio</h5>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-brand-dark/5">
                        <span className="text-[11px] text-brand-dark/40 uppercase">Referente</span>
                        <span className="text-xs font-bold text-brand-dark">{formData.full_name}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-brand-dark/5">
                        <span className="text-[11px] text-brand-dark/40 uppercase">Modalità</span>
                        <span className="text-xs font-bold text-brand-primary uppercase">
                          {formData.submission_mode === 'upload' ? 'Upload Immediato' : 
                           formData.submission_mode === 'nda' ? 'Richiesta NDA' : 'Solo Descrizione'}
                        </span>
                      </div>
                      {(formData.submission_mode === 'nda' || formData.nda_requested) && (
                        <div className="flex justify-between items-center py-2 border-b border-brand-dark/5">
                          <span className="text-[11px] text-brand-dark/40 uppercase">NDA</span>
                          <span className="text-xs font-bold text-brand-primary uppercase">Richiesto</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col justify-center space-y-6">
                    <Checkbox
                      required
                      label="Ho letto e accetto l’informativa privacy."
                      checked={formData.privacy_ack}
                      onChange={(e) => updateFormData({ privacy_ack: e.target.checked })}
                    />
                    <p className="text-[11px] text-brand-dark/40 font-sans leading-relaxed italic">
                      Premendo il tasto "Invia Richiesta", la tua idea verrà inserita nel nostro sistema protetto e processata secondo i più alti standard di riservatezza.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Persistent Footer Buttons */}
          <div className="p-8 lg:px-16 lg:pb-16 bg-brand-alabaster/20 flex items-center gap-6 border-t border-brand-dark/5">
            {step > 1 && (
              <button 
                type="button"
                onClick={handleBack}
                className="flex-1 py-7 border border-brand-dark/10 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-all rounded-2xl shadow-sm"
              >
                Indietro
              </button>
            )}
            <button 
              type={step === totalSteps ? "submit" : "button"}
              onClick={step < totalSteps ? handleNext : undefined}
              disabled={isSubmitting || 
                (step === 1 && (!formData.full_name || !formData.company_name || !formData.email || !formData.phone)) ||
                (step === 2 && formData.project_description.length < MIN_CHARACTERS) ||
                (step === 3 && !formData.submission_mode) ||
                (step === 5 && !formData.privacy_ack)
              }
              className={cn(
                "flex-[2] py-7 text-[11px] font-bold uppercase tracking-[0.3em] transition-all rounded-2xl shadow-2xl",
                isSubmitting || (step === totalSteps && !formData.privacy_ack) || (step === 2 && formData.project_description.length < MIN_CHARACTERS)
                  ? "bg-brand-dark/20 text-brand-dark/40 cursor-not-allowed"
                  : "bg-brand-dark text-white hover:bg-brand-primary shadow-brand-dark/20"
              )}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-3">
                  <Icon icon="solar:refresh-linear" className="animate-spin text-xl" />
                  <span>Elaborazione...</span>
                </div>
              ) : (
                step === totalSteps ? "Invia Richiesta Protetta" : "Continua"
              )}
            </button>
          </div>
        </form>

        {/* Floating Trust Badge */}
        <div className="mt-12 flex items-center justify-center gap-8 opacity-40">
           <div className="flex items-center gap-2">
             <Icon icon="solar:lock-bold" className="text-brand-primary" />
             <span className="text-[10px] font-bold uppercase tracking-widest">End-to-End Encryption</span>
           </div>
           <div className="h-4 w-px bg-brand-dark/20" />
           <div className="flex items-center gap-2">
             <Icon icon="solar:shield-bold" className="text-brand-primary" />
             <span className="text-[10px] font-bold uppercase tracking-widest">Data Privacy Act compliant</span>
           </div>
        </div>
      </div>
    </section>
  );
};
