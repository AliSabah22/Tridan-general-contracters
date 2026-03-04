"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { LOCATION_PAGES } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import AnimatedStagger, { staggerItemVariants } from "./AnimatedStagger";
import { spring } from "@/lib/motion";

export default function LocationCards() {
  return (
    <AnimatedSection className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Where We Serve</h2>
        <p className="mt-2 text-neutral-600">Professional home renovations in the GTA.</p>
        <AnimatedStagger className="mt-10 grid gap-6 sm:grid-cols-3" staggerDelay={0.12}>
          {LOCATION_PAGES.map(({ href, city, label }) => (
            <motion.div key={href} variants={staggerItemVariants}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                transition={spring.smooth}
              >
                <Link
                  href={href}
                  className="flex flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-primary-200"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                    Home Renovations in {city}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">Kitchen, bathroom, basement & more.</p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary-600">
                    {label} →
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </AnimatedStagger>
      </div>
    </AnimatedSection>
  );
}
