"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, FileText } from "lucide-react";
import { SITE, TRUST_BADGES } from "@/lib/constants";
import { variants, tween, spring } from "@/lib/motion";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showCTA?: boolean;
  variant?: "default" | "compact";
  showTrustRow?: boolean;
  showServing?: boolean;
  showOverlayCard?: boolean;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: tween.normal.duration, ease: tween.normal.ease },
  },
};

export default function Hero({
  title = "High-Quality Home Renovations Done Right",
  subtitle,
  description = "Clear quotes. Clean work. Reliable communication.",
  showCTA = true,
  variant = "default",
  showTrustRow = true,
  showServing = true,
  showOverlayCard = true,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjAuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-transparent to-neutral-950" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
          <motion.div
            className="max-w-xl"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {subtitle && (
              <motion.p variants={item} className="text-sm font-medium uppercase tracking-wider text-primary-400">
                {subtitle}
              </motion.p>
            )}
            <motion.h1
              variants={item}
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              {title}
            </motion.h1>
            <motion.p variants={item} className="mt-4 text-lg text-neutral-300">
              {description}
            </motion.p>
            {showServing && (
              <motion.p variants={item} className="mt-4 text-sm text-neutral-400">
                Serving <span className="text-neutral-300">Mississauga • Toronto • Milton</span>
              </motion.p>
            )}
            {showTrustRow && (
              <motion.p
                variants={item}
                className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500"
              >
                {TRUST_BADGES.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </motion.p>
            )}
            {showCTA && (
              <motion.div
                variants={item}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={spring.smooth}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary-900/30 transition hover:bg-primary-500"
                  >
                    <FileText className="h-5 w-5" />
                    Request Free Estimate
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={spring.smooth}
                >
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-transparent px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                    aria-label="Call now"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </motion.div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: tween.slow.duration, ease: tween.slow.ease, delay: 0.2 }}
          >
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={spring.gentle}
            >
              <Image
                src="/images/hero.svg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 0px, 600px"
                priority
              />
            </motion.div>
            {showOverlayCard && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: tween.normal.duration, ease: tween.normal.ease, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 right-8 rounded-xl border border-white/10 bg-white/95 p-4 shadow-xl backdrop-blur sm:right-12"
              >
                <p className="font-semibold text-neutral-900">Free Estimate</p>
                <p className="mt-1 text-sm text-neutral-600">Response within 24 hours</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
