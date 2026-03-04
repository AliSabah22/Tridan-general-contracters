import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProcessSteps from "@/components/ProcessSteps";
import WhyTridan from "@/components/WhyTridan";
import CTAStrip from "@/components/CTAStrip";
import { SITE } from "@/lib/constants";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Tridan General Construction. Quality-first renovation team serving Mississauga, Toronto, and Milton with clear timelines and transparent pricing.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Tridan General Construction"
        description="Your trusted partner for home renovations in the GTA."
        variant="compact"
      />
      <AnimatedSection className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-neutral max-w-none">
            <h2 className="text-2xl font-bold text-neutral-900">Quality-first renovation team</h2>
            <p className="mt-4 text-lg text-neutral-600">
              {SITE.name} delivers quality home renovations across Mississauga, Toronto, and Milton.
              We focus on <strong>communication</strong>, <strong>workmanship</strong>, and{" "}
              <strong>transparency</strong> so you can plan with confidence.
            </p>
            <p className="mt-4 text-neutral-600">
              We don&apos;t overclaim—we show up, quote clearly, and get the job done. Owner-led and
              committed to clean worksites and clear timelines.
            </p>
          </div>
          <div className="mt-16">
            <WhyTridan />
          </div>
          <div className="mt-16">
            <ProcessSteps />
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700"
            >
              Request Free Estimate
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="rounded-lg border-2 border-neutral-300 px-6 py-3 font-semibold text-neutral-700 hover:bg-neutral-50"
              aria-label="Call now"
            >
              Call Now
            </a>
          </div>
        </div>
      </AnimatedSection>
      <CTAStrip />
    </>
  );
}
