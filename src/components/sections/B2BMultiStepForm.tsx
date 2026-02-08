'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import { RadioGroup } from '@/components/ui/RadioGroup';
import { Select } from '@/components/ui/Select';
import { FileUpload } from '@/components/ui/FileUpload';
import { PhoneInput } from '@/components/ui/PhoneInput';

interface B2BMultiStepFormProps {
  onStepChange: (step: number) => void;
  onDirty: () => void;
  onSuccess: () => void;
  onClose: () => void;
}

export const B2BMultiStepForm: React.FC<B2BMultiStepFormProps> = ({ 
  onStepChange, 
  onDirty, 
  onSuccess,
  onClose 
}) => {
  const t = useTranslations('B2BRoom');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    mission_mode: '',
    mission_duration: '',
    premium_option: false,
    target_markets: [] as string[],
    first_name: '',
    last_name: '',
    company_name: '',
    role_title: '',
    email: '',
    phone: '',
    website: '',
    industry: '',
    industry_other: '',
    offering_description: '',
    objectives: [] as string[],
    objectives_other: '',
    target_customer_profile: '',
    timing: '',
    additional_notes: '',
    privacy_ack: false,
  });

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }));
    onDirty();
  };

  const handleNext = () => {
    if (step === 3 && formData.offering_description.length < 30) {
      return;
    }
    const nextStep = step + 1;
    setStep(nextStep);
    onStepChange(nextStep);
  };

  const handleBack = () => {
    const prevStep = step - 1;
    setStep(prevStep);
    onStepChange(prevStep);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    console.log('B2B Form Submitted:', formData);
    onSuccess();
    setStep(6);
    onStepChange(6);
  };

  const markets = [
    { id: 'dubai', label: 'Dubai / UAE' },
    { id: 'ksa', label: 'Arabia Saudita (KSA)' },
    { id: 'kuwait', label: 'Kuwait' },
    { id: 'singapore', label: 'Singapore' },
    { id: 'hungary', label: 'Ungheria' },
  ];

  const objectives = [
    { id: 'clients', label: 'Trovare clienti' },
    { id: 'partners', label: 'Trovare partner' },
    { id: 'distributors', label: 'Trovare distributori' },
    { id: 'investors', label: 'Incontrare investitori' },
    { id: 'other', label: 'Altro' },
  ];

  // Render Steps
  return (
    <div className="flex flex-col h-full">
      <form onSubmit={handleSubmit} className="flex flex-col h-full">
        <div className="flex-1 p-8 lg:p-16 space-y-16">
          
          {/* STEP 1: Mission Config */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-500 space-y-12">
              <h4 className="text-3xl lg:text-4xl font-serif text-brand-dark leading-tight">Configura la tua missione</h4>
              
              <RadioGroup
                label="Modalità Missione (Obbligatorio)"
                options={[
                  { 
                    label: 'Digitale (online)', 
                    value: 'online', 
                    description: 'Incontri via zoom assistiti da un consulente export e un legale.' 
                  },
                  { 
                    label: 'In presenza', 
                    value: 'presence', 
                    description: 'Missione fisica nel paese target con agenda di incontri b2b sul posto.' 
                  }
                ]}
                value={formData.mission_mode}
                onChange={(v) => updateFormData({ mission_mode: v })}
              />

              <RadioGroup
                label="Durata Missione (Obbligatorio)"
                options={[
                  { label: '2 Giorni', value: '2', description: 'Sessione intensiva di matching.' },
                  { label: '5 Giorni', value: '5', description: 'Programma completo di business networking.' }
                ]}
                value={formData.mission_duration}
                onChange={(v) => updateFormData({ mission_duration: v })}
              />

              <div className="pt-4">
                <Checkbox
                  label="Opzione Premium"
                  description="Upgrade esclusivo: garantiamo un numero minimo di contatti validati e interessati al tuo profilo prima della partenza."
                  checked={formData.premium_option}
                  onChange={(e) => updateFormData({ premium_option: e.target.checked })}
                />
              </div>

              <div className="space-y-6">
                <label className="text-[12px] font-extrabold text-brand-primary uppercase tracking-[0.15em]">Mercati Target (min 1, max 5)</label>
                <div className="grid grid-cols-1 gap-4">
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

              {/* Recap Card Mini */}
              <div className="p-6 bg-brand-alabaster/50 border border-brand-dark/5 rounded-xl space-y-4">
                <h5 className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-widest">Riepilogo Configurazione</h5>
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                  <div className="flex items-center gap-2">
                    <Icon icon="solar:globus-linear" className="text-brand-primary" />
                    <span className="text-xs font-bold text-brand-dark uppercase tracking-tight">
                      {formData.mission_mode ? (formData.mission_mode === 'online' ? 'Digitale' : 'Presenza') : '---'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="solar:calendar-linear" className="text-brand-primary" />
                    <span className="text-xs font-bold text-brand-dark uppercase tracking-tight">
                      {formData.mission_duration ? `${formData.mission_duration} Giorni` : '---'}
                    </span>
                  </div>
                  {formData.premium_option && (
                    <div className="flex items-center gap-2">
                      <Icon icon="solar:crown-minimalistic-bold" className="text-brand-primary" />
                      <span className="text-xs font-bold text-brand-dark uppercase tracking-tight">Premium</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Company & Contact */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
              <h4 className="text-xl font-serif text-brand-dark">Azienda e Contatto</h4>
              
              <div className="grid grid-cols-2 gap-6">
                <Input label="Nome" required value={formData.first_name} onChange={(e) => updateFormData({ first_name: e.target.value })} />
                <Input label="Cognome" required value={formData.last_name} onChange={(e) => updateFormData({ last_name: e.target.value })} />
              </div>
              <Input label="Nome Azienda" required value={formData.company_name} onChange={(e) => updateFormData({ company_name: e.target.value })} />
              <Input label="Ruolo Aziendale" required value={formData.role_title} onChange={(e) => updateFormData({ role_title: e.target.value })} />
              <Input label="Email Professionale" type="email" required value={formData.email} onChange={(e) => updateFormData({ email: e.target.value })} />
              <PhoneInput 
                label="Telefono" 
                required 
                value={formData.phone} 
                onChange={(val) => updateFormData({ phone: val })} 
              />
              <Input label="Sito Web (Opzionale)" type="url" value={formData.website} onChange={(e) => updateFormData({ website: e.target.value })} />
              <Select 
                label="Settore Merceologico" 
                required
                value={formData.industry}
                onChange={(e) => updateFormData({ industry: e.target.value })}
                options={[
                  { label: 'Seleziona...', value: '' },
                  { label: 'Food & Beverage', value: 'food' },
                  { label: 'Moda & Lusso', value: 'fashion' },
                  { label: 'Design & Arredo', value: 'design' },
                  { label: 'Tecnologia', value: 'tech' },
                  { label: 'Altro', value: 'other' }
                ]} 
              />
              {formData.industry === 'other' && (
                <Input label="Specifica Settore" required value={formData.industry_other} onChange={(e) => updateFormData({ industry_other: e.target.value })} />
              )}
            </div>
          )}

          {/* STEP 3: What you sell / want */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
              <h4 className="text-xl font-serif text-brand-dark">Offerta e Obiettivi</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-[10px] font-bold text-brand-dark/50 uppercase tracking-[0.2em]">Cosa vendete? (Obbligatorio)</label>
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-wider",
                    formData.offering_description.length >= 30 ? "text-brand-primary" : "text-brand-dark/30"
                  )}>
                    {formData.offering_description.length}/30 minimo
                  </span>
                </div>
                <textarea 
                  required
                  placeholder="Descrivi in breve prodotti/servizi e vantaggi principali..."
                  className={cn(
                    "w-full bg-brand-alabaster/20 border-2 p-4 rounded-xl focus:border-brand-primary focus:outline-none transition-all font-sans text-sm min-h-[120px]",
                    formData.offering_description.length > 0 && formData.offering_description.length < 30 ? "border-brand-primary/20" : "border-brand-dark/10"
                  )}
                  value={formData.offering_description}
                  onChange={(e) => updateFormData({ offering_description: e.target.value })}
                />
                {formData.offering_description.length > 0 && formData.offering_description.length < 30 && (
                  <p className="text-[10px] text-brand-primary font-bold uppercase tracking-wider animate-pulse">
                    Inserisci una descrizione più dettagliata per procedere
                  </p>
                )}
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Quali sono i vostri obiettivi?</label>
                <div className="grid grid-cols-1 gap-3">
                  {objectives.map((obj) => (
                    <Checkbox
                      key={obj.id}
                      label={obj.label}
                      checked={formData.objectives.includes(obj.id)}
                      onChange={(e) => {
                        const newObjs = e.target.checked 
                          ? [...formData.objectives, obj.id]
                          : formData.objectives.filter(id => id !== obj.id);
                        updateFormData({ objectives: newObjs });
                      }}
                    />
                  ))}
                </div>
              </div>

              {formData.objectives.includes('other') && (
                <Input label="Specifica Altro Obiettivo" required value={formData.objectives_other} onChange={(e) => updateFormData({ objectives_other: e.target.value })} />
              )}

              <div className="space-y-4">
                <label className="text-[10px] font-bold text-brand-dark/50 uppercase tracking-[0.2em]">Profilo Cliente Target (Opzionale)</label>
                <textarea 
                  placeholder="Che tipo di azienda/cliente vuoi incontrare?"
                  className="w-full bg-brand-alabaster/20 border border-brand-dark/10 p-4 rounded-xl focus:border-brand-primary focus:outline-none transition-all font-sans text-sm min-h-[100px]"
                  value={formData.target_customer_profile}
                  onChange={(e) => updateFormData({ target_customer_profile: e.target.value })}
                />
              </div>

              <Select 
                label="Tempistiche Previste" 
                value={formData.timing}
                onChange={(e) => updateFormData({ timing: e.target.value })}
                options={[
                  { label: 'Seleziona...', value: '' },
                  { label: 'Entro 1 mese', value: '1_month' },
                  { label: '1-3 mesi', value: '1_3_months' },
                  { label: '3-6 mesi', value: '3_6_months' },
                  { label: 'Oltre 6 mesi', value: '6_plus' }
                ]} 
              />
            </div>
          )}

          {/* STEP 4: Document Upload */}
          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
              <h4 className="text-xl font-serif text-brand-dark">Carica Documentazione</h4>
              <p className="text-sm text-brand-dark/60 font-sans leading-relaxed">
                Caricare materiali utili (Company Profile, Listino, Deck) aiuta il nostro team a qualificare meglio la tua richiesta. L'upload è opzionale.
              </p>
              
              <FileUpload 
                label="Documenti e Media (Opzionale)"
                onFilesSelected={(files) => {
                  onDirty();
                  // In a real app, we'd handle file state here
                }}
              />

              <div className="space-y-4">
                <label className="text-[10px] font-bold text-brand-dark/50 uppercase tracking-[0.2em]">Note Aggiuntive</label>
                <textarea 
                  placeholder="Qualsiasi altra informazione utile..."
                  className="w-full bg-brand-alabaster/20 border border-brand-dark/10 p-4 rounded-xl focus:border-brand-primary focus:outline-none transition-all font-sans text-sm min-h-[100px]"
                  value={formData.additional_notes}
                  onChange={(e) => updateFormData({ additional_notes: e.target.value })}
                />
              </div>
            </div>
          )}

          {/* STEP 5: Privacy & Submit */}
          {step === 5 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-12">
              <h4 className="text-xl font-serif text-brand-dark">Revisione e Invio</h4>
              
              <div className="bg-brand-alabaster/30 p-8 rounded-2xl border border-brand-dark/5 space-y-8">
                <h5 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">Dati di Contatto</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <span className="text-[10px] text-brand-dark/40 uppercase block mb-1">Referente</span>
                    <p className="text-sm font-bold text-brand-dark">{formData.first_name} {formData.last_name}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-dark/40 uppercase block mb-1">Azienda</span>
                    <p className="text-sm font-bold text-brand-dark">{formData.company_name}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-dark/40 uppercase block mb-1">Email</span>
                    <p className="text-sm font-bold text-brand-dark">{formData.email}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-dark/40 uppercase block mb-1">Telefono</span>
                    <p className="text-sm font-bold text-brand-dark">{formData.phone}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Checkbox
                  required
                  label="Accetto l'informativa Privacy"
                  description="Ho letto e accetto l'informativa sul trattamento dei dati personali."
                  checked={formData.privacy_ack}
                  onChange={(e) => updateFormData({ privacy_ack: e.target.checked })}
                />
                
                <p className="text-[10px] text-brand-dark/40 font-sans leading-relaxed">
                  Premendo "Invia Richiesta" confermi di voler essere ricontattato dai nostri esperti per definire i dettagli operativi della tua missione B2B.
                </p>
              </div>
            </div>
          )}

          {/* STEP 6: Success Message */}
          {step === 6 && (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-8 animate-in zoom-in duration-700 py-12 relative overflow-hidden">
              {/* Animated Success Background Icons */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <Icon icon="solar:globus-bold" className="absolute -top-10 -left-10 text-[200px] animate-pulse" />
                <Icon icon="solar:star-bold" className="absolute -bottom-10 -right-10 text-[150px] animate-bounce" />
              </div>

              <div className="relative">
                <div className="h-32 w-32 rounded-full bg-brand-primary flex items-center justify-center shadow-2xl shadow-brand-primary/40 animate-bounce">
                  <Icon icon="solar:check-read-bold" className="text-white text-5xl" />
                </div>
                <div className="absolute -inset-4 border-2 border-brand-primary/20 rounded-full animate-ping" />
              </div>
              
              <div className="space-y-4 relative z-10">
                <h4 className="text-4xl lg:text-5xl font-serif text-brand-dark animate-in fade-in slide-in-from-bottom-4 delay-300 duration-1000">Richiesta Inviata!</h4>
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 delay-500 duration-1000">
                  <p className="text-brand-dark/60 font-sans max-w-sm mx-auto leading-relaxed text-lg">
                    Abbiamo ricevuto la tua configurazione. Il nostro team la analizzerà e ti ricontatterà entro 48h per fissare un appuntamento operativo.
                  </p>
                  
                  <div className="bg-brand-primary/5 border border-brand-primary/20 p-6 rounded-2xl max-w-md mx-auto">
                    <div className="flex items-center justify-center gap-3 text-brand-primary mb-2">
                      <Icon icon="solar:info-circle-bold" className="text-xl" />
                      <span className="text-[11px] font-bold uppercase tracking-widest">Nota Importante</span>
                    </div>
                    <p className="text-brand-dark/80 text-sm font-medium leading-relaxed">
                      A causa dell'alto numero di richieste e della complessità tecnica nella preparazione di ogni missione, la <span className="font-bold text-brand-primary">lista di attesa attuale è di circa 4 mesi</span>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-12 w-full border-t border-brand-dark/5 relative z-10 animate-in fade-in slide-in-from-bottom-1 delay-700 duration-1000">
                <p className="text-[12px] text-brand-primary font-bold uppercase tracking-[0.2em] mb-6">Contatto Urgente:</p>
                <a href="tel:3347272966" className="text-2xl font-serif text-brand-dark hover:text-brand-primary transition-colors flex items-center justify-center gap-3">
                  <Icon icon="solar:phone-bold" className="text-brand-primary" />
                  +39 334 7272966
                </a>
              </div>

              <button 
                type="button"
                onClick={onClose}
                className="mt-12 px-12 py-5 bg-brand-dark text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-brand-primary transition-all animate-in fade-in slide-in-from-bottom-4 delay-1000 duration-1000 rounded-xl"
              >
                Torna al sito
              </button>
            </div>
          )}

        </div>

        {/* Form Footer (Controls) */}
        {step < 6 && (
          <div className="p-8 border-t border-brand-dark/5 bg-white flex items-center gap-4">
            {step > 1 && (
              <button 
                type="button"
                onClick={handleBack}
                className="flex-1 py-5 border border-brand-dark/10 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-brand-alabaster transition-all font-sans"
              >
                Indietro
              </button>
            )}
            <button 
              type={step === 5 ? "submit" : "button"}
              onClick={step < 5 ? handleNext : undefined}
              disabled={step === 3 && formData.offering_description.length < 30}
              className={cn(
                "flex-[2] py-5 text-[11px] font-bold uppercase tracking-[0.2em] transition-all shadow-xl font-sans",
                step === 3 && formData.offering_description.length < 30
                  ? "bg-brand-dark/20 text-brand-dark/40 cursor-not-allowed"
                  : "bg-brand-dark text-white hover:bg-brand-primary"
              )}
            >
              {step === 5 ? "Invia Richiesta" : "Continua"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
