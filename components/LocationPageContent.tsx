import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import ProcessSteps from "@/components/ProcessSteps";
import ProjectGallery from "@/components/ProjectGallery";
import FAQAccordion from "@/components/FAQAccordion";
import EstimateForm from "@/components/EstimateForm";
import { SERVICES, WHY_TRIDAN } from "@/lib/constants";
import { getLocationContent, type CitySlug } from "@/lib/locationContent";
import Link from "next/link";

const SERVICE_DESCRIPTIONS: Record<string, string> = {
  kitchen: "Professional kitchen renovations designed for durability and modern living.",
  bathroom: "Bathroom remodels with quality tile work, vanities, and plumbing.",
  basement: "Basement finishing to add livable space with proper insulation and finishes.",
  flooring: "Hardwood, tile, laminate, and luxury vinyl installation.",
  painting: "Interior and exterior painting for a fresh, professional finish.",
  "full-home": "Complete home transformations from concept to completion.",
};

interface LocationPageContentProps {
  slug: CitySlug;
}

export default function LocationPageContent({ slug }: LocationPageContentProps) {
  const content = getLocationContent(slug);
  const cityName = content.city;

  const servicesWithCity = SERVICES.map((s) => ({
    ...s,
    description: `${SERVICE_DESCRIPTIONS[s.id] || s.description} in ${cityName}.`,
    href: `/services#${s.id}` as const,
  }));

  return (
    <>
      <Hero
        title={content.heroTitle}
        description={content.heroDescription}
        showCTA={true}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Services Offered in {cityName}</h2>
        <p className="mt-2 text-neutral-600">{content.servicesIntro}</p>
        <div className="mt-10">
          <ServiceCards services={servicesWithCity} cityName={cityName} />
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
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900">Why Choose Tridan</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {WHY_TRIDAN.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">✓</span>
                <span className="text-neutral-700"><strong>{item.title}.</strong> {item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-900">Renovation Process</h2>
        <p className="mt-2 text-neutral-600">From first contact to completion, we keep it clear and on schedule.</p>
        <div className="mt-10">
          <ProcessSteps />
        </div>
      </section>
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900">Projects</h2>
          <p className="mt-2 text-neutral-600">A sample of our renovation work.</p>
          <div className="mt-10">
            <ProjectGallery />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-900">Frequently Asked Questions</h2>
        <p className="mt-2 text-neutral-600">Common questions about renovations in {cityName}.</p>
        <div className="mt-10">
          <FAQAccordion items={content.faqs.map((f) => ({ q: f.question, a: f.answer }))} />
        </div>
      </section>
      <section className="bg-primary-600 py-16 text-white">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">Request Your Free Renovation Estimate</h2>
          <p className="mt-3 text-primary-100">Get a clear quote for your {cityName} project. No obligation.</p>
          <div className="mt-10 rounded-xl bg-white p-6 text-left text-neutral-900">
            <EstimateForm mode="full" redirectTo="/thank-you" ctaText="Request Free Estimate" />
          </div>
          <p className="mt-4 text-sm text-primary-200">
            Or call us at <a href="tel:4167004230" className="font-semibold underline">(416) 700-4230</a>
          </p>
        </div>
      </section>
    </>
  );
}
