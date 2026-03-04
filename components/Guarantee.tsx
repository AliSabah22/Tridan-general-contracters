"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles } from "lucide-react";
import { GUARANTEE_BULLETS } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import AnimatedStagger, { staggerItemVariants } from "./AnimatedStagger";
import { tween } from "@/lib/motion";

export default function Guarantee() {
  return (
    <AnimatedSection className="bg-primary-600 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/20"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: tween.normal.duration, ease: tween.normal.ease }}
        >
          <Shield className="h-7 w-7" />
        </motion.div>
        <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Our Workmanship Promise</h2>
        <p className="mt-3 text-lg text-primary-100">
          We stand behind our work with clear communication and quality you can see.
        </p>
        <AnimatedStagger
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center"
          staggerDelay={0.1}
        >
          {GUARANTEE_BULLETS.map((bullet, i) => (
            <motion.li
              key={i}
              variants={staggerItemVariants}
              className="flex items-center gap-2 text-left"
            >
              <Sparkles className="h-5 w-5 shrink-0 text-primary-200" />
              <span>{bullet}</span>
            </motion.li>
          ))}
        </AnimatedStagger>
      </div>
    </AnimatedSection>
  );
}
