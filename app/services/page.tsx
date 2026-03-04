import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceDetailCard from "@/components/ServiceDetailCard";
import ProcessSteps from "@/components/ProcessSteps";
import CTAStrip from "@/components/CTAStrip";
import ServicesOverview from "@/components/ServicesOverview";
import { SERVICES, LOCATION_PAGES } from "@/lib/constants";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Home Renovation Services",
  description:
    "Kitchen, bathroom, basement, flooring, painting, and full home renovations in Mississauga, Toronto, and Milton. Professional renovation services from Tridan General Construction.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Home Renovation Services"
        description="Kitchen, bathroom, basement, flooring, painting, and full home renovations across Mississauga, Toronto, and Milton."
        variant="compact"
      />

      <ServicesOverview />

      {/* In-detail blocks */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">In Detail</h2>
          <p className="mt-2 text-neutral-600">What to expect from each service.</p>
          <div className="mt-14 space-y-12">
            {SERVICES.map((service, index) => (
              <ServiceDetailCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                benefit={service.benefit}
                commonUpgrades={"commonUpgrades" in service ? (service.commonUpgrades as readonly string[]) : []}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />

      <AnimatedSection className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-neutral-900">Service Areas</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            {LOCATION_PAGES.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-primary-600 shadow-sm ring-1 ring-neutral-200 transition hover:bg-primary-50 hover:ring-primary-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTAStrip />
    </>
  );
}
