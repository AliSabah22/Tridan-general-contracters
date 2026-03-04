import { SITE } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    telephone: SITE.phone,
    email: SITE.email,
    url: SITE.baseUrl,
    areaServed: SITE.serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: "Ontario",
        containedInPlace: { "@type": "Country", name: "Canada" },
      },
    })),
    serviceType: "Home Renovation",
    description: "Professional home renovations in Mississauga, Toronto, and Milton including kitchen, bathroom, basement, and full home renovations.",
  };
}

export function getLocalBusinessSchemaScript() {
  return JSON.stringify(getLocalBusinessSchema());
}
