'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { Link } from '@/navigation';

const CIRCLE_SO_URL = 'https://circle.so'; // Replace with actual Circle.so community URL

interface ActionCard {
  id: string;
  titleKey: string;
  descKey: string;
  ctaKey: string;
  icon: string;
  href: string;
  isExternal: boolean;
  image: string;
  featured?: boolean;
}

const actionCards: ActionCard[] = [
  {
    id: 'community',
    titleKey: 'action_community_title',
    descKey: 'action_community_desc',
    ctaKey: 'action_community_cta',
    icon: 'solar:users-group-two-rounded-bold',
    href: '#',
    isExternal: false,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'press',
    titleKey: 'action_press_title',
    descKey: 'action_press_desc',
    ctaKey: 'action_press_cta',
    icon: 'solar:document-text-bold',
    href: '#press-review',
    isExternal: false,
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168d6c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'idea',
    titleKey: 'action_idea_title',
    descKey: 'action_idea_desc',
    ctaKey: 'action_idea_cta',
    icon: 'solar:lightbulb-bolt-bold',
    href: '#',
    isExternal: false,
    image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'event',
    titleKey: 'action_event_title',
    descKey: 'action_event_desc',
    ctaKey: 'action_event_cta',
    icon: 'solar:calendar-bold',
    href: '#',
    isExternal: false,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'bologna',
    titleKey: 'action_bologna_title',
    descKey: 'action_bologna_desc',
    ctaKey: 'action_bologna_cta',
    icon: 'solar:buildings-bold',
    href: '#bologna-club',
    isExternal: false,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export const BlueRoomActions = () => {
  const t = useTranslations('BlueRoom');

  return (
    <section className="relative section-padding bg-blueroom-navy overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 blueroom-noise pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-blueroom-navy via-blueroom-deep/30 to-blueroom-navy" />

      <div className="relative z-10 container-wide">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-blueroom-gold/30" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-blueroom-gold/50 uppercase font-sans">
              The Room
            </span>
            <div className="h-[1px] w-8 bg-blueroom-gold/30" />
          </div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {actionCards.map((card) => (
            <motion.a
              key={card.id}
              href={card.href}
              target={card.isExternal ? '_blank' : undefined}
              rel={card.isExternal ? 'noopener noreferrer' : undefined}
              className={`group relative overflow-hidden border border-blueroom-gold/10 hover:border-blueroom-gold/30 transition-all duration-500 ${
                card.featured ? 'md:col-span-2' : ''
              }`}
              variants={cardVariants}
            >
              {/* Card background image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover brightness-[0.3] saturate-[0.4] group-hover:brightness-[0.4] group-hover:scale-105 transition-all duration-700"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blueroom-navy via-blueroom-navy/40 to-blueroom-navy/60" />
              </div>

              {/* Card content */}
              <div className={`relative z-10 p-8 lg:p-12 ${card.featured ? 'lg:p-16' : ''} flex flex-col gap-6 min-h-[240px] lg:min-h-[280px] justify-end`}>
                {/* Icon */}
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 lg:h-14 lg:w-14 bg-blueroom-gold/20 border border-blueroom-gold/30 flex items-center justify-center group-hover:bg-blueroom-gold/30 transition-all duration-500">
                    <Icon
                      icon={card.icon}
                      className="text-2xl lg:text-3xl text-blueroom-gold group-hover:text-blueroom-cream transition-colors duration-300"
                    />
                  </div>
                  {card.isExternal && (
                    <Icon
                      icon="solar:arrow-right-up-linear"
                      className="text-lg text-blueroom-gold/50 group-hover:text-blueroom-gold/80 transition-colors"
                    />
                  )}
                </div>

                {/* Text */}
                <div className="space-y-3">
                  <h3 className={`font-serif text-blueroom-cream uppercase tracking-tight ${card.featured ? 'text-2xl lg:text-4xl' : 'text-xl lg:text-2xl'}`}>
                    {t(card.titleKey)}
                  </h3>
                  <p className="text-sm lg:text-[15px] text-blueroom-cream/90 font-sans leading-relaxed max-w-xl">
                    {t(card.descKey)}
                  </p>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] text-blueroom-gold uppercase font-sans group-hover:text-blueroom-cream transition-all duration-500">
                    {t(card.ctaKey)}
                    <Icon
                      icon="solar:arrow-right-linear"
                      className="text-sm group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </span>
                </div>

                {/* Bottom gold line on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blueroom-gold/60 to-blueroom-gold/0 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* New CTA Section */}
        <motion.div
          className="mt-20 lg:mt-32 flex flex-col md:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/membership"
            className="group relative flex items-center gap-4 bg-blueroom-gold px-10 py-5 hover:bg-blueroom-cream transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 text-[12px] font-bold tracking-[0.2em] text-blueroom-navy uppercase font-sans">
              Scopri la membership migliore per te
            </span>
            <Icon
              icon="solar:star-bold"
              className="relative z-10 text-blueroom-navy text-lg group-hover:scale-110 transition-transform duration-300"
            />
          </Link>

          <div
            className="group flex items-center gap-4 border border-blueroom-gold/30 px-10 py-5 hover:border-blueroom-gold transition-all duration-500 cursor-default"
          >
            <span className="text-[12px] font-bold tracking-[0.2em] text-blueroom-gold uppercase font-sans">
              Accedi alla Community
            </span>
            <Icon
              icon="solar:users-group-rounded-bold"
              className="text-blueroom-gold text-lg group-hover:translate-x-1 transition-transform duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
