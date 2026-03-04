"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import EstimateForm from "@/components/EstimateForm";
import { SITE } from "@/lib/constants";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { staggerItemVariants } from "@/components/AnimatedStagger";
import { tween } from "@/lib/motion";

const WHAT_HAPPENS = [
  "We call or text within 24 hours",
  "Quick questions about your project",
  "Schedule a site visit",
  "You receive a detailed quote",
];

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get Your Free Estimate"
        description="Tell us about your project. We'll get back to you with a clear quote."
        variant="compact"
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <AnimatedSection as="div" className="lg:col-span-3">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: tween.normal.duration }}
              className="text-2xl font-bold text-neutral-900"
            >
              Request a Free Estimate
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: tween.normal.duration, delay: 0.06 }}
              className="mt-2 text-neutral-600"
            >
              Fill out the form and we&apos;ll contact you to discuss your project.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: tween.normal.duration, delay: 0.12 }}
              className="mt-8"
            >
              <EstimateForm mode="full" ctaText="Request Free Estimate" />
            </motion.div>
          </AnimatedSection>
          <div className="space-y-10 lg:col-span-2">
            <AnimatedSection as="div">
              <h2 className="text-xl font-bold text-neutral-900">What happens next</h2>
              <motion.ul
                className="mt-4 space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.08 } },
                  hidden: {},
                }}
              >
                {WHAT_HAPPENS.map((step, i) => (
                  <motion.li
                    key={i}
                    variants={staggerItemVariants}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                    <span className="text-neutral-700">{step}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatedSection>
            <AnimatedSection as="div">
              <h2 className="text-xl font-bold text-neutral-900">Contact us directly</h2>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary-600" />
                  <a href={`tel:${SITE.phoneRaw}`} className="text-neutral-700 hover:text-primary-600">
                    {SITE.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary-600" />
                  <a href={`mailto:${SITE.email}`} className="text-neutral-700 hover:text-primary-600">
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary-600" />
                  <span className="text-neutral-700">{SITE.serviceAreaStr}</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
