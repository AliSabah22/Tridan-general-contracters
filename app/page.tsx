import Hero from "@/components/Hero";
import SocialProofStrip from "@/components/SocialProofStrip";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCards from "@/components/ServiceCards";
import WhyTridan from "@/components/WhyTridan";
import ProjectGallery from "@/components/ProjectGallery";
import ProcessSteps from "@/components/ProcessSteps";
import LocationCards from "@/components/LocationCards";
import Guarantee from "@/components/Guarantee";
import FAQAccordion from "@/components/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";
import CTAStrip from "@/components/CTAStrip";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />

      <SocialProofStrip />

      <AnimatedSection className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Our Services</h2>
          <p className="mt-2 text-neutral-600">
            From kitchens to basements, we deliver quality renovations you can count on.
          </p>
          <div className="mt-10">
            <ServiceCards services={[...SERVICES]} />
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700"
            >
              Request Free Estimate
            </Link>
            <a
              href="tel:4167004230"
              className="rounded-lg border-2 border-neutral-300 px-6 py-3 font-semibold text-neutral-700 hover:bg-neutral-50"
              aria-label="Call now"
            >
              Call Now
            </a>
          </div>
        </div>
      </AnimatedSection>

      <CTAStrip />

      <WhyTridan />

      <ProjectGallery />

      <ProcessSteps />

      <LocationCards />

      <Guarantee />

      <FAQAccordion />

      <FinalCTA />
    </>
  );
}
