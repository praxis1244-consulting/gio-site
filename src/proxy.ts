import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next.js 16 renamed `middleware.ts` → `proxy.ts`. next-intl handles locale
// negotiation, redirects and rewrites here.
export default createMiddleware(routing);

export const config = {
  // Match everything except API routes, Next internals, framework metadata image
  // routes (their `/es/...` variant must resolve without an as-needed redirect
  // hop, which some social scrapers don't follow) and files with a dot.
  matcher:
    "/((?!api|trpc|_next|_vercel|icon|apple-icon|.*(?:opengraph-image|twitter-image)|.*\\..*).*)",
};
