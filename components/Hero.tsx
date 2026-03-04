import Link from "next/link";
import { SITE } from "@/lib/constants";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  showCTA?: boolean;
  variant?: "default" | "compact";
}

export default function Hero({ title, subtitle, description, showCTA = true, variant = "default" }: HeroProps) {
  const isCompact = variant === "compact";
  return (
    <section className={`bg-neutral-950 text-white ${isCompact ? "py-12 sm:py-16" : "py-16 sm:py-24"}`}>
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        {subtitle && <p className="text-sm font-medium uppercase tracking-wider text-primary-400">{subtitle}</p>}
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
        {description && <p className="mt-4 text-lg text-neutral-300">{description}</p>}
        {showCTA && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-primary-500"
            >
              Request Free Estimate
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex rounded-lg border-2 border-white/30 bg-transparent px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              aria-label="Call now"
            >
              Call Now
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
