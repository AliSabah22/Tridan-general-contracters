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
  type LucideIcon,
} from "lucide-react";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  kitchen: UtensilsCrossed,
  bathroom: Bath,
  basement: Home,
  flooring: LayoutGrid,
  painting: Paintbrush,
  "full-home": ScanLine,
};

interface ServiceDetailCardProps {
  id: string;
  title: string;
  description: string;
  benefit: string;
  commonUpgrades: readonly string[];
  index: number;
}

export default function ServiceDetailCard({
  id,
  title,
  description,
  benefit,
  commonUpgrades,
  index,
}: ServiceDetailCardProps) {
  const Icon = SERVICE_ICONS[id] ?? Home;
  const isEven = index % 2 === 0;

  const content = (
    <div>
      <h3 className="text-xl font-semibold text-neutral-900 sm:text-2xl">{title}</h3>
      <p className="mt-3 text-neutral-600">{description}</p>
      <p className="mt-2 text-sm font-medium text-primary-600">{benefit}</p>
      <ul className="mt-4 space-y-2">
        {commonUpgrades.map((u, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-neutral-600">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
            {u}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="mt-6 inline-flex rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-700"
      >
        Get Estimate
      </Link>
    </div>
  );

  const iconBlock = (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-primary-50 p-8">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
        <Icon className="h-10 w-10" />
      </div>
    </div>
  );

  return (
    <motion.div
      id={id}
      className="scroll-mt-24"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
    >
      <div className="grid gap-10 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm sm:gap-12 sm:p-10 lg:grid-cols-2 lg:items-center">
        {isEven ? (
          <>
            <div>{iconBlock}</div>
            <div>{content}</div>
          </>
        ) : (
          <>
            <div className="order-2 lg:order-1">{content}</div>
            <div className="order-1 lg:order-2">{iconBlock}</div>
          </>
        )}
      </div>
    </motion.div>
  );
}
