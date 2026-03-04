"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SOCIAL_PROOF, REVIEWS } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import AnimatedStagger, { staggerItemVariants } from "./AnimatedStagger";
import { tween, spring } from "@/lib/motion";

export default function SocialProofStrip() {
  return (
    <AnimatedSection className="border-y border-neutral-200 bg-neutral-50 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <motion.div
            className="flex flex-col items-center gap-2 text-center md:items-start md:text-left"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: tween.normal.duration, ease: tween.normal.ease }}
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Star
                    className="h-6 w-6 fill-amber-400 text-amber-400 sm:h-7 sm:w-7"
                    aria-hidden
                  />
                </motion.span>
              ))}
            </div>
            <p className="text-2xl font-bold text-neutral-900">
              {SOCIAL_PROOF.rating}
              <span className="ml-1 text-lg font-normal text-neutral-500">/ 5</span>
            </p>
            <p className="text-sm text-neutral-600">{SOCIAL_PROOF.label}</p>
            <p className="text-sm font-medium text-neutral-700">
              Based on {SOCIAL_PROOF.reviewCount}+ homeowner reviews
            </p>
          </motion.div>
          <AnimatedStagger
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            staggerDelay={0.08}
          >
            {REVIEWS.map((r, i) => (
              <motion.blockquote
                key={i}
                variants={staggerItemVariants}
                whileHover={{ y: -4, transition: spring.smooth }}
                className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-shadow"
              >
                <p className="text-sm text-neutral-700">&ldquo;{r.quote}&rdquo;</p>
                <footer className="mt-3 flex items-center gap-2">
                  <span className="text-sm font-medium text-neutral-900">{r.author}</span>
                  <span className="text-neutral-400">·</span>
                  <span className="text-xs text-neutral-500">{r.city}</span>
                </footer>
              </motion.blockquote>
            ))}
          </AnimatedStagger>
        </div>
      </div>
    </AnimatedSection>
  );
}
