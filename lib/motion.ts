/**
 * Shared motion config for super smooth, high-level animations.
 * Use string easings to avoid Framer Motion interpolation errors.
 */

export const easing = {
  smooth: "easeOut" as const,
  outExpo: "easeOut" as const,
  outBack: "easeOut" as const,
  inOut: "easeInOut" as const,
};

export const spring = {
  gentle: { type: "spring" as const, stiffness: 120, damping: 20 },
  smooth: { type: "spring" as const, stiffness: 100, damping: 24 },
  snappy: { type: "spring" as const, stiffness: 200, damping: 25 },
  bouncy: { type: "spring" as const, stiffness: 180, damping: 14 },
};

export const tween = {
  fast: { duration: 0.25, ease: easing.smooth },
  normal: { duration: 0.45, ease: easing.outExpo },
  slow: { duration: 0.6, ease: easing.outExpo },
  outExpo: { duration: 0.5, ease: easing.outExpo },
};

export const variants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInScale: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  },
};
