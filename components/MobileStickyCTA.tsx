"use client";

import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-neutral-200 bg-white shadow-lg md:hidden">
      <a
        href={`tel:${SITE.phoneRaw}`}
        className="flex flex-1 items-center justify-center gap-2 border-r border-neutral-200 py-3 text-sm font-semibold text-primary-600"
        aria-label="Call now"
      >
        <span aria-hidden>📞</span> Call Now
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 bg-primary-600 py-3 text-sm font-semibold text-white"
      >
        Get Estimate
      </Link>
    </div>
  );
}
