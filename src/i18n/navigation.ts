import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware navigation: Link/useRouter/usePathname automatically keep the
// active locale prefix (and usePathname returns the path WITHOUT the prefix).
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
