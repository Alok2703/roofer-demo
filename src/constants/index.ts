/** Framework invariants — code values, not content (see ARCHITECTURE.md). */

/** Scroll depth (px) after which the desktop navbar condenses (Bible §14). */
export const NAV_STUCK_THRESHOLD = 200;

/** Motion durations in ms — mirror --ease-brand timing tokens (Bible §13). */
export const DURATION = {
  fast: 150,
  base: 200,
  slow: 250,
} as const;
