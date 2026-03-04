import type { Metadata } from "next";
import Hero from "@/components/Hero";
import EstimateForm from "@/components/EstimateForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Tridan General Construction for a free renovation estimate. Call or submit the form. Serving Mississauga, Toronto, and Milton.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get Your Free Estimate"
        description={"Tell us about your project. We'll get back to you with a clear quote."}
        variant="compact"
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">Request a Free Estimate</h2>
            <p className="mt-2 text-neutral-600">Fill out the form and we&apos;ll contact you to discuss your project.</p>
            <EstimateForm ctaText="Request Free Estimate" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">Contact Us Directly</h2>
            <div className="mt-6 space-y-4">
              <p className="text-neutral-700">
                <span className="font-medium">Phone:</span>{" "}
                <a href={`tel:${SITE.phoneRaw}`} className="text-primary-600 hover:underline">{SITE.phone}</a>
              </p>
              <p className="text-neutral-700">
                <span className="font-medium">Email:</span>{" "}
                <a href={`mailto:${SITE.email}`} className="text-primary-600 hover:underline">{SITE.email}</a>
              </p>
              <p className="text-neutral-700">
                <span className="font-medium">Service areas:</span> {SITE.serviceAreaStr}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
