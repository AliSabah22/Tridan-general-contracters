"use client";

import { motion } from "framer-motion";
import EstimateForm from "./EstimateForm";
import { SITE } from "@/lib/constants";
import { tween } from "@/lib/motion";

interface FinalCTAProps {
  title?: string;
  subtitle?: string;
}

export default function FinalCTA({
  title = "Request Your Free Renovation Estimate",
  subtitle = "Get a clear quote. No obligation.",
}: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjAuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-xl px-4 text-center sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: tween.normal.duration, ease: tween.normal.ease }}
          className="text-2xl font-bold sm:text-3xl"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: tween.normal.duration, delay: 0.1 }}
          className="mt-3 text-neutral-400"
        >
          {subtitle}
        </motion.p>
        <motion.div
          className="mt-10 rounded-xl bg-white p-6 text-left text-neutral-900"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: tween.normal.duration, delay: 0.15 }}
        >
          <EstimateForm mode="short" ctaText="Request Free Estimate" />
        </motion.div>
        <p className="mt-4 text-sm text-neutral-500">
          Or call us at{" "}
          <a href={`tel:${SITE.phoneRaw}`} className="font-semibold text-primary-400 hover:underline">
            {SITE.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
