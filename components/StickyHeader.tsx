"use client";

import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function StickyHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold text-neutral-900 sm:text-xl">
          {SITE.name}
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-neutral-600 transition hover:text-primary-600"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="hidden rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700 sm:inline-flex"
            aria-label="Call now"
          >
            Call Now
          </a>
          <Link
            href="/contact"
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700"
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </header>
  );
}
