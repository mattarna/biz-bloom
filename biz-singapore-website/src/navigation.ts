import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['it'] as const;
export const localePrefix = 'always'; // Reindirizza sempre a /it/ per ora per mantenere la struttura

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
