import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProjectGallery from "@/components/ProjectGallery";
import CTAStrip from "@/components/CTAStrip";
import AnimatedSection from "@/components/AnimatedSection";

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
      <AnimatedSection className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="max-w-2xl text-neutral-600">
            From kitchen remodels to basement finishes, see the quality and care we bring to every
            project.
          </p>
          <div className="mt-10">
            <ProjectGallery />
          </div>
        </div>
      </AnimatedSection>
      <CTAStrip />
    </>
  );
}
