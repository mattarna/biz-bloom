'use client';

import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Link } from '@/navigation';
import { useSearchParams } from 'next/navigation';

export default function Demo2Page() {
  const searchParams = useSearchParams();
  const isDemoMode = searchParams.get('isDemo') === 'true';

  // Hide Navbar on mount
  useEffect(() => {
    const nav = document.querySelector('nav');
    if (nav) nav.style.display = 'none';
    return () => {
      if (nav) nav.style.display = 'block';
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans selection:bg-[#6366F1]/10">
      
      {/* EXIT BUTTON - Hidden in demo mode */}
      {!isDemoMode && (
        <div className="fixed top-8 left-8 z-[60]">
          <Link 
            href="/digital-stores#demo"
            className="flex items-center gap-3 bg-white/90 backdrop-blur-md border border-[#1E293B]/10 px-5 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-[#1E293B] hover:bg-[#6366F1] hover:text-white transition-all shadow-lg"
          >
            <Icon icon="solar:alt-arrow-left-linear" className="text-lg" />
            Esci dalla demo
          </Link>
        </div>
      )}

      {/* 1. HERO AZIENDALE */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#0F172A]">
        <div className="absolute inset-0 opacity-30">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558239027-5197828d1844?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
        </div>
        
        <div className="relative z-10 max-w-5xl space-y-12">
          <div className="inline-block border border-[#6366F1] px-6 py-2 rounded-full">
             <span className="text-[10px] font-bold tracking-[0.5em] text-[#6366F1] uppercase">Advanced Textile Solutions</span>
          </div>
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-serif leading-[1.1] tracking-tight text-white uppercase max-w-4xl mx-auto">
            Tessiture <span className="text-[#6366F1]">Marchetti</span> <span className="italic">Lab</span>
          </h1>
          <p className="text-xl lg:text-2xl font-sans text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Ingegneria tessile applicata al design d'avanguardia. Innovazione, sostenibilità e precisione Made in Italy per i leader mondiali del fashion.
          </p>
          <div className="pt-8">
            <button className="bg-[#6366F1] text-white px-12 py-6 text-[12px] font-bold tracking-[0.4em] uppercase hover:bg-white hover:text-[#6366F1] transition-all shadow-2xl">
              Esplora i Tessuti
            </button>
          </div>
        </div>
      </section>

      {/* 2. CHI SIAMO */}
      <section className="py-24 lg:py-48 bg-white text-[#1E293B]">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="space-y-8">
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-serif leading-none tracking-tight uppercase">Un'Eredità di Innovazione</h2>
              <p className="text-xl leading-relaxed text-[#1E293B]/70 font-medium">
                Da cinquant'anni, Tessiture Marchetti Lab trasforma fibre naturali e sintetiche in superfici evolute. La nostra sede nel distretto tessile di Prato è un laboratorio di sperimentazione continua dove collaboriamo con designer internazionali per definire i trend del futuro.
              </p>
            </div>
            <div className="aspect-video bg-[#F1F5F9] rounded-[40px] overflow-hidden">
               <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODOTTI / TECNOLOGIE */}
      <section className="py-24 lg:py-32 bg-[#F1F5F9]">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              { name: 'X-Tech Fiber', desc: 'Fibre elastiche ad altissima resistenza per activewear di lusso.', icon: 'solar:bolt-circle-bold' },
              { name: 'Green-Eco Silk', desc: 'Seta rigenerata con processi a impatto idrico zero.', icon: 'solar:leaf-bold' },
              { name: 'Shield-Armor', desc: 'Tessuti idrorepellenti e antimacchia con nanotecnologia.', icon: 'solar:shield-bold' }
            ].map((p, i) => (
              <div key={i} className="group p-12 bg-white hover:bg-[#1E293B] transition-all duration-700 rounded-[30px] shadow-sm hover:shadow-2xl flex flex-col gap-10">
                <div className="h-16 w-16 rounded-2xl bg-[#6366F1]/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Icon icon={p.icon} className="text-3xl text-[#6366F1] group-hover:text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-[#1E293B] group-hover:text-white transition-colors uppercase">{p.name}</h3>
                  <p className="text-[#1E293B]/60 group-hover:text-slate-400 font-medium leading-relaxed transition-colors">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ASSET E MATERIALI */}
      <section className="py-24 lg:py-32 bg-white text-[#1E293B] border-y border-[#F1F5F9]">
        <div className="mx-auto max-w-[1400px] px-6 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-5xl font-serif mb-6 uppercase tracking-tight">Technical Deck</h2>
            <p className="text-[#1E293B]/60 text-lg font-medium">Documentazione tecnica completa, schede di sicurezza e test di laboratorio disponibili per il download.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <button className="bg-[#1E293B] text-white px-10 py-6 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#6366F1] transition-all rounded-xl flex items-center justify-center gap-4">
              <Icon icon="solar:file-download-bold" className="text-xl" />
              Download Deck
            </button>
          </div>
        </div>
      </section>

      {/* 5. CREDIBILITÀ */}
      <section className="py-24 lg:py-32 bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <p className="text-[10px] font-bold tracking-[0.4em] text-[#1E293B]/30 uppercase mb-16">Global Partners & Certifications</p>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-20 grayscale brightness-0">
             <span className="text-2xl font-bold italic tracking-tighter uppercase text-[#1E293B]">OEKO-TEX®</span>
             <span className="text-2xl font-bold italic tracking-tighter uppercase text-[#1E293B]">GOTS</span>
             <span className="text-2xl font-bold italic tracking-tighter uppercase text-[#1E293B]">ISO 9001</span>
             <span className="text-2xl font-bold italic tracking-tighter uppercase text-[#1E293B]">RCS</span>
          </div>
        </div>
      </section>

      {/* 6. CTA & CONTATTI */}
      <section className="py-24 lg:py-48 bg-[#0F172A] text-white">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-16">
          <h2 className="text-4xl lg:text-7xl font-serif uppercase tracking-tighter leading-none">Crea la tua prossima collezione con noi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 pt-12">
            <div className="p-10 border border-white/10 rounded-3xl space-y-4">
              <p className="text-[10px] font-bold tracking-[0.3em] text-[#6366F1] uppercase">Main Office</p>
              <p className="text-xl font-serif">Prato, Italia</p>
              <p className="text-white/40 font-light">+39 0574 987654</p>
            </div>
            <div className="p-10 border border-white/10 rounded-3xl space-y-4">
              <p className="text-[10px] font-bold tracking-[0.3em] text-[#6366F1] uppercase">International Sales</p>
              <p className="text-xl font-serif">sales@marchettilab.com</p>
              <p className="text-white/40 font-light">Risposta in 12 ore</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER MINIMALE */}
      <footer className="py-12 bg-black/20 text-[#F8FAFC]">
        <div className="mx-auto max-w-[1400px] px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold tracking-[0.2em] text-[#F8FAFC]/20 uppercase">
          <span>© 2026 TESSITURE MARCHETTI LAB</span>
          <span>P.IVA IT98765432109</span>
        </div>
      </footer>

      {/* STICKY CTA - Hidden in demo mode */}
      {!isDemoMode && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-lg">
          <Link 
            href="/digital-stores#richiedi"
            className="bg-[#6366F1] text-white w-full py-6 rounded-2xl flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(99,102,241,0.4)] hover:scale-[1.02] transition-all"
          >
            <span className="text-[12px] font-bold tracking-[0.3em] uppercase">Richiedi il tuo Digital Store</span>
            <Icon icon="solar:magic-stick-3-bold" className="text-2xl animate-pulse" />
          </Link>
        </div>
      )}

    </main>
  );
}
