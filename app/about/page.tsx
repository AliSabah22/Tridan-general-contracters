import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProcessSteps from "@/components/ProcessSteps";
import CTAStrip from "@/components/CTAStrip";
import { WHY_CHOOSE, SITE } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Tridan General Construction. Professional home renovation team serving Mississauga, Toronto, and Milton with clear timelines and transparent pricing.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Tridan General Construction"
        description="Your trusted partner for home renovations in the GTA."
        variant="compact"
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-neutral max-w-none">
          <p className="text-lg text-neutral-600">
            {SITE.name} delivers quality home renovations across Mississauga, Toronto, and Milton. We focus on clear communication, transparent pricing, and reliable workmanship so you can plan with confidence.
          </p>
        </div>
        <h2 className="mt-12 text-2xl font-bold text-neutral-900">Why Choose Tridan</h2>
        <ul className="mt-6 space-y-3">
          {WHY_CHOOSE.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">✓</span>
              <span className="text-neutral-700">{item}</span>
            </li>
          ))}
        </ul>
        <h2 className="mt-12 text-2xl font-bold text-neutral-900">Our Process</h2>
        <div className="mt-8">
          <ProcessSteps />
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">Request Free Estimate</Link>
          <a href={`tel:${SITE.phoneRaw}`} className="rounded-lg border-2 border-neutral-300 px-6 py-3 font-semibold text-neutral-700 hover:bg-neutral-50" aria-label="Call now">Call Now</a>
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
