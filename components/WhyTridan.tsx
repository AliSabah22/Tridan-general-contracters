"use client";

import { motion } from "framer-motion";
import { Calendar, FileText, Wrench, MessageCircle } from "lucide-react";
import { WHY_TRIDAN } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import AnimatedStagger, { staggerItemVariants } from "./AnimatedStagger";
import { spring } from "@/lib/motion";

const ICONS = [Calendar, FileText, Wrench, MessageCircle] as const;

export default function WhyTridan() {
  return (
    <AnimatedSection className="bg-neutral-100 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Why Tridan</h2>
        <p className="mt-2 text-neutral-600">
          Quality-first renovation team. We focus on communication, workmanship, and transparency.
        </p>
        <AnimatedStagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {WHY_TRIDAN.map((item, i) => {
            const Icon = ICONS[i] ?? FileText;
            return (
              <motion.div
                key={item.title}
                variants={staggerItemVariants}
                whileHover={{ y: -6, transition: spring.smooth }}
                className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
              </motion.div>
            );
          })}
        </AnimatedStagger>
      </div>
    </AnimatedSection>
  );
}
