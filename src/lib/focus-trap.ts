import { useEffect, type RefObject } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Trap keyboard focus inside a container while `open` is true:
 * - on open, move focus to the first focusable child (or the container itself);
 * - on Tab, wrap focus between the first and last focusable;
 * - on close, restore focus to the element that was focused before opening.
 *
 * Escape handling stays in the calling component — this hook only owns Tab-wrap,
 * focus entry, and focus restoration. Pass the same `open` flag the component
 * uses to mount/aria-hide the dialog so cleanup runs on the same transition.
 */
export function useFocusTrap<T extends HTMLElement>(
  ref: RefObject<T | null>,
  open: boolean,
) {
  useEffect(() => {
    if (!open) return;
    const node = ref.current;
    if (!node) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const focusables = () =>
      Array.from(node.querySelectorAll<HTMLElement>(FOCUSABLE));

    const enter = () => {
      const first = focusables()[0];
      if (first) {
        first.focus({ preventScroll: true });
      } else {
        node.setAttribute("tabindex", "-1");
        node.focus({ preventScroll: true });
      }
    };
    enter();

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const items = focusables();
      if (!items.length) {
        e.preventDefault();
        return;
      }
      const firstEl = items[0];
      const lastEl = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === firstEl) {
        e.preventDefault();
        lastEl.focus({ preventScroll: true });
      } else if (!e.shiftKey && active === lastEl) {
        e.preventDefault();
        firstEl.focus({ preventScroll: true });
      }
    };

    node.addEventListener("keydown", onKey);
    return () => {
      node.removeEventListener("keydown", onKey);
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, [ref, open]);
}
