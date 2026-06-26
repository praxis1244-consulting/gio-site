import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next.js 16 renamed `middleware.ts` → `proxy.ts`. next-intl handles locale
// negotiation, redirects and rewrites here.
export default createMiddleware(routing);

export const config = {
  // Match everything except API routes, Next internals and files with a dot.
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
