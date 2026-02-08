'use client';

import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Link } from '@/navigation';
import { useSearchParams } from 'next/navigation';

export default function Demo1Page() {
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
    <main className="min-h-screen bg-[#FDFBF7] text-[#2C351D] font-sans selection:bg-[#4A5D23]/10">
      
      {/* EXIT BUTTON - Hidden in demo mode */}
      {!isDemoMode && (
        <div className="fixed top-8 left-8 z-[60]">
          <Link 
            href="/digital-stores#demo"
            className="flex items-center gap-3 bg-white/90 backdrop-blur-md border border-[#2C351D]/10 px-5 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-[#2C351D] hover:bg-[#2C351D] hover:text-white transition-all shadow-lg"
          >
            <Icon icon="solar:alt-arrow-left-linear" className="text-lg" />
            Esci dalla demo
          </Link>
        </div>
      )}

      {/* 1. HERO AZIENDALE */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#2C351D]">
        <div className="absolute inset-0 opacity-50">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
           <div className="absolute inset-0 bg-gradient-to-b from-[#2C351D] via-transparent to-[#2C351D]" />
        </div>
        
        <div className="relative z-10 max-w-4xl space-y-8">
          <div className="flex items-center justify-center gap-4 mb-4">
             <div className="h-px w-8 bg-[#C5A059]" />
             <span className="text-[10px] font-bold tracking-[0.5em] text-[#C5A059] uppercase">Dal 1954</span>
             <div className="h-px w-8 bg-[#C5A059]" />
          </div>
          <h1 className="text-[clamp(3rem,10vw,6rem)] font-serif leading-none tracking-tight text-[#FDFBF7] uppercase">
            Oleificio <span className="italic text-[#C5A059]">Ferrante</span>
          </h1>
          <p className="text-xl lg:text-3xl font-serif text-[#FDFBF7]/80 italic max-w-2xl mx-auto">
            "L'oro liquido delle terre pugliesi, selezionato per le migliori tavole del mondo."
          </p>
          <div className="pt-12">
            <button className="bg-[#C5A059] text-white px-12 py-6 text-[12px] font-bold tracking-[0.4em] uppercase hover:bg-[#4A5D23] transition-all shadow-2xl">
              Scopri la Selezione
            </button>
          </div>
        </div>
      </section>

      {/* ... (rest of sections unchanged) ... */}
      <section className="py-24 lg:py-32 bg-[#F6F3ED]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-serif mb-12 uppercase tracking-tight text-[#2C351D]">La Nostra Storia</h2>
          <p className="text-lg lg:text-2xl leading-relaxed text-[#2C351D]/70 font-medium">
            Nato nel cuore della Puglia, l'Oleificio Ferrante estrae olio extravergine di oliva con metodi tradizionali uniti a tecnologie di ultima generazione. Ogni goccia racchiude il calore del sole e la dedizione di tre generazioni di mastri oleari. Esportiamo oggi in oltre 15 paesi, portando l'autenticità italiana in ogni continente.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { name: 'Riserva Reale', desc: 'Estratto a freddo, bassa acidità, sentori di carciofo.', icon: 'solar:bottle-bold' },
              { name: 'Selezione Oro', desc: 'Blend equilibrato, perfetto per ogni condimento.', icon: 'solar:bottle-bold' },
              { name: 'Bio Purezza', desc: 'Cultura biologica certificata, gusto intenso e deciso.', icon: 'solar:bottle-bold' }
            ].map((p, i) => (
              <div key={i} className="group p-12 border border-[#4A5D23]/10 bg-[#FDFBF7] hover:bg-[#2C351D] hover:border-[#2C351D] transition-all duration-500 rounded-[30px] flex flex-col items-center text-center gap-8">
                <div className="h-20 w-20 rounded-2xl bg-[#4A5D23]/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Icon icon={p.icon} className="text-4xl text-[#4A5D23] group-hover:text-[#C5A059]" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-[#2C351D] group-hover:text-white transition-colors">{p.name}</h3>
                  <p className="text-[#2C351D]/60 group-hover:text-white/60 font-medium leading-relaxed transition-colors">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#2C351D] text-[#FDFBF7]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-serif mb-16 uppercase tracking-tight">Materiali Export</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <button className="flex items-center justify-between p-8 border border-white/10 hover:bg-[#C5A059] hover:text-white transition-all rounded-2xl text-left">
              <span className="text-[12px] font-bold tracking-[0.2em] uppercase">Catalogo Prodotti 2026</span>
              <Icon icon="solar:download-bold" className="text-2xl" />
            </button>
            <button className="flex items-center justify-between p-8 border border-white/10 hover:bg-[#C5A059] hover:text-white transition-all rounded-2xl text-left">
              <span className="text-[12px] font-bold tracking-[0.2em] uppercase">Certificazioni di Qualità</span>
              <Icon icon="solar:shield-check-bold" className="text-2xl" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-30 grayscale">
             <span className="text-2xl font-serif italic text-[#2C351D]">Gambero Rosso</span>
             <span className="text-2xl font-serif italic text-[#2C351D]">Slow Food</span>
             <span className="text-2xl font-serif italic text-[#2C351D]">IOP Puglia</span>
             <span className="text-2xl font-serif italic text-[#2C351D]">Bio Agri</span>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-48 bg-[#F6F3ED] border-t border-[#2C351D]/5">
        <div className="mx-auto max-w-2xl px-6 text-center space-y-12">
          <h2 className="text-4xl lg:text-6xl font-serif uppercase tracking-tight leading-none text-[#2C351D]">Iniziamo una Collaborazione</h2>
          <p className="text-xl text-[#2C351D]/70 font-medium">Contatta il nostro ufficio export per ricevere un'offerta personalizzata o campionature.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <a href="mailto:export@ferrante-oil.it" className="bg-[#2C351D] text-white px-10 py-5 text-[12px] font-bold tracking-[0.3em] uppercase hover:bg-[#4A5D23] transition-all rounded-xl">
              Invia Email
            </a>
            <a href="tel:+39080123456" className="border border-[#2C351D]/20 text-[#2C351D] px-10 py-5 text-[12px] font-bold tracking-[0.3em] uppercase hover:bg-white transition-all rounded-xl">
              Chiama Ora
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-white border-t border-[#2C351D]/5">
        <div className="mx-auto max-w-[1400px] px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold tracking-[0.2em] text-[#2C351D]/30 uppercase">
          <span>© 2026 OLEIFICIO FERRANTE S.R.L.</span>
          <span>P.IVA IT01234567890</span>
        </div>
      </footer>

      {/* STICKY CTA - Hidden in demo mode */}
      {!isDemoMode && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-lg">
          <Link 
            href="/digital-stores#richiedi"
            className="bg-[#4A5D23] text-white w-full py-6 rounded-2xl flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(74,93,35,0.4)] hover:scale-[1.02] transition-all"
          >
            <span className="text-[12px] font-bold tracking-[0.3em] uppercase">Richiedi il tuo Digital Store</span>
            <Icon icon="solar:magic-stick-3-bold" className="text-2xl animate-pulse" />
          </Link>
        </div>
      )}

    </main>
  );
}
