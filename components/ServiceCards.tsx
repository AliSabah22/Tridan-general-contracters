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
import { spring } from "@/lib/motion";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  kitchen: UtensilsCrossed,
  bathroom: Bath,
  basement: Home,
  flooring: LayoutGrid,
  painting: Paintbrush,
  "full-home": ScanLine,
};

interface Service {
  id: string;
  title: string;
  description: string;
  benefit?: string;
  href?: string;
}

interface ServiceCardsProps {
  services: Service[];
  columns?: 2 | 3;
  cityName?: string;
}

export default function ServiceCards({ services, columns = 3, cityName }: ServiceCardsProps) {
  const colClass = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-6 ${colClass}`}>
      {services.map((service, i) => {
        const Icon = SERVICE_ICONS[service.id] ?? Home;
        const description = cityName
          ? `${service.description.replace(/\.$/, "")} ${cityName}.`
          : service.description;

        const content = (
          <>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-neutral-900">{service.title}</h3>
            <p className="mt-2 text-neutral-600">{description}</p>
            {service.benefit && (
              <p className="mt-2 text-sm font-medium text-primary-600">{service.benefit}</p>
            )}
          </>
        );

        if (service.href) {
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1], delay: i * 0.06 }}
              whileHover={{ y: -6, transition: spring.smooth }}
            >
              <Link
                href={service.href}
                className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow-lg"
              >
                {content}
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary-600">
                  Get Estimate →
                </span>
              </Link>
            </motion.div>
          );
        }

        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1], delay: i * 0.06 }}
            whileHover={{ y: -6, transition: spring.smooth }}
            className="flex flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            {content}
          </motion.div>
        );
      })}
    </div>
  );
}
