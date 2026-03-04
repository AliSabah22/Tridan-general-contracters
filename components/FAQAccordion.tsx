"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import { spring, tween } from "@/lib/motion";

interface FAQAccordionProps {
  items?: ReadonlyArray<{ q: string; a: string }>;
}

export default function FAQAccordion({ items = [...FAQ_ITEMS] }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <AnimatedSection className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Frequently Asked Questions</h2>
        <p className="mt-2 text-neutral-600">Answers to common questions about our renovations.</p>
        <div className="mt-10 space-y-2">
          {items.map((item, i) => (
            <motion.div
              key={i}
              layout
              className="overflow-hidden rounded-xl border border-neutral-200 bg-white transition-shadow hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-neutral-900"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                {item.q}
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={spring.smooth}
                >
                  <ChevronDown className="h-5 w-5 text-neutral-500" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: tween.normal.ease }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-neutral-200 px-6 py-4 text-neutral-600">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
