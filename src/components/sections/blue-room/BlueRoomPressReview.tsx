'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import type { FeedItem } from '@/lib/rss';

type Region = 'uae' | 'ksa' | 'singapore';

const REGIONS: { id: Region; flag: string }[] = [
  { id: 'uae', flag: '🇦🇪' },
  { id: 'ksa', flag: '🇸🇦' },
  { id: 'singapore', flag: '🇸🇬' },
];

export const BlueRoomPressReview = () => {
  const t = useTranslations('BlueRoom');
  const [activeRegion, setActiveRegion] = useState<Region>('uae');
  const [items, setItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchNews = useCallback(async (region: Region) => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(`/api/press-feed?region=${region}`);
      if (!res.ok) throw new Error('Failed');
      const data = await res.json();
      setItems(data.items || []);
    } catch {
      setError(true);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews(activeRegion);
  }, [activeRegion, fetchNews]);

  const tabLabelMap: Record<Region, string> = {
    uae: t('press_tab_uae'),
    ksa: t('press_tab_ksa'),
    singapore: t('press_tab_singapore'),
  };

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('it-IT', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    } catch {
      return '';
    }
  };

  return (
    <section id="press-review" className="relative section-padding bg-blueroom-navy overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 blueroom-noise pointer-events-none" />

      {/* Decorative background image */}
      <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1504711434969-e33886168d6c?q=80&w=1600&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container-wide">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-blueroom-gold/40" />
            <Icon icon="solar:document-text-bold" className="text-blueroom-gold/60 text-lg" />
            <div className="h-[1px] w-8 bg-blueroom-gold/40" />
          </div>
          <h2 className="fluid-heading-2 font-serif text-blueroom-cream uppercase tracking-tight mb-4">
            {t('press_title')}
          </h2>
          <p className="text-sm lg:text-base text-blueroom-cream/80 font-sans max-w-xl mx-auto">
            {t('press_subtitle')}
          </p>
        </motion.div>

        {/* Region tabs */}
        <div className="flex items-center justify-center gap-2 lg:gap-4 mb-12 lg:mb-16">
          {REGIONS.map(({ id, flag }) => (
            <button
              key={id}
              onClick={() => setActiveRegion(id)}
              className={`px-5 lg:px-8 py-3 lg:py-4 text-[11px] lg:text-[12px] font-bold tracking-[0.2em] uppercase font-sans transition-all duration-300 border ${
                activeRegion === id
                  ? 'bg-blueroom-gold/20 border-blueroom-gold text-blueroom-cream'
                  : 'bg-transparent border-blueroom-cream/10 text-blueroom-cream/40 hover:border-blueroom-cream/30 hover:text-blueroom-cream'
              }`}
            >
              <span className="mr-2">{flag}</span>
              {tabLabelMap[id]}
            </button>
          ))}
        </div>

        {/* News list */}
        <div className="min-h-[300px]">
          {loading ? (
            /* Loading skeleton */
            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border-b border-blueroom-cream/5 pb-6">
                  <div className="h-5 w-3/4 bg-blueroom-cream/5 animate-pulse mb-3" />
                  <div className="h-3 w-1/3 bg-blueroom-cream/5 animate-pulse" />
                </div>
              ))}
            </div>
          ) : error ? (
            /* Error state */
            <div className="text-center py-16">
              <Icon icon="solar:danger-triangle-linear" className="text-3xl text-blueroom-gold/30 mb-4 mx-auto" />
              <p className="text-blueroom-cream/30 font-sans text-sm">{t('press_error')}</p>
            </div>
          ) : items.length === 0 ? (
            /* Empty state */
            <div className="text-center py-16">
              <Icon icon="solar:document-text-linear" className="text-3xl text-blueroom-gold/20 mb-4 mx-auto" />
              <p className="text-blueroom-cream/20 font-sans text-sm">Nessuna notizia disponibile al momento.</p>
            </div>
          ) : (
            /* News items */
            <motion.div
              className="space-y-0 divide-y divide-blueroom-cream/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={activeRegion}
            >
              {items.map((item, idx) => (
                <motion.a
                  key={`${item.link}-${idx}`}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col lg:flex-row lg:items-center justify-between gap-4 py-6 lg:py-8 hover:bg-blueroom-cream/[0.02] transition-colors px-4 -mx-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg lg:text-xl font-serif text-blueroom-cream group-hover:text-blueroom-gold transition-colors leading-tight">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-blueroom-cream/70 font-sans leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-6 lg:flex-shrink-0">
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-blueroom-gold/90 uppercase font-sans">
                        {item.source}
                      </span>
                      {item.pubDate && (
                        <span className="text-[10px] text-blueroom-cream/50 font-sans">
                          {formatDate(item.pubDate)}
                        </span>
                      )}
                    </div>
                    <Icon
                      icon="solar:arrow-right-up-linear"
                      className="text-lg text-blueroom-gold/20 group-hover:text-blueroom-gold/60 transition-colors"
                    />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
