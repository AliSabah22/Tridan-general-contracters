"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { variants, tween } from "@/lib/motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  transition?: { duration?: number; delay?: number; ease?: string };
  as?: "section" | "div";
}

const defaultVariants: Variants = {
  hidden: variants.fadeInUp.hidden,
  visible: {
    ...variants.fadeInUp.visible,
    transition: {
      duration: tween.normal.duration,
      ease: tween.normal.ease,
      when: "beforeChildren",
    },
  },
};

export default function AnimatedSection({
  children,
  className = "",
  variants: customVariants = defaultVariants,
  transition = { duration: 0.5, delay: 0 },
  as = "section",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const duration = transition.duration ?? 0.5;
  const delay = transition.delay ?? 0;
  const ease = transition.ease ?? tween.normal.ease;

  const resolvedVariants = {
    ...customVariants,
    visible: {
      ...(typeof customVariants.visible === "object" && "opacity" in customVariants.visible
        ? customVariants.visible
        : { opacity: 1, y: 0 }),
      transition: {
        duration,
        delay,
        ease,
        when: "beforeChildren",
      },
    },
  };

  const Component = motion[as];

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={resolvedVariants}
      className={className}
    >
      {children}
    </Component>
  );
}
