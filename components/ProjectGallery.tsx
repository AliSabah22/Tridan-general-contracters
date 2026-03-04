"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import AnimatedStagger, { staggerItemVariants } from "./AnimatedStagger";
import Link from "next/link";
import { spring, tween } from "@/lib/motion";

type Filter = "All" | "Kitchen" | "Bathroom" | "Basement" | "Flooring" | "Painting" | "Full Home";

const FILTERS: Filter[] = ["All", "Kitchen", "Bathroom", "Basement", "Flooring", "Painting", "Full Home"];

export default function ProjectGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  return (
    <>
      <AnimatedSection className="bg-neutral-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Featured Projects</h2>
          <p className="mt-2 text-neutral-600">A sample of our renovation work across the GTA.</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <motion.button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={spring.smooth}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  filter === f
                    ? "bg-primary-600 text-white shadow-md"
                    : "bg-white text-neutral-600 shadow-sm hover:bg-neutral-50"
                }`}
              >
                {f}
              </motion.button>
            ))}
          </div>

          <AnimatedStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.06}>
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                variants={staggerItemVariants}
                layout
                whileHover={{ y: -6, transition: spring.smooth }}
                className="group cursor-pointer overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.06 }}
                    transition={spring.gentle}
                  >
                    <Image
                      src="/images/placeholder-project.svg"
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </motion.div>
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-neutral-800 shadow-sm">
                    {project.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-neutral-900">{project.title}</h3>
                  <ul className="mt-2 list-inside list-disc text-sm text-neutral-600">
                    {project.results.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </AnimatedStagger>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: tween.normal.duration }}
          >
            <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={spring.smooth}>
              <Link
                href="/contact"
                className="inline-flex rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-primary-700 hover:shadow-md"
              >
                Request estimate
              </Link>
            </motion.span>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: tween.normal.ease }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: tween.normal.ease }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video bg-neutral-200">
                <Image
                  src="/images/placeholder-project.svg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900">
                  {filtered[lightboxIndex].title}
                </h3>
                <p className="mt-1 text-sm text-neutral-500">{filtered[lightboxIndex].category}</p>
                <ul className="mt-3 list-inside list-disc text-neutral-600">
                  {filtered[lightboxIndex].results.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
              <motion.button
                type="button"
                onClick={closeLightbox}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={spring.smooth}
                className="absolute right-4 top-4 rounded-full bg-white/95 p-2 text-neutral-800 shadow-lg hover:bg-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
