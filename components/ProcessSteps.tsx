"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import AnimatedStagger, { staggerItemVariants } from "./AnimatedStagger";
import { spring } from "@/lib/motion";

export default function ProcessSteps() {
  return (
    <AnimatedSection className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Our Process</h2>
        <p className="mt-2 text-neutral-600">
          Simple, clear steps from first contact to final walkthrough.
        </p>
        <AnimatedStagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {PROCESS_STEPS.map(({ step, title, description }) => (
            <motion.div
              key={step}
              variants={staggerItemVariants}
              className="relative"
              whileHover={{ y: -4 }}
              transition={spring.smooth}
            >
              <motion.div
                className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-xl font-bold text-white shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={spring.gentle}
              >
                {step}
              </motion.div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-neutral-600">{description}</p>
              {step < PROCESS_STEPS.length && (
                <span
                  className="absolute -right-4 top-7 hidden text-neutral-300 lg:inline"
                  aria-hidden
                >
                  →
                </span>
              )}
            </motion.div>
          ))}
        </AnimatedStagger>
      </div>
    </AnimatedSection>
  );
}
