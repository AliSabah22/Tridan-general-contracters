import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProjectGallery from "@/components/ProjectGallery";
import CTAStrip from "@/components/CTAStrip";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Renovation Projects",
  description:
    "View our home renovation projects in Mississauga, Toronto, and Milton. Kitchen, bathroom, basement, and full home renovations.",
};

export default function ProjectsPage() {
  return (
    <>
      <Hero
        title="Our Renovation Projects"
        description="A look at our recent work across the GTA."
        variant="compact"
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-neutral-600">From kitchen remodels to basement finishes, see the quality and care we bring to every project.</p>
        <div className="mt-10">
          <ProjectGallery />
        </div>
        <div className="mt-12 text-center">
          <Link href="/contact" className="inline-flex rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">
            Get a Free Estimate for Your Project
          </Link>
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
