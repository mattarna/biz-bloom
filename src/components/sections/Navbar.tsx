'use client';

import React, { useState, useEffect } from 'react';
import { Link } from '@/navigation';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const pathname = usePathname();
  const t = useTranslations('Navbar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect Blue Room page for dark navbar variant
  const isBlueRoom = pathname.includes('/blue-room');

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Close menu on pathname change (redundant but safe for direct URL changes)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  
  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('blueRoom'), href: '/blue-room' },
    { name: t('membership'), href: '/membership' },
    { name: t('b2bRoom'), href: '/b2b-room' },
    { name: t('brainyBox'), href: '/brainy-box' },
    { name: t('digitalStores'), href: '/digital-stores' },
    { name: t('parlour'), href: '/parlour' },
    { name: t('contacts'), href: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 z-[100] w-full border-b backdrop-blur-xl transition-colors duration-500 ${
        isBlueRoom
          ? 'border-[#C9A96E]/10 bg-[#0A1628]/80'
          : 'border-[#0A4D46]/10 bg-[#E7E5E3]/80'
      }`}>
        <div className="container-wide flex items-center justify-between py-3 lg:py-4">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 lg:h-11 w-40 lg:w-48">
              <Image
                src="/media/di-francia-logo-web.webp"
                alt="Studio Legale Di Francia"
                fill
                className={`object-contain object-left transition-all duration-500 ${isBlueRoom ? 'brightness-[2] invert' : ''}`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-12 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.includes(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-bold tracking-[0.15em] uppercase transition-all ${
                    isBlueRoom
                      ? `hover:text-[#C9A96E] ${isActive ? 'text-[#C9A96E] tracking-[0.2em]' : 'text-[#F5F0E8]/50'}`
                      : `hover:text-[#0A4D46] ${isActive ? 'text-[#0A4D46] tracking-[0.2em]' : 'text-[#0D453D]/70'}`
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4 lg:gap-8">
            <button className={`hidden lg:block text-[12px] font-extrabold tracking-[0.15em] uppercase border-b-2 pb-0.5 hover:opacity-70 transition-opacity ${
              isBlueRoom
                ? 'text-[#C9A96E] border-[#C9A96E]'
                : 'text-[#0A4D46] border-[#0A4D46]'
            }`}>
              Area Riservata
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden h-10 w-10 flex items-center justify-center ${isBlueRoom ? 'text-[#F5F0E8]' : 'text-[#0D453D]'}`}
            >
              <Icon icon={isMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} className="text-2xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed inset-0 z-[90] lg:hidden ${isBlueRoom ? 'bg-[#0A1628]' : 'bg-[#0D453D]'}`}
          >
            <div className="h-full flex flex-col pt-28 px-6 pb-8 overflow-y-auto">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-3xl sm:text-4xl font-serif uppercase tracking-tight transition-all block py-2 active:text-white/100 ${
                        pathname === link.href ? 'text-white' : 'text-white/40'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-auto pt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button 
                  whileTap={{ scale: 0.98, backgroundColor: "#f3f4f6" }}
                  className="w-full bg-white text-[#0D453D] py-5 text-[13px] font-extrabold tracking-[0.2em] uppercase mb-8 shadow-xl active:bg-gray-100 transition-colors"
                >
                  Area Riservata
                </motion.button>
                <div className="flex items-center justify-between text-white/40 border-t border-white/10 pt-6">
                  <span className="text-[9px] font-bold tracking-widest uppercase">Singapore Strategic Hub</span>
                  <div className="flex gap-6">
                    <Link href="#" className="hover:text-white transition-colors">
                      <Icon icon="brandico:linkedin" className="text-xl" />
                    </Link>
                    <Link href="#" className="hover:text-white transition-colors">
                      <Icon icon="brandico:instagram" className="text-xl" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
