export type CitySlug = "mississauga" | "toronto" | "milton";

export interface LocationContent {
  city: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  servicesIntro: string;
  faqs: Array<{ question: string; answer: string }>;
}

const LOCATION_CONTENT: Record<CitySlug, LocationContent> = {
  mississauga: {
    city: "Mississauga",
    title: "Home Renovations in Mississauga",
    metaTitle: "Home Renovations Mississauga | Tridan General Construction",
    metaDescription:
      "Tridan General Construction provides professional home renovations in Mississauga including kitchen, bathroom, and basement renovations. Request a free estimate today.",
    heroTitle: "Home Renovations in Mississauga",
    heroDescription:
      "High-quality kitchen, bathroom, basement, and full home renovations in Mississauga. Get a clear quote and reliable workmanship.",
    servicesIntro: "We offer a full range of renovation services for Mississauga homeowners.",
    faqs: [
      {
        question: "How much does a renovation cost in Mississauga?",
        answer:
          "Costs vary by scope—kitchen and bathroom renovations, basement finishing, and full home projects each have different price ranges. We provide free, no-obligation estimates so you get a clear quote for your Mississauga project.",
      },
      {
        question: "Do you serve all areas of Mississauga?",
        answer:
          "Yes. We serve Mississauga across its neighbourhoods and are familiar with local building practices and permit requirements in the city.",
      },
      {
        question: "How long do kitchen renovations take in Mississauga?",
        answer:
          "Typical kitchen renovations in Mississauga run from a few weeks to a few months depending on scope. We'll give you a clear timeline during your consultation.",
      },
    ],
  },
  toronto: {
    city: "Toronto",
    title: "Home Renovations in Toronto",
    metaTitle: "Home Renovations Toronto | Tridan General Construction",
    metaDescription:
      "Tridan General Construction provides professional home renovations in Toronto including kitchen, bathroom, and basement renovations. Request a free estimate today.",
    heroTitle: "Home Renovations in Toronto",
    heroDescription:
      "High-quality kitchen, bathroom, basement, and full home renovations in Toronto. Get a clear quote and reliable workmanship.",
    servicesIntro: "We offer a full range of renovation services for Toronto homeowners.",
    faqs: [
      {
        question: "How much does a renovation cost in Toronto?",
        answer:
          "Toronto renovation costs depend on the type and size of the project. We provide free estimates so you know what to expect before we start.",
      },
      {
        question: "Do you handle permits in Toronto?",
        answer:
          "Yes. We work with Toronto permit requirements and can guide you through the process for projects that need permits, including major renovations and basement finishing.",
      },
      {
        question: "Do you serve the full city of Toronto?",
        answer:
          "Yes. We serve Toronto across its neighbourhoods and are experienced with the city's building standards and bylaws.",
      },
    ],
  },
  milton: {
    city: "Milton",
    title: "Home Renovations in Milton",
    metaTitle: "Home Renovations Milton | Tridan General Construction",
    metaDescription:
      "Tridan General Construction provides professional home renovations in Milton including kitchen, bathroom, and basement renovations. Request a free estimate today.",
    heroTitle: "Home Renovations in Milton",
    heroDescription:
      "High-quality kitchen, bathroom, basement, and full home renovations in Milton. Get a clear quote and reliable workmanship.",
    servicesIntro: "We offer a full range of renovation services for Milton homeowners.",
    faqs: [
      {
        question: "How much does a renovation cost in Milton?",
        answer:
          "Costs depend on the project. We provide free estimates for kitchen, bathroom, basement, and full home renovations in Milton so you can plan with confidence.",
      },
      {
        question: "How long do basement renovations take in Milton?",
        answer:
          "Basement finishing in Milton typically takes several weeks to a few months depending on size and scope. We'll provide a clear timeline during your consultation.",
      },
      {
        question: "Do you serve Milton and surrounding areas?",
        answer:
          "Yes. We serve Milton and are familiar with local building practices. Contact us for a free estimate.",
      },
    ],
  },
};

export function getLocationContent(slug: CitySlug): LocationContent {
  return LOCATION_CONTENT[slug];
}

export function getLocationSlugFromPath(path: string): CitySlug | null {
  if (path.includes("mississauga")) return "mississauga";
  if (path.includes("toronto")) return "toronto";
  if (path.includes("milton")) return "milton";
  return null;
}
