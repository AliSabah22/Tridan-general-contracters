import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import ReviewCards from "@/components/ReviewCards";
import ProcessSteps from "@/components/ProcessSteps";
import ProjectGallery from "@/components/ProjectGallery";
import CTAStrip from "@/components/CTAStrip";
import { SERVICES, LOCATION_PAGES } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Quality Home Renovations in the GTA"
        description="Kitchen, bathroom, basement, and full home renovations in Mississauga, Toronto, and Milton. Get a clear quote and reliable workmanship."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Our Services</h2>
        <p className="mt-2 text-neutral-600">From kitchens to basements, we deliver quality renovations you can count on.</p>
        <div className="mt-10">
          <ServiceCards services={[...SERVICES]} />
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">
            Request Free Estimate
          </Link>
          <a href="tel:4167004230" className="rounded-lg border-2 border-neutral-300 px-6 py-3 font-semibold text-neutral-700 hover:bg-neutral-50" aria-label="Call now">
            Call Now
          </a>
        </div>
      </section>
      <CTAStrip />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Service Areas</h2>
        <p className="mt-2 text-neutral-600">We serve Mississauga, Toronto, and Milton with professional home renovations.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {LOCATION_PAGES.map(({ href, city, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-neutral-900">Home Renovations in {city}</h3>
              <p className="mt-2 text-sm text-neutral-600">Kitchen, bathroom, basement & more.</p>
              <span className="mt-3 inline-block text-sm font-medium text-primary-600">View {city} services →</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">How We Work</h2>
          <p className="mt-2 text-neutral-600">A simple, transparent process from estimate to completion.</p>
          <div className="mt-10">
            <ProcessSteps />
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-flex rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Recent Projects</h2>
        <p className="mt-2 text-neutral-600">A sample of our renovation work across the GTA.</p>
        <div className="mt-10">
          <ProjectGallery />
        </div>
        <div className="mt-10 text-center">
          <Link href="/projects" className="text-primary-600 font-semibold hover:underline">View all projects →</Link>
        </div>
      </section>
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">What Clients Say</h2>
          <p className="mt-2 text-neutral-600">Trusted by homeowners across Mississauga, Toronto, and Milton.</p>
          <div className="mt-10">
            <ReviewCards />
          </div>
        </div>
      </section>
      <CTAStrip title="Request Your Free Renovation Estimate" subtitle="Get a clear quote and reliable workmanship. No obligation." />
    </>
  );
}
