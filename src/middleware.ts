import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Cocokkan semua route kecuali file statis, _next, dan api
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/', '/(id|en)/:path*']
};
