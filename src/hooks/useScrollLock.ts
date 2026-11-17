import { useEffect } from "react";

/**
 * Locks body scroll while an overlay (mobile drawer, modal) is open and
 * restores the previous overflow value on close.
 */
export function useScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;
    const { body } = document;
    const previous = body.style.overflow;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = previous;
    };
  }, [locked]);
}
