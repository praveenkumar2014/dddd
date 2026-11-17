import { useEffect, useState } from "react";

/**
 * Tracks whether the page has been scrolled past a threshold so the header can
 * transition between a soft (at-top) and an elevated (scrolled) state.
 */
export function useScrollState(threshold = 8): boolean {
  const [scrolled, setScrolled] = useState(
    typeof window === "undefined" ? false : window.scrollY > threshold,
  );

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > threshold);
        frame = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [threshold]);

  return scrolled;
}
