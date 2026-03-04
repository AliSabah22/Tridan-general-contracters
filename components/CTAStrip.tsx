import Link from "next/link";
import { SITE } from "@/lib/constants";

interface CTAStripProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export default function CTAStrip({
  title = "Ready to start your renovation?",
  subtitle = "Get a clear quote and reliable workmanship. Request your free estimate today.",
  primaryLabel = "Request Free Estimate",
  secondaryLabel = "Call Now",
}: CTAStripProps) {
  return (
    <section className="bg-primary-600 py-12 text-white sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mt-3 text-primary-100">{subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-primary-700 transition hover:bg-primary-50"
          >
            {primaryLabel}
          </Link>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex rounded-lg border-2 border-white/50 bg-transparent px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            aria-label="Call now"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
