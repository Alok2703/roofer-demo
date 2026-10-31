"use client";

import { useEffect, useState } from "react";
import { NAV_STUCK_THRESHOLD } from "@/constants";

/** True once the page has scrolled past the given depth (Bible §14). */
export function useScrolled(threshold: number = NAV_STUCK_THRESHOLD) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
