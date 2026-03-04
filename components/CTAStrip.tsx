"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { tween, spring } from "@/lib/motion";

interface CTAStripProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export default function CTAStrip({
  title = "Ready to start your renovation?",
  subtitle = "Get a clear quote and reliable workmanship. Request your free estimate today.",
  primaryLabel = "Request Free Estimate",
  secondaryLabel = "Call Now",
}: CTAStripProps) {
  return (
    <motion.section
      className="bg-primary-600 py-12 text-white sm:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: tween.normal.duration, ease: tween.normal.ease }}
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.h2
          className="text-2xl font-bold sm:text-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: tween.normal.ease }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="mt-3 text-primary-100"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08, ease: tween.normal.ease }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16, ease: tween.normal.ease }}
        >
          <motion.span whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }} transition={spring.smooth}>
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-primary-700 transition hover:bg-primary-50"
            >
              {primaryLabel}
            </Link>
          </motion.span>
          <motion.span whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }} transition={spring.smooth}>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex rounded-lg border-2 border-white/50 bg-transparent px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              aria-label="Call now"
            >
              {secondaryLabel}
            </a>
          </motion.span>
        </motion.div>
      </div>
    </motion.section>
  );
}
