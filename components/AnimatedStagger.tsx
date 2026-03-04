"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { variants, tween } from "@/lib/motion";

interface AnimatedStaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

export default function AnimatedStagger({
  children,
  className = "",
  staggerDelay = 0.08,
  delayChildren = 0,
}: AnimatedStaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: tween.normal.duration,
      ease: tween.normal.ease,
    },
  },
};
