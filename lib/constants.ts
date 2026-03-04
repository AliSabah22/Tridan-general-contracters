export const SITE = {
  name: "Tridan General Construction",
  phone: "(416) 700-4230",
  phoneRaw: "4167004230",
  email: "tridancontractor@gmail.com",
  serviceAreas: ["Mississauga", "Toronto", "Milton"] as const,
  serviceAreaStr: "Mississauga, Toronto, Milton",
  baseUrl: "https://tridangeneralconstruction.com",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const LOCATION_PAGES = [
  { href: "/mississauga-home-renovations", city: "Mississauga", label: "Mississauga Renovations" },
  { href: "/toronto-home-renovations", city: "Toronto", label: "Toronto Renovations" },
  { href: "/milton-home-renovations", city: "Milton", label: "Milton Renovations" },
] as const;

export const SERVICES = [
  {
    id: "kitchen",
    title: "Kitchen Renovations",
    description: "Full kitchen remodels, cabinetry, countertops, and layout updates for modern living.",
    href: "/services#kitchen",
  },
  {
    id: "bathroom",
    title: "Bathroom Renovations",
    description: "Bathroom remodels, tile work, vanities, and plumbing upgrades.",
    href: "/services#bathroom",
  },
  {
    id: "basement",
    title: "Basement Finishing",
    description: "Turn your basement into livable space with proper insulation and finishes.",
    href: "/services#basement",
  },
  {
    id: "flooring",
    title: "Flooring",
    description: "Hardwood, tile, laminate, and luxury vinyl installation.",
    href: "/services#flooring",
  },
  {
    id: "painting",
    title: "Painting",
    description: "Interior and exterior painting for a fresh, professional finish.",
    href: "/services#painting",
  },
  {
    id: "full-home",
    title: "Full Home Renovations",
    description: "Complete home transformations from concept to completion.",
    href: "/services#full-home",
  },
] as const;

export const PROCESS_STEPS = [
  { step: 1, title: "Request Estimate", description: "Submit your project details or call us for a free consultation." },
  { step: 2, title: "On-site Consultation", description: "We visit your property to assess scope and discuss your vision." },
  { step: 3, title: "Detailed Quote", description: "Receive a clear, itemized quote with no hidden fees." },
  { step: 4, title: "Construction Begins", description: "Our team gets to work with clear timelines and communication." },
] as const;

export const WHY_CHOOSE = [
  "Clear project timelines",
  "Transparent pricing",
  "Experienced renovation team",
  "High-quality finishes",
] as const;
