import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import ProcessSteps from "@/components/ProcessSteps";
import CTAStrip from "@/components/CTAStrip";
import { SERVICES, LOCATION_PAGES } from "@/lib/constants";
import Link from "next/link";

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
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">What We Offer</h2>
        <p className="mt-2 text-neutral-600">Quality renovations tailored to your home and budget.</p>
        <div className="mt-10 space-y-16">
          <div id="kitchen">
            <h3 className="text-xl font-semibold text-neutral-900">Kitchen Renovations</h3>
            <p className="mt-2 text-neutral-600">
              Full kitchen remodels including cabinetry, countertops, backsplash, and layout updates. We work with you to create a kitchen that fits your lifestyle. Serving <Link href="/mississauga-home-renovations" className="text-primary-600 hover:underline">Mississauga</Link>, <Link href="/toronto-home-renovations" className="text-primary-600 hover:underline">Toronto</Link>, and <Link href="/milton-home-renovations" className="text-primary-600 hover:underline">Milton</Link>.
            </p>
          </div>
          <div id="bathroom">
            <h3 className="text-xl font-semibold text-neutral-900">Bathroom Renovations</h3>
            <p className="mt-2 text-neutral-600">
              Bathroom remodels with tile work, vanities, showers, tubs, and plumbing upgrades. Durable finishes and clear timelines.
            </p>
          </div>
          <div id="basement">
            <h3 className="text-xl font-semibold text-neutral-900">Basement Finishing</h3>
            <p className="mt-2 text-neutral-600">
              Turn your basement into livable space with proper insulation, drywall, flooring, and finishes. We handle permits where required.
            </p>
          </div>
          <div id="flooring">
            <h3 className="text-xl font-semibold text-neutral-900">Flooring</h3>
            <p className="mt-2 text-neutral-600">
              Hardwood, tile, laminate, and luxury vinyl installation. Professional installation for a lasting finish.
            </p>
          </div>
          <div id="painting">
            <h3 className="text-xl font-semibold text-neutral-900">Painting</h3>
            <p className="mt-2 text-neutral-600">
              Interior and exterior painting for a fresh, professional look. Quality prep and paint selection support.
            </p>
          </div>
          <div id="full-home">
            <h3 className="text-xl font-semibold text-neutral-900">Full Home Renovations</h3>
            <p className="mt-2 text-neutral-600">
              Complete home transformations from concept to completion. We coordinate all trades and keep you informed throughout.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <ServiceCards services={[...SERVICES]} columns={3} />
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-neutral-900">Our Process</h2>
          <ProcessSteps />
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">Request Free Estimate</Link>
          <a href="tel:4167004230" className="rounded-lg border-2 border-neutral-300 px-6 py-3 font-semibold text-neutral-700 hover:bg-neutral-50" aria-label="Call now">Call Now</a>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-neutral-900">Service Areas</h2>
        <ul className="mt-4 flex flex-wrap gap-4">
          {LOCATION_PAGES.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="text-primary-600 hover:underline">{label}</Link>
            </li>
          ))}
        </ul>
      </section>
      <CTAStrip />
    </>
  );
}
