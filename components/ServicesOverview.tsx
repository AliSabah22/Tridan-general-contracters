"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Bath,
  Home,
  LayoutGrid,
  Paintbrush,
  ScanLine,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import AnimatedStagger, { staggerItemVariants } from "./AnimatedStagger";

const ICONS = [UtensilsCrossed, Bath, Home, LayoutGrid, Paintbrush, ScanLine] as const;

export default function ServicesOverview() {
  return (
    <AnimatedSection className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">What We Offer</h2>
        <p className="mt-2 max-w-2xl text-neutral-600">
          Quality renovations tailored to your home and budget. Serving{" "}
          <Link href="/mississauga-home-renovations" className="font-medium text-primary-600 hover:underline">
            Mississauga
          </Link>
          ,{" "}
          <Link href="/toronto-home-renovations" className="font-medium text-primary-600 hover:underline">
            Toronto
          </Link>
          , and{" "}
          <Link href="/milton-home-renovations" className="font-medium text-primary-600 hover:underline">
            Milton
          </Link>
          .
        </p>
        <AnimatedStagger
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.07}
        >
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i] ?? Home;
            const upgrades = "commonUpgrades" in service ? (service.commonUpgrades as readonly string[]) : [];
            return (
              <motion.div
                key={service.id}
                variants={staggerItemVariants}
                className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow-lg"
              >
                <a href={`#${service.id}`} className="flex flex-col flex-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-neutral-900">{service.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{service.description}</p>
                  {upgrades.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {upgrades.slice(0, 3).map((u, j) => (
                        <span
                          key={j}
                          className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600"
                        >
                          {u}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary-600 group-hover:underline">
                    Learn more →
                  </span>
                </a>
              </motion.div>
            );
          })}
        </AnimatedStagger>
      </div>
    </AnimatedSection>
  );
}
