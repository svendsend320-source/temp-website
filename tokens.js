/* ============================================================
   Playful Geometric — JS/TS token export
   For styled-components, emotion, vanilla-extract, chart
   libraries, canvas, or anywhere CSS variables can't reach.

   Raw values live here AND in tokens.css. Keep them in sync —
   or generate one from the other if your build supports it.
   ============================================================ */

export const color = {
  background: "#FFFDF5",
  foreground: "#1E293B",
  muted: "#F1F5F9",
  mutedForeground: "#64748B",
  card: "#FFFFFF",
  input: "#FFFFFF",
  border: "#E2E8F0",
  accent: "#8B5CF6",
  accentForeground: "#FFFFFF",
  secondary: "#F472B6",
  tertiary: "#FBBF24",
  quaternary: "#34D399",
  ring: "#8B5CF6",
};

/** Rotate through these for decorative elements to get the confetti effect. */
export const confetti = [
  color.accent,
  color.secondary,
  color.tertiary,
  color.quaternary,
];

export const font = {
  heading: '"Outfit", system-ui, -apple-system, sans-serif',
  body: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif',
};

export const weight = {
  body: 400,
  bodyMedium: 500,
  heading: 700,
  headingStrong: 800,
};

/** Major Third (1.25) scale, base 16px. */
export const fontSize = {
  caption: "0.8rem",
  body: "1rem",
  lead: "1.25rem",
  h4: "1.5625rem",
  h3: "1.9531rem",
  h2: "2.4414rem",
  h1: "3.0518rem",
  display: "3.8147rem",
};

export const radius = {
  sm: "8px",
  md: "16px",
  lg: "24px",
  full: "9999px",
};

export const borderWidth = "2px";

export const space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  6: "1.5rem",
  8: "2rem",
  12: "3rem",
  16: "4rem",
  24: "6rem",
};

export const motion = {
  easeBounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  durationFast: "150ms",
  duration: "300ms",
  durationSlow: "500ms",
};

export const layout = {
  container: "72rem",
  measure: "68ch",
  tapTarget: "48px",
};

/** Build a hard offset shadow. Defaults to the dark foreground color. */
export const popShadow = (offset = 4, shadowColor = color.foreground) =>
  `${offset}px ${offset}px 0 0 ${shadowColor}`;

export const shadow = {
  pop: popShadow(4),
  popHover: popShadow(6),
  popActive: popShadow(2),
  sticker: popShadow(8, color.border),
  stickerFeatured: popShadow(8, color.secondary),
};

/** Lucide React default props for this system's chunky icon style. */
export const iconProps = {
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const tokens = {
  color,
  confetti,
  font,
  weight,
  fontSize,
  radius,
  borderWidth,
  space,
  motion,
  layout,
  shadow,
  iconProps,
};

export default tokens;
