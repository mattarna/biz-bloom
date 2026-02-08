import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from '@/navigation';

export default createMiddleware({
  defaultLocale: 'it',
  locales,
  localePrefix
});

export const config = {
  // Matcher per saltare cartelle interne e file statici
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
