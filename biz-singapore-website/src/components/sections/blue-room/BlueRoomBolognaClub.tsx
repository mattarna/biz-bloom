'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export const BlueRoomBolognaClub = () => {
  const t = useTranslations('BlueRoom');

  return (
    <section id="bologna-club" className="relative section-padding bg-blueroom-navy overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 blueroom-noise pointer-events-none" />

      <div className="relative z-10 container-wide">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Image */}
          <motion.div
            className="flex-1 w-full relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1200&auto=format&fit=crop"
                alt="Bologna Club"
                fill
                className="object-cover brightness-[0.55] saturate-[0.5] group-hover:brightness-[0.65] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blueroom-navy/40 via-transparent to-blueroom-navy/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-blueroom-navy/40 to-transparent" />

              {/* Overlay badge */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blueroom-gold/60" />
                  <span className="text-[10px] font-bold tracking-[0.4em] text-blueroom-gold/60 uppercase font-sans">
                    Bologna, Italia
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative border */}
            <div className="absolute -top-4 -right-4 -bottom-4 -left-4 border border-blueroom-gold/5 pointer-events-none hidden lg:block" />
          </motion.div>

          {/* Text content */}
          <motion.div
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-blueroom-gold/30" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-blueroom-gold/50 uppercase font-sans">
                {t('bologna_badge')}
              </span>
            </div>

            {/* Title */}
            <h2 className="fluid-heading-2 font-serif text-blueroom-cream uppercase tracking-tight leading-tight">
              {t('bologna_title')}
            </h2>

            {/* Description */}
            <p className="text-base lg:text-lg text-blueroom-cream/90 font-sans leading-relaxed max-w-lg">
              {t('bologna_desc')}
            </p>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-blueroom-gold/20" />
              <div className="w-12 h-[1px] bg-blueroom-gold/15" />
            </div>

            {/* CTA */}
            <a
              href="mailto:d.difrancia@difranciafirm.com"
              className="group inline-flex items-center gap-4 bg-blueroom-gold/10 border border-blueroom-gold/20 px-8 py-5 hover:bg-blueroom-gold/20 hover:border-blueroom-gold/40 transition-all duration-500"
            >
              <Icon icon="solar:letter-bold" className="text-lg text-blueroom-gold" />
              <span className="text-[12px] font-bold tracking-[0.25em] text-blueroom-gold uppercase font-sans">
                {t('bologna_cta')}
              </span>
              <Icon
                icon="solar:arrow-right-linear"
                className="text-sm text-blueroom-gold/50 group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
