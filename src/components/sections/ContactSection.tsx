'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/navigation';
import Image from 'next/image';

type Reason = 'membership' | 'b2b' | 'brainy' | 'events' | 'legal' | 'other';

export const ContactSection = () => {
  const t = useTranslations('ContactPage');
  const [selectedReason, setSelectedReason] = useState<Reason | null>(null);

  const reasons: { id: Reason; label: string; icon: string; link?: string }[] = [
    { id: 'membership', label: t('reason_membership'), icon: 'solar:user-bold', link: '/membership' },
    { id: 'b2b', label: t('reason_b2b'), icon: 'solar:globus-bold', link: '/b2b-room' },
    { id: 'brainy', label: t('reason_brainy'), icon: 'solar:lightbulb-bold', link: '/brainy-box' },
    { id: 'events', label: t('reason_events'), icon: 'solar:calendar-bold' },
    { id: 'legal', label: t('reason_legal'), icon: 'solar:shield-keyhole-bold', link: '/parlour' },
    { id: 'other', label: t('reason_other'), icon: 'solar:chat-round-dots-bold' },
  ];

  const getPhone = (reason: Reason | null) => {
    return reason === 'legal' ? '+39 334 7272966' : '+39 334 7182966';
  };

  const getEmail = () => 'd.difrancia@difranciafirm.com';
  const getInstagram = () => 'https://www.instagram.com/daniela_di_francia/';

  return (
    <section className="relative min-h-screen pt-32 pb-24 lg:pt-48 lg:pb-40 bg-brand-alabaster overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-olive/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-16">
        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16 lg:mb-32 items-center">
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[1px] w-12 bg-brand-primary" />
              <span className="text-[11px] font-bold tracking-[0.4em] text-brand-primary uppercase font-sans">
                Connect with us
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.5rem,8vw,5.5rem)] font-serif text-brand-dark leading-[1.1] uppercase tracking-tight mb-8"
            >
              {t('hero_title')}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-2xl text-brand-dark/60 font-medium max-w-2xl"
            >
              {t('hero_subtitle')}
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden shadow-2xl">
              <Image 
                src="/media/Community (1).webp"
                alt="Biz Bloom Community"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-brand-dark/10" />
              <div className="absolute inset-4 border border-white/20" />
            </div>
            {/* Decorative tag */}
            <div className="absolute -bottom-6 -left-6 bg-brand-dark p-6 text-white shadow-xl">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase">Premium Hub</p>
              <p className="text-xl font-serif uppercase mt-1">Strategic</p>
            </div>
          </motion.div>
        </div>

        {/* INTRO LINE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16 pb-16 border-b border-brand-dark/10"
        >
          <p className="text-[13px] font-bold tracking-[0.2em] text-brand-primary uppercase">
            {t('intro_line')}
          </p>
        </motion.div>

        {/* MAIN CHANNELS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-32">
          {/* PHONE */}
          <motion.a
            href={`tel:${getPhone(selectedReason).replace(/\s/g, '')}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group flex flex-col p-8 lg:p-12 bg-white border border-brand-dark/5 hover:border-brand-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl"
          >
            <div className="h-16 w-16 mb-8 rounded-full bg-brand-alabaster flex items-center justify-center text-brand-dark group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
              <Icon icon="solar:phone-bold" className="text-2xl" />
            </div>
            <h3 className="text-[11px] font-bold tracking-[0.3em] text-brand-primary uppercase mb-4">{t('card_call_title')}</h3>
            <p className="text-2xl lg:text-3xl font-serif text-brand-dark mb-2">{getPhone(selectedReason)}</p>
            <p className="text-[13px] font-medium text-brand-dark/40 uppercase tracking-widest">{t('card_call_desc')}</p>
          </motion.a>

          {/* EMAIL */}
          <motion.a
            href={`mailto:${getEmail()}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="group flex flex-col p-8 lg:p-12 bg-white border border-brand-dark/5 hover:border-brand-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl"
          >
            <div className="h-16 w-16 mb-8 rounded-full bg-brand-alabaster flex items-center justify-center text-brand-dark group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
              <Icon icon="solar:letter-bold" className="text-2xl" />
            </div>
            <h3 className="text-[11px] font-bold tracking-[0.3em] text-brand-primary uppercase mb-4">{t('card_mail_title')}</h3>
            <p className="text-xl lg:text-2xl font-serif text-brand-dark mb-2 break-all">{getEmail()}</p>
            <p className="text-[13px] font-medium text-brand-dark/40 uppercase tracking-widest">{t('card_mail_desc')}</p>
          </motion.a>

          {/* INSTAGRAM */}
          <motion.a
            href={getInstagram()}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="group flex flex-col p-8 lg:p-12 bg-white border border-brand-dark/5 hover:border-brand-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl"
          >
            <div className="h-16 w-16 mb-8 rounded-full bg-brand-alabaster flex items-center justify-center text-brand-dark group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
              <Icon icon="brandico:instagram" className="text-2xl" />
            </div>
            <h3 className="text-[11px] font-bold tracking-[0.3em] text-brand-primary uppercase mb-4">{t('card_insta_title')}</h3>
            <p className="text-2xl lg:text-3xl font-serif text-brand-dark mb-2">@daniela_di_francia</p>
            <p className="text-[13px] font-medium text-brand-dark/40 uppercase tracking-widest">{t('card_insta_desc')}</p>
          </motion.a>
        </div>

        {/* REASON SELECTION HUB */}
        <div className="mb-24 lg:mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="flex items-center gap-8">
              <div className="hidden lg:block relative h-24 w-24 overflow-hidden rounded-full border border-brand-dark/10">
                <Image 
                  src="/media/Community (1).webp"
                  alt="Hub"
                  fill
                  className="object-cover scale-150 grayscale"
                />
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-[0.4em] text-brand-primary uppercase mb-4 block">
                  Direct Selection
                </span>
                <h2 className="text-3xl lg:text-5xl font-serif text-brand-dark uppercase tracking-tight">
                  {t('hub_title')}
                </h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((reason) => (
              <button
                key={reason.id}
                onClick={() => setSelectedReason(reason.id === selectedReason ? null : reason.id)}
                className={`flex items-center gap-6 p-6 lg:p-8 text-left transition-all duration-500 border group ${
                  selectedReason === reason.id
                    ? 'bg-brand-dark border-brand-dark text-white'
                    : 'bg-white border-brand-dark/5 text-brand-dark hover:border-brand-primary/30'
                }`}
              >
                <div className={`h-12 w-12 rounded-full flex items-center justify-center transition-colors duration-500 ${
                  selectedReason === reason.id ? 'bg-white/10 text-white' : 'bg-brand-alabaster text-brand-dark group-hover:bg-brand-primary group-hover:text-white'
                }`}>
                  <Icon icon={reason.icon} className="text-xl" />
                </div>
                <div className="flex-1">
                  <span className="text-[13px] font-bold uppercase tracking-widest">{reason.label}</span>
                </div>
                <Icon 
                  icon="solar:arrow-right-linear" 
                  className={`text-xl transition-all duration-500 ${
                    selectedReason === reason.id ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                  }`} 
                />
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {selectedReason && (
              <motion.div
                key={selectedReason}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-8"
              >
                <div className="p-8 lg:p-12 bg-white border border-brand-primary/20 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="max-w-2xl">
                    <p className="text-xl lg:text-2xl font-serif text-brand-dark mb-4">
                      {t(`info_${selectedReason}`)}
                    </p>
                    <p className="text-[14px] font-medium text-brand-dark/50">
                      {selectedReason === 'legal' 
                        ? "La Law Firm risponde a numeri dedicati per garantire la massima privacy."
                        : "Il nostro team membership è a tua disposizione per ogni chiarimento."}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    {reasons.find(r => r.id === selectedReason)?.link && (
                      <Link 
                        href={reasons.find(r => r.id === selectedReason)!.link!}
                        className="px-8 py-4 bg-brand-primary text-white text-[12px] font-bold uppercase tracking-widest hover:bg-brand-dark transition-all"
                      >
                        Vai alla pagina
                      </Link>
                    )}
                    <a 
                      href={`tel:${getPhone(selectedReason).replace(/\s/g, '')}`}
                      className="px-8 py-4 border border-brand-dark/20 text-brand-dark text-[12px] font-bold uppercase tracking-widest hover:bg-brand-alabaster transition-all"
                    >
                      Chiama Ora
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* REASSURANCE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 lg:p-24 bg-brand-dark text-white overflow-hidden relative min-h-[500px] flex items-center"
        >
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-30 grayscale"
            >
              <source src="/media/LOUNGE CLUB BLUE ROOM.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
          </div>

          <div className="max-w-3xl relative z-10">
            <h2 className="text-3xl lg:text-5xl font-serif uppercase mb-8 leading-tight">
              {t('reassurance_title')}
            </h2>
            <p className="text-lg lg:text-xl text-white/70 font-medium mb-12 leading-relaxed">
              {t('reassurance_text')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-white/10">
              <div className="flex items-center gap-6">
                <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center">
                  <Icon icon="solar:clock-circle-bold" className="text-xl" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1">Timeframe</p>
                  <p className="text-[14px] font-bold uppercase">Risposta rapida</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center">
                  <Icon icon="solar:shield-check-bold" className="text-xl" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1">Privacy</p>
                  <p className="text-[14px] font-bold uppercase">Gestione riservata</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FINAL REPETITION */}
        <div className="mt-20 lg:mt-32 flex flex-col lg:flex-row items-center justify-between gap-12 border-t border-brand-dark/10 pt-12 opacity-60">
           <div className="flex gap-12">
             <a href={`tel:${getPhone(null)}`} className="text-[13px] font-bold uppercase tracking-widest hover:text-brand-primary transition-colors">
               General: {getPhone(null)}
             </a>
             <a href={`tel:${getPhone('legal')}`} className="text-[13px] font-bold uppercase tracking-widest hover:text-brand-primary transition-colors">
               Law Firm: {getPhone('legal')}
             </a>
           </div>
           <p className="text-[11px] font-bold uppercase tracking-[0.3em]">© 2026 BIZ BLOOM — SINGAPORE STRATEGIC HUB</p>
        </div>
      </div>
    </section>
  );
};
